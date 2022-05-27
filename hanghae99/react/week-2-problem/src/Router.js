import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Main from "./Main";
import Add from "./Add";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/add">
                    <Add mod={false} />
                </Route>
                <Route path="/modify/:id">
                    <Add mod={true}/>
                </Route>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;