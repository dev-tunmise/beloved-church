'use client';

import Container from "@/app/_components/container";
import Link from "next/link";
import { ArrowRightIcon } from "@/app/_components/icons";
import WhatsAppButton from "@/app/_components/whatsapp-button";
import { useState } from "react";
import { usePaystackProduct } from "@/hooks/usePaystackProduct";
import { PaystackProductButton } from "@/app/_components/paystack-button";

// WhatsApp Icon component
const WhatsAppIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Product type definition
interface Product {
  id: number;
  name: string;
  purpose: string;
  image: string;
  price: number;
  category: string;
}

// Products data (showing 3 products on homepage)
const products: Product[] = [
  {
    id: 1,
    name: "Favour Soap",
    purpose: "For attracting divine favour and open doors",
    image: "/images/favor-soap.png",
    price: 63500,
    category: "Soaps"
  },
  {
    id: 4,
    name: "Mercy Soap",
    purpose: "For receiving God's mercy and compassion",
    image: "/images/mercy-soap.png",
    price: 93200,
    category: "Soaps"
  },
  {
    id: 3,
    name: "Breakthrough Soap",
    purpose: "For destroying spiritual barriers and unlocking success",
    image: "/images/breakthrough-soap.png",
    price: 48100,
    category: "Soaps"
  }
];

// Product purchase modal component
function ProductPurchaseModal({ 
  product, 
  onClose, 
  onPurchase 
}: { 
  product: Product; 
  onClose: () => void; 
  onPurchase: (email: string, name: string, phone: string) => void;
}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }
    onPurchase(email, name, phone);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-bold text-dark-purple mb-4">{product.name}</h3>
        <div className="mb-6">
          <p className="text-3xl font-bold text-gold">₦{product.price.toLocaleString()}</p>
          <p className="text-gray-600 mt-2">{product.purpose}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-dark-purple mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-royal-purple focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-dark-purple mb-2">
              Full Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-royal-purple focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-dark-purple mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+234 XXX XXX XXXX"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-royal-purple focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-royal-purple to-dark-purple text-white py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300"
          >
            Proceed to Payment
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          After payment, you'll be redirected to WhatsApp to complete your order
        </p>
      </div>
    </div>
  );
}

export function TDGIProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const { processPaymentWithWhatsApp, isConfigured } = usePaystackProduct();

  const handleProductClick = (product: Product) => {
    // Redirect to checkout page with product details
    const productQuery = encodeURIComponent(JSON.stringify({
      name: product.name,
      price: product.price,
      category: product.category
    }));
    window.location.href = `/checkout?product=${productQuery}`;
  };

  const handlePurchase = (email: string, name: string, phone: string) => {
    if (!selectedProduct) return;

    setIsProcessing(true);
    setSelectedProduct(null);

    const [firstName, ...lastNameParts] = name.split(' ');
    const lastName = lastNameParts.join(' ');

    processPaymentWithWhatsApp({
      productName: selectedProduct.name,
      productId: selectedProduct.id,
      price: selectedProduct.price,
      email,
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      phone: phone || undefined,
      category: selectedProduct.category,
    });

    // Reset processing state after a delay
    setTimeout(() => setIsProcessing(false), 3000);
  };

  const handleWhatsAppOrder = (product: Product) => {
    const message = encodeURIComponent(`Hello, I would like to order: ${product.name} - ₦${product.price.toLocaleString()}`);
    window.open(`https://wa.me/2347069609892?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Anointed Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
            TDGI Enterprise Products
          </h2>
          <p className="text-gray-600 text-lg">
            Blessed and anointed products for healing, favour, breakthrough, and divine connections
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold">
              <div className="relative aspect-square overflow-hidden bg-white p-6">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div 
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('${product.image}')`
                    }}
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gold text-dark-purple px-4 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                    Blessed
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-royal-purple text-xs font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-dark-purple mb-2 group-hover:text-royal-purple transition-colors">
                  {product.name}
                </h3>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-gold">₦{product.price.toLocaleString()}</p>
                </div>
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {product.purpose}
                  </p>
                </div>
                
                <PaystackProductButton
                  productName={product.name}
                  onPaymentClick={() => handleProductClick(product)}
                  loading={isProcessing}
                  disabled={isProcessing}
                />
                
                <button
                  onClick={() => handleWhatsAppOrder(product)}
                  className="w-full mt-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:from-green-700 hover:to-green-800 text-sm"
                >
                  <WhatsAppIcon size={18} />
                  Order via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/tdgi"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-royal-purple to-dark-purple text-white px-8 py-4 rounded-lg font-semibold hover:from-dark-purple hover:to-royal-purple transition-all duration-300 shadow-lg"
          >
            View All Products
            <ArrowRightIcon size={18} />
          </Link>
        </div>
        
        {/* WhatsApp Button for Product Orders */}
        <WhatsAppButton />
      </Container>

      {/* Product Purchase Modal */}
      {selectedProduct && (
        <ProductPurchaseModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onPurchase={handlePurchase}
        />
      )}
    </section>
  );
}
