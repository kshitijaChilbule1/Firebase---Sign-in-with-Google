import "../App.css";
import NavbarComp from "../components/NavbarComp";
import { signInWithGoogle } from "../Firebase";

function Login() {
  return (
      <>
      <NavbarComp/>
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
      </>
  );
}

export default Login;