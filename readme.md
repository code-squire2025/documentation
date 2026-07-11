# Documentation Workspace

## Overview

### Workspace
Your workspace can contain dozens or even hundreds of projects, front-end, back-end, dev-ops, libraries, and much more.
To help you maintain and expand your workspace, your trusted Squire© will help you out with most tasks that are honestly beneath you.


Sit back, grab a drink and some popcorn and watch while your Squire© works enthusiastically on tasks for you such as:
- Generating code 
- Building / Serving / Deploying / Publishing projects
- Running workspace tasks to maintain and protect the workspace

Your Squire© is your trusted companion that you can easily tell what to do. In order to tell your Squire© what you need done
and how you need it done, you can use tasks. There are three types of tasks to correspond with the work the Squire© can do for you.
- Generation tasks
- Project tasks
- Workspace tasks

Further on we will elaborate on the differences between these tasks.

### namespaces
@code-squire workspaces support namespaces. A namespaces is typically a grouping of projects representing a branch of servicewithin a company. For instance, a company that sells software for banking and software for real estate.
You could choose to separate these projects by creating a separate namespace for each.

### Projects
Workspaces support all kinds of projects, the sky is the limit. The only thing you need to generate and use new project types in your workspace,
is to install the package and engage with your squire.

Lets say for example want to generate a react or angular project.<br/>
```
npm i -D @code-squire/angular @code-squire/react
```
<br/>

```npx squire generate application my-app```

In above example your Squire will ask you if you would like to generate an application using
```@code-squire/angular``` or ```@code-squire/react```.

### Tasks
#### Generation tasks
Your workspace is already setup to use the squire to generate whatever you would like.
<br/>
typically a generation command looks like like this:<br/><br/>
```npx squire generate <entity> name```
<br/><br/>
this <entity> could be anything, ranging from projects to coding patterns. *Examples:*<br/>

```npx squire generate namespace insurances```<br/>
```npx squire generate library design-system```<br/>

#### Project tasks
Project tasks are tasks that are exclusively created to take action on a given project. Typical actions include
building, serving, deploying and publishing projects. Examples of such commands:
<br/>

```npx squire build design-system```<br/>
```npx squire publish design-system```<br/>

#### Workspace tasks
Workspace tasks are typically ran on the entire workspace. Imagine scrips to clean-up, publishing/deploying clusters, testing an entire namespace etc.
Workspace tasks are generally less frequently ran tasks and therefor do not have a typical squire cli approach.
Luckily it is very easy to create custom cli commands to execute these more custom tasks.

## Next steps:
The squire is now your personal companion to order around and make your development life easier.

### Newcomers
If it is your very first Squire© Workspace we recommend trying our playground workspace that will help you get an idea of 
the possibilities and potentially inspire you to try out the tools and find that many "complex" wishes you had in the past,
are now easy and within reach for you to build and share with anyone.
Let your creativity be the limiting factor rather than the complexity of the tooling you leverage.
To create the playground 

### Returning champions
For those returning, good luck on creating the next big thing! 
Generate your desired setup and get to it for the kingdom :)