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
  checked?: boolean;
}
export interface ILinkTypes {
  icon: any;
  name: string;
  radio2: string;
  class: string;
  checked?: boolean;
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
