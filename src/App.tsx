import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '@components/Home'
import './App.css'

export default function App() {
  return (
    <Router>
      <nav></nav>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/cocktail/:id">
          <Home />
        </Route>
        <Route path="/*">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
