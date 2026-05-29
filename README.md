# SUPREME Project Page

Project page for the paper **SUPREME: A Multi-GPU Framework for Reproducible Image Unlearning Method Evaluation** (Andreou, Lanyon, Finke, Cosma, 2026).

| | |
|---|---|
| Live site | [https://pedroandreou.github.io/supreme-unlearning-page/](https://pedroandreou.github.io/supreme-unlearning-page/) |
| Framework code | [https://github.com/pedroandreou/supreme-unlearning](https://github.com/pedroandreou/supreme-unlearning) |
| Paper | (arXiv link to be added) |

## What this repository is

A static, single-page academic project page describing what SUPREME introduces: a multi-GPU pipeline for reproducibly evaluating image unlearning methods, with a registry-based design that lets new datasets, models, methods, and metrics be added without modifying framework code. The page is structured as a typical academic project page: hero with title and authors, paper teaser figure, abstract, key contributions, framework components table, pipeline walkthrough, demonstration results on Pins Face Recognition, BibTeX, and acknowledgement.

The page is built on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) by Eliahu Horwitz, itself adapted from the [Nerfies](https://nerfies.github.io) project page. It uses [Bulma](https://bulma.io/), [FontAwesome](https://fontawesome.com/), and [Academicons](https://jpswalsh.github.io/academicons/) for styling.

## Local development

The site is fully static and needs only a local HTTP server. From the repository root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser. Any change to `index.html` or assets is reflected on the next page reload.

## Deployment

The site is deployed via GitHub Pages from the `main` branch (root). To deploy a fresh fork:

1. Push the repository to GitHub under your account.
2. In the repository settings, go to **Pages**.
3. Under **Build and deployment**, set the **Source** to *Deploy from a branch*.
4. Pick branch `main`, folder `/ (root)`, and save.

The site becomes available at `https://<username>.github.io/<repo-name>/` within a minute or two.

## Repository structure

```
supreme-unlearning-page/
├── index.html                              Single-page site source
├── README.md                               This file
├── .nojekyll                               Tells Pages to skip Jekyll processing
└── static/
    ├── css/                                Bulma + FontAwesome stylesheets
    ├── images/
    │   ├── favicon.ico
    │   └── supreme_pipeline.png            Pipeline teaser (Fig. 1 of paper)
    └── js/                                 Bulma + FontAwesome scripts
```

The teaser figure `supreme_pipeline.png` is rendered from `supreme_diagram.tex` in the framework repository ([pedroandreou/supreme-unlearning](https://github.com/pedroandreou/supreme-unlearning)). To refresh it after editing the TikZ source, compile to PDF and rasterise to PNG, then replace `static/images/supreme_pipeline.png`.

## Editing the content

All text and structure live in `index.html`. The page is organised top-to-bottom into the following sections; search for the corresponding `<section>` element to edit:

- **Hero** with title, authors, affiliations, and badges (arXiv, Code, BibTeX)
- **Teaser** showing the pipeline figure
- **Abstract**
- **Key Contributions**
- **What ships in the registry**
- **The pipeline** with the three-stage walkthrough
- **Demonstration on Pins Face Recognition** with Table 1
- **BibTeX**
- **Acknowledgement**
- **Footer**

Update the arXiv URL in the hero badge and in the `Paper` line at the top of this file once an arXiv ID is available.

## Citation

If you use SUPREME, please cite the paper:

```bibtex
@misc{andreou2026supreme,
  title  = {SUPREME: A Multi-GPU Framework for Reproducible Image Unlearning Method Evaluation},
  author = {Andreou, Petros and Lanyon, Jamie and Finke, Axel and Cosma, Georgina},
  year   = {2026},
  howpublished = {\url{https://github.com/pedroandreou/supreme-unlearning}}
}
```

## Acknowledgement

Petros Andreou is supported by a PhD studentship funded by [Darktrace](https://darktrace.com/). The funders had no role in the study design, data collection, analysis, interpretation, or in the decision to submit this work for publication.

## License

This page is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/), matching the upstream template.
