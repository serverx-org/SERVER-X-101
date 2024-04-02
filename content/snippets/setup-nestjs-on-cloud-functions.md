---
title: Setup Nest on Cloud Functions
publishdate: 2019-08-12T10:26:16-07:00
lastmod: 2019-08-12T10:26:16-07:00
author: Gautam Ankoji
draft: false
description: Steps to run NestJS on Firebase Cloud Functions.
tags:
    - nest
    - typescript
    - cloud-functions
---

Setting up NestJS on Firebase Cloud Functions allows you to leverage the power of NestJS in serverless environments. Below are two different techniques for achieving this integration.

## Option A - Point a Function to Nest

This setup modifies the functions configuration to use the Nest `/dist` output instead of the default functions directory. It's suitable for existing Nest applications.

### Step 1 - Create Nest App

Generate a new Nest app and remove the automatically generated functions directory.

### Step 2 - Add Functions

Initialize Firebase Functions and update the Firebase config to point to the Nest app.

### Step 3 - Install Dependencies

Install necessary dependencies for Firebase Functions and NestJS.

### Step 4 - Update the package.json

Set the main entry point to the Nest `/dist` directory in the package.json file.

### Step 5 - Export the Server

Create a file to export the Nest server as a Firebase Cloud Function.

### Step 6 - Build, Serve, Deploy

Build the Nest app, serve it locally, and deploy it to Firebase Cloud Functions.

## Option B - Add Nest to the Functions Source

In this setup, NestJS is added directly to the Firebase Functions source code. It's suitable for integrating NestJS with existing background functions.

### Step 1 - Initialize Cloud Functions

Initialize Firebase Cloud Functions and choose the TypeScript option.

### Step 2 - Install NestJS

Install NestJS and necessary dependencies for Firebase Functions.

### Step 3 - Add NestCLI Support

Add support for NestCLI by creating a nest-cli.json file.

### Step 4 - Update the TS Config

Update the TypeScript configuration to support NestJS features.

### Step 5 - Generate an App Module

Generate an AppModule and a Controller using the NestCLI.

### Step 6 - Create the Server

Create a Nest server and wrap it in a Cloud Function.

### Step 7 - Build, Serve, Deploy

Serve the Nest app locally and deploy it to Firebase Cloud Functions.

Following these steps will enable you to run NestJS on Firebase Cloud Functions efficiently, providing a scalable and powerful backend solution for your applications.
