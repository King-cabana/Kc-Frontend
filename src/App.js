import React, {Suspense} from 'react'
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar,Footer} from './Components';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
// import SignUp from './pages/SignUp/SignUp';
import  Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin'
import ScrollToTop from './Components/ScrollToTop'; 
// import Login from './pages/LoginPage/Login';
import EventCreation from './Components/EventCreation/EventCreation';
import EventBlog from './Components/Blog/Blog'

import EventTicketing from './Components/EventTicketing/EventTicketing';
import UserComponent from './Reducers/userComponent';

import DashBoard from './Components/DashBoard/DashBoard';
import UserDetails from './Reducers/UserDetails';
import EventNeed from './Components/EventNeed/EventNeed';
import EventSponsor from './Components/EventSponsor/EventSponsor';
import BankDetails from './Components/BankDetails/BankDetails';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import PasswordConfirmation from './Components/PasswordComfirmation/PasswordConfirmation';


// import Image  from './Components/Test/image';

// import InfoSection from './Components/InfoSection/InfoSection'

function App (){

    
    return(
        <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyle/> 
        <ScrollToTop />
        <Navbar />
        <Switch >
        
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
      <Route path="/signin" exact component={Signin} />
        <Route path="/register" exact component={Register} />
        <Route path="/eventCreation" exact component={EventCreation}/>
        <Route path="/eventblog" exact component={EventBlog}/>
        <Route path="/eventNeed"  component={EventNeed}/>
        <Route path="/eventSponsor"  component={EventSponsor}/>
        <Route path="/userDetails/:id"  component={UserDetails}/>
        <Route path="/bankDetails"  component={BankDetails}/>
        <Route path="/forgetPassword"  component={ForgetPassword}/>
        <Route path="/confirmPassword"  component={PasswordConfirmation}/>
       {/*  <Route path="/UserComponent" exact component={UserComponent}/> */}
        <Route path="/event-ticket" exact component={EventTicketing}/>
        <Route path="/dashboard" exact component={DashBoard}/>
        
        
        </Switch>
      {/*    
      <UserDetails/>
      */}
        <Footer/>
        
        <UserComponent/>
      
        
        
        </Suspense>
        </Router>
    );
}
// I remove this from the app return parentheses <InfoSection/>   
export default App;