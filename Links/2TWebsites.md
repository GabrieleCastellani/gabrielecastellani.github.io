#Front-end 
Let's start to see if we can Use Azure WebSites. WebSites have some neat features that will simplify your develpment and your administration. If WebSites doesn't fit into your soultuoi during this document you'll be redirected to CloudSrvices and the to Virtual Machines.

Let's first analyze some tipical application patterns respondi some questions.


-----
###Web Sites
####The Web application need setup of components?
- Crystal reports is a typical example, if you need it you have to consider [Cloud Services Guide](CSGuide)
- Do you need a setup of custom Fonts? If you are using in .Net you can loading at runtime otherwise consider [Cloud Services Guide](CSGuide)
- Do you need the setup of a custom windows service? If you have the source code of this service we will cover it later in a doc. 
- Do you generate PDFs? Some of the components tha usually are required for PDF generation do not work. Will have to test it.

-----
####Deploy the solution on Azure WebSites
If you don't have found blocking issues on the first part of the document, let's try to publish to a WebSite.

*Right click on the project*

![](WebSites-publish.png)

*Give it a name and select a region:*

![](WebSites-publish1.png)

*Publish*

![](WebSites-publish2.png)

####Things to check
- PDF Generation. Most of PDF libraries works on a _Basic/Standard_ WebSites but some don't so check.
- File saved on the filesystem

####Things to improve
- SingleSignOn with Office 365
- Redis Cache for session
- Upload of large files
- [Multiple Virtual directories](http://blogs.msdn.com/b/tomholl/archive/2014/09/22/deploying-multiple-virtual-directories-to-a-single-azure-website.aspx)


