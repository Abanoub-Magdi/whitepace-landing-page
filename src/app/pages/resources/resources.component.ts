import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main role="main" class="pt-20 min-h-screen bg-white">
      <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#212529] mb-6">
            Resources & <span class="underline-yellow">Support</span>
          </h1>
          <p class="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Access guides, tutorials, and help center to make the most of Whitepace.
          </p>
        </div>
      </section>
    </main>
  `
})
export class ResourcesComponent {
}


