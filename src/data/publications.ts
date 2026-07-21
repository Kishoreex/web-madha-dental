export interface Publication {
  sno: number;
  pubmedId: string;
  category: string;
  type: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
}

export const publications: Publication[] = [
  {
    sno: 1,
    pubmedId: "https://www.researchgate.net/publication/330986427_Knowledge_and_awareness_of_under_graduate_clinical_students_in_infection_control_in_Prosthodontic_clinic",
    category: "international",
    type: "Epidemiological Study",
    title: "Knowledge and awareness of undergraduate clinical students in Infection control in prosthodontic clinic.June 2018;38(3); 428-433.",
    authors: "Sharmila Hussain, Vijay Krishna",
    journal: "Biomedicine (scopus)",
    year: "2018"
  },

  {
    sno: 2,
    pubmedId: "https://www.researchgate.net/publication/326178446_A_cross_sectional_study_to_evaluate_the_prevalence_of_TMD_in_relation_to_Gender_Occlusion_and_Psychological_factors_in_Under_Graduate_Students",
    category: "international",
    type: "Original Article",
    title: "A cross sectional study to evaluate the prevalence of TMD in relation to Gender, occlusion and psychological factors in undergraduate students 2018;38(1):089-093",
    authors: "Sharmila Hussain, Manigandan, Krishna Meera, Kamakshi, Vijay Krishna",
    journal: "Biomedicine (scopus)",
    year: "2018"
  },

  {
    sno: 3,
    pubmedId: "http://dx.doi.org/10.5958/2320-5962.2018.00004.9",
    category: "national",
    type: "Review article",
    title: "Fusobacterium – An Endodontic Enigma",
    authors: "Veronica Arunakumari, RT Selvi, I Porkodi, BS Priya",
    journal: "Indian Journal of Contemporary Dentistry",
    year: "2018"
  }
];