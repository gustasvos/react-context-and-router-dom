import { useContext } from "react";
import { AppContext } from "../App";
import ChangeProfile from "../components/ChangeProfile";

const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      PROFILE, user is: {username}
      <ChangeProfile />
    </div>
  );
};

export default Profile;
