import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Contact | माँ बगलामुखी मंदिर | Pandit Nandkishor - Maa Baglamukhi Mandir",
  description: "माँ बगलामुखी मंदिर - संपूर्ण पूजा विधि, मंत्र जाप, तांत्रिक अनुष्ठान, एवं पंडित नंदकिशोर जी से संपर्क करें। Maa Baglamukhi Mandir for Puja Vidhi, Mantra Jaap & Anushthan by Pandit Nandkishor.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="संपर्क करें"
        description="हमसे संपर्क करें, पंडित नंदकिशोर जोशी जी की पूजा विधियों और मार्गदर्शन के लिए हम हमेशा तैयार हैं। आपकी समस्याओं का समाधान और जीवन में शांति प्राप्त करने के लिए हम हर कदम पर आपके साथ हैं। माँ बगलामुखी की कृपा और नंदकिशोर जोशी जी के आशीर्वाद से आपके जीवन में सकारात्मक बदलाव आएगा।"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
