import { Outlet } from "react-router-dom";
import UserPref from "./lib/userPrefContext";
import { useState } from "react";

export interface UserPrefIF {
  showBanner: boolean;
}

const userPreferences: UserPrefIF = {
  showBanner: true,
};
function App() {
  const [userPref, setUserPref] = useState<UserPrefIF>(userPreferences);
  return (
    <UserPref.Provider value={{ userPref, setUserPref }}>
      <div>
        <Outlet />
      </div>
    </UserPref.Provider>
  );
}

export default App;
