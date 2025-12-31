import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github, Folder, Code2, ArrowUpRight } from 'lucide-angular';
import { PROFILE_DATA } from '../../data/profile-data';
import { I18nService } from '../../services/i18n.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  template: `
    <section id="projects" class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-surface-elevated/50"></div>
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div appScrollReveal class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <lucide-icon [img]="FolderIcon" class="w-4 h-4 text-purple-400"></lucide-icon>
            <span class="text-sm text-text-secondary">{{ i18n.t('my_work') }}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            {{ i18n.t('projects') }}
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            {{ i18n.t('projects_subtitle') }}
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          @for (project of projects; track project.title; let i = $index) {
            <div appScrollReveal [delay]="i * 100" 
                 class="group relative glass rounded-3xl overflow-hidden card-hover">
              <!-- Project Image/Visual -->
              <div class="relative h-48 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 overflow-hidden">
                <!-- Abstract Visual Pattern -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-8xl font-display font-bold text-white/5">{{ i + 1 }}</div>
                </div>
                <!-- Tech Stack Icons -->
                <div class="absolute bottom-4 left-4 flex items-center gap-2">
                  @for (tech of project.technologies.slice(0, 4); track tech) {
                    <div class="w-8 h-8 glass rounded-lg flex items-center justify-center">
                      <img [src]="getTechIcon(tech)" [alt]="tech" class="w-5 h-5" loading="lazy" 
                           onerror="this.style.display='none'" />
                    </div>
                  }
                </div>
                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Content -->
              <div class="p-8">
                <!-- Title & Links -->
                <div class="flex items-start justify-between gap-4 mb-4">
                  <h3 class="text-xl font-display font-bold text-text-primary group-hover:gradient-text transition-all">
                    {{ project.title }}
                  </h3>
                  <div class="flex items-center gap-2 flex-shrink-0">
                    <a href="#" class="p-2 glass rounded-lg text-text-tertiary hover:text-text-primary hover:bg-white/10 transition-all">
                      <lucide-icon [img]="GithubIcon" class="w-4 h-4"></lucide-icon>
                    </a>
                    <a href="#" class="p-2 glass rounded-lg text-text-tertiary hover:text-text-primary hover:bg-white/10 transition-all">
                      <lucide-icon [img]="ExternalLinkIcon" class="w-4 h-4"></lucide-icon>
                    </a>
                  </div>
                </div>

                <!-- Description -->
                <p class="text-text-secondary text-sm mb-6 leading-relaxed">
                  {{ project.description }}
                </p>

                <!-- Features -->
                <div class="space-y-2 mb-6">
                  @for (feature of project.features.slice(0, 3); track feature) {
                    <div class="flex items-start gap-2 group/item">
                      <lucide-icon [img]="Code2Icon" class="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0"></lucide-icon>
                      <span class="text-text-secondary text-sm group-hover/item:text-text-primary transition-colors">
                        {{ feature }}
                      </span>
                    </div>
                  }
                </div>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  @for (tech of project.technologies; track tech) {
                    <span class="px-3 py-1 text-xs font-medium text-text-secondary glass rounded-full hover:text-purple-400 transition-colors">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>

              <!-- Hover Glow -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div class="absolute -inset-px bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
              </div>
            </div>
          }
        </div>

        <!-- View All Button -->
        <div appScrollReveal class="text-center mt-12">
          <a href="https://github.com/AsociaLad" target="_blank"
             class="group inline-flex items-center gap-3 px-8 py-4 glass text-text-primary font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300">
            <lucide-icon [img]="GithubIcon" class="w-5 h-5"></lucide-icon>
            <span>{{ i18n.t('view_all_projects') }}</span>
            <lucide-icon [img]="ArrowUpRightIcon" class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></lucide-icon>
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
export class ProjectsComponent {
  i18n = inject(I18nService);
  
  readonly FolderIcon = Folder;
  readonly GithubIcon = Github;
  readonly ExternalLinkIcon = ExternalLink;
  readonly Code2Icon = Code2;
  readonly ArrowUpRightIcon = ArrowUpRight;

  projects = PROFILE_DATA.projects;

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
      'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'PySpark': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
      'Hadoop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg',
      'Kafka': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
      'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    };
    return icons[tech] || '';
  }
}
