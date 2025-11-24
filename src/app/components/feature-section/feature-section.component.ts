import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.css'
})
export class FeatureSectionComponent {
  @Input() variant: 'project-management' | 'work-together' | 'extension' | 'customise' = 'project-management';
  
  get isDarkBackground() {
    return this.variant === 'extension';
  }
  
  get isReversed() {
    return this.variant === 'work-together' || this.variant === 'customise';
  }
  
  get title() {
    const titles: Record<string, string> = {
      'project-management': 'Project Management',
      'work-together': 'Work together',
      'extension': 'Use as Extension',
      'customise': 'Customise it to your needs'
    };
    return titles[this.variant] || '';
  }
  
  get highlight() {
    const highlights: Record<string, string> = {
      'project-management': 'Management',
      'work-together': '',
      'extension': 'Extension',
      'customise': 'your needs'
    };
    return highlights[this.variant] || '';
  }
  
  get highlightStyle() {
    if (this.variant === 'extension') return 'underline-white';
    if (this.variant === 'project-management' || this.variant === 'customise') return 'underline-yellow';
    return '';
  }
  
  get titleParts() {
    if (!this.highlight || !this.highlightStyle) {
      return { before: this.title, highlight: '', after: '' };
    }
    const index = this.title.indexOf(this.highlight);
    if (index === -1) {
      return { before: this.title, highlight: '', after: '' };
    }
    return {
      before: this.title.substring(0, index),
      highlight: this.highlight,
      after: this.title.substring(index + this.highlight.length)
    };
  }
  
  get paragraph() {
    const paragraphs: Record<string, string> = {
      'project-management': 'Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.',
      'work-together': 'With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.',
      'extension': 'Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.',
      'customise': 'Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.'
    };
    return paragraphs[this.variant] || '';
  }
  
  get buttonText() {
    const buttons: Record<string, string> = {
      'project-management': 'Get Started',
      'work-together': 'Try it now',
      'extension': 'Let\'s Go',
      'customise': 'Let\'s Go'
    };
    return buttons[this.variant] || '';
  }
}

