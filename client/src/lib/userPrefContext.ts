import { UserPrefIF } from "@/App";
import { createContext } from "react";

interface UserPrefContexIF {
  userPref: UserPrefIF;
  setUserPref: React.Dispatch<React.SetStateAction<UserPrefIF>>;
}

const UserPref = createContext<UserPrefContexIF | undefined>(undefined);

export default UserPref;
