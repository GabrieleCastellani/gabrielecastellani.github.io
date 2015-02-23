---
layout: page
permalink: /migrationguide/Websites/
---


#Migrating the Front-end using Azure WebSites


Let's first analyze some typical application patterns to see at high level if we can use Azure WebSites.


-----
##Quick Questions
The Web application need setup of components?

- Crystal reports is a typical example, if you need it you have to consider [Cloud Services Guide](/migrationguide/cloud-services/)
- Do you need a setup of custom Fonts? If you are using in .Net you can load them at runtime otherwise consider [Cloud Services Guide](/migrationguide/cloud-services/)
- Do you need the setup of a custom windows service? If you have the source code of this service we will cover it later in the flow. Basically we can use WebJobs or a WorkerRole.

The Web application need to communicate on custom TCP/IP Port?

- If you need to communicate on ports different from 80 and 443 consider [Cloud Services Guide](/migrationguide/cloud-services/)

The IP Address used for calling an external service is not reserved even if you have a reserver IP. Here you can find a way to see your pool: [Outgoing IP address of your Azure Web Site](http://blogs.msdn.com/b/waws/archive/2014/07/01/get-the-outgoing-ip-address-of-your-azure-web-site.aspx)

##Prerequisites
- Visual Studio 2013 [Update 4](http://www.microsoft.com/en-us/download/details.aspx?id=44921)
- [Microsoft Azure SDK - 2.5 for Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=323510&clcid=0x409)
- [Microsoft Azure PowerShell](http://go.microsoft.com/?linkid=9811175&clcid=0x409)

##Deploy the solution on Azure WebSites
If you don't have found blocking issues on the first part of the document, let's try to publish to a WebSite.

*Right click on the project*

![](http://www.gabrielecastellani.it/images/WebSites-publish.png)

*Give it a name and select a region:*

![](http://www.gabrielecastellani.it/images/WebSites-publish1.png)

*Publish*

![](http://www.gabrielecastellani.it/images/WebSites-publish2.png)

Now that we have successfully deployed our web app there are few things we can tune.

##Things to check
- **PDF Generation** Most of PDF libraries works on a _Basic/Standard_ WebSites but some don't. So better to check :-).
- **Editing files on local filesystem** a better patter to consider to use Azure Storage [How to use Blob Storage from .NET ](http://azure.microsoft.com/en-us/documentation/articles/storage-dotnet-how-to-use-blobs/)
- **ASP.Net Session** Azure Websites use a cookie based session affinity. It handle session on multiple instance pointing the same user to the same server. The name of the cookie is *ARRAffinity*. If you need to disable session affinity check [Disabling ARR’s Instance Affinity](http://azure.microsoft.com/blog/2013/11/18/disabling-arrs-instance-affinity-in-windows-azure-web-sites/). Another option is to disable session affinity and use [Redis cache ASP.net session provider](http://azure.microsoft.com/it-it/documentation/articles/cache-dotnet-how-to-use-azure-redis-cache/#store-session) 
- Configure HTTPS: every website has a valid SSL certificates on the domain *.azurewebsites.net if you want you can use your [Custom SSL Certificates](http://azure.microsoft.com/en-gb/documentation/articles/web-sites-configure-ssl-certificate/)
- [Azure Websites Web Hosting Plans In-Depth Overview](http://azure.microsoft.com/en-us/documentation/articles/azure-web-sites-web-hosting-plans-in-depth-overview/)
- Tune The Application

##Improvements
- Remove passwords from code (this is always a good practice :-))
- [Reserved IP Addresses](http://blogs.msdn.com/b/benjaminperkins/archive/2014/05/05/how-to-get-a-static-ip-address-for-your-microsoft-azure-web-site.aspx) and [pricing model](http://azure.microsoft.com/en-us/pricing/details/ip-addresses/)
- [Using Azure AD and SingleSignOn with Office 365]()
- [Redis Cache for Asp.Net session](http://azure.microsoft.com/it-it/documentation/articles/cache-dotnet-how-to-use-azure-redis-cache/#store-session)
- [Multiple Virtual directories](http://blogs.msdn.com/b/tomholl/archive/2014/09/22/deploying-multiple-virtual-directories-to-a-single-azure-website.aspx)
- [Change WebHosting plan with PowerShell](http://stackoverflow.com/questions/24892220/change-azure-website-web-hosting-plan-mode-using-powershell)
-  Automating development tasks. Manual processes are slow and error-prone; automating as many of them as possible helps set up a fast, reliable, and agile workflow [Automate Everything](http://www.asp.net/aspnet/overview/developing-apps-with-windows-azure/building-real-world-cloud-apps-with-windows-azure/automate-everything)


##Make better use of the cloud:

- [Improvements using Azure Active directory](/migrationguide/Azure-Ad/)
- [Improvements using Azure Storage](/migrationguide/Azure-Storage/)

