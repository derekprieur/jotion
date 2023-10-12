import Footer from "@/components/marketing/Footer";
import Heading from "@/components/marketing/Heading";
import Heroes from "@/components/marketing/Heroes";

const MarketingPage = () => {
  return (
    <div className="flex min-h-full flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-1 flex-col items-center justify-center gap-y-8 px-6 pb-10 text-center md:justify-start">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
