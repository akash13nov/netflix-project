import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <header className="bg-gradient-to-b from-black">
      <div className="m-auto w-4/5 p-6.5 flex justify-between items-center ">
        <img
          className="h-10"
          src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAfwxusEeCteu-L_QQ56_G2cohyI1E4BIh2uyr5t9gDhH0CKWHw3NVhndjuF7yQ26z3cYq_lnzY5pP6OarHyiibuiy2jIIa5sIhSvgal1S6u9YDVAyVoX6osPniEKN-dYy77H_pLfOCD7.svg"
          alt="logo"
        />
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
