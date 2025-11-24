import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-cta.component.html',
  styleUrl: './bottom-cta.component.css'
})
export class BottomCTAComponent {
  osIcons = ['Apple', 'Windows', 'Android'];
}


