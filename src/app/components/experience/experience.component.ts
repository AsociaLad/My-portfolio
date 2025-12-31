import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Briefcase, Calendar, ArrowUpRight, Building2 } from 'lucide-angular';
import { PROFILE_DATA } from '../../data/profile-data';
import { I18nService } from '../../services/i18n.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  template: `
    <section id="experience" class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div appScrollReveal class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <lucide-icon [img]="BriefcaseIcon" class="w-4 h-4 text-indigo-400"></lucide-icon>
            <span class="text-sm text-text-secondary">{{ i18n.t('career_path') }}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            {{ i18n.t('experience') }}
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            {{ i18n.t('experience_subtitle') }}
          </p>
        </div>

        <!-- Experience Cards -->
        <div class="space-y-8">
          @for (exp of experiences; track exp.company; let i = $index) {
            <div appScrollReveal [delay]="i * 150" 
                 class="group relative glass rounded-3xl p-8 md:p-10 card-hover overflow-hidden">
              <!-- Gradient accent line -->
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div class="flex flex-col lg:flex-row lg:items-start gap-6">
                <!-- Company Logo/Icon -->
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <lucide-icon [img]="Building2Icon" class="w-8 h-8 text-indigo-400"></lucide-icon>
                  </div>
                </div>

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 class="text-xl font-display font-bold text-text-primary group-hover:gradient-text transition-all">
                        {{ exp.role }}
                      </h3>
                      <p class="text-indigo-400 font-medium">{{ exp.company }}</p>
                    </div>
                    <div class="flex items-center gap-2 text-text-tertiary text-sm glass px-4 py-2 rounded-full">
                      <lucide-icon [img]="CalendarIcon" class="w-4 h-4"></lucide-icon>
                      <span>{{ exp.duration }}</span>
                    </div>
                  </div>

                  <!-- Description -->
                  <p class="text-text-secondary mb-6 leading-relaxed">{{ exp.description }}</p>

                  <!-- Achievements -->
                  <div class="space-y-3">
                    @for (achievement of exp.achievements; track achievement) {
                      <div class="flex items-start gap-3 group/item">
                        <span class="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mt-0.5">
                          <lucide-icon [img]="ArrowUpRightIcon" class="w-3 h-3 text-white"></lucide-icon>
                        </span>
                        <span class="text-text-secondary text-sm leading-relaxed group-hover/item:text-text-primary transition-colors">
                          {{ achievement }}
                        </span>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
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
export class ExperienceComponent {
  i18n = inject(I18nService);
  
  readonly BriefcaseIcon = Briefcase;
  readonly CalendarIcon = Calendar;
  readonly ArrowUpRightIcon = ArrowUpRight;
  readonly Building2Icon = Building2;

  experiences = PROFILE_DATA.experiences;
}
