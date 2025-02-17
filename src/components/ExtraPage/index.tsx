"use client";

import Image from "next/image";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const BaglamukhiSection = () => {
  return (
    <section className="bg-gradient-to-b from-yellow-50 to-yellow-100 text-black py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Content Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl  text-yellow-700 mb-3">सम्पूर्ण समाधान का मार्ग!</h1>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-5">
              माँ बगलामुखी की कृपा से जीवन में सफलता, शांति और समृद्धि पाएं
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
            माँ बगलामुखी के दिव्य अनुष्ठान और साधना से अपने जीवन की बाधाओं को दूर करें और सफलता का मार्ग प्रशस्त करें। पंडित नंदकिशोर जोशी जी के मार्गदर्शन में की गई पूजा से आप अपने जीवन में शांति, सुरक्षा और समृद्धि प्राप्त कर सकते हैं। 
            </p>
            <ul className="list-none space-y-3 mb-6">
              {[
                "जीवन की सभी कठिनाइयों से छुटकारा पाएं",
                "शत्रुओं पर विजय प्राप्त करें और कानूनी समस्याओं का समाधान करें",
                "नौकरी, व्यवसाय और आर्थिक मामलों में अपार सफलता",
                "वाणी में प्रभावशाली सुधार और रिश्तों में मधुरता",
              ].map((text, index) => (
                <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <FaCheck className="text-green-500 mr-3" />
                  <span className="flex-grow text-gray-800 font-medium">{text}</span>
                </li>
              ))}
            </ul>
            <a href="https://api.whatsapp.com/send/?phone=919752165718&text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%2C+%E0%A4%A8%E0%A4%82%E0%A4%A6%E0%A4%95%E0%A4%BF%E0%A4%B6%E0%A5%8B%E0%A4%B0+%E0%A4%9C%E0%A5%80%2C+%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87+%E0%A4%AE%E0%A4%BE%E0%A4%81+%E0%A4%AC%E0%A4%97%E0%A4%B2%E0%A4%BE%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%80+%E0%A4%AE%E0%A4%82%E0%A4%A6%E0%A4%BF%E0%A4%B0+%E0%A4%AE%E0%A5%87%E0%A4%82+%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE+%E0%A4%95%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%A8%E0%A5%80+%E0%A4%B9%E0%A5%88%E0%A5%A4&
" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#d55f26] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-700 transition duration-300">
                अभी बुक करें
              </button>
            </a>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/injoy.jpg"
              alt="Maa Baglamukhi"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaglamukhiSection;
