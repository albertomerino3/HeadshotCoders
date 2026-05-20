/**
 * @file app.config.ts
 * @description Global application configuration.
 * Defines the providers and settings for the Angular application, including routing and HTTP client.
 */

import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

/**
 * Application configuration object containing all global providers.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Enables zoneless change detection for improved performance
    provideZonelessChangeDetection(),

    // Configures the router with the application routes and input binding
    provideRouter(routes, withComponentInputBinding()),

    // Configures the HTTP client with fetch API support
    provideHttpClient(withFetch())
  ]
};
