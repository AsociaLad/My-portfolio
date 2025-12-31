import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, Phone, MapPin, Linkedin, Send, GraduationCap, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-angular';
import { PROFILE_DATA } from '../../data/profile-data';
import { I18nService } from '../../services/i18n.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  template: `
    <section id="contact" class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-surface-elevated/50"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div appScrollReveal class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <lucide-icon [img]="MessageCircleIcon" class="w-4 h-4 text-green-400"></lucide-icon>
            <span class="text-sm text-text-secondary">{{ i18n.t('get_in_touch') }}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            {{ i18n.t('contact') }}
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            {{ i18n.t('contact_subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <!-- Contact Cards -->
          <div appScrollReveal class="lg:col-span-3 space-y-4">
            <!-- Main CTA Card -->
            <div class="group relative glass rounded-3xl p-10 overflow-hidden">
              <!-- Gradient Background -->
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative">
                <h3 class="text-2xl font-display font-bold text-text-primary mb-4">
                  {{ i18n.t('lets_work_together') }}
                </h3>
                <p class="text-text-secondary mb-8 leading-relaxed">
                  {{ i18n.t('contact_message') }}
                </p>
                
                <a href="mailto:{{ profile.personalInfo.email }}" 
                   class="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  <lucide-icon [img]="SparklesIcon" class="w-5 h-5"></lucide-icon>
                  <span>{{ i18n.t('send_message') }}</span>
                  <lucide-icon [img]="ArrowUpRightIcon" class="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"></lucide-icon>
                </a>
              </div>
            </div>

            <!-- Contact Info Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Email -->
              <a href="mailto:{{ profile.personalInfo.email }}" 
                 class="group glass rounded-2xl p-6 card-hover">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <lucide-icon [img]="MailIcon" class="w-5 h-5"></lucide-icon>
                  </div>
                  <div>
                    <p class="text-xs text-text-tertiary uppercase tracking-wider mb-1">Email</p>
                    <p class="text-text-primary font-medium group-hover:gradient-text transition-all">{{ profile.personalInfo.email }}</p>
                  </div>
                </div>
              </a>

              <!-- Phone -->
              <a href="tel:{{ profile.personalInfo.phone }}" 
                 class="group glass rounded-2xl p-6 card-hover">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <lucide-icon [img]="PhoneIcon" class="w-5 h-5"></lucide-icon>
                  </div>
                  <div>
                    <p class="text-xs text-text-tertiary uppercase tracking-wider mb-1">Phone</p>
                    <p class="text-text-primary font-medium group-hover:gradient-text transition-all">{{ profile.personalInfo.phone }}</p>
                  </div>
                </div>
              </a>

              <!-- Location -->
              <div class="group glass rounded-2xl p-6">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center">
                    <lucide-icon [img]="MapPinIcon" class="w-5 h-5"></lucide-icon>
                  </div>
                  <div>
                    <p class="text-xs text-text-tertiary uppercase tracking-wider mb-1">Location</p>
                    <p class="text-text-primary font-medium">{{ profile.personalInfo.location }}</p>
                  </div>
                </div>
              </div>

              <!-- LinkedIn -->
              <a [href]="profile.personalInfo.linkedin" 
                 target="_blank"
                 rel="noopener noreferrer"
                 class="group glass rounded-2xl p-6 card-hover">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <lucide-icon [img]="LinkedinIcon" class="w-5 h-5"></lucide-icon>
                  </div>
                  <div>
                    <p class="text-xs text-text-tertiary uppercase tracking-wider mb-1">LinkedIn</p>
                    <p class="text-text-primary font-medium group-hover:gradient-text transition-all">{{ i18n.t('connect_with_me') }}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- Education Card -->
          <div appScrollReveal direction="right" class="lg:col-span-2">
            <div class="glass rounded-3xl p-8 h-full">
              <div class="flex items-center gap-3 mb-8">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 flex items-center justify-center">
                  <lucide-icon [img]="GraduationCapIcon" class="w-6 h-6"></lucide-icon>
                </div>
                <h3 class="text-xl font-display font-bold text-text-primary">{{ i18n.t('education') }}</h3>
              </div>

              <div class="space-y-6">
                @for (edu of education; track edu.school; let i = $index; let last = $last) {
                  <div class="relative pl-6" [class.pb-6]="!last" [class.border-l]="!last" [class.border-white/10]="!last">
                    <!-- Timeline dot -->
                    <div class="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500"></div>
                    
                    <h4 class="text-text-primary font-semibold mb-1">{{ edu.school }}</h4>
                    <p class="text-indigo-400 text-sm mb-1">{{ edu.degree }}</p>
                    <p class="text-text-tertiary text-sm">{{ edu.year }}</p>
                  </div>
                }
              </div>

              <!-- Availability Badge -->
              <div class="mt-8 pt-6 border-t border-white/10">
                <div class="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10">
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span class="text-green-400 text-sm font-medium">{{ i18n.t('looking_for_internship') }}</span>
                </div>
              </div>
            </div>
          </div>
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
export class ContactComponent {
  i18n = inject(I18nService);
  
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly MapPinIcon = MapPin;
  readonly LinkedinIcon = Linkedin;
  readonly SendIcon = Send;
  readonly GraduationCapIcon = GraduationCap;
  readonly ArrowUpRightIcon = ArrowUpRight;
  readonly SparklesIcon = Sparkles;
  readonly MessageCircleIcon = MessageCircle;

  profile = PROFILE_DATA;
  education = PROFILE_DATA.education;
}
