---
layout: page
permalink: /migrationguide/SQL-database/
---

# Database 
## SQL Database


####Let's see what features are used in your application
- If you use spcmdshell or any 


#Migrating database tier using SQL Database


Let's first analyze some tipical SQL patterns to see at high level if we can use SQL Database.


-----
##Quick Questions
###Do you use some of this components of SQL Server Databse?

- SQL Broker

This kind of services aren't yet available in a cloud envirorment. 


###Do you access the file system from SQL?

- sp_cmdshell 
- sp_writefile

This kind of access to file system is not allowed in a cloud envirorment. 

###Do you use server tem tables (the one with ##)




##Prerequisites
- Visual Studio 2013
- SQL Server Enterprise Manager 2014


##Deploy the solution on SQL Database



###Simple migration
Data and schema migration


###Advanced migration

Let's first run [SQL Azure Migration Wizard](http://sqlazuremw.codeplex.com/) on your existing database.

For the advanced migration we will use SQL Azure Migration Wizard. Now the first step is to select the right version based on the SQL Server version you are using.

	- SQLAzureMW v3x and tools requires .NET Framework 3.5 and SQL Server 2008 R2 SP1 bits to run.
	- SQLAzureMW v4x and tools requires .NET Framework 4.5 and SQL Server 2012 bits to run.
	- SQLAzureMW v5x and tools requires .NET Framework 4.5 and SQL Server 2014 bits to run.

Let's run SQLAzureMW to migrate the schema and have an overview of the changes that we need to consider.

Fix all the issues that it raise on the source database.

Export data from the source database

		SQLAzureMWBatchBackup  Esporta in dat per uploader
				Modificare SQLAzureMWBatchBackup.exe.config nella sezione  <appSettings> 
				
Upload data on SQL Database

		SQLAzureMWBatchUpload Importa I dati del Backup
				Modificare SQLAzureMWBatchUpload.exe.config nella sezione  <appSettings> 
