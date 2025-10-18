'use client';

import Container from "@/app/_components/container";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/app/_components/icons";
import WhatsAppButton from "@/app/_components/whatsapp-button";

export function TDGIProductsSection() {
  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(`Hello, I would like to order: ${productName}`);
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
        
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {/* TGDI Product 1 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/favour-soap.jpg"
                alt="Favour Soap"
                fill
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-dark-purple mb-2">
                Favour Soap
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                For attracting divine favour and open doors
              </p>
              <button
                onClick={() => handleOrder('Favour Soap')}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:from-green-700 hover:to-green-800 text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Order Now
              </button>
            </div>
          </div>

          {/* TGDI Product 2 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/connection-soap.jpg"
                alt="Connection Soap"
                fill
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-dark-purple mb-2">
                Connection Soap
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                For destiny helpers and divine relationships
              </p>
              <button
                onClick={() => handleOrder('Connection Soap')}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:from-green-700 hover:to-green-800 text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Order Now
              </button>
            </div>
          </div>

          {/* TGDI Product 3 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/breakthrough-soap.jpg"
                alt="Breakthrough Soap"
                fill
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-dark-purple mb-2">
                Breakthrough Soap
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                For destroying spiritual barriers and unlocking success
              </p>
              <button
                onClick={() => handleOrder('Breakthrough Soap')}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:from-green-700 hover:to-green-800 text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Order Now
              </button>
            </div>
          </div>

          {/* TGDI Product 4 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/glory-oil.jpg"
                alt="Glory Oil"
                fill
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-dark-purple mb-2">
                Glory Oil
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                For healing, deliverance, and divine touch
              </p>
              <button
                onClick={() => handleOrder('Glory Oil')}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:from-green-700 hover:to-green-800 text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Order Now
              </button>
            </div>
          </div>
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
    </section>
  );
}
