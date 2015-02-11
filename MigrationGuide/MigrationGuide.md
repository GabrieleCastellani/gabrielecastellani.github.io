---
layout: page
permalink: /migrationguide/
---
# Migration of a typical Web App #

## Architecture ##
	
- Front-End: Web Application (Asp.Net)
- Database: Local Sql Server
- Services: A local Windows Services



##Guide
Let's start to see if we can Use Azure WebSites. WebSites have some neat features that will simplify your develpment and your administration. If WebSites doesn't fit into your solution during this document you'll be redirected to Cloud Srvices and than to plain Virtual Machines.

- [Migration of the Front-End](/migrationguide/Websites/)

Now we have to migrate the database. Let's start to see if we can you Azure SQL Database.

- [Migration of the database](/migrationguide/SQL-database/)

The last part of a typical application are periodic task and log running task. In a traditional architecure this is generally achieved by implemending a Windows Service and a Queue System but in the cloud there are many smarter things we can do.

- [Migration of App Services](/migrationguide/services/)


