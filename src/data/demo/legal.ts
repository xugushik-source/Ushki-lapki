import { LocalizedText } from "@/types";

export interface LegalSection {
  heading: LocalizedText;
  body: LocalizedText;
}

export interface LegalDocument {
  updatedAt: string;
  sections: LegalSection[];
}

// GENERIC TEMPLATE LEGAL TEXT — see brief section 55. This is illustrative
// copy for a template, not legal advice, and does not by itself satisfy any
// jurisdiction's requirements. Replace with counsel-reviewed text before
// a real clinic launches on this engine.
export const legalDocuments: Record<"privacy" | "cookies" | "terms", LegalDocument> = {
  privacy: {
    updatedAt: "2025-09-01",
    sections: [
      {
        heading: {
          en: "What this policy covers",
          de: "Worum es in dieser Richtlinie geht",
          fr: "Ce que couvre cette politique",
          it: "Cosa copre questa informativa",
          ru: "О чём эта политика",
        },
        body: {
          en: "This policy explains what personal information we collect when you visit our website or book an appointment, and how we use it.",
          de: "Diese Richtlinie erklärt, welche persönlichen Daten wir erfassen, wenn Sie unsere Website besuchen oder einen Termin buchen, und wie wir sie verwenden.",
          fr: "Cette politique explique quelles informations personnelles nous collectons lorsque vous visitez notre site ou réservez un rendez-vous, et comment nous les utilisons.",
          it: "Questa informativa spiega quali dati personali raccogliamo quando visiti il nostro sito o prenoti una visita, e come li utilizziamo.",
          ru: "Эта политика объясняет, какие персональные данные мы собираем, когда вы посещаете наш сайт или записываетесь на приём, и как мы их используем.",
        },
      },
      {
        heading: {
          en: "Information we collect",
          de: "Welche Daten wir erfassen",
          fr: "Informations que nous collectons",
          it: "Informazioni che raccogliamo",
          ru: "Какие данные мы собираем",
        },
        body: {
          en: "When you book an appointment, we collect your name, phone number, email, and details about your pet needed to provide care. Our website may also collect basic analytics data about how pages are used.",
          de: "Wenn Sie einen Termin buchen, erfassen wir Ihren Namen, Ihre Telefonnummer, E-Mail-Adresse und Angaben zu Ihrem Haustier, die für die Behandlung notwendig sind. Unsere Website kann außerdem grundlegende Analysedaten zur Nutzung der Seiten erfassen.",
          fr: "Lorsque vous réservez un rendez-vous, nous collectons votre nom, numéro de téléphone, e-mail et les informations sur votre animal nécessaires aux soins. Notre site peut également collecter des données analytiques de base sur l'utilisation des pages.",
          it: "Quando prenoti una visita, raccogliamo il tuo nome, numero di telefono, email e i dati sul tuo animale necessari per la cura. Il nostro sito può anche raccogliere dati analitici di base sull'utilizzo delle pagine.",
          ru: "Когда вы записываетесь на приём, мы собираем ваше имя, номер телефона, email и данные о питомце, необходимые для оказания помощи. Наш сайт также может собирать базовую аналитику об использовании страниц.",
        },
      },
      {
        heading: {
          en: "How we use it",
          de: "Wie wir die Daten verwenden",
          fr: "Comment nous les utilisons",
          it: "Come li utilizziamo",
          ru: "Как мы используем данные",
        },
        body: {
          en: "We use your information to schedule and provide veterinary care, communicate with you about appointments, and — only where you've consented — for marketing communications.",
          de: "Wir verwenden Ihre Daten, um Termine zu planen und tierärztliche Versorgung zu erbringen, mit Ihnen über Termine zu kommunizieren und — nur mit Ihrer Einwilligung — für Marketingzwecke.",
          fr: "Nous utilisons vos informations pour planifier et fournir des soins vétérinaires, communiquer avec vous au sujet des rendez-vous et, uniquement avec votre consentement, à des fins marketing.",
          it: "Utilizziamo le tue informazioni per programmare e fornire cure veterinarie, comunicare con te riguardo agli appuntamenti e, solo con il tuo consenso, per comunicazioni di marketing.",
          ru: "Мы используем ваши данные для планирования и оказания ветеринарной помощи, связи с вами по поводу приёмов и — только с вашего согласия — для маркетинговых рассылок.",
        },
      },
      {
        heading: {
          en: "Your rights",
          de: "Ihre Rechte",
          fr: "Vos droits",
          it: "I tuoi diritti",
          ru: "Ваши права",
        },
        body: {
          en: "Depending on where you live, you may have the right to access, correct, or request deletion of your personal data. Contact us using the details on our Contacts page to make a request.",
          de: "Je nach Wohnort haben Sie möglicherweise das Recht, auf Ihre persönlichen Daten zuzugreifen, sie zu korrigieren oder deren Löschung zu verlangen. Kontaktieren Sie uns über die Angaben auf unserer Kontaktseite.",
          fr: "Selon votre lieu de résidence, vous pouvez avoir le droit d'accéder à vos données personnelles, de les corriger ou d'en demander la suppression. Contactez-nous via les coordonnées de notre page Contact.",
          it: "In base al luogo in cui vivi, potresti avere il diritto di accedere, correggere o richiedere la cancellazione dei tuoi dati personali. Contattaci tramite i dettagli nella nostra pagina Contatti.",
          ru: "В зависимости от места вашего проживания у вас может быть право на доступ, исправление или удаление ваших персональных данных. Свяжитесь с нами через контакты на странице «Контакты».",
        },
      },
    ],
  },
  cookies: {
    updatedAt: "2025-09-01",
    sections: [
      {
        heading: {
          en: "What cookies are",
          de: "Was Cookies sind",
          fr: "Ce que sont les cookies",
          it: "Cosa sono i cookie",
          ru: "Что такое cookie",
        },
        body: {
          en: "Cookies are small files stored on your device that help our website function and, where enabled, help us understand how it's used.",
          de: "Cookies sind kleine Dateien, die auf Ihrem Gerät gespeichert werden und dazu beitragen, dass unsere Website funktioniert, und uns — falls aktiviert — helfen zu verstehen, wie sie genutzt wird.",
          fr: "Les cookies sont de petits fichiers stockés sur votre appareil qui permettent le fonctionnement de notre site et, si activés, nous aident à comprendre son utilisation.",
          it: "I cookie sono piccoli file memorizzati sul tuo dispositivo che aiutano il nostro sito a funzionare e, se attivati, ci aiutano a capire come viene utilizzato.",
          ru: "Cookie — это небольшие файлы, сохраняемые на вашем устройстве, которые помогают сайту работать и, если это разрешено, помогают понять, как он используется.",
        },
      },
      {
        heading: {
          en: "Types we use",
          de: "Welche Arten wir verwenden",
          fr: "Types que nous utilisons",
          it: "Tipi che utilizziamo",
          ru: "Какие типы мы используем",
        },
        body: {
          en: "Essential cookies keep the site working (like remembering your language). Analytics cookies, if enabled for your market, only load after you consent via the cookie banner.",
          de: "Essenzielle Cookies halten die Website funktionsfähig (z. B. zum Merken Ihrer Sprache). Analyse-Cookies, falls für Ihren Markt aktiviert, laden erst nach Ihrer Zustimmung über den Cookie-Banner.",
          fr: "Les cookies essentiels assurent le fonctionnement du site (comme mémoriser votre langue). Les cookies analytiques, s'ils sont activés pour votre marché, ne se chargent qu'après votre consentement via la bannière de cookies.",
          it: "I cookie essenziali mantengono il sito funzionante (ad esempio ricordando la tua lingua). I cookie di analisi, se attivati per il tuo mercato, si caricano solo dopo il tuo consenso tramite il banner dei cookie.",
          ru: "Обязательные cookie обеспечивают работу сайта (например, запоминают язык). Аналитические cookie, если они включены для вашего рынка, загружаются только после согласия через баннер cookie.",
        },
      },
      {
        heading: {
          en: "Managing your preferences",
          de: "Ihre Einstellungen verwalten",
          fr: "Gérer vos préférences",
          it: "Gestire le tue preferenze",
          ru: "Управление настройками",
        },
        body: {
          en: "You can change or withdraw consent at any time via your browser settings or the cookie preferences link in our footer, where available.",
          de: "Sie können Ihre Zustimmung jederzeit über Ihre Browsereinstellungen oder den Link zu den Cookie-Einstellungen in unserer Fußzeile ändern oder widerrufen, sofern verfügbar.",
          fr: "Vous pouvez modifier ou retirer votre consentement à tout moment via les paramètres de votre navigateur ou le lien des préférences de cookies dans notre pied de page, si disponible.",
          it: "Puoi modificare o revocare il consenso in qualsiasi momento tramite le impostazioni del browser o il link alle preferenze sui cookie nel nostro footer, se disponibile.",
          ru: "Вы можете изменить или отозвать согласие в любое время через настройки браузера или ссылку настроек cookie в нижней части сайта, если она доступна.",
        },
      },
    ],
  },
  terms: {
    updatedAt: "2025-09-01",
    sections: [
      {
        heading: {
          en: "About this clinic",
          de: "Über diese Klinik",
          fr: "À propos de cette clinique",
          it: "Informazioni su questa clinica",
          ru: "О клинике",
        },
        body: {
          en: "This website is operated by the veterinary clinic named in our Contacts page. Details on this page are demo content for a website template and must be replaced with the real clinic's legal identity before publishing.",
          de: "Diese Website wird von der auf unserer Kontaktseite genannten Tierklinik betrieben. Die Angaben auf dieser Seite sind Demo-Inhalte für eine Website-Vorlage und müssen vor der Veröffentlichung durch die echten rechtlichen Angaben der Klinik ersetzt werden.",
          fr: "Ce site est exploité par la clinique vétérinaire mentionnée sur notre page Contact. Les informations de cette page sont un contenu de démonstration pour un modèle de site et doivent être remplacées par l'identité juridique réelle de la clinique avant publication.",
          it: "Questo sito è gestito dalla clinica veterinaria indicata nella nostra pagina Contatti. I dettagli in questa pagina sono contenuti demo per un modello di sito e devono essere sostituiti con l'identità legale reale della clinica prima della pubblicazione.",
          ru: "Этот сайт управляется ветеринарной клиникой, указанной на странице «Контакты». Сведения на этой странице — демонстрационный контент шаблона сайта и должны быть заменены реальными юридическими данными клиники перед публикацией.",
        },
      },
      {
        heading: {
          en: "Scope of services",
          de: "Umfang der Leistungen",
          fr: "Portée des services",
          it: "Ambito dei servizi",
          ru: "Объём услуг",
        },
        body: {
          en: "Content on this website is for general information only and does not replace an in-person veterinary examination or professional medical advice for your specific pet.",
          de: "Inhalte dieser Website dienen nur der allgemeinen Information und ersetzen keine persönliche tierärztliche Untersuchung oder professionelle medizinische Beratung für Ihr konkretes Haustier.",
          fr: "Le contenu de ce site est fourni à titre d'information générale uniquement et ne remplace pas un examen vétérinaire en personne ni un avis médical professionnel pour votre animal spécifique.",
          it: "I contenuti di questo sito sono solo a scopo informativo generale e non sostituiscono una visita veterinaria di persona o un consiglio medico professionale per il tuo animale specifico.",
          ru: "Содержимое этого сайта носит исключительно информационный характер и не заменяет очный ветеринарный осмотр или профессиональную консультацию по вашему конкретному питомцу.",
        },
      },
      {
        heading: {
          en: "Governing law",
          de: "Anwendbares Recht",
          fr: "Droit applicable",
          it: "Legge applicabile",
          ru: "Применимое право",
        },
        body: {
          en: "These terms are governed by the laws of the clinic's jurisdiction. This template does not attempt to determine that jurisdiction for you — confirm the correct governing law with local counsel.",
          de: "Diese Bedingungen unterliegen dem Recht des Standorts der Klinik. Diese Vorlage legt diese Rechtsordnung nicht für Sie fest — bestätigen Sie das anwendbare Recht mit einem lokalen Rechtsanwalt.",
          fr: "Ces conditions sont régies par le droit de la juridiction de la clinique. Ce modèle ne détermine pas cette juridiction pour vous — confirmez le droit applicable avec un juriste local.",
          it: "Questi termini sono regolati dalle leggi della giurisdizione della clinica. Questo modello non determina tale giurisdizione per te: confermala con un legale locale.",
          ru: "Эти условия регулируются законодательством юрисдикции клиники. Этот шаблон не определяет эту юрисдикцию за вас — уточните применимое право с местным юристом.",
        },
      },
    ],
  },
};
