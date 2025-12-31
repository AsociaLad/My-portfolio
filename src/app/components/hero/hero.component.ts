import { Component, inject, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Linkedin, Mail, Download, ArrowDown, Github, ChevronDown, Sparkles } from 'lucide-angular';
import { PROFILE_DATA } from '../../data/profile-data';
import { I18nService } from '../../services/i18n.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  template: `
    <section id="about" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 -z-10">
        <!-- Gradient Orbs -->
        <div class="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-50"></div>
        
        <!-- Grid Pattern -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        <!-- Noise Texture -->
        <div class="absolute inset-0 opacity-30 noise"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left Content -->
          <div class="text-center lg:text-left order-2 lg:order-1">
            <!-- Status Badge -->
            <div appScrollReveal class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span class="text-sm text-text-secondary">{{ i18n.t('available_for_work') }}</span>
            </div>

            <!-- Name -->
            <h1 appScrollReveal [delay]="100" class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary mb-4 leading-tight">
              {{ i18n.t('greeting') }}<br>
              <span class="gradient-text">{{ profile.personalInfo.name }}</span>
            </h1>

            <!-- Title with typing effect -->
            <div appScrollReveal [delay]="200" class="mb-6">
              <h2 class="text-xl sm:text-2xl md:text-3xl font-medium text-text-secondary">
                {{ profile.personalInfo.title }}
              </h2>
            </div>

            <!-- Location -->
            <div appScrollReveal [delay]="300" class="flex items-center justify-center lg:justify-start gap-2 text-text-tertiary mb-8">
              <lucide-icon [img]="MapPinIcon" class="w-4 h-4 text-indigo-400"></lucide-icon>
              <span class="text-sm sm:text-base">{{ profile.personalInfo.location }}</span>
            </div>

            <!-- Summary -->
            <p appScrollReveal [delay]="400" class="text-text-secondary text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              {{ profile.personalInfo.summary }}
            </p>

            <!-- CTA Buttons -->
            <div appScrollReveal [delay]="500" class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="#contact" 
                 class="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
                <span class="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <lucide-icon [img]="SparklesIcon" class="w-5 h-5 relative z-10"></lucide-icon>
                <span class="relative z-10">{{ i18n.t('lets_talk') }}</span>
              </a>
              <a href="/assets/cv-imad-elhyani.pdf" download
                 class="group flex items-center gap-3 px-8 py-4 glass text-text-primary font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <lucide-icon [img]="DownloadIcon" class="w-5 h-5 group-hover:translate-y-0.5 transition-transform"></lucide-icon>
                <span>{{ i18n.t('download_cv') }}</span>
              </a>
            </div>

            <!-- Social Links -->
            <div appScrollReveal [delay]="600" class="flex items-center justify-center lg:justify-start gap-4">
              <a [href]="profile.personalInfo.linkedin" target="_blank" rel="noopener noreferrer"
                 class="p-3 glass rounded-xl text-text-secondary hover:text-indigo-400 hover:scale-110 transition-all duration-300">
                <lucide-icon [img]="LinkedinIcon" class="w-6 h-6"></lucide-icon>
              </a>
              <a href="https://github.com/AsociaLad" target="_blank" rel="noopener noreferrer"
                 class="p-3 glass rounded-xl text-text-secondary hover:text-indigo-400 hover:scale-110 transition-all duration-300">
                <lucide-icon [img]="GithubIcon" class="w-6 h-6"></lucide-icon>
              </a>
              <a [href]="'mailto:' + profile.personalInfo.email"
                 class="p-3 glass rounded-xl text-text-secondary hover:text-indigo-400 hover:scale-110 transition-all duration-300">
                <lucide-icon [img]="MailIcon" class="w-6 h-6"></lucide-icon>
              </a>
            </div>
          </div>

          <!-- Right Content - Profile Visual -->
          <div appScrollReveal direction="right" class="order-1 lg:order-2 flex justify-center">
            <div class="relative">
              <!-- Floating Elements -->
              <div class="absolute -top-8 -left-8 w-24 h-24 glass rounded-2xl flex items-center justify-center animate-float">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" class="w-12 h-12" />
              </div>
              <div class="absolute -top-4 -right-12 w-20 h-20 glass rounded-2xl flex items-center justify-center animate-float" style="animation-delay: 1s">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" class="w-10 h-10" />
              </div>
              <div class="absolute -bottom-6 -left-6 w-20 h-20 glass rounded-2xl flex items-center justify-center animate-float" style="animation-delay: 2s">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" class="w-10 h-10" />
              </div>
              <div class="absolute -bottom-8 -right-8 w-24 h-24 glass rounded-2xl flex items-center justify-center animate-float" style="animation-delay: 0.5s">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" class="w-12 h-12" />
              </div>
              
              <!-- Main Profile Card -->
              <div class="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <!-- Gradient Border -->
                <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
                  <div class="w-full h-full rounded-[22px] bg-surface flex items-center justify-center overflow-hidden">
                    <!-- Abstract Avatar -->
                    <div class="relative w-full h-full">
                      <div class="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
                      <div class="absolute inset-0 flex items-center justify-center">
                        <span class="text-8xl sm:text-9xl font-display font-bold gradient-text opacity-50">I</span>
                      </div>
                      <!-- Code decoration -->
                      <div class="absolute bottom-4 left-4 right-4 font-mono text-xs text-text-tertiary/50">
                        <div>const developer = &#123;</div>
                        <div class="pl-4">name: "Imad",</div>
                        <div class="pl-4">passion: "code"</div>
                        <div>&#125;;</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Glow Effect -->
                <div class="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#experience" class="flex flex-col items-center gap-2 text-text-tertiary hover:text-text-secondary transition-colors">
            <span class="text-xs tracking-widest uppercase">{{ i18n.t('scroll') }}</span>
            <lucide-icon [img]="ChevronDownIcon" class="w-5 h-5"></lucide-icon>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeroComponent {
  i18n = inject(I18nService);
  
  readonly MapPinIcon = MapPin;
  readonly LinkedinIcon = Linkedin;
  readonly MailIcon = Mail;
  readonly DownloadIcon = Download;
  readonly ArrowDownIcon = ArrowDown;
  readonly GithubIcon = Github;
  readonly ChevronDownIcon = ChevronDown;
  readonly SparklesIcon = Sparkles;

  profile = PROFILE_DATA;
}
