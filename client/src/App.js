import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Components/header/Header";
import { lazy, useEffect, Suspense } from "react";
import { connect } from 'react-redux'
import { selectCurrentUser } from "./redux/user/userSelector";
import { createStructuredSelector } from 'reselect'
import { checkUserSession } from "./redux/user/userActions";
import GlobalStyle from "./global.styles";
import Spinner from "./Components/spinner/Spinner";
import ErrorBoundary from './Components/error-boundary/ErrorBoundary'
const HomePage = lazy(() => import("./Pages/homepage/HomePage"))
const ShopPage = lazy(() => import("./Pages/shop/ShopPage"))
const SignInAndSignUpPage = lazy(() => import("./Pages/signIn-and-signUp/SignInAndSignUpPage"))
const Checkout = lazy(() => import("./Pages/checkout/Checkout"))


function App({ currentUser, checkUserSession }) {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


  return (
    <div className='app'>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path='/checkout' component={Checkout} />
            <Route path="/signin" render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
          </Suspense>
        </ErrorBoundary>

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
