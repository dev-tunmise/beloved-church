import Container from "@/app/_components/container";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-dark-purple text-white">
      <Container>
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div>
              <div className="flex items-center space-x-3 mb-">
                <div className="relative w-20 h-20 pl-0">
                  <Image
                    src="/images/beloved-logo.png"
                    alt="Beloved New Beginning Ministries"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* <span className="text-xl font-bold">Beloved New Beginning Ministries</span> */}
              </div>
              <p className="text-gray-200 text-sm mb-4">
                Walking in Royal Grace and Purity. Spreading God's love to all nations.
              </p>
              <div>
                <div className="flex gap-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors text-white hover:text-dark-purple"
                    aria-label="Facebook"
                  >
                    <svg width="18" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors text-white hover:text-dark-purple"
                    aria-label="TikTok"
                  >
                    <svg width="14" height="16" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors text-white hover:text-dark-purple"
                    aria-label="YouTube"
                  >
                    <svg width="18" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors text-white hover:text-dark-purple"
                    aria-label="X (Twitter)"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-200 hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/sermons" className="text-gray-200 hover:text-gold transition-colors">
                    Sermons
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-200 hover:text-gold transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/giving" className="text-gray-200 hover:text-gold transition-colors">
                    Give
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gold">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>6 Ibrahim Alade Street</li>
                <li>Erunwen, Ikorodu, Lagos</li>
                <li>Phone: 07069609892</li>
                <li>Email: toyinjato8@gmail.com</li>
              </ul>
            </div>

            {/* Service Times */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gold">Service Times</h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>Sunday: 8:00 AM - 10:00 AM</li>
                <li>Thursday: 5:00 PM - 7:00 PM</li>
                <li>Last Friday: 12:00 AM - 2:00 AM (Vigil)</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 text-center text-sm text-gray-300">
            <p>
              © {new Date().getFullYear()} Beloved New Beginning Ministries. All rights reserved.
            </p>
            <p className="mt-2">
              Developed by <a href="https://websetly.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-200 transition-colors">Websetly</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
