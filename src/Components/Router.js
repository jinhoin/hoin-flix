import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom"
import Header from "Components/Header"
import Home from 'Routes/Home';
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";




export default () => (
    <Router >
        <Header />
        {    /* 한번에 오직 하나의 Route만 Render하게됨*/}
        <Switch >
            <Route path="/" exact component={Home}>  </Route>
            <Route path="/tv" component={TV}></Route> {    /* <Route paht="/tv/popula" render={()=> <h1>Popular</h1>}></Route> */}
            <Route path="/search" component={Search}></Route>
            <Route path="/moive/:id/" component={Detail} />
            <Route path="/show/:id/" component={Detail} />

            <Redirect from="*" to="/" />

{/* 기본으로 모든 Router는 모든  Route들 props 해준다 */}
            {/* 맞춰주는 페이지가 없을경우  Home 으로 간다 */}
        </Switch>
    </Router >
);