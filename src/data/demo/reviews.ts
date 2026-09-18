import { ReviewEntry } from "@/types";
import { images } from "@/config/images.config";

// DEMO CONTENT — see brief section 32/54. Replace with real Google/Facebook
// reviews (or wire up a live reviews API) before going live with a client.
export const demoReviews: ReviewEntry[] = [
  {
    id: "r1",
    ownerName: "Amanda R.",
    petName: "Biscuit",
    petPhoto: images.reviewPet(1),
    rating: 5,
    source: "Google",
    text: {
      en: "Biscuit needed emergency surgery on a Sunday and the team had us in within twenty minutes. They called with updates the whole time he was recovering.",
      de: "Biscuit brauchte an einem Sonntag eine Notoperation, und das Team hat uns innerhalb von zwanzig Minuten aufgenommen. Sie haben uns während der ganzen Erholung angerufen und informiert.",
      fr: "Biscuit a eu besoin d'une chirurgie d'urgence un dimanche et l'équipe nous a reçus en vingt minutes. Ils nous ont appelés régulièrement pendant toute sa convalescence.",
      it: "Biscuit ha avuto bisogno di un intervento d'urgenza di domenica e il team ci ha accolti in venti minuti. Ci hanno chiamato con aggiornamenti per tutta la sua convalescenza.",
      ru: "Бисквиту потребовалась экстренная операция в воскресенье, и нас приняли за двадцать минут. Всё время его восстановления нам звонили с новостями.",
    },
  },
  {
    id: "r2",
    ownerName: "Julien M.",
    petName: "Mimi",
    petPhoto: images.reviewPet(2),
    rating: 5,
    source: "Facebook",
    text: {
      en: "Mimi is a nervous cat and the first vet who didn't fight her instincts. Slow, calm, and she actually let them finish the exam.",
      de: "Mimi ist eine ängstliche Katze, und das war die erste Tierärztin, die nicht gegen ihre Instinkte gearbeitet hat. Ruhig, langsam, und sie hat die Untersuchung tatsächlich zugelassen.",
      fr: "Mimi est une chatte nerveuse et c'est la première fois qu'une vétérinaire n'a pas lutté contre ses réflexes. Douce, calme, et elle a vraiment laissé terminer l'examen.",
      it: "Mimi è una gatta nervosa ed è stata la prima veterinaria a non contrastare i suoi istinti. Calma, lenta, e ha davvero lasciato finire la visita.",
      ru: "Мими — очень тревожная кошка, и это первый врач, кто не боролся с её инстинктами. Спокойно, медленно — и она реально дала закончить осмотр.",
    },
  },
  {
    id: "r3",
    ownerName: "Karin H.",
    petName: "Rocco",
    petPhoto: images.reviewPet(3),
    rating: 5,
    source: "Google",
    text: {
      en: "The dental X-rays found a fractured tooth we had no idea about. Rocco is a different dog since it was removed — he's eating like a puppy again.",
      de: "Die Zahnröntgenbilder zeigten einen gebrochenen Zahn, von dem wir nichts wussten. Rocco ist seit der Entfernung ein anderer Hund — er frisst wieder wie ein Welpe.",
      fr: "Les radios dentaires ont révélé une dent fracturée dont nous n'avions aucune idée. Rocco est un autre chien depuis qu'elle a été retirée — il mange à nouveau comme un chiot.",
      it: "Le radiografie dentali hanno trovato un dente fratturato di cui non sapevamo nulla. Rocco è un cane diverso da quando è stato rimosso: mangia di nuovo come un cucciolo.",
      ru: "На рентгене зубов нашли трещину зуба, о которой мы не знали. После удаления Рокко — другой пёс, снова ест с аппетитом щенка.",
    },
  },
  {
    id: "r4",
    ownerName: "Sophie L.",
    petName: "Pixel",
    petPhoto: images.reviewPet(4),
    rating: 5,
    source: "Google",
    text: {
      en: "Our rabbit needed a vet who actually knew rabbits, not just 'exotic-friendly' on paper. Dr. Becker clearly does this often, and it showed.",
      de: "Unser Kaninchen brauchte eine Tierärztin, die sich wirklich mit Kaninchen auskennt, nicht nur 'exotenfreundlich' auf dem Papier. Dr. Becker macht das offensichtlich oft, und man hat es gemerkt.",
      fr: "Notre lapin avait besoin d'une vétérinaire qui connaît vraiment les lapins, pas juste 'adaptée aux exotiques' sur le papier. La Dr Becker le fait visiblement souvent, et ça se voyait.",
      it: "Il nostro coniglio aveva bisogno di una veterinaria che conoscesse davvero i conigli, non solo 'esperta di esotici' sulla carta. La Dott.ssa Becker lo fa chiaramente spesso, e si vedeva.",
      ru: "Нашему кролику нужен был врач, который реально разбирается в кроликах, а не просто «принимает экзотику» на бумаге. Видно, что доктор Беккер делает это часто и уверенно.",
    },
  },
  {
    id: "r5",
    ownerName: "Marcus T.",
    petName: "Luna",
    petPhoto: images.reviewPet(5),
    rating: 4,
    source: "Facebook",
    text: {
      en: "Luna's allergy took three visits to fully sort out, but Dr. Wright explained every step and never just guessed. Worth the process.",
      de: "Lunas Allergie hat drei Besuche gebraucht, um sie vollständig zu klären, aber Dr. Wright hat jeden Schritt erklärt und nie einfach geraten. Der Prozess hat sich gelohnt.",
      fr: "L'allergie de Luna a nécessité trois visites pour être résolue, mais le Dr Wright a expliqué chaque étape sans jamais deviner. Ça valait le processus.",
      it: "L'allergia di Luna ha richiesto tre visite per essere risolta del tutto, ma il Dott. Wright ha spiegato ogni passaggio senza mai tirare a indovinare. Ne è valsa la pena.",
      ru: "Аллергию Луны разбирали три визита, но доктор Райт объяснял каждый шаг и никогда не гадал наугад. Оно того стоило.",
    },
  },
  {
    id: "r6",
    ownerName: "Elif K.",
    petName: "Charlie",
    petPhoto: images.reviewPet(6),
    rating: 5,
    source: "Clinic",
    text: {
      en: "Charlie's heart murmur was caught at a routine check-up most places would have skipped past. Grateful someone actually listened.",
      de: "Charlies Herzgeräusch wurde bei einer Routineuntersuchung entdeckt, die anderswo wahrscheinlich übergangen worden wäre. Dankbar, dass jemand wirklich hingehört hat.",
      fr: "Le souffle cardiaque de Charlie a été détecté lors d'un contrôle de routine que beaucoup auraient laissé passer. Reconnaissante que quelqu'un ait vraiment écouté.",
      it: "Il soffio cardiaco di Charlie è stato rilevato in un controllo di routine che altrove sarebbe probabilmente passato inosservato. Grata che qualcuno abbia davvero ascoltato.",
      ru: "Шум в сердце у Чарли заметили на обычном осмотре, который в другом месте могли бы пропустить. Очень благодарны, что кто-то по-настоящему прислушался.",
    },
  },
];
