// import { useEffect, useState } from "react";

// export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY < 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   return (
//     <div className="fixed bottom-4 right-4 z-[99] md:bottom-8 md:right-8">
//       {isVisible && (
//         <div
//           onClick={scrollToTop}
//           aria-label="scroll to top"
//           className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#D96625] text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
//         >
//           <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
//         </div>
//       )}
//     </div>
//   );
// }
