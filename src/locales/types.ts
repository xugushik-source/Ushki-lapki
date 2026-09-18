export interface Dictionary {
  common: {
    bookAppointment: string;
    emergencyCare: string;
    callNow: string;
    directions: string;
    whatsapp: string;
    viewProfile: string;
    learnMore: string;
    readMore: string;
    bookNow: string;
    anyAvailableVet: string;
    from: string;
    allServices: string;
    allDoctors: string;
    close: string;
    menu: string;
    language: string;
    sendMessage: string;
    viewAllReviews: string;
    backToHome: string;
    page404Title: string;
    page404Body: string;
    skipToContent: string;
  };
  nav: {
    services: string;
    doctors: string;
    about: string;
    prices: string;
    petCare: string;
    contacts: string;
  };
  hero: {
    eyebrow: string;
    headlineLines: string[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust1: string;
    trust2: string;
    trust3: string;
  };
  trust: {
    yearsLabel: string;
    patientsLabel: string;
    vetsLabel: string;
    emergencyLabel: string;
  };
  servicesSection: {
    heading: string;
    subheading: string;
    viewAll: string;
    cardCta: string;
  };
  whyUs: {
    heading: string;
    subheading: string;
    items: { title: string; description: string }[];
  };
  story: {
    heading: string;
    chapters: { title: string; body: string }[];
  };
  doctorsSection: {
    heading: string;
    subheading: string;
    viewAll: string;
  };
  petSelector: {
    heading: string;
    subheading: string;
    dog: string;
    cat: string;
    other: string;
    recommendedFor: string;
  };
  reviews: {
    heading: string;
    subheading: string;
  };
  emergency: {
    heading: string;
    subtitle: string;
    bookContact: string;
    availability247: string;
  };
  booking: {
    pageTitle: string;
    pageSubtitle: string;
    stepPet: { title: string; subtitle: string; dog: string; cat: string; other: string };
    stepService: { title: string; subtitle: string };
    stepDoctor: { title: string; subtitle: string; any: string };
    stepDate: { title: string; subtitle: string };
    stepTime: { title: string; subtitle: string };
    stepOwner: {
      title: string;
      subtitle: string;
      name: string;
      phone: string;
      email: string;
      comment: string;
      commentPlaceholder: string;
    };
    stepConfirm: { title: string; subtitle: string; edit: string };
    next: string;
    back: string;
    submit: string;
    successTitle: string;
    successBody: string;
    whatsappLabels: {
      title: string;
      pet: string;
      service: string;
      doctor: string;
      date: string;
      time: string;
      owner: string;
      phone: string;
      comment: string;
      anyDoctor: string;
      emailSubject: string;
    };
  };
  faqPage: { heading: string; subheading: string };
  aboutPage: {
    heading: string;
    philosophyHeading: string;
    philosophyBody: string;
    clinicHeading: string;
    clinicBody: string;
    technologyHeading: string;
    technologyBody: string;
    teamHeading: string;
    teamBody: string;
    valuesHeading: string;
    values: { title: string; description: string }[];
    storyHeading: string;
    storyBody: string;
    ctaHeading: string;
    ctaBody: string;
  };
  contactsPage: {
    heading: string;
    subheading: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    emergencyLabel: string;
    parkingLabel: string;
    parkingText: string;
    socialLabel: string;
  };
  pricesPage: {
    heading: string;
    subheading: string;
    searchPlaceholder: string;
    categoryAll: string;
    disclaimer: string;
  };
  blogPage: {
    heading: string;
    subheading: string;
    readingTimeLabel: string;
    relatedHeading: string;
    reviewedBy: string;
    ctaBody: string;
    emptyCategory: string;
  };
  servicesListPage: { heading: string; subheading: string };
  doctorsListPage: { heading: string; subheading: string };
  serviceDetail: {
    overviewHeading: string;
    whenToVisitHeading: string;
    symptomsHeading: string;
    treatmentHeading: string;
    technologyHeading: string;
    doctorsHeading: string;
    faqHeading: string;
    ctaHeading: string;
    ctaBody: string;
  };
  doctorDetail: {
    educationHeading: string;
    certificatesHeading: string;
    expertiseHeading: string;
    languagesHeading: string;
    servicesHeading: string;
    ctaHeading: string;
  };
  legalPage: {
    privacyTitle: string;
    cookieTitle: string;
    termsTitle: string;
    lastUpdated: string;
    jurisdictionNotice: string;
  };
  footer: {
    description: string;
    quickLinksHeading: string;
    contactsHeading: string;
    hoursHeading: string;
    legalHeading: string;
    languageHeading: string;
    rights: string;
  };
  mobileActionBar: {
    call: string;
    book: string;
    emergency: string;
    whatsapp: string;
  };
}
