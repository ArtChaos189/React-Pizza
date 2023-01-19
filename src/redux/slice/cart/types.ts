export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number;
  types: string;
  count: number;
};

export type CartSliceState = {
  totalPrice: number;
  pizzas: CartItem[];
};
