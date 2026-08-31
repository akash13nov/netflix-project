import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when the component unmount
    return () => unsubscribe();
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/80 to-transparent">
      <div className="m-auto w-4/5 p-6.5 flex justify-between items-center ">
        <img className="h-10" src={LOGO} alt="logo" />
        {user && (
          <div className="flex gap-4 items-center">
            <img src={user?.photoURL} alt="Profile-icon" className="h-8" />
            <button
              onClick={handleSignOut}
              className="text-white bg-red-500 rounded-2xl px-4 py-1.5 cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
