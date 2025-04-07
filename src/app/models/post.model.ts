export interface Post {
    id?: number;
    caption: string;
    items: Item[];
    createdAt?: string;
  }
  
  export interface Item {
    id?: number;
    name: string;
  }
  