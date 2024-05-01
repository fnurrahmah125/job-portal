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
    <div className="grid place-content-center p-4 py-20">
      {userData && (
        <div className="text-center">
          <img
            src={userData.image_url}
            alt={userData.name}
            className="mx-auto mb-4 h-32 rounded-full border-2 border-slate-600 object-cover md:h-40"
          />
          <h1 className="mb-2 text-3xl font-medium tracking-wide md:text-6xl">
            {userData.name}
          </h1>
          <p>{userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
