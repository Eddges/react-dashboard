import React, { Fragment } from 'react'
import Auth from './components/auth'
import _ from 'lodash'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import RouterTest from './components/routerTest/routerTest'
import store from './reducers'
import {Provider,connect} from 'react-redux'

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/">
                {_.get(store.getState(),'login.token').length>0 ? <Redirect to="/dashboard"/> : <Auth />}
              </Route>
              {_.get(store.getState(),'login.token').length===0 ? <Redirect to="/"/> : <Fragment>
                  <Router path="/dashboard">
                    <Dashboard />
                  </Router>
                </Fragment>}      
            </Switch>
          </Router>
        </div>
      </Provider>
    )
  }
}

const mapStateToProps = ({login}) => {
  const {token} = login
  return {
    token
  }
}

export default App