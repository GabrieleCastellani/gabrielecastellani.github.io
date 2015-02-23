---
layout: page
permalink: /migrationguide/SQL-database/
---

# Database 
## SQL Database

#Migrating database tier using SQL Database


Let's first analyze some typical SQL patterns to see at high level if we can use SQL Database.


-----
##Quick Questions
###Do you use some of this components of SQL Server Database?

- SQL Broker

This kind of services aren't yet available in a cloud environment. 


###Do you access the file system from SQL?

- xp_cmdshell  
- FileSystemObject and all similar methods 

This kind of access to file system is not allowed in a cloud environment. 

###Do you use Global Temporary Tables (the one with ##)?
- In a shared environment this is not allowed you can use only session temp table. This global temp table are often used to import data from different source. If you can afford you can consider to change this mechanism using Azure Storage as a place to park data while importing.



##Prerequisites
- SQL Server Management Studio 2014  [Express](https://msdn.microsoft.com/en-us/evalcenter/dn434042.aspx) and [Cumulative Update 5](http://support2.microsoft.com/kb/3011055)
- [SQL Server Database Tooling Preview for the latest Azure SQL Database Update V12](http://azure.microsoft.com/blog/2015/01/26/migration-cookbook-now-available-for-the-latest-azure-sql-database-update-v12/)


##Deploy the solution on SQL Database

Let's first create a SQL Database server on Azure, select New (Lower left corner) "SQL Database".
Make sure you:

- Select the right location when you create the server
- Set the V12 version as Yes (this increase the compatibility with SQL Server)
- Select the right pricing tier

![](http://www.gabrielecastellani.it/images/SQL2.png)

###Simple migration


Data and schema migration

![](http://www.gabrielecastellani.it/images/SQL1.png)


###Advanced migration
For a complete guide you can follow [Migration cookbook](http://azure.microsoft.com/blog/2015/01/26/migration-cookbook-now-available-for-the-latest-azure-sql-database-update-v12/)

Let's first run [SQL Azure Migration Wizard](http://sqlazuremw.codeplex.com/) on your existing database.

For the advanced migration we will use SQL Azure Migration Wizard. Now the first step is to select the right version based on the SQL Server version you are using.

    - SQLAzureMW v3x and tools requires .NET Framework 3.5 and SQL Server 2008 R2 SP1 bits to run.
    - SQLAzureMW v4x and tools requires .NET Framework 4.5 and SQL Server 2012 bits to run.
    - SQLAzureMW v5x and tools requires .NET Framework 4.5 and SQL Server 2014 bits to run.

#####Analyze the schema of the Database
Run SQLAzureMW.exe to check the schema and have an overview of the changes that we need to consider.

Fix all the issues that it raise on the source database.

#####Export data from the source Database

> **SQLAzureMWBatchBackup**  
> 
> **modify** <appSettings\> SQLAzureMWBatchBackup.exe.config 
  



               
#####Upload data on SQL Database

> SQLAzureMWBatchUpload 
> 
> **modify** <appSettings\> in SQLAzureMWBatchUpload.exe.config   


##Things to check
- [Azure SQL Database Business Continuity](https://msdn.microsoft.com/en-us/library/hh852669.aspx)


##Improvements
- Implement a [Retry Pattern](https://msdn.microsoft.com/en-us/library/dn589788.aspx) in your application

##Troubleshooting performance
- [Monitoring Azure SQL Database Using Dynamic Management Views](https://msdn.microsoft.com/en-us/library/ff394114.aspx)