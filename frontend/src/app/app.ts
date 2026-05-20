/**
 * @file app.ts
 * @description Root component of the application.
 * Defines the main layout and top-level logic for the application.
 */

import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

/**
 * @class App
 * @description The main component that serves as the root of the application.
 * It handles the navigation and displays the main layout.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /**
   * The title of the application, managed as a reactive signal.
   */
  protected readonly title = signal('frontend');
}
