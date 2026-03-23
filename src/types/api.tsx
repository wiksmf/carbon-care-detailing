export interface Certification {
  id?: string;
  src: string;
  alt: string;
  createdAt: Date;
}

export interface GalleryPhotos {
  id: string;
  name: string;
  mainPhoto: string;
  createdAt: Date;
  photos?: GalleryPhoto[];
}

export interface GalleryPhoto {
  id?: string;
  src: string;
  alt?: string;
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}
