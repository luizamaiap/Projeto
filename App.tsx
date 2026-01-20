
import React, { useState, useMemo } from 'react';
import { Product, Category, CartItem, Order } from './types';
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

export type Tab = 'menu' | 'pedidos' | 'contato';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('menu');
  const [activeCategory, setActiveCategory] = useState<Category>('Tudo');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'Tudo' || p.category === activeCategory;
      return matchesCategory;
    });
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

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 6).toUpperCase(),
      items: [...cart],
      total: cartTotal,
      status: 'preparando',
      estimatedTime: '25-40 min',
      createdAt: Date.now(),
    };

    setOrders([newOrder, ...orders]);
    setCart([]);
    setIsCartOpen(false);
    setActiveTab('pedidos');
  };

  const cartTotal = useMemo(() => 
    cart.reduce((total, item) => total + (item.price * item.quantity), 0),
    [cart]
  );

  const cartCount = useMemo(() => 
    cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const selectedOrder = useMemo(() => 
    orders.find(o => o.id === selectedOrderId),
    [orders, selectedOrderId]
  );

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setSelectedOrderId(null);
  };

  return (
    <div className="min-h-screen pb-24 bg-background-light">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="px-6 max-w-2xl mx-auto">
        {activeTab === 'menu' && (
          <>
            <Banner />
            
            <CategoryBar 
              categories={Array.from(CATEGORIES)} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />

            {activeCategory === 'Tudo' ? (
              CATEGORIES.slice(1).map(cat => {
                const productsInCat = filteredProducts.filter(p => p.category === cat);
                if (productsInCat.length === 0) return null;
                return (
                  <div key={cat} className="mb-10">
                    <SectionTitle title={cat} />
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                      {productsInCat.map(product => (
                        <ProductCard 
                          key={product.id} 
                          product={product} 
                          onAdd={() => addToCart(product)} 
                        />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
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
                )}
              </>
            )}

        {activeTab === 'contato' && <ContactView />}

        {activeTab === 'pedidos' && (
          selectedOrderId && selectedOrder ? (
            <OrderDetailView 
              order={selectedOrder} 
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

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        total={cartTotal}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default App;
