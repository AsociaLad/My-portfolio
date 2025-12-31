import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Server, Monitor, Smartphone, Database, Award, Zap, Sparkles } from 'lucide-angular';
import { PROFILE_DATA } from '../../data/profile-data';
import { I18nService } from '../../services/i18n.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  template: `
    <section id="skills" class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div appScrollReveal class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <lucide-icon [img]="ZapIcon" class="w-4 h-4 text-pink-400"></lucide-icon>
            <span class="text-sm text-text-secondary">{{ i18n.t('what_i_know') }}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            {{ i18n.t('skills') }}
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            {{ i18n.t('skills_subtitle') }}
          </p>
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          @for (skill of skills; track skill.category; let i = $index) {
            <div appScrollReveal [delay]="i * 100" 
                 class="group relative glass rounded-3xl p-8 card-hover overflow-hidden">
              <!-- Gradient accent -->
              <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   [class]="getGradientClass(i)"></div>
              
              <!-- Icon -->
              <div class="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                   [class]="getIconBgClass(i)">
                <lucide-icon [img]="getIcon(skill.category)" class="w-7 h-7"></lucide-icon>
              </div>

              <!-- Category Name -->
              <h3 class="text-xl font-display font-bold text-text-primary mb-6 group-hover:gradient-text transition-all">
                {{ skill.category }}
              </h3>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                @for (tech of skill.technologies; track tech) {
                  <div class="relative group/tech">
                    <span class="block px-3 py-1.5 text-xs font-medium text-text-secondary glass rounded-lg hover:text-text-primary hover:bg-white/10 transition-all duration-200 cursor-default">
                      {{ tech }}
                    </span>
                  </div>
                }
              </div>

              <!-- Tech Logos Row -->
              <div class="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
                @for (tech of skill.technologies.slice(0, 4); track tech) {
                  <img [src]="getTechIcon(tech)" [alt]="tech" 
                       class="w-6 h-6 tech-logo" 
                       loading="lazy"
                       onerror="this.style.display='none'" />
                }
              </div>
            </div>
          }
        </div>

        <!-- Certifications -->
        <div appScrollReveal class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8">
            <lucide-icon [img]="AwardIcon" class="w-4 h-4 text-yellow-400"></lucide-icon>
            <span class="text-sm text-text-secondary">{{ i18n.t('certifications') }}</span>
          </div>
          
          <div class="flex flex-wrap justify-center gap-4">
            @for (cert of certifications; track cert; let i = $index) {
              <div appScrollReveal [delay]="i * 50" 
                   class="group flex items-center gap-3 px-6 py-4 glass rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-default">
                <lucide-icon [img]="SparklesIcon" class="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform"></lucide-icon>
                <span class="text-text-secondary group-hover:text-text-primary transition-colors font-medium">
                  {{ cert }}
                </span>
              </div>
            }
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
export class SkillsComponent {
  i18n = inject(I18nService);
  
  readonly ServerIcon = Server;
  readonly MonitorIcon = Monitor;
  readonly SmartphoneIcon = Smartphone;
  readonly DatabaseIcon = Database;
  readonly AwardIcon = Award;
  readonly ZapIcon = Zap;
  readonly SparklesIcon = Sparkles;

  skills = PROFILE_DATA.skills;
  certifications = PROFILE_DATA.certifications;

  getIcon(category: string) {
    const iconMap: { [key: string]: any } = {
      'Backend': Server,
      'Frontend': Monitor,
      'Mobile': Smartphone,
      'Data & DevOps': Database
    };
    return iconMap[category] || Server;
  }

  getGradientClass(index: number): string {
    const gradients = [
      'from-indigo-500/20 to-transparent',
      'from-purple-500/20 to-transparent',
      'from-pink-500/20 to-transparent',
      'from-cyan-500/20 to-transparent'
    ];
    return gradients[index % gradients.length];
  }

  getIconBgClass(index: number): string {
    const colors = [
      'bg-indigo-500/20 text-indigo-400',
      'bg-purple-500/20 text-purple-400',
      'bg-pink-500/20 text-pink-400',
      'bg-cyan-500/20 text-cyan-400'
    ];
    return colors[index % colors.length];
  }

  getTechIcon(tech: string): string {
    const icons: Record<string, string> = {
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
      'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'JEE': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'Hibernate': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg'
    };
    return icons[tech] || '';
  }
}
