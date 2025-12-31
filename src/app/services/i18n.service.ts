import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'fr';

export interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

const TRANSLATIONS: Translations = {
  // Navbar
  'about': { en: 'About', fr: 'À propos' },
  'experience': { en: 'Experience', fr: 'Expérience' },
  'projects': { en: 'Projects', fr: 'Projets' },
  'skills': { en: 'Skills', fr: 'Compétences' },
  'contact': { en: 'Contact', fr: 'Contact' },
  'social': { en: 'Social', fr: 'Réseaux' },

  // Hero
  'greeting': { en: "Hi, I'm", fr: 'Salut, je suis' },
  'available_for_work': { en: 'Available for PFE Internship - Feb 2026', fr: 'Disponible pour Stage PFE - Fév 2026' },
  'lets_talk': { en: "Let's Talk", fr: 'Discutons' },
  'download_cv': { en: 'Download CV', fr: 'Télécharger CV' },
  'scroll': { en: 'Scroll', fr: 'Défiler' },

  // Experience
  'career_path': { en: 'Career Path', fr: 'Parcours' },
  'experience_subtitle': { en: 'My professional journey and the impact I\'ve made', fr: 'Mon parcours professionnel et l\'impact que j\'ai eu' },

  // Projects
  'my_work': { en: 'My Work', fr: 'Mes Réalisations' },
  'projects_subtitle': { en: 'A selection of projects that showcase my skills and passion for development', fr: 'Une sélection de projets qui démontrent mes compétences et ma passion pour le développement' },
  'view_all_projects': { en: 'View All on GitHub', fr: 'Voir tout sur GitHub' },

  // Skills
  'what_i_know': { en: 'What I Know', fr: 'Mes Compétences' },
  'skills_subtitle': { en: 'Technologies and tools I use to bring ideas to life', fr: 'Technologies et outils que j\'utilise pour donner vie aux idées' },
  'certifications': { en: 'Certifications', fr: 'Certifications' },

  // Contact
  'get_in_touch': { en: 'Get In Touch', fr: 'Me Contacter' },
  'contact_subtitle': { en: "Have a question or want to work together? Let's connect!", fr: 'Une question ou envie de collaborer ? Connectons-nous !' },
  'lets_work_together': { en: "Let's Build Something Amazing", fr: 'Construisons Quelque Chose d\'Incroyable' },
  'contact_message': { 
    en: "I'm currently looking for a PFE internship starting February 2026. Whether you have an exciting opportunity, a question, or just want to say hello – my inbox is always open!", 
    fr: "Je recherche actuellement un stage PFE à partir de février 2026. Que vous ayez une opportunité, une question, ou simplement envie de dire bonjour – ma boîte de réception est toujours ouverte !"
  },
  'send_message': { en: 'Send Message', fr: 'Envoyer un Message' },
  'connect_with_me': { en: 'Connect with me', fr: 'Me rejoindre' },
  'education': { en: 'Education', fr: 'Formation' },
  'looking_for_internship': { en: 'Looking for PFE Internship', fr: 'Recherche Stage PFE' },

  // Footer
  'back_to_top': { en: 'Back to Top', fr: 'Retour en haut' },
  'built_with': { en: 'Built with', fr: 'Fait avec' },
};

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private readonly STORAGE_KEY = 'portfolio-lang';
  
  private language = signal<Language>(this.getInitialLanguage());
  
  // Expose a computed signal for the current language
  currentLang = computed(() => this.language());

  private getInitialLanguage(): Language {
    if (typeof window === 'undefined') return 'en';
    const stored = localStorage.getItem(this.STORAGE_KEY) as Language;
    if (stored) return stored;
    
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'fr' ? 'fr' : 'en';
  }

  setLanguage(lang: Language): void {
    this.language.set(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, lang);
    }
  }

  toggleLanguage(): void {
    const newLang = this.language() === 'en' ? 'fr' : 'en';
    this.language.set(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, newLang);
    }
  }

  t(key: string): string {
    const translation = TRANSLATIONS[key];
    if (!translation) return key;
    return translation[this.language()];
  }
}
