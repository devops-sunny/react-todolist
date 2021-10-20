import React from 'react'
import { Provider } from 'react-redux'                      //
import store from './redux/store'                          
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit/:id" component={Edit} />
        </div>
      </Router>
    </Provider>
  )
}

export default App
