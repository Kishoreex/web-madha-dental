export interface Seminar {
  sno: number;
  year: string;
  name: string;
  date: string;
  participants: string;
}

export const seminars: Seminar[] = [
  {
    sno: 1,
    year: "2018",
    name: "Seminar On Introduction To IPR",
    date: "06-08-2018",
    participants: "74"
  },
  {
    sno: 2,
    year: "2018",
    name: "Seminar On Trends In Periodontal Therapy",
    date: "20-08-2018",
    participants: "71"
  },
  {
    sno: 3,
    year: "2018",
    name: "Seminar On Types Of IPR",
    date: "05-09-2018",
    participants: "50"
  },
  {
    sno: 4,
    year: "2018",
    name: "Tobacco Cessation Programme",
    date: "19-09-2018",
    participants: "72"
  },
  {
    sno: 5,
    year: "2018",
    name: "Seminar On Physiology Of Speech And Its Disorder",
    date: "17-10-2018",
    participants: "69"
  }
];