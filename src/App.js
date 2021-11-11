import React from 'react'
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
import Login from './pages/LoginPage/Login';
import EventCreation from './Components/EventCreation/EventCreation';
import EventBlog from './Components/Blog/Blog'
import UserComponent from './redux/userComponent';


// import InfoSection from './Components/InfoSection/InfoSection'

function App (){

    
    return(
        <Router>
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
        <Route path="/UserComponent" exact component={UserComponent}/>
        
        
        </Switch>
       
        <Footer/>
        </Router>
    );
}
// I remove this from the app return parentheses <InfoSection/>   
export default App;