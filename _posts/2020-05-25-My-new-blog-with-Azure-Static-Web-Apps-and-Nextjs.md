---
title: "My new blog using NextJs and Azure Static Web Apps"
excerpt: "With Static Web Apps, static assets are separated from a traditional web server and are instead served from points geographically distributed around the world. This distribution makes serving files much faster as files are physically closer to end users. In addition, API endpoints are hosted using a serverless architecture, which avoids the need for a full back-end server all together.

"

date: "2020-05-25T08:35:07.322Z"
coverImage: "/assets/blog/2020-05-25-My-new-blog-with-Azure-Static-Web-Apps-and-Nextjs/cover.jpg"
author:
  name: Gabriele Castellani
  picture: "/assets/blog/authors/gab.jpeg"
ogImage:
  url: "/assets/blog/2020-05-25-My-new-blog-with-Azure-Static-Web-Apps-and-Nextjs/cover.jpg"
---

The workflow of Azure Static Web Apps is tailored to a developer's daily workflow. Apps are built and deployed based off GitHub interactions.

When you create an Azure Static Web Apps resource, Azure sets up a GitHub Actions workflow in the app's source code repository that monitors a branch of your choice. Every time you push commits or accept pull requests into the watched branch, the GitHub Action automatically builds and deploys your app and its API to Azure.

Static web apps are commonly built using libraries and frameworks like Angular, React, Svelte, or Vue. These apps include HTML, CSS, JavaScript, and image assets that make up the application. With a traditional web server, these assets are served from a single server alongside any required API endpoints.

With Static Web Apps, static assets are separated from a traditional web server and are instead served from points geographically distributed around the world. This distribution makes serving files much faster as files are physically closer to end users. In addition, API endpoints are hosted using a serverless architecture, which avoids the need for a full back-end server all together.

[Documentation can be found here](https://docs.microsoft.com/en-us/azure/static-web-apps/)