import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingSectionComponent } from '../../components/pricing-section/pricing-section.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, PricingSectionComponent],
  template: `
    <main role="main" class="pt-20">
      <app-pricing-section></app-pricing-section>
    </main>
  `
})
export class PricingComponent {
}


