import React, { Fragment } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useParams, useHistory, useLocation } from 'react-router-dom';

function App() {
  const name = 'David Akpan';
  const isAuthenticated = true;
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
            <li><Link to={`/about/${name}`} style={{ textDecoration: 'none' }}>About</Link></li>
            <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          {
            isAuthenticated ? 
            <>
            <Route path="/about/:name"  component={About} />
            <Route path="/contact"  component={Contact} />
            </> : <Redirect to="/" />
          }
          <Route render={()=> <h1>404: Page not found</h1>} />
        </Switch>
        
      </main>
    </Router> 
  );
}
//Home Page
const Home = () => {
  const { pathname } = useLocation()
  return (
  <Fragment>
    <h1>Home</h1>
    <p>Current URL: { pathname }</p>
    <FakeText />

  </Fragment>
  )
}
  


//About Page
// props.match.params.name
// const About = ({match:{params:{name}}}) => (
//   <Fragment>
//     { name !== 'David Akpan' ? <Redirect to="/" /> : null}
//     <h1>About {name}</h1>
//     <FakeText />
//   </Fragment>
// )

const About = () => {
   const { name } = useParams()
   return (
    <Fragment>
      { name !== 'David Akpan' ? <Redirect to="/" /> : null}
      <h1>About {name}</h1>
      <FakeText />
    </Fragment>
   )
  
   }

//Contact Page
// const Contact = ({ history }) => (
//   <Fragment>
//     <h1>Contact</h1>
//     <button onClick={ () => history.push('/') }>Take me home</button>
//     <FakeText />
//   </Fragment>
// )


const Contact = ({history}) => {
  // const { history } = useHistory();
  return (
    <Fragment>
      <h1>Contact</h1>
      <button onClick={() => history.push('/') } >Back To home</button>
      <FakeText />
    </Fragment>
  )
};
  

const FakeText = () => (
 
    <div>
      <h1>A Complete Beginner's Guide to React Router (Including Router Hooks)</h1>
      <p>
       React is a JavaScript library for building user interfaces. We can also extend it to build multi-page applications with the help of React Router. This is a third-party library that enables routing in our React apps.
      </p>
      <h1>What is routing?</h1>
      <p>
        Routing is the capacity to show different pages to the user. That means the user can move between different parts of an application by entering a URL or clicking on an element.

        As you may already know, by default, React comes without routing. And to enable it in our project, we need to add a library named react-router.

        To install it, you will have to run the following command in your terminal:
      </p>
    </div>
)

export default App;
