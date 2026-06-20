/* ============================================
   CRYSTALIA ICE — Système de traduction (i18n)
   ============================================
   Comment ajouter une langue ou un texte :
   1. Repère la clé (ex: "hero.title") dans l'objet TRANSLATIONS ci-dessous.
   2. Ajoute/édite la valeur pour fr / en / es.
   3. Dans le HTML, l'élément correspondant doit avoir :
        data-i18n="ma.cle"        → si le texte est simple (pas de <em>, <br> etc.)
        data-i18n-html="ma.cle"   → si le texte contient du HTML (gras, italique, retour à la ligne...)
   Le script s'occupe du reste automatiquement sur chaque page qui l'inclut.
   Ce même fichier i18n.js doit être inclus sur TOUTES les pages du site.
*/

const TRANSLATIONS = {
  fr: {
    nav: {
      concept: "Concept",
      formules: "Formules",
      realisations: "Réalisations",
      contact: "Contact"
    },

    /* ===== PAGE D'ACCUEIL ===== */
    hero: {
      tag: "Patinoires éphémères",
      title: "La <em>magie de la glace</em>,<br>où vous le souhaitez"
    },
    piliers: {
      naturelle: { titre: "Glace naturelle", texte: "Une vraie patinoire réfrigérée pour une expérience authentique et premium." },
      synthetique: { titre: "Glace synthétique", texte: "Sans eau ni énergie. S'installe partout, même en plein soleil méditerranéen." },
      cle: { titre: "Clé en main", texte: "Vous choisissez l'espace. Nous créons l'événement, de A à Z." }
    },
    cibles: {
      tag: "Pour qui ?",
      titre: "Une offre pensée pour<br><em>les créateurs d'événements</em>",
      mairies: { titre: "Mairies", texte: "Créez le rendez-vous hivernal incontournable de votre ville." },
      hotels: { titre: "Hôtels & Resorts", texte: "Offrez une expérience exclusive qui fidélise et fait rayonner votre établissement." },
      centres: { titre: "Centres commerciaux", texte: "Générez du flux et créez l'animation de la saison." }
    },
    trio: {
      titre: "Nous créons l'événement.<br><em>Vous récoltez la magie.</em>",
      texte: "Chaque installation Crystalia est une expérience unique, pensée pour émerveiller votre public et marquer les esprits durablement."
    },
    formules: {
      tag: "Nos formules",
      titre: "<em>Un pack pour chaque ambition</em>",
      sousTitre: "Sur devis · Chaque projet est unique",
      essentiel: { tag: "Essentiel", titre: "Crystalia Essentiel", texte: "Patinoire + patins + installation & démontage complet." },
      prestige: { tag: "Prestige", titre: "Crystalia Prestige", texte: "Essentiel + décoration féerique + éclairage + ambiance musicale." },
      show: { tag: "Show", titre: "Crystalia Show", texte: "Prestige + spectacle de patinage artistique pour l'inauguration." },
      premium: { tag: "Premium", titre: "Crystalia Premium", texte: "L'expérience complète — show, animations et infrastructure sur mesure." },
      cta: "Voir toutes nos formules"
    },
    cta: {
      titre: "Créons votre <em>événement</em>",
      texte: "Nous installons des patinoires éphémères sur mesure pour vos événements hivernaux.<br>Hôtels, mairies, centres commerciaux — de A à Z, sans contrainte.",
      zones: "Espagne · France · Europe · International",
      bouton: "Demander un devis gratuit"
    },

    /* ===== PAGE CONCEPT ===== */
    concept: {
      hero: { tag: "✦ Notre concept ✦", titre: "La glace comme<br><em>art de l'événement</em>", sousTitre: "Une vision · Une passion · Une expertise" },
      vision: {
        tag: "Notre vision",
        titre: "Transformer chaque espace<br>en <em>expérience magique</em>",
        p1: "Crystalia est née d'une conviction simple : la glace est bien plus qu'un sport. C'est un univers de magie, d'émotion et de partage qui transcende toutes les cultures et toutes les générations.",
        p2: "Notre mission est de rendre cet univers accessible à tous — hôtels, mairies, centres commerciaux — en créant des événements de patinoire éphémères qui marquent les esprits et créent des souvenirs inoubliables.",
        p3: "Chaque installation Crystalia est pensée comme une œuvre à part entière, adaptée à votre espace, votre image et votre clientèle."
      },
      philo: "« Nous ne louons pas simplement une patinoire.<br>Nous créons <em>un moment</em> que votre public n'oubliera jamais. »",
      pourquoi: {
        tag: "Pourquoi une patinoire ?",
        titre: "Un projet qui profite<br><em>à tous les acteurs du territoire</em>",
        sousTitre: "Une animation, trois bénéfices",
        ville: { titre: "Pour la ville", texte: "Un centre-ville plus vivant, plus visité, plus visible. La patinoire devient la destination de Noël de toute la région et renforce l'image dynamique et familiale de la commune." },
        habitants: { titre: "Pour les habitants", texte: "Un rendez-vous attendu chaque hiver, où petits et grands se retrouvent. Premiers pas sur la glace, sorties en famille, moments partagés — l'événement qui rythme la saison." },
        commercants: { titre: "Pour les commerçants", texte: "Plus de passage devant les vitrines, des visiteurs qui prolongent leur présence en centre-ville et consomment davantage dans les cafés, restaurants et boutiques alentour." }
      },
      partenaire: {
        tag: "Notre expertise technique",
        titre: "Un partenaire<br><em>leader européen</em>",
        p1: "Crystalia s'appuie sur l'expertise d'un partenaire technique de référence, acteur incontournable du secteur depuis plus de 20 ans et leader sur le marché européen de la patinoire éphémère.",
        p2: "Cette collaboration nous permet de garantir des installations irréprochables, quelle que soit la complexité de votre projet.",
        stat1: "installations par saison",
        stat2: "réalisations depuis 1999",
        stat3: "ans d'expertise"
      },
      equip: {
        tag: "Matériel inclus",
        titre: "Tout l'équipement,<br><em>mis à disposition</em>",
        sousTitre: "Une installation pensée dans les moindres détails",
        patins: { titre: "Patins & glisse", texte: "Location de patins pour tous les âges, ainsi que les accessoires de glisse adaptés aux débutants." },
        chalets: { titre: "Chalets & accueil", texte: "Structures d'accueil et de distribution pensées pour fluidifier l'expérience visiteur du début à la fin." },
        lumiere: { titre: "Lumière & ambiance", texte: "Éclairage scénique, sonorisation et décoration pour transformer l'installation en véritable expérience." }
      },
      valeurs: {
        tag: "Ce qui nous définit",
        titre: "Nos <em>valeurs</em>",
        excellence: { titre: "Excellence", texte: "Chaque détail compte. De la qualité de la glace à la décoration, nous n'acceptons que le meilleur." },
        emotion: { titre: "Émotion", texte: "Nous créons des moments qui touchent les cœurs et restent gravés dans la mémoire de vos visiteurs." },
        surMesure: { titre: "Sur mesure", texte: "Chaque projet est unique. Nous adaptons chaque installation à votre espace, votre image et vos ambitions." }
      },
      cta: { titre: "Prêt à créer votre<br><em>événement ?</em>", sousTitre: "Découvrez nos formules · Réponse sous 48h", bouton: "Voir nos formules" }
    },

    /* ===== PAGE FORMULES ===== */
    formulesPage: {
      hero: { tag: "✦ Nos formules ✦", titre: "Votre projet mérite<br><em>une offre sur mesure</em>", sousTitre: "Chaque projet est unique · Tarifs sur devis" },
      intro: "Que vous soyez une mairie, un hôtel ou un centre commercial, Crystalia propose une formule adaptée à votre espace, votre budget et votre vision. <em>Chaque installation est pensée sur mesure.</em> Nos tarifs sont établis selon la taille de la patinoire, la durée de l'événement et les prestations choisies.",
      essentiel: {
        tag: "Essentiel", titre: "Crystalia Essentiel", texte: "L'essentiel pour créer votre événement de patinoire, clé en main et sans contrainte.",
        inclus: "Inclus dans ce pack",
        item1: "Patinoire en glace naturelle ou synthétique", item2: "Location de patins pour les visiteurs", item3: "Transport, livraison et installation complète",
        item4: "Rambardes de sécurité et signalétique", item5: "Démontage et transport retour inclus", item6: "Suivi technique pendant toute la durée"
      },
      prestige: {
        tag: "Prestige", titre: "Crystalia Prestige", texte: "Transformez votre patinoire en véritable univers féerique avec une scénographie complète.",
        inclus: "Tout le pack Essentiel, plus",
        item1: "Décoration féerique thématique sur mesure", item2: "Éclairage scénique et lumières d'ambiance", item3: "Sonorisation et ambiance musicale",
        item4: "Arche d'entrée et signalétique premium", item5: "Vestiaire et espace d'accueil aménagé", item6: "Conseil en communication événementielle"
      },
      show: {
        tag: "Show", titre: "Crystalia Show", texte: "Ajoutez un spectacle de patinage artistique pour une inauguration mémorable.", badge: "⭐ Le plus choisi",
        inclus: "Tout le pack Prestige, plus",
        item1: "Spectacle de patinage artistique professionnel", item2: "Chorégraphie sur mesure selon votre thème", item3: "Costumes et mise en scène inclus",
        item4: "Animations récurrentes sur la durée de l'événement", item5: "Présence d'un animateur pour le public", item6: "Communication et relations presse"
      },
      premium: {
        tag: "Premium", titre: "Crystalia Premium", texte: "L'expérience ultime — une infrastructure complète avec animations tout au long de l'événement.",
        inclus: "Tout le pack Show, plus",
        item1: "Cours d'initiation au patinage par un professionnel", item2: "Animations quotidiennes sur toute la durée", item3: "Espace VIP et hospitalité sur mesure",
        item4: "Photo & vidéo professionnelle de l'événement", item5: "Gestion complète de l'exploitation sur place", item6: "Accompagnement communication et réseaux sociaux"
      },
      cta: { titre: "Un rêve<br><em>sur mesure</em>", sousTitre: "Réponse sous 48h · Devis gratuit et sans engagement", bouton: "Demander un devis" }
    },

    /* ===== PAGE RÉALISATIONS ===== */
    realisationsPage: {
      hero: { tag: "✦ Réalisations ✦", titre: "Chaque événement,<br><em>une histoire unique</em>", sousTitre: "Patinoires · Spectacles · Animations · Sur mesure" },
      gallery: { tag: "Nos installations", titre: "Patinoires <em>éphémères</em>" },
      filters: { ville: "Place de ville", hotel: "Hôtel & Resort", centre: "Centre commercial", spectacle: "Spectacle" },
      items: {
        i0: "Place de ville · Ambiance Noël", i1: "Vue aérienne · Sapin central", i2: "Éclairage premium · Noël",
        i3: "Centre commercial · Rooftop Paris", i4: "Place de ville · Vue aérienne", i5: "Grande installation · Nuit",
        i6: "Éclairage prestige · Violet", i7: "Resort · Montagne", i8: "Événement · Sculpture de glace",
        i9: "Rooftop · Printemps Haussmann Paris", i10: "Marché de Noël · Vue aérienne", i11: "Grand Palais · Paris", i12: "Grand Palais · Spectacle nocturne"
      },
      spectacle: { tag: "Crystalia Show", titre: "Spectacles de <em>patinage artistique</em>", s0: "Spectacle en couple", s1: "Solo · Univers féerique", s2: "Spectacle enchanté" },
      cta: { titre: "Votre événement sera<br><em>notre prochaine réalisation</em>", sousTitre: "Parlons de votre projet · Devis gratuit", bouton: "Nous contacter" }
    },

    /* ===== PAGE CONTACT ===== */
    contactPage: {
      hero: { tag: "✦ Contact ✦", titre: "Parlons de votre<br><em>projet</em>", sousTitre: "Réponse sous 48h · Devis gratuit et sans engagement" },
      info: {
        tag: "Nous contacter",
        titre: "Un projet ?<br><em>Écrivez-nous.</em>",
        texte: "Que vous soyez une mairie, un hôtel ou un centre commercial, nous étudions chaque projet avec attention et vous proposons une offre entièrement sur mesure.",
        email: "Email", instagram: "Instagram", zone: "Zone d'intervention", zoneValeur: "Espagne · France · Europe · International",
        reponseTitre: "Réponse sous 48h", reponseTexte: "Devis gratuit et sans engagement"
      },
      form: {
        tag: "Votre demande", titre: "Demandez votre<br><em>devis gratuit</em>", sousTitre: "Tous les champs sont obligatoires",
        nom: "Prénom & Nom", org: "Organisation", email: "Email", tel: "Téléphone",
        type: "Vous êtes", select: "Sélectionner...",
        typeMairie: "Mairie / Collectivité", typeHotel: "Hôtel / Resort", typeCentre: "Centre commercial", typePrive: "Événement privé", typeAutre: "Autre",
        formule: "Formule souhaitée",
        fEssentiel: "Crystalia Essentiel", fPrestige: "Crystalia Prestige", fShow: "Crystalia Show", fPremium: "Crystalia Premium", fInconnu: "Je ne sais pas encore",
        message: "Votre projet", envoyer: "Envoyer ma demande", note: "Vos données sont traitées de manière confidentielle · Réponse sous 48h",
        successTitre: "Message envoyé ✦", successTexte: "Merci pour votre demande. Nous reviendrons vers vous sous 48h."
      },
      quote: "« Chaque grand événement commence par <em>une simple conversation.</em> »"
    }
  },

  en: {
    nav: { concept: "Concept", formules: "Packages", realisations: "Our Work", contact: "Contact" },

    hero: { tag: "Pop-up ice rinks", title: "The <em>magic of ice</em>,<br>wherever you want it" },
    piliers: {
      naturelle: { titre: "Natural ice", texte: "A genuine refrigerated rink for an authentic, premium experience." },
      synthetique: { titre: "Synthetic ice", texte: "No water, no energy. Installs anywhere, even under the Mediterranean sun." },
      cle: { titre: "Turnkey service", texte: "You choose the space. We create the event, from A to Z." }
    },
    cibles: {
      tag: "Who is it for?",
      titre: "An offer designed for<br><em>event creators</em>",
      mairies: { titre: "City councils", texte: "Create your city's must-attend winter event." },
      hotels: { titre: "Hotels & Resorts", texte: "Offer an exclusive experience that builds loyalty and elevates your property." },
      centres: { titre: "Shopping centres", texte: "Drive footfall and create the highlight of the season." }
    },
    trio: { titre: "We create the event.<br><em>You reap the magic.</em>", texte: "Every Crystalia installation is a unique experience, designed to delight your audience and leave a lasting impression." },
    formules: {
      tag: "Our packages",
      titre: "<em>A package for every ambition</em>",
      sousTitre: "Quote on request · Every project is unique",
      essentiel: { tag: "Essential", titre: "Crystalia Essential", texte: "Rink + skates + full setup & dismantling." },
      prestige: { tag: "Prestige", titre: "Crystalia Prestige", texte: "Essential + festive decoration + lighting + music ambiance." },
      show: { tag: "Show", titre: "Crystalia Show", texte: "Prestige + figure skating performance for the launch." },
      premium: { tag: "Premium", titre: "Crystalia Premium", texte: "The complete experience — show, entertainment and bespoke infrastructure." },
      cta: "See all our packages"
    },
    cta: {
      titre: "Let's create your <em>event</em>",
      texte: "We install bespoke pop-up ice rinks for your winter events.<br>Hotels, city councils, shopping centres — start to finish, hassle-free.",
      zones: "Spain · France · Europe · International",
      bouton: "Request a free quote"
    },

    concept: {
      hero: { tag: "✦ Our concept ✦", titre: "Ice as<br><em>the art of events</em>", sousTitre: "A vision · A passion · An expertise" },
      vision: {
        tag: "Our vision",
        titre: "Turning every space<br>into a <em>magical experience</em>",
        p1: "Crystalia was born from a simple conviction: ice is far more than a sport. It's a world of magic, emotion and connection that transcends every culture and every generation.",
        p2: "Our mission is to make this world accessible to everyone — hotels, city councils, shopping centres — by creating pop-up ice rink events that leave a lasting impression and unforgettable memories.",
        p3: "Every Crystalia installation is designed as a work in its own right, tailored to your space, your image and your audience."
      },
      philo: "“We don't just rent out an ice rink.<br>We create <em>a moment</em> your audience will never forget.”",
      pourquoi: {
        tag: "Why an ice rink?",
        titre: "A project that benefits<br><em>every stakeholder in the area</em>",
        sousTitre: "One event, three benefits",
        ville: { titre: "For the city", texte: "A livelier, busier, more visible city centre. The rink becomes the region's must-visit Christmas destination and boosts the town's dynamic, family-friendly image." },
        habitants: { titre: "For residents", texte: "A much-anticipated winter tradition where young and old come together. First steps on the ice, family outings, shared moments — the event that defines the season." },
        commercants: { titre: "For local businesses", texte: "More foot traffic past shop windows, visitors who stay longer in the city centre and spend more in nearby cafés, restaurants and shops." }
      },
      partenaire: {
        tag: "Our technical expertise",
        titre: "A<br><em>leading European partner</em>",
        p1: "Crystalia draws on the expertise of a leading technical partner, a key player in the industry for over 20 years and a leader in the European pop-up ice rink market.",
        p2: "This partnership allows us to guarantee flawless installations, no matter how complex your project.",
        stat1: "installations per season",
        stat2: "projects delivered since 1999",
        stat3: "years of expertise"
      },
      equip: {
        tag: "Equipment included",
        titre: "All the equipment,<br><em>fully provided</em>",
        sousTitre: "An installation designed down to the smallest detail",
        patins: { titre: "Skates & gear", texte: "Skate rental for all ages, plus skating aids designed for beginners." },
        chalets: { titre: "Chalets & reception", texte: "Welcome and distribution structures designed to keep the visitor experience smooth from start to finish." },
        lumiere: { titre: "Lighting & ambiance", texte: "Stage lighting, sound and decoration to turn the installation into a true experience." }
      },
      valeurs: {
        tag: "What defines us",
        titre: "Our <em>values</em>",
        excellence: { titre: "Excellence", texte: "Every detail matters. From the quality of the ice to the decoration, we accept nothing less than the best." },
        emotion: { titre: "Emotion", texte: "We create moments that touch hearts and stay etched in your visitors' memories." },
        surMesure: { titre: "Bespoke", texte: "Every project is unique. We tailor each installation to your space, your image and your ambitions." }
      },
      cta: { titre: "Ready to create your<br><em>event?</em>", sousTitre: "Discover our packages · Response within 48h", bouton: "See our packages" }
    },

    formulesPage: {
      hero: { tag: "✦ Our packages ✦", titre: "Your project deserves<br><em>a bespoke offer</em>", sousTitre: "Every project is unique · Quote on request" },
      intro: "Whether you're a city council, a hotel or a shopping centre, Crystalia offers a package tailored to your space, budget and vision. <em>Every installation is custom-designed.</em> Our pricing is based on the size of the rink, the event duration and the services chosen.",
      essentiel: {
        tag: "Essential", titre: "Crystalia Essential", texte: "Everything you need for a turnkey ice rink event, hassle-free.",
        inclus: "Included in this package",
        item1: "Natural or synthetic ice rink", item2: "Skate rental for visitors", item3: "Transport, delivery and full installation",
        item4: "Safety barriers and signage", item5: "Dismantling and return transport included", item6: "Technical support throughout the event"
      },
      prestige: {
        tag: "Prestige", titre: "Crystalia Prestige", texte: "Turn your rink into a true winter wonderland with a complete staging.",
        inclus: "Everything in Essential, plus",
        item1: "Bespoke themed festive decoration", item2: "Stage lighting and ambient lighting", item3: "Sound system and musical ambiance",
        item4: "Entrance arch and premium signage", item5: "Cloakroom and furnished welcome area", item6: "Event communication consulting"
      },
      show: {
        tag: "Show", titre: "Crystalia Show", texte: "Add a figure skating performance for a memorable launch.", badge: "⭐ Most popular",
        inclus: "Everything in Prestige, plus",
        item1: "Professional figure skating performance", item2: "Bespoke choreography matching your theme", item3: "Costumes and staging included",
        item4: "Recurring entertainment throughout the event", item5: "On-site host for the audience", item6: "Communication and press relations"
      },
      premium: {
        tag: "Premium", titre: "Crystalia Premium", texte: "The ultimate experience — complete infrastructure with entertainment throughout the event.",
        inclus: "Everything in Show, plus",
        item1: "Beginner skating lessons with a professional", item2: "Daily entertainment for the full duration", item3: "Bespoke VIP area and hospitality",
        item4: "Professional event photo & video", item5: "Full on-site operations management", item6: "Communication and social media support"
      },
      cta: { titre: "A dream,<br><em>tailor-made</em>", sousTitre: "Response within 48h · Free, no-obligation quote", bouton: "Request a quote" }
    },

    realisationsPage: {
      hero: { tag: "✦ Our work ✦", titre: "Every event,<br><em>a unique story</em>", sousTitre: "Ice rinks · Performances · Entertainment · Bespoke" },
      gallery: { tag: "Our installations", titre: "Pop-up <em>ice rinks</em>" },
      filters: { ville: "City square", hotel: "Hotel & Resort", centre: "Shopping centre", spectacle: "Performance" },
      items: {
        i0: "City square · Christmas atmosphere", i1: "Aerial view · Central tree", i2: "Premium lighting · Christmas",
        i3: "Shopping centre · Rooftop Paris", i4: "City square · Aerial view", i5: "Large installation · Night",
        i6: "Prestige lighting · Purple", i7: "Resort · Mountains", i8: "Event · Ice sculpture",
        i9: "Rooftop · Printemps Haussmann Paris", i10: "Christmas market · Aerial view", i11: "Grand Palais · Paris", i12: "Grand Palais · Night performance"
      },
      spectacle: { tag: "Crystalia Show", titre: "Figure <em>skating performances</em>", s0: "Pair performance", s1: "Solo · Enchanted world", s2: "Enchanted performance" },
      cta: { titre: "Your event will be<br><em>our next creation</em>", sousTitre: "Let's talk about your project · Free quote", bouton: "Contact us" }
    },

    contactPage: {
      hero: { tag: "✦ Contact ✦", titre: "Let's talk about your<br><em>project</em>", sousTitre: "Response within 48h · Free, no-obligation quote" },
      info: {
        tag: "Get in touch",
        titre: "Got a project?<br><em>Write to us.</em>",
        texte: "Whether you're a city council, a hotel or a shopping centre, we carefully review every project and offer a fully bespoke proposal.",
        email: "Email", instagram: "Instagram", zone: "Service area", zoneValeur: "Spain · France · Europe · International",
        reponseTitre: "Response within 48h", reponseTexte: "Free, no-obligation quote"
      },
      form: {
        tag: "Your request", titre: "Request your<br><em>free quote</em>", sousTitre: "All fields are required",
        nom: "Full name", org: "Organisation", email: "Email", tel: "Phone",
        type: "You are", select: "Select...",
        typeMairie: "City council / Local authority", typeHotel: "Hotel / Resort", typeCentre: "Shopping centre", typePrive: "Private event", typeAutre: "Other",
        formule: "Desired package",
        fEssentiel: "Crystalia Essential", fPrestige: "Crystalia Prestige", fShow: "Crystalia Show", fPremium: "Crystalia Premium", fInconnu: "Not sure yet",
        message: "Your project", envoyer: "Send my request", note: "Your data is treated confidentially · Response within 48h",
        successTitre: "Message sent ✦", successTexte: "Thank you for your request. We'll get back to you within 48h."
      },
      quote: "“Every great event starts with <em>a simple conversation.</em>”"
    }
  },

  es: {
    nav: { concept: "Concepto", formules: "Paquetes", realisations: "Proyectos", contact: "Contacto" },

    hero: { tag: "Pistas de hielo efímeras", title: "La <em>magia del hielo</em>,<br>donde tú quieras" },
    piliers: {
      naturelle: { titre: "Hielo natural", texte: "Una auténtica pista refrigerada para una experiencia genuina y premium." },
      synthetique: { titre: "Hielo sintético", texte: "Sin agua ni energía. Se instala en cualquier lugar, incluso bajo el sol mediterráneo." },
      cle: { titre: "Llave en mano", texte: "Tú eliges el espacio. Nosotros creamos el evento, de principio a fin." }
    },
    cibles: {
      tag: "¿Para quién?",
      titre: "Una oferta pensada para<br><em>los creadores de eventos</em>",
      mairies: { titre: "Ayuntamientos", texte: "Crea la cita invernal imprescindible de tu ciudad." },
      hotels: { titre: "Hoteles y Resorts", texte: "Ofrece una experiencia exclusiva que fideliza y da prestigio a tu establecimiento." },
      centres: { titre: "Centros comerciales", texte: "Genera más afluencia y crea la animación de la temporada." }
    },
    trio: { titre: "Nosotros creamos el evento.<br><em>Tú disfrutas de la magia.</em>", texte: "Cada instalación Crystalia es una experiencia única, pensada para sorprender a tu público y dejar huella." },
    formules: {
      tag: "Nuestros paquetes",
      titre: "<em>Un paquete para cada ambición</em>",
      sousTitre: "Bajo presupuesto · Cada proyecto es único",
      essentiel: { tag: "Esencial", titre: "Crystalia Esencial", texte: "Pista + patines + instalación y desmontaje completo." },
      prestige: { tag: "Prestige", titre: "Crystalia Prestige", texte: "Esencial + decoración festiva + iluminación + ambiente musical." },
      show: { tag: "Show", titre: "Crystalia Show", texte: "Prestige + espectáculo de patinaje artístico para la inauguración." },
      premium: { tag: "Premium", titre: "Crystalia Premium", texte: "La experiencia completa — show, animaciones e infraestructura a medida." },
      cta: "Ver todos nuestros paquetes"
    },
    cta: {
      titre: "Creemos tu <em>evento</em>",
      texte: "Instalamos pistas de hielo efímeras a medida para tus eventos de invierno.<br>Hoteles, ayuntamientos, centros comerciales — de principio a fin, sin complicaciones.",
      zones: "España · Francia · Europa · Internacional",
      bouton: "Solicitar presupuesto gratuito"
    },

    concept: {
      hero: { tag: "✦ Nuestro concepto ✦", titre: "El hielo como<br><em>arte del evento</em>", sousTitre: "Una visión · Una pasión · Una experiencia" },
      vision: {
        tag: "Nuestra visión",
        titre: "Transformar cada espacio<br>en una <em>experiencia mágica</em>",
        p1: "Crystalia nació de una convicción simple: el hielo es mucho más que un deporte. Es un universo de magia, emoción y conexión que trasciende todas las culturas y generaciones.",
        p2: "Nuestra misión es hacer este universo accesible para todos — hoteles, ayuntamientos, centros comerciales — creando eventos de pistas de hielo efímeras que dejan huella y crean recuerdos inolvidables.",
        p3: "Cada instalación Crystalia se concibe como una obra única, adaptada a tu espacio, tu imagen y tu público."
      },
      philo: "« No solo alquilamos una pista de hielo.<br>Creamos <em>un momento</em> que tu público nunca olvidará. »",
      pourquoi: {
        tag: "¿Por qué una pista de hielo?",
        titre: "Un proyecto que beneficia<br><em>a todos los actores del territorio</em>",
        sousTitre: "Una animación, tres beneficios",
        ville: { titre: "Para la ciudad", texte: "Un centro urbano más vivo, más visitado, más visible. La pista se convierte en el destino navideño de toda la región y refuerza la imagen dinámica y familiar del municipio." },
        habitants: { titre: "Para los vecinos", texte: "Una cita esperada cada invierno, donde grandes y pequeños se reúnen. Primeros pasos sobre el hielo, salidas en familia, momentos compartidos — el evento que marca la temporada." },
        commercants: { titre: "Para los comerciantes", texte: "Más afluencia frente a los escaparates, visitantes que prolongan su estancia en el centro y consumen más en cafeterías, restaurantes y tiendas cercanas." }
      },
      partenaire: {
        tag: "Nuestra experiencia técnica",
        titre: "Un socio<br><em>líder europeo</em>",
        p1: "Crystalia se apoya en la experiencia de un socio técnico de referencia, actor clave del sector desde hace más de 20 años y líder en el mercado europeo de pistas de hielo efímeras.",
        p2: "Esta colaboración nos permite garantizar instalaciones impecables, sea cual sea la complejidad de tu proyecto.",
        stat1: "instalaciones por temporada",
        stat2: "proyectos realizados desde 1999",
        stat3: "años de experiencia"
      },
      equip: {
        tag: "Material incluido",
        titre: "Todo el equipamiento,<br><em>a tu disposición</em>",
        sousTitre: "Una instalación pensada hasta el último detalle",
        patins: { titre: "Patines y accesorios", texte: "Alquiler de patines para todas las edades, además de accesorios de iniciación para principiantes." },
        chalets: { titre: "Chalets y recepción", texte: "Estructuras de acogida y distribución diseñadas para fluidificar la experiencia del visitante de principio a fin." },
        lumiere: { titre: "Luz y ambiente", texte: "Iluminación escénica, sonido y decoración para convertir la instalación en una verdadera experiencia." }
      },
      valeurs: {
        tag: "Lo que nos define",
        titre: "Nuestros <em>valores</em>",
        excellence: { titre: "Excelencia", texte: "Cada detalle cuenta. Desde la calidad del hielo hasta la decoración, solo aceptamos lo mejor." },
        emotion: { titre: "Emoción", texte: "Creamos momentos que tocan el corazón y quedan grabados en la memoria de tus visitantes." },
        surMesure: { titre: "A medida", texte: "Cada proyecto es único. Adaptamos cada instalación a tu espacio, tu imagen y tus ambiciones." }
      },
      cta: { titre: "¿Listo para crear tu<br><em>evento?</em>", sousTitre: "Descubre nuestros paquetes · Respuesta en 48h", bouton: "Ver nuestros paquetes" }
    },

    formulesPage: {
      hero: { tag: "✦ Nuestros paquetes ✦", titre: "Tu proyecto merece<br><em>una oferta a medida</em>", sousTitre: "Cada proyecto es único · Presupuesto bajo solicitud" },
      intro: "Ya seas un ayuntamiento, un hotel o un centro comercial, Crystalia ofrece un paquete adaptado a tu espacio, presupuesto y visión. <em>Cada instalación se diseña a medida.</em> Nuestras tarifas se establecen según el tamaño de la pista, la duración del evento y los servicios elegidos.",
      essentiel: {
        tag: "Esencial", titre: "Crystalia Esencial", texte: "Lo esencial para crear tu evento de pista de hielo, llave en mano y sin complicaciones.",
        inclus: "Incluido en este paquete",
        item1: "Pista de hielo natural o sintético", item2: "Alquiler de patines para los visitantes", item3: "Transporte, entrega e instalación completa",
        item4: "Barandillas de seguridad y señalización", item5: "Desmontaje y transporte de vuelta incluidos", item6: "Seguimiento técnico durante todo el evento"
      },
      prestige: {
        tag: "Prestige", titre: "Crystalia Prestige", texte: "Transforma tu pista en un auténtico universo festivo con una escenografía completa.",
        inclus: "Todo el paquete Esencial, más",
        item1: "Decoración festiva temática a medida", item2: "Iluminación escénica y luces ambientales", item3: "Sonorización y ambiente musical",
        item4: "Arco de entrada y señalización premium", item5: "Guardarropa y zona de acogida acondicionada", item6: "Asesoramiento en comunicación del evento"
      },
      show: {
        tag: "Show", titre: "Crystalia Show", texte: "Añade un espectáculo de patinaje artístico para una inauguración inolvidable.", badge: "⭐ El más elegido",
        inclus: "Todo el paquete Prestige, más",
        item1: "Espectáculo de patinaje artístico profesional", item2: "Coreografía a medida según tu temática", item3: "Vestuario y puesta en escena incluidos",
        item4: "Animaciones recurrentes durante el evento", item5: "Presencia de un animador para el público", item6: "Comunicación y relaciones con la prensa"
      },
      premium: {
        tag: "Premium", titre: "Crystalia Premium", texte: "La experiencia definitiva — una infraestructura completa con animaciones durante todo el evento.",
        inclus: "Todo el paquete Show, más",
        item1: "Clases de iniciación al patinaje con un profesional", item2: "Animaciones diarias durante toda la duración", item3: "Espacio VIP y hospitalidad a medida",
        item4: "Fotografía y vídeo profesional del evento", item5: "Gestión completa de la explotación in situ", item6: "Acompañamiento en comunicación y redes sociales"
      },
      cta: { titre: "Un sueño<br><em>a medida</em>", sousTitre: "Respuesta en 48h · Presupuesto gratuito y sin compromiso", bouton: "Solicitar presupuesto" }
    },

    realisationsPage: {
      hero: { tag: "✦ Proyectos ✦", titre: "Cada evento,<br><em>una historia única</em>", sousTitre: "Pistas de hielo · Espectáculos · Animaciones · A medida" },
      gallery: { tag: "Nuestras instalaciones", titre: "Pistas de hielo <em>efímeras</em>" },
      filters: { ville: "Plaza de la ciudad", hotel: "Hotel y Resort", centre: "Centro comercial", spectacle: "Espectáculo" },
      items: {
        i0: "Plaza de la ciudad · Ambiente navideño", i1: "Vista aérea · Árbol central", i2: "Iluminación premium · Navidad",
        i3: "Centro comercial · Rooftop Paris", i4: "Plaza de la ciudad · Vista aérea", i5: "Gran instalación · Noche",
        i6: "Iluminación prestige · Violeta", i7: "Resort · Montaña", i8: "Evento · Escultura de hielo",
        i9: "Rooftop · Printemps Haussmann Paris", i10: "Mercado navideño · Vista aérea", i11: "Grand Palais · París", i12: "Grand Palais · Espectáculo nocturno"
      },
      spectacle: { tag: "Crystalia Show", titre: "Espectáculos de <em>patinaje artístico</em>", s0: "Espectáculo en pareja", s1: "Solo · Universo encantado", s2: "Espectáculo encantado" },
      cta: { titre: "Tu evento será<br><em>nuestra próxima creación</em>", sousTitre: "Hablemos de tu proyecto · Presupuesto gratuito", bouton: "Contáctanos" }
    },

    contactPage: {
      hero: { tag: "✦ Contacto ✦", titre: "Hablemos de tu<br><em>proyecto</em>", sousTitre: "Respuesta en 48h · Presupuesto gratuito y sin compromiso" },
      info: {
        tag: "Contáctanos",
        titre: "¿Tienes un proyecto?<br><em>Escríbenos.</em>",
        texte: "Ya seas un ayuntamiento, un hotel o un centro comercial, estudiamos cada proyecto con atención y te ofrecemos una propuesta totalmente a medida.",
        email: "Email", instagram: "Instagram", zone: "Zona de actuación", zoneValeur: "España · Francia · Europa · Internacional",
        reponseTitre: "Respuesta en 48h", reponseTexte: "Presupuesto gratuito y sin compromiso"
      },
      form: {
        tag: "Tu solicitud", titre: "Solicita tu<br><em>presupuesto gratuito</em>", sousTitre: "Todos los campos son obligatorios",
        nom: "Nombre y apellidos", org: "Organización", email: "Email", tel: "Teléfono",
        type: "Eres", select: "Seleccionar...",
        typeMairie: "Ayuntamiento / Administración", typeHotel: "Hotel / Resort", typeCentre: "Centro comercial", typePrive: "Evento privado", typeAutre: "Otro",
        formule: "Paquete deseado",
        fEssentiel: "Crystalia Esencial", fPrestige: "Crystalia Prestige", fShow: "Crystalia Show", fPremium: "Crystalia Premium", fInconnu: "Aún no lo sé",
        message: "Tu proyecto", envoyer: "Enviar mi solicitud", note: "Tus datos se tratan de forma confidencial · Respuesta en 48h",
        successTitre: "Mensaje enviado ✦", successTexte: "Gracias por tu solicitud. Te responderemos en un plazo de 48h."
      },
      quote: "« Todo gran evento comienza con <em>una simple conversación.</em> »"
    }
  }
};

/* ============================================
   Moteur — pas besoin d'y toucher normalement
   ============================================ */
(function () {
  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = getNestedValue(TRANSLATIONS[lang], el.getAttribute('data-i18n'));
      if (value !== null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const value = getNestedValue(TRANSLATIONS[lang], el.getAttribute('data-i18n-html'));
      if (value !== null) el.innerHTML = value;
    });

    document.querySelectorAll('.nav-lang [data-lang]').forEach(span => {
      span.classList.toggle('active', span.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('crystalia-lang', lang);
  }

  function initLangSwitcher() {
    document.querySelectorAll('.nav-lang [data-lang]').forEach(span => {
      span.addEventListener('click', () => applyLanguage(span.getAttribute('data-lang')));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('crystalia-lang');
    const browserLang = (navigator.language || 'fr').slice(0, 2);
    const initialLang = saved || (TRANSLATIONS[browserLang] ? browserLang : 'fr');

    initLangSwitcher();
    applyLanguage(initialLang);
  });
})();
