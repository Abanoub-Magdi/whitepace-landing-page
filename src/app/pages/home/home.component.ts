import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { FeatureSectionComponent } from '../../components/feature-section/feature-section.component';
import { CalloutSectionComponent } from '../../components/callout-section/callout-section.component';
import { DataSecurityComponent } from '../../components/data-security/data-security.component';
import { SponsorsComponent } from '../../components/sponsors/sponsors.component';
import { IntegrationsComponent } from '../../components/integrations/integrations.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { BottomCTAComponent } from '../../components/bottom-cta/bottom-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    FeatureSectionComponent,
    CalloutSectionComponent,
    DataSecurityComponent,
    SponsorsComponent,
    IntegrationsComponent,
    TestimonialsComponent,
    BottomCTAComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}


