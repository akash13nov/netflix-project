import { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    //console.log(email.current.value);
    //console.log(password.current.value);

    const message = validate(
      email.current.value,
      password.current.value,
      !isSignInForm ? name.current.value : undefined,
    );
    //console.log(message);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <Header />
        <div className="w-md p-13 bg-black/70 rounded">
          <h1 className="text-3xl font-bold text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4.5 flex flex-col gap-3.5 w-full"
          >
            {!isSignInForm && (
              <input
                ref={name}
                className="bg-gray-700 p-3 rounded text-white"
                type="text"
                placeholder="Name"
              />
            )}
            <input
              ref={email}
              className="bg-gray-700 p-3 rounded text-white"
              type="text"
              placeholder="Email"
            />
            <input
              ref={password}
              className="bg-gray-700 p-3 rounded text-white"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-500">{errorMessage}</p>
            <button
              className="text-white p-3 mt-3.5 rounded text-xl bg-red-600 cursor-pointer"
              type="submit"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-gray-400">
              {isSignInForm ? "New to Netflix?" : "Already Register"}
              <span
                onClick={toggleSignUpForm}
                className="text-white underline cursor-pointer pl-1 "
              >
                {isSignInForm ? "Sign up now" : "Sign in now"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
