import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage';
import ContactPage from './Pages/ContactPage';

function Task1() {
  return (
    <div>
      <Router>
        <header>
          <h3>Task 1</h3>
          <nav>
            <ul>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contacts</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path='/about' component={AboutUsPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default Task1;

/* TASK 1
task-1 aplanke, sukurkite aplanką ir pavadinkite jį "Pages". 
"Pages" aplanke turi būti sukurti dviejų puslapių komponentai 
"About Us" ir "Contacts", kurie viduje turės tik po h1 žymą,
kurioje bus randmas komponento pavadinimas (pvz. <h1>About Us</h1>)
ir mygtuką "Grįžti atgal", kurį paspaudus bus grįžtama atgal.

Tada, komponente Task1 (kuriame esate dabar) sukurkite navigaciją, 
kuri leis patekti į nurodytus "Pages" puslapių komponentus. 
Naudodami React Router DOM sukurkite SPA principo navigaciją.
"Pages" komponentų turinys turi būti atvaizduojamas Task1 komponente.
*/
