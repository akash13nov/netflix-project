import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { ARROW_DOWN_ICON, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

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

  const handleGptSearch = () => {
    // toggle gpt search
    dispatch(toggleGptSearchView());
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/80 to-transparent">
      <div className="m-auto w-11/12 py-5 flex justify-between items-center ">
        <img className="h-8" src={LOGO} alt="logo" />
        {user && (
          <div className="flex gap-4 items-center">
            <div>
              <select
                className="appearance-none px-3 py-1.5 text-left pr-8 bg-transparent border-[1px] border-white rounded-full text-white text-base font-medium cursor-pointer transition-colors duration-200 hover:bg-white hover:text-black focus:outline-none bg-[length:0.7rem] bg-[right_0.7rem_center] bg-no-repeat"
                style={{ backgroundImage: `url("${ARROW_DOWN_ICON}")` }}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}
                    className="bg-black text-white"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleGptSearch}
              className="shrink-0 flex items-center justify-center gap-1 text-white cursor-pointer border border-white rounded-3xl px-3 py-1.5 transition-colors duration-200 hover:bg-white hover:text-black"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Search
            </button>
            <img src={user?.photoURL} alt="Profile-icon" className="h-8" />
            <button
              onClick={handleSignOut}
              className="text-white bg-red-500 rounded-3xl px-5 py-2 cursor-pointer"
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
