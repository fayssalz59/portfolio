# PaperMod_Portfolio_Fayssal

Pack d'overrides Hugo pour transformer un site **PaperMod** en portfolio dark premium orienté **Data Engineer**.

## Ce que contient ce pack
- Homepage custom avec sections premium
- CSS dark mode technique et sobre
- Partials réutilisables
- Exemple de page projet
- Exemples d'images SVG légères

## Installation
Depuis la racine de ton site Hugo (celui qui a déjà `theme = "PaperMod"`) :

```bash
cp -r PaperMod_Portfolio_Fayssal/layouts ./
cp -r PaperMod_Portfolio_Fayssal/assets ./
cp -r PaperMod_Portfolio_Fayssal/content/projects ./content/
cp -r PaperMod_Portfolio_Fayssal/static ./
```

Ou bien copie les fichiers manuellement.

## Fichiers principaux
- `layouts/index.html` : homepage custom
- `layouts/partials/home-*.html` : sections de la homepage
- `assets/css/extended/custom.css` : thème visuel
- `content/projects/etl-pipeline.md` : exemple de projet

## Configuration recommandée dans `hugo.toml`

```toml
baseURL = "https://example.com/"
languageCode = "en-us"
title = "Fayssal Zg"
theme = "PaperMod"

[pagination]
  pagerSize = 10

[params]
  env = "production"
  description = "Data Engineer portfolio"
  author = "Fayssal Zg"
  defaultTheme = "dark"
  disableThemeToggle = true
  ShowReadingTime = false
  ShowShareButtons = false
  ShowPostNavLinks = true
  ShowBreadCrumbs = true
  ShowCodeCopyButtons = true
  disableSpecial1stPost = true
  mainSections = ["projects"]

  [params.profileMode]
    enabled = false

  [params.fayssal]
    role = "Data Engineer"
    intro = "I design reliable data pipelines, clean models, and analytics-ready systems."
    summary = "Portfolio focused on architecture, automation, ETL / ELT, and readable technical case studies."
    email = "fayssalzcoc@gmail.com"
    github = "https://github.com/"
    linkedin = "https://www.linkedin.com/"

[menu]
  [[menu.main]]
    identifier = "projects"
    name = "Projects"
    url = "/projects/"
    weight = 10
  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 20
```

## Commandes utiles
```bash
hugo server -D
```

## Note
Ce pack ne remplace **pas** le thème PaperMod. Il le **surcharge proprement** avec les mécanismes natifs de Hugo.
