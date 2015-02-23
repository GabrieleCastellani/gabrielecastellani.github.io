---
layout: page
permalink: /migrationguide/cloud-services/
---

#Migrating the using Azure Cloud Services

##Quick Questions
Are you writing files on the disk of the Web Server?

 CloudService's disks are not persistent and this is the biggest difference from a Virtual Machines so you need to change how you use local resources. The most common problem is on local files and to solve this issues we have 2 ways:

- [Use blobs on Azure Storage](http://azure.microsoft.com/en-us/documentation/articles/storage-dotnet-how-to-use-blobs/) and [Using Azure Storage](/migrationguide/Azure-Storage/)
- [Using Azure Files]() that is currently in preview.

If none of these solutions are applicable and if WebSites are not applicable too. The only solution is an Azure Virtual Machines.

##Prerequisites
- Visual Studio 2013 [Update 4](http://www.microsoft.com/en-us/download/details.aspx?id=44921)
- [Microsoft Azure SDK - 2.5 for Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=323510&clcid=0x409)
- [Microsoft Azure PowerShell](http://go.microsoft.com/?linkid=9811175&clcid=0x409)


##Deploy the solution on Azure

###Create A New Windows Azure Project

To begin migrating your web application to the cloud, you’ll need to create a new Windows Azure project to house your code. With Visual Studio running and in focus, you’ll need to:



1. Click File > New Project.

2. In the New Project dialog, select Visual C# > Cloud > Windows Azure Project. New Windows Azure Project

3. Name your project, set its location, choose a solution name and click OK.
4. In the **New Windows Azure Project dialog box, do not select any roles to add**. Just click OK to have Visual Studio generate a blank Windows Azure project.
5. When Visual Studio has finished generating your new project, click File > **Add > Existing Project, browse to and select the .csproj file for the web application** project you want to migrate and click Open. This will add your existing project to the new solution.
6. Now **right-click the Roles folder** under the cloud project you added earlier, and **choose Add > Web Role Project** in solution.
7. In the Associate with Role Project dialog, **choose your web application project and click OK**. Choosing your web application project You’ll see that it now appears under the Roles folder in Solution Explorer.
8. Finally, you’ll need to add a reference to the Windows Azure service runtime to your Web Application project (not the Cloud project). Right click the References folder in that project and select Add > Reference. 
9. When the Add Reference dialog appears, switch to the .NET tab, find and select Microsoft.WindowsAzure.ServiceRuntime as shown below. Click OK. Choosing your web application project

The next step is to alter your web application’s code to run within and take advantage of the cloud.

###Alter The Web Application To Run On Azure

For the most part, modifying your existing ASP.NET application to run on the Windows Azure platform is a very simple process. However, you may run into some minor challenges depending on how your existing application is coded. Take a look on the sections *Things to check* and *Improvements* to see common questions.

#####Move Configuration Settings Into The Cloud Project

In tyour application, settings such as connection strings are stored in the Web.config file. Configuration settings for Azure Cloud Services (web roles and worker roles) are stored in the ServiceConfiguration.cscfg and ServiceDefinition.csdef files. This allows, amongst other benefits, easy modification of the configuration settings by using the Azure Portal or PowerShell cmdlets; without needing to redeploy the entire application. You need to redefine those settings within the cloud project in the solution and then use the Azure CloudConfigurationManager class to access them instead.

If you have a look at the cloud project in Solution Explorer, you’ll see it contains two files, ServiceConfiguration.cscfg and ServiceDefinition.csdef, as shown below. They store the configuration settings for your application, just like web.config does, as well as other important settings like how many roles you have in your solution, what type they are, and how many instances of them need to run.

#####Visual Studio Azure Config Settings

If you open ServiceDefinition.csdef, you’ll see it is an XML file just like web.config. You need to insert a <ConfigurationSettings> element beneath <ServiceDefinition>\<WebRole> to describe any application settings that already exist in your existing ASP.NET web application. 

Edit your ServiceDefinition.csdef file so that it looks like this:

	<?xml version="1.0" encoding="utf-8"?>
	<ServiceDefinition name="MigratingToTheCloud" xmlns="http://schemas.microsoft.com/ServiceHosting/2008/10/ServiceDefinition">
	  <WebRole name="LegacyWebApplication1">
	    <ConfigurationSettings>
  	    <!-- Add your configuration settings here -->
 	   </ConfigurationSettings>
 	   <Sites>
    	  <Site name="Web">
   	     <Bindings>
	          <Binding name="Endpoint1" endpointName="Endpoint1" />
	        </Bindings>
    	  </Site>
    	</Sites>
    	<Endpoints>
    	  <InputEndpoint name="Endpoint1" protocol="http" port="80" />
    	</Endpoints>
    	<Imports>
    	  <Import moduleName="Diagnostics" />
    	</Imports>
  	</WebRole>
	</ServiceDefinition>


Where I’ve placed the comment, you’ll insert one of the following lines for each of the settings present in your existing ASP.NET web application’s .config file:
 	
	<Setting name="OldSettingName"/>


When you’re done, your <ConfigurationSettings> element in the ServiceDefinition.csdef file should look a little like this:
	 <ConfigurationSettings>
      	<Setting name="OldSettingName1"/>
    	<Setting name="OldSettingName2"/>
      	<Setting name="OldSettingName3"/>
      	<Setting name="OldSettingName4"/>
      	<Setting name="OldSettingName5"/>
	</ConfigurationSettings>


Note how there are no value attributes. That’s because you define the values within ServiceConfiguration.cscfg, which is our next task.

**Open ServiceConfiguration.csfg**. It should already contain a <ConfigurationSettings> element. Cut and paste each of the <Setting> elements you added to ServiceDefinition.csdef under the first <Setting> element within ServiceConfiguration.cscfg. Then, add the “value” attribute to each of the elements you’ve added accordingly. When you’re done, you should end up with a file that looks similar to this:

	<?xml version="1.0" encoding="utf-8"?>
	<ServiceConfiguration serviceName="MigratingToTheCloud" xmlns="http://schemas.microsoft.com/ServiceHosting/2008/10/ServiceConfiguration" osFamily="1" osVersion="*">
	  <Role name="LegacyWebApplication1">
	    <Instances count="1" />
	    <ConfigurationSettings>
	      <Setting name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" value="UseDevelopmentStorage=true" />
	      <Setting name="OldSettingName1" value="foo"/>
	      <Setting name="OldSettingName2" value="bar"/>
	      <Setting name="OldSettingName3" value="abc"/>
	      <Setting name="OldSettingName4" value="123"/>
	      <Setting name="OldSettingName5" value="xyz"/>
	    </ConfigurationSettings>
	  </Role>
	</ServiceConfiguration>
 
**Using CloudConfigurationManager.GetSetting** to read the values. The GetSetting method reads the configuration setting value from the appropriate configuration store. If the application is running as a .NET Web application, the GetSetting method will return the setting value from the Web.config or app.config file. If the application is running in Windows Azure Cloud Service or in a Windows Azure Website, the GetSetting will return the setting value from the ServiceConfiguration.cscfg. 

To use **CloudConfigurationManager** you need to install the following **nuget package**

	PM> Install-Package Microsoft.WindowsAzure.ConfigurationManager 

credits to [http://www.developerfusion.com/article/119960/upgrade-your-aspnet-site-to-the-cloud/
](http://www.developerfusion.com/article/119960/upgrade-your-aspnet-site-to-the-cloud/)

##Things to check

- [How to run Crystal Reports](http://www.britishdeveloper.co.uk/2012/01/crystal-reports-on-azure-how-to.html)
- [Redis Cache for Asp.Net session](http://azure.microsoft.com/it-it/documentation/articles/cache-dotnet-how-to-use-azure-redis-cache/#store-session)
- [Window Azure Fault Domain and Upgrade Domain Explained Explained](http://blogs.technet.com/b/yungchou/archive/2011/05/16/window-azure-fault-domain-and-update-domain-explained-for-it-pros.aspx) and [Distribution of roles across upgrade domains](http://msdn.microsoft.com/en-us/library/hh472157.aspx)
- [Configuring SSL for an application](http://azure.microsoft.com/en-gb/documentation/articles/cloud-services-configure-ssl-certificate/)



##Improvements
- [Azure Service Definition Schema](http://msdn.microsoft.com/library/azure/ee758711.aspx)
- Azure Load Balancer [Microsoft Azure Load Balancing Services]( http://azure.microsoft.com/blog/2014/04/08/microsoft-azure-load-balancing-services/) and  [new distribution mode](http://azure.microsoft.com/blog/2014/10/30/azure-load-balancer-new-distribution-mode/) 
- [Reserved IP Addresses](https://msdn.microsoft.com/en-us/library/azure/dn690120.aspx) and [pricing model](http://azure.microsoft.com/en-us/pricing/details/ip-addresses/)


##make better use of the cloud:

- [Improvements using Azure Active directory](/migrationguide/Azure-Ad/)
- [Improvements using Azure Storage](/migrationguide/Azure-Storage/)

