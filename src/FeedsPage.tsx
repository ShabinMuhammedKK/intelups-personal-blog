import Header from "./components/components/Header";
import FeedsContent from "./components/components/FeedsContent";
import FeedsFooter from "./components/components/FeedsFooter";
import FeedsBanner from "./components/components/FeedsBanner";
import { useContext } from "react";
import UserPref from "./lib/userPrefContext";
import FeedsNav from "./components/components/FeedsNav";

const FeedsPage = () => {
  const userPrefCtxValue = useContext(UserPref);

  if (!userPrefCtxValue) return null;
  const { userPref, setUserPref } = userPrefCtxValue;

  const handleCloseBanner = function () {
    setUserPref((prev) => ({ ...prev, showBanner: false }));
  };

  return (
    <div className=" h-screen flex flex-col">
      <Header />
      {userPref.showBanner && <FeedsBanner closeBanner={handleCloseBanner} />}
      <FeedsNav/>
      <FeedsContent />
      <FeedsFooter />
    </div>
  );
};

export default FeedsPage;
