declare module "*.mp3" {
  const src: string;
  export default src;
}

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

  