import { FaqItem } from "@/types";

// DEMO CONTENT — general clinic FAQ shown on the FAQ page. Service-specific
// questions live alongside each service in data/demo/services.ts.
export const demoFaq: FaqItem[] = [
  {
    question: {
      en: "Do I need an appointment, or can I walk in?",
      de: "Brauche ich einen Termin, oder kann ich ohne Anmeldung kommen?",
      fr: "Ai-je besoin d'un rendez-vous, ou puis-je venir sans ?",
      it: "Ho bisogno di un appuntamento o posso venire senza prenotare?",
      ru: "Нужна ли запись или можно прийти без неё?",
    },
    answer: {
      en: "We recommend booking ahead so we can set aside the right amount of time — but true emergencies are always seen without an appointment.",
      de: "Wir empfehlen eine Terminbuchung, damit wir genug Zeit einplanen können — echte Notfälle werden aber immer auch ohne Termin behandelt.",
      fr: "Nous recommandons de réserver à l'avance afin de prévoir le temps nécessaire — mais les véritables urgences sont toujours prises en charge sans rendez-vous.",
      it: "Consigliamo di prenotare in anticipo per riservare il tempo necessario, ma le vere emergenze vengono sempre viste senza appuntamento.",
      ru: "Рекомендуем записываться заранее, чтобы мы выделили нужное время — но настоящие экстренные случаи мы всегда принимаем без записи.",
    },
  },
  {
    question: {
      en: "What forms of payment do you accept?",
      de: "Welche Zahlungsmethoden akzeptieren Sie?",
      fr: "Quels moyens de paiement acceptez-vous ?",
      it: "Quali metodi di pagamento accettate?",
      ru: "Какие способы оплаты вы принимаете?",
    },
    answer: {
      en: "Card, contactless and cash are all accepted at every visit. Ask our front desk about pet insurance claim support.",
      de: "Karte, kontaktlos und Bargeld werden bei jedem Besuch akzeptiert. Fragen Sie an der Rezeption nach Unterstützung bei Tierversicherungsansprüchen.",
      fr: "Carte, sans contact et espèces sont acceptés à chaque visite. Demandez à notre accueil pour l'aide aux demandes d'assurance animale.",
      it: "Carta, contactless e contanti sono accettati a ogni visita. Chiedi alla reception per il supporto con le richieste all'assicurazione per animali.",
      ru: "Мы принимаем карту, бесконтактную оплату и наличные при каждом визите. Спросите на ресепшене о помощи со страховкой для питомца.",
    },
  },
  {
    question: {
      en: "Can I get a referral to a specialist?",
      de: "Kann ich eine Überweisung an einen Spezialisten bekommen?",
      fr: "Puis-je obtenir une orientation vers un spécialiste ?",
      it: "Posso ricevere un rinvio a uno specialista?",
      ru: "Могу ли я получить направление к специалисту?",
    },
    answer: {
      en: "Yes — for cases beyond our in-house specialties, we coordinate directly with trusted referral centers.",
      de: "Ja — für Fälle außerhalb unserer hauseigenen Fachgebiete arbeiten wir direkt mit vertrauenswürdigen Überweisungszentren zusammen.",
      fr: "Oui — pour les cas dépassant nos spécialités internes, nous coordonnons directement avec des centres de référence de confiance.",
      it: "Sì: per i casi che superano le nostre specialità interne, ci coordiniamo direttamente con centri di riferimento di fiducia.",
      ru: "Да — для случаев вне наших внутренних специализаций мы напрямую координируемся с проверенными профильными центрами.",
    },
  },
  {
    question: {
      en: "What should I bring to my pet's first visit?",
      de: "Was soll ich zum ersten Besuch meines Haustiers mitbringen?",
      fr: "Que dois-je apporter pour la première visite de mon animal ?",
      it: "Cosa devo portare per la prima visita del mio animale?",
      ru: "Что взять на первый визит с питомцем?",
    },
    answer: {
      en: "Any previous medical or vaccination records, a list of current medications, and a stool sample if a parasite check is needed.",
      de: "Frühere medizinische Unterlagen oder Impfnachweise, eine Liste aktueller Medikamente und eine Kotprobe, falls eine Parasitenkontrolle nötig ist.",
      fr: "Tout dossier médical ou de vaccination antérieur, une liste des médicaments en cours, et un échantillon de selles si un contrôle parasitaire est nécessaire.",
      it: "Eventuali documenti medici o vaccinali precedenti, un elenco dei farmaci attuali e un campione di feci se serve un controllo parassitario.",
      ru: "Прошлую медицинскую или прививочную документацию, список текущих препаратов и образец кала, если нужна проверка на паразитов.",
    },
  },
  {
    question: {
      en: "Do you treat pets other than dogs and cats?",
      de: "Behandeln Sie auch andere Tiere als Hunde und Katzen?",
      fr: "Traitez-vous des animaux autres que chiens et chats ?",
      it: "Curate animali diversi da cani e gatti?",
      ru: "Принимаете ли вы животных, кроме собак и кошек?",
    },
    answer: {
      en: "Yes — rabbits, birds, reptiles and small mammals are all seen by our exotic animal specialist.",
      de: "Ja — Kaninchen, Vögel, Reptilien und Kleintiere werden alle von unserer Spezialistin für exotische Tiere behandelt.",
      fr: "Oui — lapins, oiseaux, reptiles et petits mammifères sont tous vus par notre spécialiste des animaux exotiques.",
      it: "Sì: conigli, uccelli, rettili e piccoli mammiferi sono tutti visti dalla nostra specialista in animali esotici.",
      ru: "Да — кроликов, птиц, рептилий и мелких млекопитающих принимает наш специалист по экзотическим животным.",
    },
  },
  {
    question: {
      en: "How do I know if it's a real emergency?",
      de: "Wie erkenne ich, ob es sich um einen echten Notfall handelt?",
      fr: "Comment savoir si c'est une véritable urgence ?",
      it: "Come posso sapere se è una vera emergenza?",
      ru: "Как понять, что это настоящая экстренная ситуация?",
    },
    answer: {
      en: "Difficulty breathing, uncontrolled bleeding, suspected poisoning or an inability to stand are always emergencies — call us immediately, don't wait.",
      de: "Atembeschwerden, unkontrollierte Blutungen, Verdacht auf Vergiftung oder Unfähigkeit zu stehen sind immer Notfälle — rufen Sie sofort an, warten Sie nicht.",
      fr: "Difficulté à respirer, saignement incontrôlé, suspicion d'empoisonnement ou incapacité à se lever sont toujours des urgences — appelez-nous immédiatement, n'attendez pas.",
      it: "Difficoltà respiratoria, sanguinamento incontrollato, sospetto avvelenamento o incapacità di stare in piedi sono sempre emergenze: chiamaci immediatamente, non aspettare.",
      ru: "Затруднённое дыхание, неконтролируемое кровотечение, подозрение на отравление или невозможность встать — это всегда экстренные ситуации, звоните нам немедленно.",
    },
  },
  {
    question: {
      en: "Can I request the same doctor every time?",
      de: "Kann ich jedes Mal denselben Tierarzt anfragen?",
      fr: "Puis-je demander le même vétérinaire chaque fois ?",
      it: "Posso richiedere sempre lo stesso veterinario?",
      ru: "Можно ли всегда просить одного и того же врача?",
    },
    answer: {
      en: "Absolutely — just note your preferred doctor when booking, and we'll match you whenever their schedule allows.",
      de: "Auf jeden Fall — geben Sie bei der Buchung einfach Ihren bevorzugten Tierarzt an, und wir richten uns nach dessen Verfügbarkeit.",
      fr: "Absolument — indiquez simplement votre vétérinaire préféré lors de la réservation, et nous vous placerons selon ses disponibilités.",
      it: "Assolutamente sì: basta indicare il veterinario preferito al momento della prenotazione, e ti assegneremo a lui quando il suo orario lo consente.",
      ru: "Конечно — просто укажите желаемого врача при записи, и мы подберём время в соответствии с его расписанием.",
    },
  },
  {
    question: {
      en: "How far in advance should I book a routine visit?",
      de: "Wie weit im Voraus sollte ich einen Routinebesuch buchen?",
      fr: "Combien de temps à l'avance dois-je réserver une visite de routine ?",
      it: "Con quanto anticipo devo prenotare una visita di routine?",
      ru: "За сколько нужно записываться на плановый визит?",
    },
    answer: {
      en: "A few days ahead usually works well; popular time slots on weekends fill up faster.",
      de: "Ein paar Tage im Voraus reichen meist aus; beliebte Termine am Wochenende sind schneller ausgebucht.",
      fr: "Quelques jours à l'avance suffisent généralement ; les créneaux prisés du week-end se remplissent plus vite.",
      it: "Di solito bastano pochi giorni di anticipo; gli orari più richiesti nel weekend si riempiono più in fretta.",
      ru: "Обычно достаточно записаться за несколько дней; популярные слоты на выходных заполняются быстрее.",
    },
  },
];
