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
*/

const TRANSLATIONS = {
  fr: {
    nav: {
      concept: "Concept",
      formules: "Formules",
      realisations: "Réalisations",
      contact: "Contact"
    },
    hero: {
      tag: "Patinoires éphémères",
      title: "La <em>magie de la glace</em>,<br>où vous le souhaitez"
    },
    piliers: {
      naturelle: {
        titre: "Glace naturelle",
        texte: "Une vraie patinoire réfrigérée pour une expérience authentique et premium."
      },
      synthetique: {
        titre: "Glace synthétique",
        texte: "Sans eau ni énergie. S'installe partout, même en plein soleil méditerranéen."
      },
      cle: {
        titre: "Clé en main",
        texte: "Vous choisissez l'espace. Nous créons l'événement, de A à Z."
      }
    },
    cibles: {
      tag: "Pour qui ?",
      titre: "Une offre pensée pour<br><em>les créateurs d'événements</em>",
      mairies: {
        titre: "Mairies",
        texte: "Créez le rendez-vous hivernal incontournable de votre ville."
      },
      hotels: {
        titre: "Hôtels & Resorts",
        texte: "Offrez une expérience exclusive qui fidélise et fait rayonner votre établissement."
      },
      centres: {
        titre: "Centres commerciaux",
        texte: "Générez du flux et créez l'animation de la saison."
      }
    },
    trio: {
      titre: "Nous créons l'événement.<br><em>Vous récoltez la magie.</em>",
      texte: "Chaque installation Crystalia est une expérience unique, pensée pour émerveiller votre public et marquer les esprits durablement."
    },
    formules: {
      tag: "Nos formules",
      titre: "<em>Un pack pour chaque ambition</em>",
      sousTitre: "Sur devis · Chaque projet est unique",
      essentiel: {
        tag: "Essentiel",
        titre: "Crystalia Essentiel",
        texte: "Patinoire + patins + installation & démontage complet."
      },
      prestige: {
        tag: "Prestige",
        titre: "Crystalia Prestige",
        texte: "Essentiel + décoration féerique + éclairage + ambiance musicale."
      },
      show: {
        tag: "Show",
        titre: "Crystalia Show",
        texte: "Prestige + spectacle de patinage artistique pour l'inauguration."
      },
      premium: {
        tag: "Premium",
        titre: "Crystalia Premium",
        texte: "L'expérience complète — show, animations et infrastructure sur mesure."
      },
      cta: "Voir toutes nos formules"
    },
    cta: {
      titre: "Créons votre <em>événement</em>",
      texte: "Nous installons des patinoires éphémères sur mesure pour vos événements hivernaux.<br>Hôtels, mairies, centres commerciaux — de A à Z, sans contrainte.",
      zones: "Espagne · France · Europe · International",
      bouton: "Demander un devis gratuit"
    }
  },

  en: {
    nav: {
      concept: "Concept",
      formules: "Packages",
      realisations: "Our Work",
      contact: "Contact"
    },
    hero: {
      tag: "Pop-up ice rinks",
      title: "The <em>magic of ice</em>,<br>wherever you want it"
    },
    piliers: {
      naturelle: {
        titre: "Natural ice",
        texte: "A genuine refrigerated rink for an authentic, premium experience."
      },
      synthetique: {
        titre: "Synthetic ice",
        texte: "No water, no energy. Installs anywhere, even under the Mediterranean sun."
      },
      cle: {
        titre: "Turnkey service",
        texte: "You choose the space. We create the event, from A to Z."
      }
    },
    cibles: {
      tag: "Who is it for?",
      titre: "An offer designed for<br><em>event creators</em>",
      mairies: {
        titre: "City councils",
        texte: "Create your city's must-attend winter event."
      },
      hotels: {
        titre: "Hotels & Resorts",
        texte: "Offer an exclusive experience that builds loyalty and elevates your property."
      },
      centres: {
        titre: "Shopping centres",
        texte: "Drive footfall and create the highlight of the season."
      }
    },
    trio: {
      titre: "We create the event.<br><em>You reap the magic.</em>",
      texte: "Every Crystalia installation is a unique experience, designed to delight your audience and leave a lasting impression."
    },
    formules: {
      tag: "Our packages",
      titre: "<em>A package for every ambition</em>",
      sousTitre: "Quote on request · Every project is unique",
      essentiel: {
        tag: "Essential",
        titre: "Crystalia Essential",
        texte: "Rink + skates + full setup & dismantling."
      },
      prestige: {
        tag: "Prestige",
        titre: "Crystalia Prestige",
        texte: "Essential + festive decoration + lighting + music ambiance."
      },
      show: {
        tag: "Show",
        titre: "Crystalia Show",
        texte: "Prestige + figure skating performance for the launch."
      },
      premium: {
        tag: "Premium",
        titre: "Crystalia Premium",
        texte: "The complete experience — show, entertainment and bespoke infrastructure."
      },
      cta: "See all our packages"
    },
    cta: {
      titre: "Let's create your <em>event</em>",
      texte: "We install bespoke pop-up ice rinks for your winter events.<br>Hotels, city councils, shopping centres — start to finish, hassle-free.",
      zones: "Spain · France · Europe · International",
      bouton: "Request a free quote"
    }
  },

  es: {
    nav: {
      concept: "Concepto",
      formules: "Paquetes",
      realisations: "Proyectos",
      contact: "Contacto"
    },
    hero: {
      tag: "Pistas de hielo efímeras",
      title: "La <em>magia del hielo</em>,<br>donde tú quieras"
    },
    piliers: {
      naturelle: {
        titre: "Hielo natural",
        texte: "Una auténtica pista refrigerada para una experiencia genuina y premium."
      },
      synthetique: {
        titre: "Hielo sintético",
        texte: "Sin agua ni energía. Se instala en cualquier lugar, incluso bajo el sol mediterráneo."
      },
      cle: {
        titre: "Llave en mano",
        texte: "Tú eliges el espacio. Nosotros creamos el evento, de principio a fin."
      }
    },
    cibles: {
      tag: "¿Para quién?",
      titre: "Una oferta pensada para<br><em>los creadores de eventos</em>",
      mairies: {
        titre: "Ayuntamientos",
        texte: "Crea la cita invernal imprescindible de tu ciudad."
      },
      hotels: {
        titre: "Hoteles y Resorts",
        texte: "Ofrece una experiencia exclusiva que fideliza y da prestigio a tu establecimiento."
      },
      centres: {
        titre: "Centros comerciales",
        texte: "Genera más afluencia y crea la animación de la temporada."
      }
    },
    trio: {
      titre: "Nosotros creamos el evento.<br><em>Tú disfrutas de la magia.</em>",
      texte: "Cada instalación Crystalia es una experiencia única, pensada para sorprender a tu público y dejar huella."
    },
    formules: {
      tag: "Nuestros paquetes",
      titre: "<em>Un paquete para cada ambición</em>",
      sousTitre: "Bajo presupuesto · Cada proyecto es único",
      essentiel: {
        tag: "Esencial",
        titre: "Crystalia Esencial",
        texte: "Pista + patines + instalación y desmontaje completo."
      },
      prestige: {
        tag: "Prestige",
        titre: "Crystalia Prestige",
        texte: "Esencial + decoración festiva + iluminación + ambiente musical."
      },
      show: {
        tag: "Show",
        titre: "Crystalia Show",
        texte: "Prestige + espectáculo de patinaje artístico para la inauguración."
      },
      premium: {
        tag: "Premium",
        titre: "Crystalia Premium",
        texte: "La experiencia completa — show, animaciones e infraestructura a medida."
      },
      cta: "Ver todos nuestros paquetes"
    },
    cta: {
      titre: "Creemos tu <em>evento</em>",
      texte: "Instalamos pistas de hielo efímeras a medida para tus eventos de invierno.<br>Hoteles, ayuntamientos, centros comerciales — de principio a fin, sin complicaciones.",
      zones: "España · Francia · Europa · Internacional",
      bouton: "Solicitar presupuesto gratuito"
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
