import { BrowserRouter as Router , Route, Switch} from "react-router-dom";

import Home from "../containers/Home";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Profile from "../containers/profile";
// import Header from "../components/Header";


function AppRouter() {
    return(
        <Router>
            <Switch>
               {/* < Header/> */}
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/contact" component = {Contact}/>
        <Route exact path = "/:username" component = {Profile}/>
        </Switch>
        </Router>
    )
}
export default AppRouter;