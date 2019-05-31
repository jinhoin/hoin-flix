import React from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Header from "Components/Header"
import Home from 'Routes/Home';
import TV from "Routes/TV";
import Search from "Routes/Search";



export default () => (
    <Router>
        <Header />
        {/* 한번에 오직 하나의 Route만 Render하게됨*/}
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/tv" component={TV}></Route>
            {/* <Route paht="/tv/popula" render={()=> <h1>Popular</h1>}></Route> */}
            <Route path="/search" component={Search}></Route>
            <Redirect from="*" to="/" />
            {/* 맞춰주는 페이지가 없을경우  Home 으로 간다 */}
        </Switch>
    </Router>
);
