import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  navItems = [
    { label: 'Products', route: '/products' },
    { label: 'Solutions', route: '/solutions' },
    { label: 'Resources', route: '/resources' },
    { label: 'Pricing', route: '/pricing' }
  ];
  
  isMenuOpen = false;
  isScrolled = false;
  activeRoute = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.activeRoute = event.url;
        this.isMenuOpen = false;
      });
    
    this.activeRoute = this.router.url;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  isActive(route: string): boolean {
    return this.activeRoute === route || this.activeRoute.startsWith(route + '/');
  }
}
