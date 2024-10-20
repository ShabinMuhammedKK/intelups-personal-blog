import Header from "./components/components/Header";
import FeedsContent from "./components/components/FeedsContent";
import FeedsFooter from "./components/components/FeedsFooter";
import FeedsBanner from "./components/components/FeedsBanner";
import { useContext, useState } from "react";
import UserPref from "./lib/userPrefContext";
import FeedsNav from "./components/components/FeedsNav";

const FeedsPage = () => {
  const userPrefCtxValue = useContext(UserPref);
  const [contentCategoy, setContentCategoy] = useState("");

  if (!userPrefCtxValue) return null;
  const { userPref, setUserPref } = userPrefCtxValue;

  const handleCloseBanner = function () {
    setUserPref((prev) => ({ ...prev, showBanner: false }));
  };

  const handleContentCategory = (category: string) => {
    setContentCategoy(category);
    
  };




  return (
    <div className="min-h-screen flex flex-col">
      <Header isAdmin={false} />
      {userPref.showBanner && <FeedsBanner closeBanner={handleCloseBanner} />}
      <FeedsNav contentCategory={handleContentCategory} />
      <FeedsContent contentCategory={contentCategoy} />
      <FeedsFooter />
    </div>
  );
};

export default FeedsPage;
