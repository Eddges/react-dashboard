import React from 'react'
import Auth from './components/auth'
import {BrowserRouter} from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import RouterTest from './components/routerTest/routerTest'

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <BrowserRouter>
          <Dashboard />
          {/* <RouterTest /> */}
                  {/* <Auth /> */}

        </BrowserRouter>
      </div>
    )
  }
}

export default App