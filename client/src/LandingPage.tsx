import Header from "./components/components/Header";
import LandingFooter from "./components/components/LandingFooter";
import LandingHero from "./components/components/LandingHero";

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <LandingHero/>
      <LandingFooter/>
    </div>
  );
};

export default LandingPage;
