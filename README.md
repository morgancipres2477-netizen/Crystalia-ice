# Crystalia Ice — Guide de mise en ligne

## Structure du site
```
crystalia-ice/
├── index.html          ← Page d'accueil
├── concept.html        ← Page Concept
├── formules.html       ← Page Formules
├── realisations.html   ← Page Réalisations
├── contact.html        ← Page Contact
├── style.css           ← Styles partagés
├── images/             ← Dossier à créer avec tes photos
│   ├── hero-bg.jpg     ← Photo principale (ta patinoire de nuit IA)
│   ├── cibles-bg.jpg   ← Patinoire vue aérienne
│   ├── phrase-bg.jpg   ← Photo patinage artistique
│   └── cta-bg.jpg      ← Photo lumières de Noël
└── README.md
```

## Étape 1 — Ajouter tes photos
1. Crée un dossier `images/` dans le dossier crystalia-ice
2. Place tes photos générées par ChatGPT dedans
3. Renomme-les : hero-bg.jpg, cibles-bg.jpg, phrase-bg.jpg, cta-bg.jpg
4. Pour la page Réalisations, nomme tes photos real-01.jpg, real-02.jpg, etc.

## Étape 2 — Configurer le formulaire de contact
1. Va sur https://formspree.io et crée un compte gratuit
2. Crée un nouveau formulaire avec ton email contact@crystalia-ice.com
3. Copie l'ID du formulaire (ex: xpznkqjr)
4. Dans contact.html, remplace "VOTRE_ID" par ton ID :
   `action="https://formspree.io/f/VOTRE_ID"`

## Étape 3 — Mettre en ligne sur Netlify
1. Va sur https://netlify.com et crée un compte gratuit
2. Clique sur "Add new site" → "Deploy manually"
3. Glisse-dépose ton dossier crystalia-ice entier
4. Le site est en ligne en 30 secondes !

## Étape 4 — Connecter ton domaine crystalia-ice.com
1. Dans Netlify → Domain settings → Add custom domain
2. Tape : crystalia-ice.com
3. Netlify te donne des nameservers (ex: dns1.p01.nsone.net)
4. Dans Namecheap → ton domaine → Nameservers → Custom DNS
5. Colle les nameservers de Netlify
6. Attends 24-48h → le domaine est actif !

## Étape 5 — Ajouter tes réseaux sociaux
Dans chaque page, cherche `href="#"` sur les liens Instagram et LinkedIn
et remplace par tes vraies URLs.

## Couleurs de la charte
- Or principal : #c9a84c
- Fond nuit : #07091a
- Texte atténué : rgba(255,255,255,0.45)

## Police
- Titres : Cormorant Garamond (italique)
- Corps : Montserrat
