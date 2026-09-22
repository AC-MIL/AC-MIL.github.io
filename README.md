# AC-MIL

Anatomy-aware dual-stream multiple instance learning for kidney function prediction.

Abteen Arab, Maziar Riazy, Ali Bashashati · University of British Columbia.

[Paper on OpenReview](https://openreview.net/forum?id=KTfPFMntqQ) · [Project website](https://ac-mil.github.io/)

## Website

A static research project page adapted from the local ReDT and VGGT-Prime sites. Open `index.html` directly, or serve this directory with `python3 -m http.server 8766 --bind 127.0.0.1`. No installation or build step is required.

- `index.html`: narrative, results tables, resource links, and citation.
- `static/css/index.css`: responsive academic layout and table styling.
- `static/images/architecture.png`: original supplied manuscript figure.

The Paper button opens OpenReview. Code is marked **Coming soon**, with a GitHub icon. The website repository contains the project page, not the research implementation.

The page presents the method first, followed by the architecture diagram and three performance summary boxes, then the detailed results, disease-specific evaluation, transfer experiments, and exploratory pathology analysis.

## Content and evidence

Content is based on the active portion of the supplied `MIDL_2026/midl-shortpaper.tex` manuscript and its `Model.png` figure. Excluded draft material after `\\iffalse` is not used. AC-MIL is the project name supplied by the author; the citation retains the manuscript title.

The page includes all 21 main experimental configurations, disease-stratified ABMIL results, matched-cardinality ablations, transfer to proteinuria and albuminuria, and exploratory VLM-based pathology analysis. Tables preserve the supplied numerical precision. Main and transfer ± terms are reproduced without assuming they denote a particular type of uncertainty.

Headline RMSE reductions are calculated relative to whole-slide ABMIL (21.90 → 19.07; 12.9%) and the strongest single-stream baseline, non-glomerular ABMIL (21.70 → 19.07; 12.1%). The page distinguishes highest disease-subgroup correlation from lowest subgroup RMSE, and retains the whole-slide model's small albuminuria F1 advantage. Transfer uses frozen eGFR-trained embeddings and supervised downstream classifiers; it is not an external-cohort evaluation. Pathology findings are VLM-derived, based on predicted eGFR strata, and require expert validation.

No conference acceptance, code release, external validation, or unsupported significance claim is implied. Only the author-supplied paper URL is used.

## Attribution

Design adapted from ReDT and VGGT-Prime, based on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) and [Nerfies](https://nerfies.github.io/). Website template: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Research assets retain their original rights. GitHub icon: [Octicons](https://github.com/primer/octicons), MIT License.
