import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/header/Header";
import HomePage from "./Pages/homepage/HomePage.jsx";
import ShopPage from "./Pages/shop/ShopPage";
import SignInAndSignUpPage from "./Pages/signIn-and-signUp/SignInAndSignUpPage";
import { auth } from "./firebase/firebase.utils";
import { useEffect, useState } from "react";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
