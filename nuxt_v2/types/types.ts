export interface WpCategory {
  id: number;
  name: string;
  slug: string;
  date: string;
  title: {
    rendered: string;
  }; 
  excerpt: {
    rendered: string;
  };
  link: string;
  author: string;
  _embedded: any;
  content: {
    rendered: string;
  };
}

export interface Post {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  slug: string;
  excerpt: {
    rendered: string;
  };
  link: string;
  author: string;
  _embedded: any;
  content: {
    rendered: string;
  };
}
