import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  productLinks = ['Overview', 'Pricing', 'Customer stories'];
  resourcesLinks = ['Blog', 'Guides & tutorials', 'Help center'];
  companyLinks = ['About us', 'Careers', 'Media kit'];
  utilityLinks = ['English', 'Terms & privacy', 'Security', 'Status', '©2026 Whitepace LLC.'];
  socialIcons = ['Facebook', 'Twitter', 'LinkedIn'];
}


