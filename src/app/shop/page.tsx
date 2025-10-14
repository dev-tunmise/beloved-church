'use client';

import Container from "@/app/_components/container";
import { useState } from "react";
import Link from "next/link";

// Sample product data - replace with actual data from your CMS or database
const products = [
  {
    id: 1,
    name: "Herbal Healing Tea",
    price: 24.99,
    image: "/assets/products/tea.jpg",
    description: "Natural herbal blend for wellness and vitality",
    category: "Teas"
  },
  {
    id: 2,
    name: "Immunity Boost Capsules",
    price: 34.99,
    image: "/assets/products/capsules.jpg",
    description: "Strengthen your immune system naturally",
    category: "Supplements"
  },
  {
    id: 3,
    name: "Soothing Herbal Oil",
    price: 19.99,
    image: "/assets/products/oil.jpg",
    description: "Relief and relaxation in a bottle",
    category: "Oils"
  },
  {
    id: 4,
    name: "Detox Herbal Mix",
    price: 29.99,
    image: "/assets/products/detox.jpg",
    description: "Cleanse your body naturally",
    category: "Teas"
  },
  {
    id: 5,
    name: "Energy Herbal Supplement",
    price: 39.99,
    image: "/assets/products/energy.jpg",
    description: "Natural energy boost without caffeine",
    category: "Supplements"
  },
  {
    id: 6,
    name: "Sleep Well Herbal Tea",
    price: 22.99,
    image: "/assets/products/sleep.jpg",
    description: "Peaceful sleep with natural herbs",
    category: "Teas"
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cart, setCart] = useState<any[]>([]);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-purple to-dark-purple text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Natural <span className="text-gold">Herbs Shop</span>
            </h1>
            <p className="text-xl text-gray-200">
              God's natural remedies for health and wellness
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              We believe that God has provided natural remedies through herbs for our health and wellness.
              All our products are carefully selected and prepared with prayer and excellence.
            </p>
          </div>
        </Container>
      </section>

      {/* Shop Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === "all"
                  ? "bg-royal-purple text-white"
                  : "bg-white text-royal-purple border-2 border-royal-purple hover:bg-royal-purple hover:text-white"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory("Teas")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === "Teas"
                  ? "bg-royal-purple text-white"
                  : "bg-white text-royal-purple border-2 border-royal-purple hover:bg-royal-purple hover:text-white"
              }`}
            >
              Teas
            </button>
            <button
              onClick={() => setSelectedCategory("Supplements")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === "Supplements"
                  ? "bg-royal-purple text-white"
                  : "bg-white text-royal-purple border-2 border-royal-purple hover:bg-royal-purple hover:text-white"
              }`}
            >
              Supplements
            </button>
            <button
              onClick={() => setSelectedCategory("Oils")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === "Oils"
                  ? "bg-royal-purple text-white"
                  : "bg-white text-royal-purple border-2 border-royal-purple hover:bg-royal-purple hover:text-white"
              }`}
            >
              Oils
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    🌿
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-gold mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-royal-purple mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-royal-purple">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-gold text-white px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors font-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 left-6 bg-royal-purple text-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm">Cart Items</p>
              <p className="text-2xl font-bold">{cart.length}</p>
            </div>
            <Link
              href="/checkout"
              className="bg-gold text-royal-purple px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors font-semibold"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}

      {/* Shipping & Returns Info */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-bold text-royal-purple mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over $50</p>
            </div>
            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-lg font-bold text-royal-purple mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm">100% natural ingredients</p>
            </div>
            <div>
              <div className="text-4xl mb-4">↩️</div>
              <h3 className="text-lg font-bold text-royal-purple mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30-day money back guarantee</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
