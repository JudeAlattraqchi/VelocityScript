
export type Page = 'home' | 'services' | 'success-stories' | 'blog' | 'blog-post';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  isTyping?: boolean;
  hasAction?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  author: {
    name: string;
    imageUrl: string;
  };
  content: string;
}
