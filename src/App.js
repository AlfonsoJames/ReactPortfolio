import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavComponent from './components/nav';
import Contact from './components/pages/contact';
import Portfolio from './components/pages/portfolio';
import About from './components/pages/about';
import Footer from './components/footer'

function App({children}) {
  return (
    
    <div className='App'>
      <Router>
        <NavComponent />
        <main>
        <Switch>
          <Route exact path={['/', '/about']}>
            <About />
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
         
        </Switch>
        </main>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
