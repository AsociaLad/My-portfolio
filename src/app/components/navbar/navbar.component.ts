import { Component, signal, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-angular';
import { ThemeService } from '../../services/theme.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
         [class]="isScrolled() ? 'glass shadow-2xl' : 'bg-transparent'">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <a href="#" class="group flex items-center space-x-2">
            <div class="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px] group-hover:scale-110 transition-transform duration-300">
              <div class="w-full h-full rounded-[10px] bg-primary flex items-center justify-center">
                <span class="text-lg font-bold gradient-text">I</span>
              </div>
            </div>
            <span class="text-xl font-display font-bold text-text-primary hidden sm:block">
              Imad<span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">.dev</span>
            </span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-1">
            @for (item of navItems; track item.href) {
              <a [href]="item.href" 
                 class="relative px-4 py-2 text-text-secondary hover:text-text-primary font-medium transition-all duration-300 group">
                <span class="relative z-10">{{ i18n.t(item.key) }}</span>
                <span class="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors"></span>
                <span class="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300 rounded-full"></span>
              </a>
            }
          </div>

          <!-- Right Side Actions -->
          <div class="flex items-center space-x-2">
            <!-- Language Toggle -->
            <button (click)="i18n.toggleLanguage()" 
                    class="p-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all duration-300 group"
                    [title]="'Switch to ' + (i18n.currentLang() === 'en' ? 'French' : 'English')">
              <span class="text-sm font-semibold">{{ i18n.currentLang().toUpperCase() }}</span>
            </button>

            <!-- Theme Toggle -->
            <button (click)="theme.toggleTheme()" 
                    class="p-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all duration-300 group">
              @if (theme.isDark()) {
                <lucide-icon [img]="SunIcon" class="w-5 h-5 group-hover:rotate-180 transition-transform duration-500"></lucide-icon>
              } @else {
                <lucide-icon [img]="MoonIcon" class="w-5 h-5 group-hover:-rotate-12 transition-transform duration-500"></lucide-icon>
              }
            </button>

            <!-- Social Links -->
            <div class="hidden lg:flex items-center space-x-1 ml-2 pl-4 border-l border-white/10">
              <a href="https://github.com/AsociaLad" target="_blank" 
                 class="p-2.5 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-xl transition-all duration-300">
                <lucide-icon [img]="GithubIcon" class="w-5 h-5"></lucide-icon>
              </a>
              <a href="https://www.linkedin.com/in/imad-elhyani/" target="_blank"
                 class="p-2.5 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-xl transition-all duration-300">
                <lucide-icon [img]="LinkedinIcon" class="w-5 h-5"></lucide-icon>
              </a>
            </div>
            
            <!-- Mobile Menu Button -->
            <button (click)="toggleMenu()" 
                    class="md:hidden p-2.5 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-xl transition-all duration-300">
              <lucide-icon [img]="isMenuOpen() ? XIcon : MenuIcon" class="w-6 h-6"></lucide-icon>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        @if (isMenuOpen()) {
          <div class="md:hidden glass rounded-2xl mt-2 p-6">
            <div class="flex flex-col space-y-2">
              @for (item of navItems; track item.href) {
                <a [href]="item.href" 
                   (click)="closeMenu()" 
                   class="text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all font-medium py-3 px-4 rounded-xl">
                  {{ i18n.t(item.key) }}
                </a>
              }
              <hr class="border-white/10 my-4">
              <div class="flex items-center justify-between px-4">
                <span class="text-text-tertiary text-sm">Social</span>
                <div class="flex items-center space-x-2">
                  <a href="https://github.com/AsociaLad" target="_blank" 
                     class="p-2.5 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-xl transition-all">
                    <lucide-icon [img]="GithubIcon" class="w-5 h-5"></lucide-icon>
                  </a>
                  <a href="https://www.linkedin.com/in/imad-elhyani/" target="_blank" 
                     class="p-2.5 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-xl transition-all">
                    <lucide-icon [img]="LinkedinIcon" class="w-5 h-5"></lucide-icon>
                  </a>
                  <a href="mailto:contact@imadelhyani.com" 
                     class="p-2.5 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-xl transition-all">
                    <lucide-icon [img]="MailIcon" class="w-5 h-5"></lucide-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class NavbarComponent {
  theme = inject(ThemeService);
  i18n = inject(I18nService);
  
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  navItems = [
    { href: '#about', key: 'about' },
    { href: '#experience', key: 'experience' },
    { href: '#projects', key: 'projects' },
    { href: '#skills', key: 'skills' },
    { href: '#contact', key: 'contact' }
  ];

  // Icons
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  readonly GithubIcon = Github;
  readonly LinkedinIcon = Linkedin;
  readonly MailIcon = Mail;
  readonly SunIcon = Sun;
  readonly MoonIcon = Moon;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
