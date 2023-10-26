export interface BaseInfo {
  _id: string;
  name: string;
}

export interface Category extends BaseInfo {
  image: string;
}

export interface FeaturedCategory extends BaseInfo {
  short_description: string;
}

export interface Dish extends BaseInfo {
  short_description: string;
  price: number;
  image: string;
}

export interface DishRow {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Restaurant extends BaseInfo {
  image: string;
  address: string;
  dishes: Dish[];
  rating: number;
  short_description: string;
  long: number;
  lat: number;
  type: { name: string };
}

export interface RestaurantDetails {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: Dish[];
  long: number;
  lat: number;
}
