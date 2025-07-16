import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import Introduction from "./components/Introduction";
import Tab from "./components/Tab";
import Global from "./components/Global";
import FeesSection from "./components/FeesSection";
import BusinessNetworkExpansion from "./components/BusinessNetworkExpansion";
import SupportSection from "./components/SupportSection";
import Testimonial from "./components/Testimonial";
import MovingNewsCards from "./components/MovingNewsCards";
import CompanyLogos from "./components/CompanyLogos";
function App() {
  return (
    <div className="font-sans">
      <TopHeader/>
      <Navbar />
      <Hero />
      <Introduction/>
      <Tab/>
      <Global/>
      <BusinessNetworkExpansion/>
      <FeesSection/>
      <SupportSection/>
      <Testimonial/>
       <div className="h-1 w-full bg-gradient-to-r from-red-600 via-purple-700 via-[#0000ff] to-[#00ff00]"></div>
      <MovingNewsCards/>
      <CompanyLogos/>
      <CTASection />
       <div className="h-1 w-full bg-gradient-to-r from-red-600 via-purple-700 via-[#0000ff] to-[#00ff00]"></div>
      <Footer />
    </div>
  );
}
export default App;
