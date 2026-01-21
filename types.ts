export type Category = 'Tudo' | 'Tortas' | 'Bolos' | 'Doces' | 'Bebidas';
export type Tab = 'menu' | 'pedidos' | 'contato'; // <--- TIPO NOVO AQUI

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  ingredients?: string[]; // Adicionado para evitar erro no OrderDetail
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'preparando' | 'entrega' | 'concluido';
  estimatedTime?: string;
  createdAt: number;
}