---
layout: page
permalink: /migrationguide/
---
# Migration of a Web App #

This is a *practical* guide and a collection of links useful when migrating a typical ISV Web app. 
The content of this guide is based on the questions received migrating tens of application during what we call Acceleration labs.
The intent of this guide is not to implement every best practice possible but to have a quick migration that can be a solid starting point in the cloud. From this starting point you can evolve your app to be more "cloud friendly" using some [Prescriptive Architecture Guidance for Cloud Applications](https://msdn.microsoft.com/en-us/library/dn568099.aspx).

If you are searching an Azure architectural guide I suggest you this link [Microsoft Architecture Blueprints](http://azure.microsoft.com/en-us/documentation/articles/architecture-overview/) 
 

##Starting Architecture ##

![](http://www.gabrielecastellani.it/images/Arch1.png)



- **Front-End**: Web Application (Asp.Net)
- **Database**: Sql Server (Local or Remote)
- **Services**: A Custom C# Windows Services




##Guide
###Front-End
Azure WebSites have some cool features that will simplify your develpment, your administration and your deployment activities. 
If WebSites doesn't fit into your solution during this document you'll be redirected to Cloud Services. One of the biggest advantage of WebSites is that multiple WebSites can share the same Virtual Machine underneath using the same *Web hosting plan*. [Azure Websites Web Hosting Plans In-Depth Overview](http://azure.microsoft.com/en-us/documentation/articles/azure-web-sites-web-hosting-plans-in-depth-overview/)
I always start looking if Azure WebSites are a good fit.

- [Migrating the Front-end using Azure WebSites](/migrationguide/Websites/)

If you want to use Azure Cloud Services you can jump here [Migrating the Front-end using Azure Cloud Services](/migrationguide/cloud-services/)
 
###Database
Now we have to migrate the database, Azure SQL Database is generally a good option so let's see if it can be used. Otherwise we should use a Virtual machine with SQL Server installed.

- [Migration of the Database](/migrationguide/SQL-database/)

###Services
The last part of a typical application are periodic task and log running task. In a traditional architecture this is generally achieved by implementing a Custom Windows Service and a Queue System but in the cloud there are many smarter things we can do.

- [Migration of App Services](/migrationguide/services/) *Not ready ... Coming soon*





##Index of pages

- [Migrating the Front-end using Azure WebSites](/migrationguide/Websites/)
- [Migrating the Front-end using Azure Cloud Services](/migrationguide/cloud-services/)
- [Migration of the Database](/migrationguide/SQL-database/)
- [Migration of App Services](/migrationguide/services/)
- [Improvements using Azure Active directory](/migrationguide/Azure-Ad/)
- [Improvements using Azure Storage](/migrationguide/Azure-Storage/)
