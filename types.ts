
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ingredients?: string[];
}

export type Category = 'Tudo' | 'Caseirinhos' | 'Bolos no Pote' | 'Brownies' | 'Doces';

export interface CartItem extends Product {
  quantity: number;
}

export type OrderStatus = 'pendente' | 'preparando' | 'entrega' | 'concluido';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  estimatedTime: string;
  createdAt: number;
}
