type ToursResponse = {
  id: number;
  title: string;
  rating: number;
  price: number;
  img: string;
  tinyImg: string;
  region: string;
  name: string;
  priceVND: string;
  description: string;
}[];

type AttractiveToursResponse = {
  id: number;
  title: string;
  travelTime: string;
  img: string;
}[];

type ToursParams = {
  id?: string;
  title?: string;
  rating?: number;
  price?: number;
  img?: string;
  tinyImg?: string;
  region?: string;
  name?: string;
  priceVND?: string;
  description?: string;
};
