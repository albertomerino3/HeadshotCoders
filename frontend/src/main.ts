/**
 * @file main.ts
 * @description Entry point of the Angular application. 
 * This file is responsible for bootstrapping the application with the root component and configuration.
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 * Bootstraps the Angular application using the root 'App' component
 * and the provided application configuration.
 */
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
