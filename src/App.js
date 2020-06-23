import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom'
import { Button } from 'antd'
import './App.css'
import styles from './styles/Button.module.css';
import './styles/testCss.css';
import Demo1 from './pages/demo1';
export default function App()  {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Bashboard1</Link>
            </li>
          </ul>
        </div>
        <hr/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
        </Switch>
      </Router>
    )
  }
  function Home(){
    return (
      <div>
        <Button type="primary">测试</Button>
        <div className={styles.error}></div>
        <div className="test">1</div>  
      </div>
    )
  }
  function About(){
    return (
      <Demo1/>
    )
  }
  function Dashboard(){
    return (
      <div>Dashboard</div>
    )
  }
// const App=()=>(
//   <div className="App">
//     <Button type="primary">Button</Button>
//   </div>
// );

