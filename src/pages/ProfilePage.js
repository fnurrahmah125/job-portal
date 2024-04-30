import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataString = Cookies.get("userData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    }
  }, []);

  return (
    <div className="p-4 grid place-content-center py-20">
      {userData && (
        <div className="text-center">
          <img
            src={userData.image_url}
            alt={userData.name}
            className="h-32 md:h-40 object-cover border-2 border-slate-600 rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl md:text-6xl font-medium tracking-wide mb-2">
            {userData.name}
          </h1>
          <p>{userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
