/**
 * @file app.component.ts
 * @description Secondary root component or alternative entry point.
 * This component provides a simple router-outlet for routing-based rendering.
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * @class AppComponent
 * @description A standalone component that acts as a container for routed components.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>` // Components will be rendered here based on the route
})
export class AppComponent {}
