import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navigation} from "../navigation/Navigation";
import {Homepage} from '../../pages/homepage/Homepage'
import { AddComposer } from "../forms/AddComposer";
import { Detail } from "../../pages/homepage/Detail";

function App() {
    return (
        <BrowserRouter>
            <div>
                <h3 className="m-3 d-flex justify-content-center">Composers</h3>
                <Navigation/>
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/create-composer"/>
                    <Route path="/composer/detail" component={Detail}/>
                    <Route path="/composer/create" component={AddComposer}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
