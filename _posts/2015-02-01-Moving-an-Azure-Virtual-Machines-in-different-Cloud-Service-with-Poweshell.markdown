---
layout: post
title:  "Moving an Azure Virtual Machines in a different Cloud Service with Poweshell [interactive]!"
date:   2015-02-01 12:03:07
comments: true
categories: Azure-Virtual-Machines
tags: Azure Virtual-Machines
---
  Having two Virtual Machines in a single Cloud Service is a big advantage in terms of management and network latency. 
  Sometimes happens that you need to change the CS after you have created and configured your VM.
  You can do this with the portal but if your machine have a lot of disks it can take a while.
  Following the commands below you can make it in few minutes.

{% gist a1dc25e9419ea8cea989 Move-AzureVMInNewCS.ps1%}   