const CONTACT_EMAIL = "alban.choulet1@gmail.com";
const CONTACT_FORM_ID = "3da345c965762367072e0f47853244dc";
const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_FORM_ID}`;
const translations = {
  en: {
    "meta.description":
      "Alban's portfolio, an IT student and developer passionate about aeronautics, space and the web.",
    "page.title": "Alban — Portfolio",
    skip: "Skip to content",
    "brand.label": "Alban, back to home",
    "nav.label": "Main navigation",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.currentProjects": "In progress",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "header.cv": "Download my CV",
    "hero.eyebrow": "ALBAN CHOULET · WEB & APPLICATION DEVELOPER",
    "hero.title": "FULL-STACK<br /><span>DEVELOPER</span>",
    "hero.intro":
      "An IT student building modern, useful and accessible applications and web experiences, from front end to back end.",
    "hero.projects": "Explore my projects",
    "hero.contact": "Get in touch",
    "hero.profile": "Profile",
    "hero.availability": "AVAILABLE FOR AN INTERNSHIP · 7",
    "portrait.label": "Placeholder for a portrait of Alban",
    "portrait.hint": "Photo coming soon:",
    "about.eyebrow": "01 / ABOUT",
    "about.title": "What you don't see,<br /><span>but what makes it all work</span>",
    "about.lead":
      "I’m studying to become a <strong>full-stack developer</strong>.",
    "about.paragraph1":
      'Over the past few years, I’ve created several projects, which you can explore in the <a class="inline-link" href="#projets">Projects</a> section. I enjoy turning complex problems into simple tasks.',
    "about.paragraph2":
      "My main focus is <strong>back-end</strong> development. Even though users don’t see it, this is where I help power most of a website or application.",
    "about.fact1": "Education<br /><strong>BUT in Computer Science · Year 3</strong>",
    "about.fact2": "Currently seeking<br /><strong>Software developer internship · 2027</strong>",
    "about.fact3": "Interests<br /><strong>Space · Web · Video games</strong>",
    "projects.eyebrow": "02 / PROJECTS",
    "projects.title": "Projects in <span>orbit.</span>",
    "projects.aside":
      "Five projects, from web to applications,<br />built solo, in teams or during an internship.",
    "projects.filters": "Filter projects",
    "projects.all": "All",
    "projects.web": "Web",
    "projects.applications": "Applications",
    "project.technologies": "Technologies used",
    "project.github": "View on GitHub",
    "project.details": "Explore project",
    "project.mintonette.detailsLabel": "Explore Mintonette Cup",
    "project.mintonette.githubLabel": "Mintonette Cup source code on GitHub",
    "project.quixo.detailsLabel": "Explore Quixo Game",
    "project.quixo.githubLabel": "Quixo Game source code on GitHub",
    "project.ecommerce.detailsLabel": "Explore E-Commerce Website",
    "project.ecommerce.githubLabel": "E-Commerce Website source code on GitHub",
    "project.sport.detailsLabel": "Explore Sport App",
    "project.sport.githubLabel": "Sport App source code on GitHub",
    "detail.back": "Back to projects",
    "projectNav.label": "Project navigation",
    "projectNav.previous": "Previous project",
    "projectNav.next": "Next project",
    "detail.imageZoom": "View image enlarged",
    "detail.imageViewer": "Enlarged image preview",
    "detail.imageClose": "Close enlarged image",
    "detail.overview": "About the <span>project</span>",
    "detail.features": "<span>Key</span> features",
    "detail.internship.featuresTitle": "<span>Main</span> responsibilities",
    "detail.context": "Context",
    "detail.date": "Dates",
    "detail.format": "Project format",
    "detail.technologies": "Technologies",
    "detail.mintonette.method":
      "Agile methods with sprints, task tracking on Trello",
    "detail.method": "Working method",
    "detail.infoLabel": "Project information",
    "detail.mintonette.pageTitle": "Mintonette Cup — Project · Alban",
    "detail.mintonette.meta":
      "Discover Mintonette Cup, a volleyball tournament management platform built with Vue.js, Node.js and MySQL.",
    "detail.mintonette.category": "WEB PLATFORM · UNIVERSITY PROJECT",
    "detail.mintonette.title": "Mintonette Cup",
    "detail.mintonette.summary":
      "A platform for managing a volleyball tournament, from team organization to score and standings tracking.",
    "detail.mintonette.overview":
      "Mintonette Cup is a full-stack website dedicated to a volleyball tournament. The interface was first built with Vue.js and Pinia, then the backend was implemented with Node.js and PostgreSQL.",
    "detail.mintonette.overview2":
      "The site distinguishes three types of users: customer, vendor and administrator. Through interactive maps, customers book their seats in the stands and vendors reserve their spot at the event venue.",
    "detail.mintonette.context": "University team project · October 2025 – March 2026",
    "detail.mintonette.format": "University team project · 5 students",
    "detail.mintonette.feature1":
      "Book seats in the stands using an interactive map",
    "detail.mintonette.feature2":
      "Reserve a vendor spot at the event venue through an interactive map",
    "detail.mintonette.feature3":
      "View details of the event, the competition and the different matches",
    "detail.mintonette.feature4":
      "Three user roles: customer, vendor and administrator",
    "detail.quixo.pageTitle": "Quixo Game — Project · Alban",
    "detail.quixo.meta":
      "Discover Quixo Game, a Java board game with console and JavaFX interfaces.",
    "detail.quixo.category": "BOARD GAME · UNIVERSITY PROJECT",
    "detail.quixo.title": "Quixo Game",
    "detail.quixo.summary":
      "A Java board game featuring turn management, game logic and win detection, available through console and JavaFX interfaces.",
    "detail.quixo.overview":
      'Quixo Game is an adaptation of the Quixo board game, developed in <span class="text-accent">Java</span> by a team of 5 students. The game was first built as a <span class="text-accent">console</span> application, then with a <span class="text-accent">JavaFX</span> graphical interface.',
    "detail.quixo.overview2":
      'The project followed a <span class="text-accent">specification</span> written by simulated clients. It offers <span class="text-accent">player-versus-player</span> and <span class="text-accent">player-versus-AI</span> games, with <span class="text-accent">three difficulty levels</span>. The AI relies on the <span class="text-accent">MinMax</span> algorithm, limited to looking 3 moves ahead to keep computation times reasonable.',
    "detail.quixo.format": "University team project · 5 students",
    "detail.quixo.feature1":
      "Implementation of the Quixo rules, turn management and win detection",
    "detail.quixo.feature2":
      '<span class="text-accent">Player-versus-player</span> games, taking turns',
    "detail.quixo.feature3":
      '<span class="text-accent">Player-versus-AI</span> games with three difficulty levels: easy, normal and hard',
    "detail.quixo.feature4":
      'AI based on the <span class="text-accent">MinMax</span> algorithm, looking up to 3 moves ahead',
    "detail.quixo.feature5":
      '<span class="text-accent">Console</span> version, then a <span class="text-accent">JavaFX</span> graphical interface',
    "detail.quixo.feature6":
      'Unit tests with <span class="text-accent">JUnit</span>',
    "detail.quixo.context": "March – June 2025",
    "detail.ecommerce.pageTitle": "E-Commerce Website — Project · Alban",
    "detail.ecommerce.meta":
      "Discover an e-commerce website for headphones, built with Python, Flask and MySQL.",
    "detail.ecommerce.category": "E-COMMERCE · UNIVERSITY PROJECT",
    "detail.ecommerce.title": "E-Commerce Website",
    "detail.ecommerce.summary":
      "An online headphones store with shopping features and product and stock administration.",
    "detail.ecommerce.overview":
      'This project involved building an e-commerce website from scratch with <span class="text-accent">Flask</span> (Python, HTML, CSS) and a <span class="text-accent">MySQL</span> database. It covers the whole shopping journey: product display, account creation, address management, cart, reviews and orders.',
    "detail.ecommerce.overview2":
      'An <span class="text-accent">admin panel</span> lets administrators manage stock and users. The project was carried out by a team of 3.',
    "detail.ecommerce.context": "University team project of 3 students",
    "detail.ecommerce.format": "University team project",
    "detail.ecommerce.feature1":
      "Product catalogue display",
    "detail.ecommerce.feature2":
      'Account creation and <span class="text-accent">address</span> management',
    "detail.ecommerce.feature3":
      '<span class="text-accent">Cart</span> and <span class="text-accent">order</span> management',
    "detail.ecommerce.feature4":
      'Product <span class="text-accent">review</span> system',
    "detail.ecommerce.feature5":
      '<span class="text-accent">Admin panel</span> to manage stock and users',
    "detail.sport.pageTitle": "Sport App — Project · Alban",
    "detail.sport.meta":
      "Discover Sport App, a Java desktop application with MVC architecture to plan workouts and track training with charts.",
    "detail.sport.category": "DESKTOP APPLICATION · PERSONAL PROJECT",
    "detail.sport.title": "Sport App",
    "detail.sport.summary":
      "My first desktop application in JavaFX, to plan workouts and track my sport activity with charts.",
    "detail.sport.overview":
      'Sport App is a desktop application that I designed and built on my own. I chose <span class="text-accent">sport</span> as the theme because it is part of my everyday life.',
    "detail.sport.overview2":
      'This project let me explore <span class="text-accent">JavaFX</span> in depth: <span class="text-accent">event handling</span>, <span class="text-accent">navigation between screens</span> and user interactions. It was my first real application with <span class="text-accent">local data management</span>.',
    "detail.sport.overview3":
      'The code follows an <span class="text-accent">MVC</span> architecture, with separate classes. The application plans workouts and tracks activity, with <span class="text-accent">charts</span> and a history stored in a <span class="text-accent">MySQL</span> database.',
    "detail.sport.format": "Personal project · developed independently",
    "detail.sport.feature1": 'Manage <span class="text-accent">user profiles</span>',
    "detail.sport.feature2": 'Generate <span class="text-accent">random workouts</span>',
    "detail.sport.feature3": 'View training statistics as <span class="text-accent">charts</span>',
    "detail.sport.feature4": 'Store workout history in <span class="text-accent">MySQL</span>',
    "detail.sport.feature5": '<span class="text-accent">MVC</span> architecture with separate classes',
    "detail.sport.context": "Personal project, designed and built on my own to learn JavaFX",
    "detail.internship.pageTitle": "Appup Internship — Project · Alban",
    "detail.internship.meta":
      "Discover the API and multimedia display work completed during Alban's software development internship at Appup.",
    "detail.internship.category": "SOFTWARE DEVELOPMENT INTERNSHIP · APPUP",
    "detail.internship.summary":
      "During my second-year internship, I developed a generic API for an e-commerce website and designed solutions to display multimedia content across several types of devices.",
    "detail.internship.galleryTitle": "Project snapshots",
    "detail.internship.galleryIntro":
      "A look at the business information and content managed by the application.",
    "detail.internship.imageTopics.alt":
      "Vertical list of activity categories: tradespeople, restaurants, mechanics, hairdressers and driving schools.",
    "detail.internship.imageTopics.caption":
      "Vertical navigation through the displayed categories.",
    "detail.internship.imageBusinesses.alt":
      "Application table showing business categories, names, street addresses and postcodes.",
    "detail.internship.imageBusinesses.caption":
      "Business categories and location details.",
    "detail.internship.imageHours.alt":
      "Application table showing opening hours and existing social media accounts.",
    "detail.internship.imageHours.caption":
      "Opening hours and social media presence.",
    "detail.internship.imageOnline.alt":
      "Application table showing a business email address, logo and website, alongside an overall quality review.",
    "detail.internship.imageOnline.caption":
      "Contact details, website and overall review.",
    "detail.internship.displayTitle": "Interactive kiosk <span>display</span>",
    "detail.internship.displayDescription":
      "The kiosk receives data from an external API available over the Internet. These values — media type, content URL, orientation, automatic launch and stop time — configure what is displayed.",
    "detail.internship.displayImage.alt":
      "JSON settings received from an external API over the Internet and used to configure an interactive kiosk display.",
    "detail.internship.displayImage.caption":
      "Example of the JSON settings received by the kiosk; network identifiers have been hidden.",
    "detail.internship.overview":
      "During my internship at Appup in Montbéliard, I designed and built a generic API from scratch, integrated into a clothing e-commerce website. It is not tied to any specific domain: it can handle any type of data, which makes it reusable for other projects.",
    "detail.internship.overview2":
      'It relies on external services: <span class="text-accent">Brevo</span> for sending emails, <span class="text-accent">Stripe</span> for online payments and <span class="text-accent">AWS</span> for file storage.',
    "detail.internship.feature1":
      "Design and build a generic API from scratch, integrated into an e-commerce website",
    "detail.internship.feature4":
      "Integrate Brevo (emails), Stripe (payments) and AWS (file storage)",
    "detail.internship.feature2":
      "Design multimedia content display solutions for different devices",
    "detail.internship.feature3":
      "Support interactive kiosks, Raspberry Pi and Windows PCs",
    "detail.internship.context1":
      "Second-year internship at Appup",
      "detail.internship.context2":
      "Montbéliard · April–June 2026",
    "detail.internship.format": "Software development internship",
    "project.mintonette.alt":
      "Mintonette Cup screenshot showing a volleyball match during a tournament.",
    "project.mintonette.preview": "01 / TOURNAMENT PLATFORM",
    "project.mintonette.type": "FEATURED PROJECT · WEB",
    "project.mintonette.description":
      "A full-stack website for a volleyball tournament: seat and vendor spot booking through interactive maps, with three user roles.",
    "project.mintonette.context":
      "University team project (5 students) · October 2025 – March 2026",
    "project.quixo.preview": "03 / BOARD GAME",
    "project.quixo.turn": "YOUR TURN",
    "project.quixo.type": "GAME · TEAM OF 5",
    "project.quixo.description":
      "An adaptation of the Quixo board game in Java: player-versus-player or against a three-level MinMax AI, in the console and with JavaFX, with JUnit tests.",
    "project.quixo.context":
      "University team project (5 students) · March – June 2025",
    "project.ecommerce.alt":
      "Screenshot of the online headphones store.",
    "project.ecommerce.preview": "04 / AUDIO STORE",
    "project.ecommerce.type": "WEB · UNIVERSITY PROJECT",
    "project.ecommerce.description":
      "An online headphones store built from scratch with Flask: products, accounts, addresses, cart, orders, reviews and an admin panel to manage stock and users.",
    "project.ecommerce.context": "University team project (3 students)",
    "project.sport.preview": "05 / FITNESS TRACKING",
    "project.sport.dashboard": "MY SPACE",
    "project.sport.date": 'NOV 21 <i aria-hidden="true">●</i>',
    "project.sport.today": "TODAY'S WORKOUT",
    "project.sport.greeting": "Let's get moving, Alban.",
    "project.sport.generated": "GENERATED WORKOUT",
    "project.sport.workout": "Full-body<br />strength",
    "project.sport.minutes": "MIN",
    "project.sport.progress": "WEEKLY PROGRESS",
    "project.sport.sessions": "3 / 4 sessions",
    "project.sport.type": "PERSONAL · SOLO",
    "project.sport.description":
      "My first desktop application in JavaFX, built with an MVC architecture: user profiles, random workouts, statistics shown as charts and a history stored in a MySQL database.",
    "project.sport.context": "Personal project, designed and built on my own to learn JavaFX",
    "project.internship.preview": "02 / INTERNSHIP · API & MULTI-DEVICE",
    "project.internship.cardTitle": "API & multimedia display",
    "project.internship.title": "API & multimedia <span>display</span>",
    "project.internship.type": "INTERNSHIP · APPUP",
    "project.internship.description":
      "Developed a generic API integrated into an e-commerce website and designed solutions to deliver multimedia content across multiple devices.",
    "project.internship.context":
      "Internship at Appup, Montbéliard · April — June 2026",
    "project.internship.kiosk": "INTERACTIVE KIOSK",
    "project.internship.detailsLabel": "Discover the Appup internship",
    "currentProject.eyebrow": "03 / IN PROGRESS",
    "currentProject.heading": "A project <span>in bloom.</span>",
    "currentProject.aside":
      "A project in development",
    "currentProject.status": "PROJECT IN PROGRESS",
    "currentProject.title": "Plant monitoring and analysis",
    "currentProject.description":
      "A connected system to monitor plants, centralize sensor data and view it through a web interface. A mobile app also lets users photograph plants and send the images to an AI for analysis.",
    "currentProject.architecture": "Project architecture",
    "currentProject.architectureAlt":
      "Software architecture diagram: microcontrollers, mobile app, Java and multimedia servers, Node.js API, Python AI, Vue.js interface and MongoDB.",
    "skills.eyebrow": "04 / SKILLS",
    "skills.title": "In my <span>toolbox.</span>",
    "skills.lead": "Technologies I work with, and how I work.",
    "skills.intro":
      "From back end to front end, these are the tools I use in my projects and the qualities I bring to a team.",
    "skills.current":
      "<strong>Currently learning</strong><br />Dart / Flutter and CI/CD integration.",
    "skills.development": "Development",
    "skills.technical": "TECHNICAL",
    "skills.tools": "Tools & environment",
    "skills.toolsCaption": "TOOLS",
    "skills.soft": "Soft skills",
    "skills.soft.teamwork": "Teamwork",
    "skills.soft.organization": "Organization",
    "skills.soft.curiosity": "Curiosity",
    "skills.soft.autonomy": "Autonomy",
    "skills.soft.communication": "Communication",
    "skills.people": "PEOPLE",
    "skills.education": "Education",
    "skills.educationCaption": "BACKGROUND",
    "skills.experience": "Experience",
    "skills.experienceCaption": "PROFESSIONAL",
    "experience.internship.date": "APRIL — JUNE 2026",
    "experience.internship.title": "Software development internship · Appup",
    "experience.internship.location": "Montbéliard, France",
    "experience.internship.api":
      "Developed a generic API integrated into an e-commerce website.",
    "experience.internship.display":
      "Designed display solutions for multimedia content across different devices: interactive kiosk, Raspberry Pi and Windows PC.",
    "experience.internship.technologiesLabel":
      "Technologies used during the internship",
    "education.bip.date": "OCT 2026 — JAN 2027",
    "education.bip.title":
      "BIP Erasmus+ · Mobile Programming & Technologies",
    "education.bip.credits": "International programme · 6 ECTS",
    "education.bip.courses":
      "10 weeks of online classes covering Flutter, mobile app security, Firebase and augmented reality, followed by an in-person week at Hochschule Bremen, Germany, from 18 to 22 January 2027.",
    "education.bip.team":
      "Develop mobile apps in English as part of international teams of 2–3 students from Germany, Poland, Portugal and France.",
    "education.bip.technologiesLabel": "Programme technologies",
    "education.degree": "Bachelor of Technology in Computer Science",
    "education.degreeDescription":
      "Application and web development track · IUT Belfort-Montbéliard",
    "education.baccalaureate": "General Baccalaureate",
    "education.baccalaureateDescription":
      "Mathematics and computer science · Lycée Édouard Belin, Vesoul",
    "contact.eyebrow": "05 / GET IN TOUCH",
    "contact.title": "Have an idea?<br /><span>Let’s get it off the ground.</span>",
    "contact.lead":
      "An internship, a collaboration, or just a shared passion for space? My inbox is open.",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.formHeading": "SEND A MESSAGE",
    "contact.formNumber": "FORM 01",
    "contact.firstName": "First name",
    "contact.firstNamePlaceholder": "e.g. Alex",
    "contact.name": "Last name",
    "contact.namePlaceholder": "e.g. Morgan",
    "contact.email": "Your email address",
    "contact.emailPlaceholder": "alex@example.com",
    "contact.subject": "Subject",
    "contact.subjectPlaceholder": "e.g. Internship inquiry",
    "contact.message": "Your message",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.submit": "Send message",
    "contact.formHint":
      "By submitting this form, your information is sent to FormSubmit to deliver your message. Submissions may be retained for 30 days.",
    "contact.formSending": "Sending your message…",
    "contact.formSuccess": "Your message has been sent. Thank you!",
    "contact.formActivation":
      "Activate the form using the link FormSubmit sent to your inbox, then try again.",
    "contact.formError":
      "The message could not be sent. Please try again or email me directly at alban.choulet1@gmail.com.",
    "footer.tagline": "Designed with curiosity, crafted with care.",
    "footer.cv": "CV PDF",
    backToTop: "Back to top",
  },
};

const languageToggle = document.querySelector("#language-toggle");
let currentLanguage = "fr";

const translate = (key) => {
  const translation = translations.en[key];
  if (typeof translation !== "string") {
    throw new Error(`Missing English translation for "${key}".`);
  }
  return translation;
};

const setLanguage = (language) => {
  const isEnglish = language === "en";
  const targetLanguage = isEnglish ? "en" : "fr";

  document.documentElement.lang = targetLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (!("frContent" in element.dataset)) {
      element.dataset.frContent = element.innerHTML;
    }

    const key = element.dataset.i18n;
    element.innerHTML = isEnglish
      ? translate(key)
      : element.dataset.frContent;
  });

  const translatedAttributes = [
    ["aria-label", "data-i18n-aria-label"],
    ["alt", "data-i18n-alt"],
    ["content", "data-i18n-content"],
    ["placeholder", "data-i18n-placeholder"],
  ];
  translatedAttributes.forEach(([attribute, keyAttribute]) => {
    document.querySelectorAll(`[${keyAttribute}]`).forEach((element) => {
      const key = element.getAttribute(keyAttribute);
      const frenchValueKey = `fr${attribute
        .split("-")
        .map((part) => part[0].toUpperCase() + part.slice(1))
        .join("")}`;
      if (!(frenchValueKey in element.dataset)) {
        element.dataset[frenchValueKey] = element.getAttribute(attribute) || "";
      }

      element.setAttribute(
        attribute,
        isEnglish ? translate(key) : element.dataset[frenchValueKey],
      );
    });
  });

  const title = document.querySelector("[data-i18n-title]");
  if (title) {
    if (!("frTitle" in title.dataset)) {
      title.dataset.frTitle = title.textContent || "";
    }
    title.textContent = isEnglish
      ? translate(title.dataset.i18nTitle)
      : title.dataset.frTitle;
  }

  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    const isMenuOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute(
      "aria-label",
      isEnglish
        ? translate(isMenuOpen ? "menu.close" : "menu.open")
        : isMenuOpen
          ? "Fermer le menu"
          : "Ouvrir le menu",
    );
  }

  if (languageToggle) {
    languageToggle.textContent = isEnglish ? "FR" : "EN";
    languageToggle.lang = isEnglish ? "fr" : "en";
    languageToggle.setAttribute(
      "aria-label",
      isEnglish ? "Switch to French" : "Passer en anglais",
    );
  }

  currentLanguage = targetLanguage;
};

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "fr" ? "en" : "fr");
  });

  let savedLanguage = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  try {
    const stored = localStorage.getItem("portfolio-language");
    if (stored === "fr" || stored === "en") savedLanguage = stored;
  } catch (error) {
    console.warn("Could not read the saved portfolio language preference.", error);
  }
  setLanguage(savedLanguage);

  languageToggle.addEventListener("click", () => {
    try {
      localStorage.setItem("portfolio-language", currentLanguage);
    } catch (error) {
      console.warn("Could not save the portfolio language preference.", error);
    }
  });
}

/* ---------- Menu mobile ---------- */
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  const setMenu = (open) => {
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      currentLanguage === "en"
        ? open
          ? translate("menu.close")
          : translate("menu.open")
        : open
          ? "Fermer le menu"
          : "Ouvrir le menu",
    );
    mainNav.classList.toggle("is-open", open);
  };

  menuToggle.addEventListener("click", () => {
    setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a"))
      setMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuToggle.getAttribute("aria-expanded") === "true"
    ) {
      setMenu(false);
      menuToggle.focus();
    }
  });
}

/* ---------- Filtres de projets ---------- */
/* ---------- Filtres de projets ---------- */
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const projectGrid = document.querySelector(".project-grid");

if (projectGrid) {
  const internshipCard = projectGrid.querySelector(".project-card--internship");
  const featuredProject = projectGrid.querySelector(".project-card--featured");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });

      projectGrid.classList.toggle("is-filtered", filter !== "all");
      projectGrid.classList.toggle("is-filtered-web", filter === "web");
      if (internshipCard && featuredProject) {
        projectGrid.insertBefore(
          internshipCard,
          filter === "web"
            ? projectGrid.firstElementChild
            : featuredProject.nextElementSibling,
        );
      }

      let visibleIndex = 0;
      projectCards.forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
        card.classList.remove("is-entering");
        if (card.hidden) return;
        card.style.animationDelay = `${visibleIndex++ * 60}ms`;
        void card.offsetWidth;
        card.classList.add("is-entering");
      });
    });
  });
}

/* ---------- Défilement fluide vers les sections ---------- */
let smoothScrollFrame = 0;

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

const cancelSmoothScroll = () => {
  cancelAnimationFrame(smoothScrollFrame);
  smoothScrollFrame = 0;
};

const smoothScrollTo = (targetY) => {
  cancelSmoothScroll();

  const startY = window.scrollY;
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const endY = Math.max(0, Math.min(maxY, targetY));
  const distance = endY - startY;
  if (Math.abs(distance) < 2) return;

  const duration = Math.min(1200, Math.max(600, Math.abs(distance) * 0.45));
  const startTime = performance.now();

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo({
      top: startY + distance * easeInOutCubic(progress),
      behavior: "instant",
    });
    smoothScrollFrame = progress < 1 ? requestAnimationFrame(step) : 0;
  };

  smoothScrollFrame = requestAnimationFrame(step);
};

// Si la personne reprend la main (molette, tactile, clavier), on arrête l'animation.
["wheel", "touchstart", "keydown"].forEach((eventName) => {
  window.addEventListener(eventName, cancelSmoothScroll, { passive: true });
});

document.addEventListener("click", (event) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const link =
    event.target instanceof Element
      ? event.target.closest('a[href^="#"]')
      : null;
  if (!link) return;

  const hash = link.getAttribute("href");
  if (!hash || hash.length < 2) return;

  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;

  event.preventDefault();

  const scrollPadding =
    Number.parseFloat(
      window.getComputedStyle(document.documentElement).scrollPaddingTop,
    ) || 0;
  smoothScrollTo(
    target.getBoundingClientRect().top + window.scrollY - scrollPadding,
  );

  if (window.location.hash !== hash) window.history.pushState(null, "", hash);

  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
});

/* ---------- Bouton « retour en haut » ---------- */
const backToTop = document.querySelector(".back-to-top");
const aboutSection = document.querySelector("#apropos");

if (backToTop && aboutSection) {
  const updateBackToTopVisibility = () => {
    const threshold = aboutSection.offsetTop - window.innerHeight * 0.75;
    backToTop.classList.toggle("is-visible", window.scrollY >= threshold);
  };

  window.addEventListener("scroll", updateBackToTopVisibility, {
    passive: true,
  });
  window.addEventListener("resize", updateBackToTopVisibility);
  updateBackToTopVisibility();
}

/* ---------- Lien de navigation actif ---------- */
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-current", isCurrent);
          if (isCurrent) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-30% 0px -60% 0px" },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

/* ---------- Apparition au scroll ---------- */
const revealTargets = document.querySelectorAll(
  ".hero-copy, .hero-portrait, .about .section-heading, .about-content, .about-facts > div, .projects-heading, .project-card, .project-cta, .skills-side .section-heading, .skills-intro, .skill-group, .contact-copy, .contact-form",
);
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
  );

  const targets = reducedMotion.matches
    ? document.querySelectorAll(
        ".project-card, .about-facts > div, .skills-side .section-heading, .skills-intro, .skill-group",
      )
    : revealTargets;

  targets.forEach((element) => {
    element.dataset.reveal = "";
    revealObserver.observe(element);
  });
  document.body.classList.add("has-reveal");
}

/* ---------- Année du pied de page ---------- */
const yearElement = document.querySelector("#current-year");
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

/* ---------- Aperçu agrandi des images du projet ---------- */
const imageLightbox = document.querySelector("#image-lightbox");
if (imageLightbox instanceof HTMLDialogElement) {
  const lightboxImage = imageLightbox.querySelector("#image-lightbox-image");
  const lightboxCaption = imageLightbox.querySelector("#image-lightbox-caption");

  document.querySelectorAll(".project-detail-image-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      const sourceImage = link.querySelector("img");
      if (!(sourceImage instanceof HTMLImageElement)) return;
      if (!(lightboxImage instanceof HTMLImageElement)) return;
      if (!(lightboxCaption instanceof HTMLElement)) return;

      event.preventDefault();
      lightboxImage.src = sourceImage.currentSrc || sourceImage.src;
      lightboxImage.alt = sourceImage.alt;
      lightboxCaption.textContent =
        link.closest("figure")?.querySelector("figcaption")?.textContent?.trim() ||
        sourceImage.alt;
      imageLightbox.showModal();
    });
  });

  document.addEventListener(
    "click",
    (event) => {
      if (!imageLightbox.open) return;
      if (
        lightboxImage instanceof HTMLImageElement &&
        event.target instanceof Node &&
        lightboxImage.contains(event.target)
      ) {
        return;
      }

      imageLightbox.close();
    },
    true,
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "Escape" || !imageLightbox.open) return;

      event.preventDefault();
      event.stopPropagation();
      imageLightbox.close();
    },
    true,
  );

  imageLightbox.addEventListener("cancel", (event) => {
    event.preventDefault();
    imageLightbox.close();
  });
}

/* ---------- Formulaire de contact ---------- */
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm instanceof HTMLFormElement && formStatus) {
  const setFormStatus = (key, frenchMessage) => {
    formStatus.dataset.i18n = key;
    formStatus.dataset.frContent = frenchMessage;
    formStatus.innerHTML =
      currentLanguage === "en" ? translate(key) : frenchMessage;
  };

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);
    submitButton.disabled = true;
    setFormStatus("contact.formSending", "Envoi du message en cours…");

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams(formData),
      });
      const result = await response.json();
      if (
        !response.ok ||
        (result.success !== "true" && result.success !== true)
      ) {
        const errorMessage =
          typeof result.message === "string" ? result.message : "";
        if (errorMessage.toLowerCase().includes("activation")) {
          setFormStatus(
            "contact.formActivation",
            "Clique sur « Activate Form » dans le mail de FormSubmit, puis réessaie.",
          );
          return;
        }
        throw new Error(errorMessage || `FormSubmit returned ${response.status}.`);
      }

      contactForm.reset();
      setFormStatus("contact.formSuccess", "Message envoyé. Merci !");
      const icon = submitButton.querySelector('[aria-hidden="true"]');
      if (icon) {
        icon.textContent = "✈\uFE0E";
        icon.classList.add("is-takeoff");
        setTimeout(() => {
          icon.textContent = "↗";
          icon.classList.remove("is-takeoff");
        }, 2400);
      }
    } catch (error) {
      console.error("Contact form submission failed.", error);
      setFormStatus(
        "contact.formError",
        "L’envoi a échoué. Réessaie ou écris-moi directement à alban.choulet1@gmail.com.",
      );
    } finally {
      submitButton.disabled = false;
    }
  });
}
if (projectGrid && window.matchMedia("(hover: hover)").matches && !reducedMotion.matches) {
  projectGrid.addEventListener("pointermove", (event) => {
    const card =
      event.target instanceof Element ? event.target.closest(".project-card") : null;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });
}
const progress = document.createElement("div");
progress.className = "scroll-progress";
progress.setAttribute("aria-hidden", "true");
progress.innerHTML = `
  <div class="scroll-progress-bar"></div>
  <svg class="scroll-progress-plane" viewBox="0 0 24 24" width="18" height="18">
    <path fill="currentColor" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
  </svg>`;
document.body.prepend(progress);

const progressBar = progress.querySelector(".scroll-progress-bar");
const progressPlane = progress.querySelector(".scroll-progress-plane");
let progressFrame = 0;

const updateProgress = () => {
  progressFrame = 0;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
  progressBar.style.transform = `scaleX(${ratio})`;
  progressPlane.style.transform = `translate3d(${ratio * (window.innerWidth - 18)}px, 0, 0) rotate(90deg)`;
};
const requestProgressUpdate = () => {
  if (!progressFrame) progressFrame = requestAnimationFrame(updateProgress);
};
window.addEventListener("scroll", requestProgressUpdate, { passive: true });
window.addEventListener("resize", requestProgressUpdate);
updateProgress();