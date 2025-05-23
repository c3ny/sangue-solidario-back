import { GoogleLogin } from "@react-oauth/google";
import e from "express";
import { useState } from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState(null);
    const [profilePic, setprofilePic] = useState(null);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(null);
  
    const handleLoginSuccess = (response) => {
    console.log("Login Success: currentUser:", response);
    const {profileObj: {name, email, imageUrl}} = response;
    setName(name);
    setEmail(email);
    setprofilePic(imageUrl);
    setIsLoggedIn(true);
    setLoading(false);
  };

  return (
    <div>
      <h1> Google Login</h1>
      <GoogleLogin
        clientid_id="108355868138-2rk6jloljelgq3nlp57ugeb5hljviqkc.apps.googleusercontent.com"
        buttonText="Continuar com o Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        logo_alignment="left"
        logo_width="50px"
        logo_height="50px"
      />
      {isLoggedIn ?  ( <div>
        <h1>Login com o Google</h1>
        <img className="profile" src={profilePic} alt="Profile" />
        <h2>Name: {name}</h2>
        <h2>Email: {email} </h2>
        <h2>Profile Picture: {profilePic}</h2>
        <button onClick={handleLogout}>Logout</button>
        </div>
     ) : ("")}
      
      </div>
  );
}

export default App;