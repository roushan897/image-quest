export interface IUrls {
  raw: string;
  full: string;
  small: string;
}

export interface IData {
  id: number;
  slug: string;
  price: number;
  description: string;
  alt_description: string;
  urls: IUrls;
  user: { name: string };
}

export interface IListViewProps {
  data: IData[];
}
