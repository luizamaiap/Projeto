
import { Product } from './types';

export const CATEGORIES = ['Tudo', 'Caseirinhos', 'Bolos no Pote', 'Brownies', 'Doces'] as const;

export const PRODUCTS: Product[] = [
  // Caseirinhos
  {
    id: 'c1',
    name: 'Cenoura Espacial',
    description: 'Bolo de cenoura caseiro com cobertura cremosa de chocolate ao leite.',
    price: 16.00,
    image: 'https://guiadacozinha.com.br/wp-content/uploads/2024/05/bolodecenoura-1024x576.jpg',
    category: 'Caseirinhos',
    ingredients: ['Cenouras frescas', 'Ovos caipiras', 'Farinha de trigo premium', 'Açúcar orgânico', 'Chocolate 33% cacau', 'Manteiga sem sal']
  },
  {
    id: 'c2',
    name: 'Brigadeiro Cósmico',
    description: 'Bolo de chocolate com massa macia e cobertura cremosa de chocolate ao leite.',
    price: 16.00,
    image: 'https://www.sabornamesa.com.br/media/k2/items/cache/ee9bc87b420b756ad4171d9571626ba4_XL.jpg',
    category: 'Caseirinhos',
    ingredients: ['Cacau em pó 50%', 'Leite condensado moça', 'Creme de leite fresco', 'Manteiga', 'Farinha de trigo', 'Granulado gourmet']
  },
  {
    id: 'c3',
    name: 'Dueto Intergaláctico',
    description: 'Bolo de chocolate recheado com creme de leite Ninho e cobertura de brigadeiro.',
    price: 16.00,
    image: 'https://recipe-cookbook.com/wp-content/uploads/2024/05/Bolo-de-Chocolate-com-Recheio-de-Ninho-Recipe-cookbook.jpg',
    category: 'Caseirinhos',
    ingredients: ['Leite Ninho original', 'Cacau belga', 'Leite condensado', 'Creme de leite', 'Farinha de trigo', 'Açúcar de confeiteiro']
  },
  // Bolos no Pote
  {
    id: 'p1',
    name: 'Morangoláxia',
    description: 'Camadas de massa, creme de leite Ninho e geleia de morango fresca.',
    price: 18.00,
    image: 'https://minhasreceitinhas.com.br/wp-content/uploads/2023/07/copo-da-felicidade-de-morango-e1689109303436.jpg',
    category: 'Bolos no Pote',
    ingredients: ['Morangos selecionados', 'Leite Ninho', 'Creme de leite', 'Massa chiffon de baunilha', 'Calda de leite']
  },
  {
    id: 'p2',
    name: 'Cometa Tropical',
    description: 'Bolo de baunilha com creme de coco cremoso e pedaços de abacaxi docinhos.',
    price: 16.00,
    image: 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2020/07/13/bolo-abacaxi-coco-potinho.jpg',
    category: 'Bolos no Pote',
    ingredients: ['Abacaxi fresco', 'Coco ralado natural', 'Leite de coco', 'Creme de confeiteiro', 'Massa de baunilha']
  },
  {
    id: 'p3',
    name: 'Prestígio Galáctico',
    description: 'Bolo de chocolate com recheio cremoso de coco e cobertura de brigadeiro.',
    price: 16.00,
    image: 'https://recipe-cookbook.com/wp-content/uploads/2024/11/Como-fazer-Bolo-de-Pote-Recipe-CookBook.com_-1024x700.jpg',
    category: 'Bolos no Pote',
    ingredients: ['Coco ralado seco', 'Leite condensado', 'Cacau 50%', 'Chocolate meio amargo', 'Massa de chocolate']
  },
  {
    id: 'p4',
    name: 'Cereja Estelar',
    description: 'Massa de chocolate, brigadeiro 50% cacau, cerejas e creme branco suave.',
    price: 18.00,
    image: 'https://cdn.shopify.com/s/files/1/2110/6029/files/black-forest-cake-mini-dessert-cups-blog-7_1024x1024.jpg?v=1568723024',
    category: 'Bolos no Pote',
    ingredients: ['Cerejas em calda', 'Kirsch (opcional)', 'Creme de leite', 'Chocolate 50%', 'Chantilly fresco']
  },
  // Brownies
  {
    id: 'b1',
    name: 'Eclipse Doce',
    description: 'Brownie tradicional feito com chocolate nobre e casquinha crocante.',
    price: 11.00,
    image: 'https://mui.kitchen/__export/1638217441168/sites/muikitchen/img/2021/11/29/disexo_sin_txtulo_-_2021-11-29t172352_785.jpg_1896662142.jpg',
    category: 'Brownies',
    ingredients: ['Chocolate meio amargo nobre', 'Manteiga francesa', 'Cacau 100%', 'Açúcar mascavo', 'Ovos', 'Nozes (opcional)']
  },
  {
    id: 'b2',
    name: 'Brookie Lunar',
    description: 'A união perfeita entre brownie e cookie em uma única mordida.',
    price: 14.00,
    image: 'https://inspiredbycharm.com/wp-content/uploads/2021/05/Chocolate-Chip-Cookie-Brownie-Recipe-500x500.jpg',
    category: 'Brownies',
    ingredients: ['Massa de Brownie', 'Massa de Cookie com gotas de chocolate', 'Essência de baunilha', 'Manteiga', 'Açúcar refinado']
  },
  // Doces
  {
    id: 'd1',
    name: 'Morango Estelar',
    description: 'Morango fresco envolto em brigadeiro de leite Ninho e chocolate nobre.',
    price: 12.00,
    image: 'https://i.pinimg.com/originals/ca/a8/08/caa8083576a442fefb4937f805e1d2f6.jpg',
    category: 'Doces',
    ingredients: ['Morango inteiro fresco', 'Brigadeiro de leite Ninho', 'Banho de chocolate ao leite nobre']
  },
  {
    id: 'd2',
    name: 'Caixinha Quatro Estrelas',
    description: 'Mix de 4 brigadeiros gourmet: Ninho, Belga, Oreo e Beijinho.',
    price: 18.00,
    image: 'https://www.portugalplease.com/uploads/parceiros/1314/restantes/restantes-6274f986cd869-187214528_2336845163114341_2207121145115601496_n.jpg',
    category: 'Doces',
    ingredients: ['Leite condensado', 'Chocolate Belga Callebaut', 'Biscoito Oreo', 'Coco ralado', 'Leite Ninho']
  }
];
