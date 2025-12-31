export interface Skill {
  category: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export const PROFILE_DATA = {
  personalInfo: {
    name: 'Imad El Hyani',
    title: 'Full-Stack Engineer & Engineering Student',
    email: 'i.elhyani324@gmail.com',
    phone: '0625021233',
    linkedin: 'https://www.linkedin.com/in/imad-elhyani/',
    location: 'Casablanca, Morocco',
    summary: `Actuellement en 5e année du cycle d'ingénieur MIAGE, je suis à la recherche d'un stage de Projet de Fin d'Étude à compter de février 2026. Mes diverses expériences et mes projets académiques m'ont permis de développer une forte polyvalence technique, notamment en développement Full-Stack et en sécurité des SI.`
  },
  skills: [
    {
      category: 'Backend',
      technologies: ['Java', 'Python', 'C#', 'Spring Boot', 'Django', 'ASP.NET', 'Microservices', 'Jakarta EE']
    },
    {
      category: 'Frontend',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Next.js']
    },
    {
      category: 'Mobile',
      technologies: ['Android (Java)', 'Flutter (Dart)']
    },
    {
      category: 'Data & DevOps',
      technologies: ['Oracle', 'SQL Server', 'Docker', 'Kubernetes', 'Git/GitHub', 'Azure', 'Linux']
    }
  ],
  experiences: [
    {
      company: 'Salub (Afriquia Lubrifiants - Akwa Groupe)',
      role: 'Stagiaire Full Stack',
      duration: 'Juillet 2025 - Septembre 2025',
      description: 'Conception et développement de "Salub Stock App", une application web de gestion de la chaîne de stock.',
      achievements: [
        'Centralisation et fiabilisation du suivi des articles',
        'Fonctionnalités de traçabilité complète des mouvements',
        'Valorisation financière du stock en temps réel',
        'Création d\'un tableau de bord analytique'
      ]
    },
    {
      company: 'Bourse de Casablanca',
      role: 'Stagiaire',
      duration: 'Juillet 2024',
      description: 'Développement d\'une Plateforme Web Interactive pour la Récupération Sécurisée de Données Boursières.',
      achievements: [
        'Intégration d\'assistance IA',
        'Consommation et sécurisation d\'APIs boursières'
      ]
    }
  ],
  projects: [
    {
      title: 'Plateforme E-Learning Adaptative (PFA)',
      description: 'LMS Full-Stack intégrant un moteur IA pour personnaliser le parcours pédagogique.',
      technologies: ['Django', 'Next.js', 'Python (ML)', 'Scikit-learn'],
      features: ['Prédiction des préférences via ML', 'Architecture découplée RESTful']
    },
    {
      title: 'Portail de Gestion du Cursus Doctoral',
      description: 'Architecture microservices événementielle pour la gestion du cycle doctoral.',
      technologies: ['Spring Cloud', 'Angular', 'Kafka', 'Docker'],
      features: ['Orchestration Eureka/Gateway', 'Communication asynchrone avec Kafka', 'Resilience4j']
    },
    {
      title: 'EMSI Smart Presence',
      description: 'Application mobile géolocalisée intégrant l\'IA générative.',
      technologies: ['Android', 'Firebase', 'Gemini API'],
      features: ['Synchronisation Firestore temps réel', 'Assistance utilisateur via Gemini']
    },
    {
      title: 'FootVille',
      description: 'Écosystème de réservation sportive "Multi-ville".',
      technologies: ['Spring Boot', 'Android', 'MySQL'],
      features: ['Back-office Web Thymeleaf', 'Securité JWT', 'Persistance optimisée JPA/Hibernate']
    }
  ],
  education: [
    {
      school: 'École Marocaine des Sciences de l\'Ingénieur (EMSI)',
      degree: 'Ingénierie Informatique et Réseaux - Option MIAGE',
      year: '2021 - 2026'
    }
  ],
  certifications: [
    'Oracle APEX Cloud Developer Certified Professional',
    'Machine Learning with Python (IBM)',
    'Advanced Spring Cloud Microservices & Deployment with Docker',
    'Cisco Network Security'
  ]
};