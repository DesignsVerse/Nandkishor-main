import BlogSection from "@/components/Blog/1";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | माँ बगलामुखी मंदिर | Pandit Nandkishor - Maa Baglamukhi Mandir",
  description: "माँ बगलामुखी मंदिर - संपूर्ण पूजा विधि, मंत्र जाप, तांत्रिक अनुष्ठान, एवं पंडित नंदकिशोर जी से संपर्क करें। Maa Baglamukhi Mandir for Puja Vidhi, Mantra Jaap & Anushthan by Pandit Nandkishor.",
};

const BlogPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="ब्लॉग और लेख "
        description="हमारे नए ब्लॉग और लेख देखो!"
      />
      <BlogSection />
    </>
  );
};

export default BlogPage;
