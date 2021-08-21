import SignIn from "./SignIn";
import { SignUp}  from "./SignUp";
import Profile from "./Profile";
import Error from "./Error";
import {BrowserRouter,Route,Switch} from "react-router-dom";
function App() {
  return (
  
    <>
    <BrowserRouter>
    <Switch>
    <Route  exact path="/" component={Profile}/>
    <Route  exact path="/signup" component={SignUp}/>
    <Route  exact path="/signin" component={SignIn}/>
    <Route component={Error}/>
    </Switch>
    </BrowserRouter>
    </>
   
  );
}

export default App;
