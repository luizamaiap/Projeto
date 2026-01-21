import React, { useState, useMemo, useEffect } from 'react';
import { Product, Category, CartItem, Order, Tab } from './types';
import { PRODUCTS, CATEGORIES } from './constants';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import ProductCard from './components/ProductCard';
import BottomNav from './components/BottomNav';
import Banner from './components/Banner';
import SectionTitle from './components/SectionTitle';
import CartDrawer from './components/CartDrawer';
import ContactView from './components/ContactView';
import OrdersView from './components/OrdersView';
import OrderDetailView from './components/OrderDetailView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('menu');
  const [activeCategory, setActiveCategory] = useState<Category>('Tudo');
  
  // [REQ 7] Web Storage: Inicializa estado lendo do LocalStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('chocolaxia_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // [REQ 7] Web Storage: Lê histórico de pedidos
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('chocolaxia_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  
  // [REQ 5] Requisição assíncrona: Estados de loading e erro
  const [isLoading, setIsLoading] = useState(false);

  // [REQ 7] Web Storage: Salva carrinho sempre que mudar
  useEffect(() => {
    localStorage.setItem('chocolaxia_cart', JSON.stringify(cart));
  }, [cart]);

  // [REQ 7] Web Storage: Salva pedidos sempre que mudar
  useEffect(() => {
    localStorage.setItem('chocolaxia_orders', JSON.stringify(orders));
  }, [orders]);

  // [REQ 5] Simulação de Fetch (Carregamento inicial)
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setIsLoading(true);
        // Simula delay de rede (Promise)
        await new Promise(resolve => setTimeout(resolve, 800));
        console.log("Cardápio carregado da API simulada.");
      } catch (error) {
        console.error("Erro ao carregar dados", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInitialData();
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => activeCategory === 'Tudo' || p.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = useMemo(() => 
    cart.reduce((total, item) => total + (item.price * item.quantity), 0),
    [cart]
  );

  // CORREÇÃO AQUI: Movemos o cálculo para cá (antes do IF)
  const totalItemsCount = useMemo(() => 
    cart.reduce((acc, i) => acc + i.quantity, 0), 
    [cart]
  );

  // [REQ 6] Async/Await + Try/Catch no Checkout
  const handleCheckout = async () => {
    if (cart.length === 0) return;
    
    setIsLoading(true);

    try {
        // Simula envio para servidor (2 segundos)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const newOrder: Order = {
            id: Math.random().toString(36).substr(2, 6).toUpperCase(),
            items: [...cart],
            total: cartTotal,
            status: 'preparando',
            estimatedTime: '25-40 min',
            createdAt: Date.now(),
        };

        // [REQ 8] API HTML5: Vibration API
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }

        setOrders([newOrder, ...orders]);
        setCart([]); 
        setIsCartOpen(false);
        setActiveTab('pedidos');
        
    } catch (error) {
        alert("Erro ao processar pedido.");
    } finally {
        setIsLoading(false);
    }
  };

  // Loading Screen Inicial (Este IF causava o erro se houvesse hooks abaixo dele)
  if (isLoading && activeTab === 'menu' && cart.length === 0 && orders.length === 0) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F5F1]">
            <div className="w-12 h-12 border-4 border-[#8B4513] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-[#8B4513] font-bold animate-pulse">Carregando cardápio...</p>
        </div>
      );
  }

  return (
    <div className="min-h-screen pb-24 bg-[#F9F5F1]">
      <Header 
        cartCount={totalItemsCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main className="px-6 max-w-2xl mx-auto">
        {activeTab === 'menu' && (
          <div className="animate-in fade-in duration-500">
            <Banner />
            <CategoryBar 
                categories={Array.from(CATEGORIES)} 
                activeCategory={activeCategory} 
                onCategoryChange={setActiveCategory} 
            />
            
            <div className="mb-10">
                <SectionTitle title={activeCategory} />
                <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                  {filteredProducts.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onAdd={() => addToCart(product)} 
                    />
                  ))}
                </div>
            </div>
          </div>
        )}

        {activeTab === 'contato' && <ContactView />}

        {activeTab === 'pedidos' && (
          selectedOrderId && orders.find(o => o.id === selectedOrderId) ? (
            <OrderDetailView 
                order={orders.find(o => o.id === selectedOrderId)!} 
                onBack={() => setSelectedOrderId(null)} 
            />
          ) : (
            <OrdersView 
                orders={orders} 
                onGoToMenu={() => setActiveTab('menu')} 
                onOrderClick={(order) => setSelectedOrderId(order.id)} 
            />
          )
        )}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={(t) => { setActiveTab(t); setSelectedOrderId(null); }} />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        total={cartTotal} 
        onUpdateQuantity={updateQuantity} 
        onRemove={removeFromCart} 
        onCheckout={handleCheckout} 
      />
      
      {/* Loading Overlay (Checkout) */}
      {isLoading && isCartOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
             <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-[#8B4513] border-t-transparent mb-4"></div>
                <h3 className="text-[#8B4513] font-bold text-lg">Processando pedido...</h3>
                <p className="text-slate-400 text-xs mt-1">Conectando ao servidor...</p>
             </div>
          </div>
      )}
    </div>
  );
};

export default App;