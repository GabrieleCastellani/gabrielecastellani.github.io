---
layout: page
permalink: /migrationguide/
---
# Migration of a Web App #

This is a *practical* guide and a collection of links useful when migrating a typical ISV Web app. 
The content of this guide is based on the questions received migrating tens of application during what we call Acceleration labs.
The intent of this guide is not to implement every best practice possible but to have a quick migration that can be a solid starting point in the cloud. From this starting point you can evolve your app to be more "cloud friendly".

If you are searching an Azure architectural guide I suggest you this link [Microsoft Architecture Blueprints](http://azure.microsoft.com/en-us/documentation/articles/architecture-overview/) 
 

##Starting Architecture ##

![](http://www.gabrielecastellani.it/images/Arch1.png)



- Front-End: Web Application (Asp.Net)
- Database: Sql Server (Local or Remote)
- Services: A Custom C# Windows Services




###Guide
Azure WebSites have some cool features that will simplify your develpment and your administration. If WebSites doesn't fit into your solution during this document you'll be redirected to Cloud Services and then to plain Virtual Machines.
I always start looking if Azure WebSites are a good fit.

- [Migration of the Front-End](/migrationguide/Websites/)

Now we have to migrate the database, Azure SQL Database is generally a good option so let's see if it can be used. Otherwise we should use a Virtual machine with SQL Server installed.

- [Migration of the Database](/migrationguide/SQL-database/)

The last part of a typical application are periodic task and log running task. In a traditional architecture this is generally achieved by implementing a Custom Windows Service and a Queue System but in the cloud there are many smarter things we can do.

- [Migration of App Services](/migrationguide/services/)

