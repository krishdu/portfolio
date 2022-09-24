type project = {
    featured: boolean;
    id: number;
    title: string;
    logo: string;
    link: string;
    desc: string;
    blurHash: string;
    technologies: string[];
  };

  type article = {
    title: string;
    desc: string;
    link: string;
    views ?: string;
    pubDate: string;
    external: boolean = true;
    isNew ?: boolean;
    readTime ?: string;
    categories: string[];
    github_url ?: string;
  }
  