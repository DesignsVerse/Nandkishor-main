import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-r from-[#c0392b] to-[#e67e22] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Image
              src="/images/logo/LOGO-2.png" 
              alt="Panditjee Online logo" 
              width={200} 
              height={100} 
              className="mb-4"
            />
            <p className="italic mb-4">&quot;✔ शुद्ध वैदिक विधियों से अपनी पूजा संपन्न कराएं 🕉️
💬 आज ही हमारे अनुभवी पंडित जी से परामर्श करें!</p>
            
            <div className="mt-4">
              <p className="font-bold mb-2">Stay In Touch With Us:</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg></Link>
                <Link href="#" className="text-white">📸</Link>
                <Link href="#" className="text-white">📌</Link>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">त्वरित लिंक</h3>
            <ul>
              <li className="mb-2"><Link href="/" className="text-white">होम</Link></li>
              <li className="mb-2"><Link href="/about" className="text-white">गैलरी</Link></li>
              <li className="mb-2"><Link href="/blog" className="text-white">समाचार</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-white">संपर्क करें</Link></li>
            </ul>
          </div>
          
          {/* Puja Services */}
          <div>
            <h3 className="font-bold mb-4">पूजा सेवाएं </h3>
            <ul>
              <li className="mb-2"><Link href="/services/1" className="text-white">शत्रु बाधा निवारण पूजा</Link></li>
              <li className="mb-2"><Link href="/services/2" className="text-white">अनुष्ठान पूजा</Link></li>
              <li className="mb-2"><Link href="/services/3" className="text-white">सम्मोहन तंत्र पूजा</Link></li>
              <li className="mb-2"><Link href="/services/4" className="text-white">लक्ष्मी पूजा</Link></li>
              <li className="mb-2"><Link href="/services/5" className="text-white">विद्वेषण पूजा</Link></li>
              <li className="mb-2"><Link href="/services/6" className="text-white">तंत्र पूजा</Link></li>
              <li className="mb-2"><Link href="/services" className="text-white font-bold">हमारी सेवाएं</Link></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="font-bold mb-4">संपर्क करें</h3>
            <div className="mb-4 flex items-center">
              <span className="mr-2">📍</span>
              <p>
                छापीहेड़ा रोड, नलखेड़ा,<br/>
                आगर मालवा ज़िला, <br/>
                {/* Near Mansi Cross Road, Satellite,<br/> */}
                मध्य प्रदेश - 465445 - India
              </p>
            </div>
            {/* <div className="mb-4 flex items-center">
              <span className="mr-2">📧</span>
              <p>Email: info@panditjeeonline.in</p>
            </div> */}
            <div className="flex items-center">
              <span className="mr-2">📞</span>
              <p>Phone: +91 97521 65718</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p>COPYRIGHT © 2025 <Link href="#">DesignsVerse</Link>. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
