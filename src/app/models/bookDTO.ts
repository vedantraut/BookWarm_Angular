export interface BookDTO {
  id: number;
  title: string;
  isbn: string;
  price: number;
  imageUrl: string;
  authorName: string;
  author: {
    id: number;
    name: string;
  };
}
