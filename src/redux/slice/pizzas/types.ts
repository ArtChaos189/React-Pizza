export type Pizzas = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export type PizasSliceState = {
  items: Pizzas[];
};
