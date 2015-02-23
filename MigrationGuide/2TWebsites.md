---
layout: page
permalink: /migrationguide/Websites/
---


#Migrating Front-end using Azure WebSites


Let's first analyze some typical application patterns to see at high level if we can use Azure WebSites.


-----
##Quick Questions
The Web application need setup of components?

- Crystal reports is a typical example, if you need it you have to consider [Cloud Services Guide](/migrationguide/cloud-services/)
- Do you need a setup of custom Fonts? If you are using in .Net you can loading at runtime otherwise consider [Cloud Services Guide](/migrationguide/cloud-services/)
- Do you need the setup of a custom windows service? If you have the source code of this service we will cover it later in a doc. 

The Web application need to communicate on custom TCP/IP Port?

- If you need to communicate on ports different from 80 and 443 consider [Cloud Services Guide](/migrationguide/cloud-services/)


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
- Understanding the Web Hosting plan
- Tune The Application

##Improvements
- Remove passwords from code (this is always a good practice :-))
- [Reserved IP Addresses](https://msdn.microsoft.com/en-us/library/azure/dn690120.aspx) and [pricing model](http://azure.microsoft.com/en-us/pricing/details/ip-addresses/)
- SingleSignOn with Office 365
- [Redis Cache for Asp.Net session](http://azure.microsoft.com/it-it/documentation/articles/cache-dotnet-how-to-use-azure-redis-cache/#store-session)
- [Multiple Virtual directories](http://blogs.msdn.com/b/tomholl/archive/2014/09/22/deploying-multiple-virtual-directories-to-a-single-azure-website.aspx)
- [Change WebHosting plan with PowerShell](http://stackoverflow.com/questions/24892220/change-azure-website-web-hosting-plan-mode-using-powershell)
-  Automating development tasks. Manual processes are slow and error-prone; automating as many of them as possible helps set up a fast, reliable, and agile workflow [Automate Everything](http://www.asp.net/aspnet/overview/developing-apps-with-windows-azure/building-real-world-cloud-apps-with-windows-azure/automate-everything)



##Improvements using Windows Azure Storage

- [How to use Blob Storage from .NET](http://azure.microsoft.com/en-us/documentation/articles/storage-dotnet-how-to-use-blobs/)
- Upload of large files on azure storage.[Javascript Upload](http://blogs.msdn.com/b/windowsazurestorage/archive/2014/02/03/windows-azure-storage-introducing-cors.aspx) or [Uploading Large Files in Windows Azure Blob Storage Using Shared Access Signature, HTML, and JavaScript ](http://gauravmantri.com/2013/02/16/uploading-large-files-in-windows-azure-blob-storage-using-shared-access-signature-html-and-javascript/ ) or [Reliable Large Uploads to Blob Storage via an HTML5 Control](https://msdn.microsoft.com/en-us/library/azure/hh824678.aspx)
- Uploading large files with command prompt [AzCopy](http://blogs.msdn.com/b/windowsazurestorage/archive/2014/10/29/azcopy-announcing-general-availability-of-azcopy-3-0-plus-preview-release-of-azcopy-4-0-with-table-and-file-support.aspx)
- Granting access to files using Shared Access Signature: [Part1](http://azure.microsoft.com/en-gb/documentation/articles/storage-dotnet-shared-access-signature-part-1/), [Part2](http://azure.microsoft.com/en-gb/documentation/articles/storage-dotnet-shared-access-signature-part-2/)
- [Azure Queues and Service Bus Queues - Compared and Contrasted](http://msdn.microsoft.com/en-us/library/hh767287\(VS.103\).aspx)
- [Azure Queues Tutorial](http://azure.microsoft.com/en-us/documentation/articles/storage-dotnet-how-to-use-queues/)
