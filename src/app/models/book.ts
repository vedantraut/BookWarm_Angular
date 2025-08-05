export interface Book {
  id: number;
  title: string;
  isbn: string;
  price: number;
  author: {
    id: number;
    name: string;
  };
}
