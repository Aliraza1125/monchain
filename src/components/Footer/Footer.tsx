import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <div className="mb-4">
              <Link href="/">
                <Image 
                  src="/png-2-trimmed.png"
                  alt="Monchain Logo"
                  width={200}
                  height={40}
                  className="h-auto"
                />
              </Link>
            </div>
            <p className="text-sm text-[#666666]">
              AI-Powered Security for Your Crypto Assets
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-medium text-[#1A1A1A] mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#0066FF]">Features</a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#0066FF]">How it Works</a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#0066FF]">Documentation</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-medium text-[#1A1A1A] mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#0066FF]">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#0066FF]">Contact</a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#0066FF]">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-sm font-medium text-[#1A1A1A] mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#0066FF]">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#666666] hover:text-[#0066FF]">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#E5E5E5] pt-6 text-center">
          <p className="text-sm text-[#666666]">
            Copyright © {currentYear} Monchain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;