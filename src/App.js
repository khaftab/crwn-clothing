import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./Components/header/Header";
import HomePage from "./Pages/homepage/HomePage";
import ShopPage from "./Pages/shop/ShopPage";
import SignInAndSignUpPage from "./Pages/signIn-and-signUp/SignInAndSignUpPage";
import Checkout from './Pages/checkout/Checkout'
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useEffect } from "react";
import { connect } from 'react-redux'
import { selectCurrentUser } from "./redux/user/userSelector";
import { createStructuredSelector } from 'reselect'
import { checkUserSession } from "./redux/user/userActions";


function App({ currentUser, checkUserSession }) {


  useEffect(() => {
    checkUserSession()
  }, [])


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path='/checkout' component={Checkout} />
        <Route path="/signin" render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
