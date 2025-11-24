import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  user: {
    name: string;
    role: string;
    avatar: string;
  };
  style: string;
  icon: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      user: {
        name: 'Oberon Shaw, MCH',
        role: 'Head of Talent Acquisition, North America',
        avatar: 'assets/avatar1.png'
      },
      style: 'bg-white text-dark shadow-lg p-8 rounded-xl flex-1',
      icon: 'quote-blue'
    },
    {
      quote: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      user: {
        name: 'Oberon Shaw, MCH',
        role: 'Head of Talent Acquisition, North America',
        avatar: 'assets/avatar2.png'
      },
      style: 'bg-[#4F9CF9] text-white shadow-lg p-8 rounded-xl flex-1',
      icon: 'quote-white'
    },
    {
      quote: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      user: {
        name: 'Oberon Shaw, MCH',
        role: 'Head of Talent Acquisition, North America',
        avatar: 'assets/avatar3.png'
      },
      style: 'bg-[#4F9CF9] text-white shadow-lg p-8 rounded-xl flex-1',
      icon: 'quote-white'
    }
  ];
}


