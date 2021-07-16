import {
    BrowserRouter as Router, Route,Switch
}from "react-router-dom";


import Home from "../containers/home";
import About from "../containers/about";
import Contact from "../containers/contact";
import Profile from "../containers/profile";
import Header from "../component/Header";


function AppRouter() {
    return(
        <Router>
            <Header/>
            <Route exact path = "/" component ={Home} />
            <Route exact path = "/about" component = {About}/>
            <Route exact path = "/contact" component = {Contact}/>
            {/* <Route exact path = "/:username" component = {Profile}/> */}

<Switch>
            {/* <Route exact path = "/" component ={Home} />
            <Route exact path = "/about" component = {About}/>
            <Route exact path = "/profile/contact" component = {Contact}/>
            <Route exact path = "/profile/:username" component = {Profile}/> */}
            </Switch>
        </Router>
    )
}

export default AppRouter;