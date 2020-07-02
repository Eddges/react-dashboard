import React from 'react'
// import classes from './routerTest.module.css'
import './routerTest.css'
import {NavLink, Route} from 'react-router-dom'

class RouterTest extends React.Component{
    render(){
        return(
            <div class>
                <NavLink to="/hurrr">Hurrrr</NavLink>

                <Route path="/hurrr" render={()=> (<h1>Hurrrrrrrr</h1>)} />
            </div>
        )
    }
}

export default RouterTest