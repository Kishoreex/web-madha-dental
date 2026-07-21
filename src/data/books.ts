export interface Book {
  sno: number;
  ugcCareId: string;
  link: string;
  publicationType: string;
  bookChapter: string;
  authorName: string;
  journalName: string;
  isbnNumber: string;
  bookTitle: string;
  year: string;
}

export const books: Book[] = [
  {
    sno: 1,
    ugcCareId: "",
    link: "https://books.google.co.in/books/about/Materials_Used_in_Dentistry.html?id=aPbsDwAAQBAJ&redir_esc=y",
    publicationType: "Wolters Kluwer",
    bookChapter: "Materials used in Dentistry (2nd edition)",
    authorName: "Dr. Sai Shamini",
    journalName: "",
    isbnNumber: "978-9387963818",
    bookTitle: "Materials used in Dentistry (2nd edition)",
    year: "2018"
  }
];