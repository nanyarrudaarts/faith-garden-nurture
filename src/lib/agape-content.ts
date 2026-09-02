export type Lang = "it" | "pt";

export const NAV_ROUTES = [
  "/chi-siamo",
  "/cosa-crediamo",
  "/ministeri",
  "/incontri",
  "/contatti",
] as const;

export const content = {
  it: {
    langLabel: "PT",
    nav: ["Chi siamo", "Cosa crediamo", "Ministeri", "Incontri", "Contatti"],
    navCta: "Vieni a trovarci",
    heroKicker: "Chiesa Cristiana Evangelica",
    heroTitle: "L'amore di Cristo che trasforma la vita, giorno dopo giorno.",
    heroCtaPrimary: "Orari degli incontri",
    heroCtaSecondary: "Sono nuovo qui",
    heroPlace: "Via Pontebbana 1 · Fiume Veneto (PN)",
    introLead: "Agape",
    introBody:
      "è una comunità di persone che crede in Gesù Cristo come Salvatore e desidera vivere l'amore di Dio gli uni verso gli altri.",
    introText:
      "Ci ritroviamo attorno all'insegnamento degli apostoli, alla comunione fraterna, allo spezzare il pane e alla preghiera. Agape è la parola che descrive un amore disinteressato, fraterno, immenso: non è solo il nostro nome, è ciò che vogliamo diventare.",
    introVerse: "Atti 2:42",
    introCta: "Conosci la comunità",
    aboutEyebrow: "Chi siamo",
    aboutTitle: "Persone, Cristo, Vangelo",
    aboutBody:
      "Chiesa: un gruppo di persone. Cristiana: persone che credono in Gesù Cristo come Salvatore. Evangelica: una comunità che vive in rapporto con il Vangelo. Non siamo un edificio né un programma — siamo una famiglia che cammina insieme nella fede.",
    aboutCta: "Scopri di più",
    beliefsEyebrow: "Cosa crediamo",
    beliefsTitle: "Fondati sulla Parola",
    beliefs: [
      {
        t: "La Bibbia",
        d: "Autorità e fonte di verità per la fede e per la condotta.",
      },
      {
        t: "Gesù Cristo",
        d: "Vero Dio e vero uomo, crocifisso e risorto: la nostra salvezza.",
      },
      {
        t: "Il battesimo",
        d: "Scelta personale di adulti, per immersione, testimonianza pubblica della fede.",
      },
      {
        t: "La cena del Signore",
        d: "Pane e vino, in memoria del sacrificio di Cristo.",
      },
      {
        t: "Libertà",
        d: "Convinzioni ferme sull'essenziale, libertà nel non essenziale, amore in ogni cosa.",
      },
      {
        t: "Missione",
        d: "Andare, predicare, fare discepoli e battezzare.",
      },
    ],
    lifeEyebrow: "Ministeri",
    lifeTitle: "Ciò che facciamo",
    life: [
      {
        t: "Studio biblico",
        d: "Studi, testimonianze e materiali per crescere nella conoscenza della Parola.",
      },
      {
        t: "Preghiera",
        d: "Ci fermiamo insieme davanti a Dio, per la nostra città e per il mondo.",
      },
      {
        t: "Battesimo",
        d: "Un passo pubblico di chi ha deciso di seguire Gesù.",
      },
    ],
    scheduleEyebrow: "Incontri",
    scheduleTitle: "Quando ci troviamo",
    schedule: [
      { d: "Domenica", h: "10:30", n: "Culto e Parola" },
      { d: "Mercoledì", h: "20:30", n: "Studio biblico" },
      { d: "Venerdì", h: "20:30", n: "Preghiera" },
      { d: "Sabato", h: "16:00", n: "Giovani e ragazzi" },
    ],
    scheduleNote:
      "Gli incontri sono aperti a tutti. Se è la prima volta, scrivici: ti aspettiamo all'ingresso.",
    ctaTitle: "Ti aspettiamo",
    ctaBody:
      "Che tu conosca Dio da tempo o stia solo iniziando a cercarlo, qui c'è un posto per te.",
    ctaButton: "Scrivici",
    contactEyebrow: "Contatti",
    address: "Via Pontebbana 1, 33080 Fiume Veneto (PN), Italia",
    footerVerse: "\u201cAmatevi gli uni gli altri, come io vi ho amati.\u201d — Giovanni 15:12",
    footerRights: "Chiesa Cristiana Evangelica Agape. Tutti i diritti riservati.",
    pages: {
      chiSiamo: {
        eyebrow: "Chi siamo",
        title: "Una famiglia che cammina insieme nella fede",
        intro:
          "Chiesa Cristiana Evangelica Agape è una comunità di persone comuni unite da una fede straordinaria: Gesù Cristo è il Signore. Ci ritroviamo a Fiume Veneto per adorare Dio, studiare la Sua Parola e condividere la vita gli uni con gli altri.",
        blocks: [
          {
            t: "Persone",
            d: "Non un edificio, non un programma: un gruppo di persone che ha scelto di seguire Gesù e di amarsi come una famiglia.",
          },
          {
            t: "Cristo",
            d: "Al centro di tutto c'è Lui: la Sua morte e risurrezione sono la nostra speranza e il motivo del nostro stare insieme.",
          },
          {
            t: "Vangelo",
            d: "Viviamo in rapporto con la Buona Notizia: ci lasciamo formare da essa e la annunciamo a chi ci sta intorno.",
          },
        ],
        cta: "Vieni a conoscerci di persona",
      },
      crediamo: {
        eyebrow: "Cosa crediamo",
        title: "Fondati sulla Parola di Dio",
        intro:
          "Le nostre convinzioni nascono dalla Bibbia, letta come Parola di Dio. Sull'essenziale siamo fermi, sul resto lasciamo libertà — e in ogni cosa cerchiamo l'amore.",
        cta: "Hai domande sulla fede?",
      },
      ministeri: {
        eyebrow: "Ministeri",
        title: "Ogni dono al servizio degli altri",
        intro:
          "Ogni persona nella comunità ha qualcosa da offrire. I ministeri sono i modi concreti in cui ci prendiamo cura gli uni degli altri, cresciamo nella fede e serviamo la nostra città.",
        items: [
          {
            t: "Culto domenicale",
            d: "L'appuntamento principale della settimana: lode, predicazione della Parola e comunione fraterna, aperto a tutti.",
          },
          {
            t: "Studio biblico",
            d: "Incontri per approfondire le Scritture insieme, con spazio per domande, testimonianze e confronto.",
          },
          {
            t: "Preghiera",
            d: "Ci fermiamo davanti a Dio per ringraziare, intercedere per la nostra città e sostenerci a vicenda.",
          },
          {
            t: "Giovani e ragazzi",
            d: "Uno spazio per le nuove generazioni: amicizia, gioco e fede raccontata in modo semplice e vero.",
          },
          {
            t: "Adorazione",
            d: "Musicisti e cantori che guidano la comunità nel canto e nella lode a Dio durante gli incontri.",
          },
          {
            t: "Accoglienza e diaconia",
            d: "Chi accoglie all'ingresso, chi prepara, chi aiuta concretamente chi è nel bisogno dentro e fuori la comunità.",
          },
        ],
        cta: "Vuoi metterti in gioco?",
      },
      incontri: {
        eyebrow: "Incontri",
        title: "Quando ci troviamo",
        intro:
          "Le porte sono aperte a tutti: non serve un invito né una preparazione particolare. Vieni come sei — ti aspettiamo.",
        cta: "È la tua prima volta? Scrivici",
      },
      contatti: {
        eyebrow: "Contatti",
        title: "Parliamone",
        intro:
          "Vuoi saperne di più, fare una domanda o semplicemente presentarti? Scrivici: rispondiamo volentieri a tutti.",
        emailLabel: "Email",
        addressLabel: "Dove siamo",
        cta: "Scrivici una email",
      },
    },
  },
  pt: {
    langLabel: "IT",
    nav: ["Quem somos", "No que cremos", "Ministérios", "Encontros", "Contato"],
    navCta: "Venha nos visitar",
    heroKicker: "Igreja Cristã Evangélica",
    heroTitle: "O amor de Cristo que transforma a vida, dia após dia.",
    heroCtaPrimary: "Horários dos encontros",
    heroCtaSecondary: "Sou novo aqui",
    heroPlace: "Via Pontebbana 1 · Fiume Veneto (PN)",
    introLead: "Agape",
    introBody:
      "é uma comunidade de pessoas que crê em Jesus Cristo como Salvador e deseja viver o amor de Deus umas para com as outras.",
    introText:
      "Nos reunimos em torno do ensino dos apóstolos, da comunhão, do partir do pão e da oração. Agape é a palavra que descreve um amor desinteressado, fraterno e imenso: não é apenas o nosso nome, é aquilo que queremos nos tornar.",
    introVerse: "Atos 2:42",
    introCta: "Conheça a comunidade",
    aboutEyebrow: "Quem somos",
    aboutTitle: "Pessoas, Cristo, Evangelho",
    aboutBody:
      "Igreja: um grupo de pessoas. Cristã: pessoas que creem em Jesus Cristo como Salvador. Evangélica: uma comunidade que vive em relação com o Evangelho. Não somos um edifício nem um programa — somos uma família que caminha junta na fé.",
    aboutCta: "Saiba mais",
    beliefsEyebrow: "No que cremos",
    beliefsTitle: "Fundados na Palavra",
    beliefs: [
      {
        t: "A Bíblia",
        d: "Autoridade e fonte de verdade para a fé e para a conduta.",
      },
      {
        t: "Jesus Cristo",
        d: "Verdadeiro Deus e verdadeiro homem, crucificado e ressuscitado: nossa salvação.",
      },
      {
        t: "O batismo",
        d: "Escolha pessoal de adultos, por imersão, testemunho público da fé.",
      },
      {
        t: "A ceia do Senhor",
        d: "Pão e vinho, em memória do sacrifício de Cristo.",
      },
      {
        t: "Liberdade",
        d: "Convicção no essencial, liberdade no não essencial, amor em tudo.",
      },
      {
        t: "Missão",
        d: "Ir, pregar, fazer discípulos e batizar.",
      },
    ],
    lifeEyebrow: "Ministérios",
    lifeTitle: "O que fazemos",
    life: [
      {
        t: "Estudo bíblico",
        d: "Estudos, testemunhos e materiais para crescer no conhecimento da Palavra.",
      },
      {
        t: "Oração",
        d: "Paramos juntos diante de Deus, pela nossa cidade e pelo mundo.",
      },
      {
        t: "Batismo",
        d: "Um passo público de quem decidiu seguir Jesus.",
      },
    ],
    scheduleEyebrow: "Encontros",
    scheduleTitle: "Quando nos reunimos",
    schedule: [
      { d: "Domingo", h: "10:30", n: "Culto e Palavra" },
      { d: "Quarta", h: "20:30", n: "Estudo bíblico" },
      { d: "Sexta", h: "20:30", n: "Oração" },
      { d: "Sábado", h: "16:00", n: "Jovens e adolescentes" },
    ],
    scheduleNote:
      "Os encontros são abertos a todos. Se for a sua primeira vez, escreva para nós: esperamos você na entrada.",
    ctaTitle: "Esperamos você",
    ctaBody:
      "Se você conhece Deus há muito tempo ou está apenas começando a buscá-Lo, aqui há um lugar para você.",
    ctaButton: "Fale conosco",
    contactEyebrow: "Contato",
    address: "Via Pontebbana 1, 33080 Fiume Veneto (PN), Itália",
    footerVerse: "\u201cAmai-vos uns aos outros, assim como eu vos amei.\u201d — João 15:12",
    footerRights: "Chiesa Cristiana Evangelica Agape. Todos os direitos reservados.",
    pages: {
      chiSiamo: {
        eyebrow: "Quem somos",
        title: "Uma família que caminha junta na fé",
        intro:
          "A Chiesa Cristiana Evangelica Agape é uma comunidade de pessoas comuns unidas por uma fé extraordinária: Jesus Cristo é o Senhor. Nos reunimos em Fiume Veneto para adorar a Deus, estudar a Sua Palavra e compartilhar a vida uns com os outros.",
        blocks: [
          {
            t: "Pessoas",
            d: "Não um edifício, não um programa: um grupo de pessoas que escolheu seguir Jesus e se amar como família.",
          },
          {
            t: "Cristo",
            d: "No centro de tudo está Ele: a Sua morte e ressurreição são a nossa esperança e a razão de estarmos juntos.",
          },
          {
            t: "Evangelho",
            d: "Vivemos em relação com a Boa Notícia: deixamos que ela nos forme e a anunciamos a quem está ao nosso redor.",
          },
        ],
        cta: "Venha nos conhecer pessoalmente",
      },
      crediamo: {
        eyebrow: "No que cremos",
        title: "Fundados na Palavra de Deus",
        intro:
          "As nossas convicções nascem da Bíblia, lida como Palavra de Deus. No essencial somos firmes, no restante deixamos liberdade — e em tudo buscamos o amor.",
        cta: "Tem perguntas sobre a fé?",
      },
      ministeri: {
        eyebrow: "Ministérios",
        title: "Cada dom a serviço dos outros",
        intro:
          "Cada pessoa na comunidade tem algo a oferecer. Os ministérios são as formas concretas com que cuidamos uns dos outros, crescemos na fé e servimos a nossa cidade.",
        items: [
          {
            t: "Culto dominical",
            d: "O encontro principal da semana: louvor, pregação da Palavra e comunhão, aberto a todos.",
          },
          {
            t: "Estudo bíblico",
            d: "Encontros para aprofundar as Escrituras juntos, com espaço para perguntas, testemunhos e diálogo.",
          },
          {
            t: "Oração",
            d: "Paramos diante de Deus para agradecer, interceder pela nossa cidade e apoiar uns aos outros.",
          },
          {
            t: "Jovens e adolescentes",
            d: "Um espaço para as novas gerações: amizade, diversão e fé contada de forma simples e verdadeira.",
          },
          {
            t: "Adoração",
            d: "Músicos e cantores que conduzem a comunidade no canto e no louvor a Deus durante os encontros.",
          },
          {
            t: "Acolhimento e diaconia",
            d: "Quem recebe na entrada, quem prepara, quem ajuda concretamente quem precisa, dentro e fora da comunidade.",
          },
        ],
        cta: "Quer se envolver?",
      },
      incontri: {
        eyebrow: "Encontros",
        title: "Quando nos reunimos",
        intro:
          "As portas estão abertas a todos: não é preciso convite nem preparação especial. Venha como você é — esperamos por você.",
        cta: "É a sua primeira vez? Escreva para nós",
      },
      contatti: {
        eyebrow: "Contato",
        title: "Vamos conversar",
        intro:
          "Quer saber mais, fazer uma pergunta ou simplesmente se apresentar? Escreva para nós: respondemos com prazer a todos.",
        emailLabel: "Email",
        addressLabel: "Onde estamos",
        cta: "Envie um email",
      },
    },
  },
} as const;
