import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingCard {
  planName: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  isHighlighted?: boolean;
  style: string;
}

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-section.component.html',
  styleUrl: './pricing-section.component.css'
})
export class PricingSectionComponent {
  pricingCards: PricingCard[] = [
    {
      planName: 'Free',
      price: '$0',
      description: 'Capture ideas and find them quickly',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks'
      ],
      ctaText: 'Get Started',
      style: 'bg-white border border-[#FFE492] text-dark'
    },
    {
      planName: 'Personal',
      price: '$11.99',
      description: 'Keep home and family on track',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks'
      ],
      ctaText: 'Get Started',
      isHighlighted: true,
      style: 'bg-[#043873] text-white shadow-xl transform scale-105'
    },
    {
      planName: 'Organization',
      price: '$49.99',
      description: 'Capture ideas and find them quickly',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks'
      ],
      ctaText: 'Get Started',
      style: 'bg-white border border-[#FFE492] text-dark'
    }
  ];
}


