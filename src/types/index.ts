export interface ServiceItem {
  id: string;
  title: string;
  category: 'seguranca' | 'eletrica' | 'laudos' | 'treinamento';
  shortDesc: string;
  fullDesc: string;
  norma: string;
  image: string;
  benefits: string[];
  deliverables: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  isEbook?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  service: string;
  metric: string;
  desc: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
