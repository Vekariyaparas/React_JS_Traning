import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../Firebase-config";
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {
    const navigate = useNavigate()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then(() => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate("/")
        })
    }

  return <div>
    <p>Sign In With Google To Continue</p>
    <button onClick={signInWithGoogle}>Sign In With Google</button>
  </div>;
};

export default Login;
