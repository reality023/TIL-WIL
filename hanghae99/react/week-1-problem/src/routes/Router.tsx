import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './Home';
import Week from "./Week";

function Router() {
    return <BrowserRouter>
        <Switch>
            <Route path="/:week">
                <Week></Week>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Router;