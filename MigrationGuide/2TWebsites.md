---
layout: page
permalink: /migrationguide/Websites/
---


#Migrating Front-end using Azure WebSites


Let's first analyze some tipical application patterns to see at high level if we can use WebSites.


-----
##Quick Questions
The Web application need setup of components?

- Crystal reports is a typical example, if you need it you have to consider [Cloud Services Guide](/migrationguide/cloud-services/)
- Do you need a setup of custom Fonts? If you are using in .Net you can loading at runtime otherwise consider [Cloud Services Guide](/migrationguide/cloud-services/)
- Do you need the setup of a custom windows service? If you have the source code of this service we will cover it later in a doc. 

The Web application need to comunicate on custom TCP/IP Port?

- If you need to comunicate on ports different from 80 and 443 consider [Cloud Services Guide](/migrationguide/cloud-services/)




##Prerequisites
- Visual Studio 2013
- Latest Azure SDK


##Deploy the solution on Azure WebSites
If you don't have found blocking issues on the first part of the document, let's try to publish to a WebSite.

*Right click on the project*

![](/images/WebSites-publish.png)

*Give it a name and select a region:*

![](/images/WebSites-publish1.png)

*Publish*

![](/images/WebSites-publish2.png)

Now that we have successfully deployed our web app there are few things we can tune.

##Things to check
- **PDF Generation** Most of PDF libraries works on a _Basic/Standard_ WebSites but some don't. So better to check :-).
- **Editing files on local filesystem** a better patter to consider to use Azure Storage [How to use Blob Storage from .NET ](http://azure.microsoft.com/en-us/documentation/articles/storage-dotnet-how-to-use-blobs/)
- **ASP.Net Session** Azure Websites utilize a cookie based session affinity. It handle session on multple istance pointing the same user to the same server. The name of the cookie is *ARRAffinity*. If you need to disable session affinity check [Disabling ARR’s Instance Affinity](http://azure.microsoft.com/blog/2013/11/18/disabling-arrs-instance-affinity-in-windows-azure-web-sites/)
- Configure HTTPS
- Understandig the Web Hosting plan
- Tune The Application

##Things to consider as an improvement
- Remove connection strings from code
- SingleSignOn with Office 365
- [Redis Cache for Asp.Net session](http://azure.microsoft.com/it-it/documentation/articles/cache-dotnet-how-to-use-azure-redis-cache/#store-session)
- Upload of large files on azure storage. 
- [Multiple Virtual directories](http://blogs.msdn.com/b/tomholl/archive/2014/09/22/deploying-multiple-virtual-directories-to-a-single-azure-website.aspx)
- [Change WebHosting plan with PowerShell](http://stackoverflow.com/questions/24892220/change-azure-website-web-hosting-plan-mode-using-powershell)


