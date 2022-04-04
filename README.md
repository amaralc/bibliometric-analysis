- [x] Use Remix
- [x] Use Mantine
- [x] Upload and parse csv
- [x] Export references from scopus in bibtex file format (.bib)
- [x] Upload and parse bibtex
- [ ] Upload and parse bibtex as well as csv
- [ ] Get DOIs for each reference of an entry

- Gephi
- R
- Historical Direct Citation Network

  - https://tex.stackexchange.com/questions/43066/tool-to-visualize-connections-between-bibtex-entries

- Quais termos são comumente utilizados para se referir ao processo que a ISO convencionou chamar Directed Energy Deposition?

  - Directed Energy Deposition (DED)
  - Laser Engineered Net Shaping (LENS)
  - Direct Metal Deposition (DMD)
  - Direct Metal Tooling (DMT)
  - Laser Metal Deposition (LMD)
  - Laser Consolidation (LC)
  - Direct Light Fabrication (DLF)
  - Laser Casting (LC)

  Source: (AHN, DG., 2021)

- Quantos documentos mencionam ao menos um dos sinônimos de DED em qualquer um dos metadados textuais?

  > ALL ( "direct* energy deposition" OR "laser engineered net shaping" OR "direct* metal deposition" OR "direct* metal tooling" OR "laser metal deposition" OR "laser consolidation" OR "direct* light fabrication" OR "laser casting" OR "laser clad\*" )

  - 35590 primary
  - 4326 secondary
  - 11827 patents

- Quantos documentos mencionam ao menos um dos sinônimos de DED em conjunto com o termo "Laser" em qualquer um dos metadados textuais?

  > ALL ( "direct* energy deposition" OR "laser engineered net shaping" OR "direct* metal deposition" OR "direct* metal tooling" OR "laser metal deposition" OR "laser consolidation" OR "direct* light fabrication" OR "laser cast*" OR "laser clad*" AND "laser" )

  - 35002 primary
  - 4045 secondary
  - 11207 patents

- Quantos documentos mencionam ao menos um dos sinônimos de DED em conjunto com o termo "Laser" em títulos, resumos ou palavras-chave?

  > TITLE-ABS-KEY ( "direct* energy deposition" OR "laser engineered net shaping" OR "direct* metal deposition" OR "direct* metal tooling" OR "laser metal deposition" OR "laser consolidation" OR "direct* light fabrication" OR "laser casting" OR "laser clad\*" AND "laser" )

  - 10593 primary
  - 4045 secondary
  - 11207 patents

- Quais variáveis independentes se deseja estudar?

  - Curvature radius;
  - Draft angle;
  - Deposition strategy;
  - Number of tracks;
  - Number of layers;

- Quais são as variáveis dependentes que se deseja avaliar neste estudo?

  - Area of wall cross section;
  - Symmetry of wall cross section;
  - Parallelism between top surface and substrate;

- Quais termos são utilizados em títulos, resumos e palavras-chave de artigos pré-selecionados, que descrevem características relacionadas às características de interesse deste estudo?

  - Case study

  - Independent variables

    - Processing parameters
      - Deposition strategy
        - Deposition Strategies
        - Scanning pattern
        - Trajectories
        - Travel paths
      - Inclined walls
        - Inclined angles
        - Inclination angle
      - Z-increment
        - Layer thickness
      - Overlap ratio
        - Over-deposition
        - Overlapping rate
        - Overlap percentage
        - Stepover of adjacent deposition lines (or beads)
      - Corner
      - Single track
        - Thin wall
        - Single bead
      - Multi-track
        - Multi-path deposition
        - Single-track
        - Thick wall
      - Single layer
      - Multi layer
        - Multilayered cladding
        - Stacking layers
      - Variable Thickness
      - Curve paths
        - Section curve order

  - Dependent variables
    - Effects of processing parameters
      - Single-track cladding characteristics
        - Clad properties
        - Properties of clad
        - Cladding geometry
        - Single clad characteristics
        - Clad characteristics
      - Deposition geometry
        - Bead morphology
        - Bead shape
        - Bead profile
        - Bead curve geometry
        - Bead height, width, penetration, area, dilution area
        - Bead profile formation
        - Height of single track
      - Accuracy
        - Geometrical distortions
        - Angle accuracy
        - Geometry acuracy
        - Forming quality
        - Geometrical limitations
        - Deformation
      - Maximum slope
      - Flatness ratio
        - Top surface unevenness
      - Near-net-shape
        - Complex structure
        - Geometrical structures
        - Overhang structure
        - Shape evolution
        - Part geometry
        - Dimensions

- Quantos documentos mencionam ao menos um dos sinônimos de DED em conjunto com o termo "Laser" em títulos, resumos ou palavras-chave e incluem termos relacionados a geometria?

  > TITLE-ABS-KEY ( "Direct* Energy Deposition" OR "Laser Engineered Net Shaping" OR "Direct* Metal Deposition" OR "Direct* Metal Tooling" OR "Laser Metal Deposition" OR "Laser Consolidation" OR "Direct* Light Fabrication" OR "Laser Casting" OR "Laser Clad*" AND "Laser" ) AND TITLE-ABS-KEY ( "geometr*" OR "morpholog\*" )
