import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Heart, Linkedin, Github, Mail, ArrowUp } from 'lucide-angular';
import { PROFILE_DATA } from '../../data/profile-data';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <footer class="relative py-12 px-4 sm:px-6 lg:px-8">
      <!-- Top gradient line -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      
      <div class="max-w-7xl mx-auto">
        <!-- Back to top button -->
        <div class="flex justify-center mb-12">
          <a href="#" 
             class="group flex flex-col items-center gap-2 text-text-tertiary hover:text-text-primary transition-colors">
            <div class="p-3 glass rounded-xl group-hover:bg-white/10 transition-colors">
              <lucide-icon [img]="ArrowUpIcon" class="w-5 h-5 group-hover:-translate-y-1 transition-transform"></lucide-icon>
            </div>
            <span class="text-xs tracking-wider uppercase">{{ i18n.t('back_to_top') }}</span>
          </a>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <!-- Logo & Copyright -->
          <div class="text-center md:text-left">
            <a href="#" class="inline-flex items-center space-x-2 mb-3">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                <div class="w-full h-full rounded-[6px] bg-primary flex items-center justify-center">
                  <span class="text-sm font-bold gradient-text">I</span>
                </div>
              </div>
              <span class="text-lg font-display font-bold text-text-primary">
                Imad<span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">.dev</span>
              </span>
            </a>
            <p class="text-text-tertiary text-sm flex items-center justify-center md:justify-start gap-1.5">
              <span>© {{ currentYear }} {{ profile.personalInfo.name }}</span>
              <span class="text-text-tertiary/50">·</span>
              <span class="inline-flex items-center gap-1">
                {{ i18n.t('built_with') }}
                <lucide-icon [img]="HeartIcon" class="w-3.5 h-3.5 text-pink-500 fill-current animate-pulse"></lucide-icon>
              </span>
            </p>
          </div>

          <!-- Social Links -->
          <div class="flex items-center gap-3">
            <a [href]="profile.personalInfo.linkedin" 
               target="_blank" 
               rel="noopener noreferrer"
               class="p-3 glass rounded-xl text-text-tertiary hover:text-indigo-400 hover:bg-white/10 transition-all duration-300"
               aria-label="LinkedIn">
              <lucide-icon [img]="LinkedinIcon" class="w-5 h-5"></lucide-icon>
            </a>
            <a href="https://github.com/AsociaLad" 
               target="_blank" 
               rel="noopener noreferrer"
               class="p-3 glass rounded-xl text-text-tertiary hover:text-purple-400 hover:bg-white/10 transition-all duration-300"
               aria-label="GitHub">
              <lucide-icon [img]="GithubIcon" class="w-5 h-5"></lucide-icon>
            </a>
            <a [href]="'mailto:' + profile.personalInfo.email"
               class="p-3 glass rounded-xl text-text-tertiary hover:text-pink-400 hover:bg-white/10 transition-all duration-300"
               aria-label="Email">
              <lucide-icon [img]="MailIcon" class="w-5 h-5"></lucide-icon>
            </a>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="mt-8 pt-8 border-t border-white/5 text-center">
          <p class="text-text-tertiary text-xs">
            Angular 21 · Tailwind CSS · Lucide Icons · TypeScript
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FooterComponent {
  i18n = inject(I18nService);
  
  readonly HeartIcon = Heart;
  readonly LinkedinIcon = Linkedin;
  readonly GithubIcon = Github;
  readonly MailIcon = Mail;
  readonly ArrowUpIcon = ArrowUp;

  profile = PROFILE_DATA;
  currentYear = new Date().getFullYear();
}
