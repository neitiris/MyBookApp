export interface IBook {
  id?: number;
  createdAt: string;
  name: string;
  author: string;
  img?: string;
  price?: number;
  rating: number;
}
export interface ILinkList {
  icon: any;
  name: string;
  radio: string;
}
export interface ILinkTypes {
  icon: any;
  name: string;
  radio2: string;
  class: string;
}
export interface IAlert {
  icon: any;
  name: string;
  time: string;
}
export interface IFilter {
  checked?: boolean;
  sort: string;
  name: string;
  title: string;
}
