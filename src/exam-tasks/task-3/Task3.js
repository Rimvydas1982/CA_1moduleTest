import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import styles from './Task3.module.css';
import Button from './Button';

function Task3() {
  return (
    <div>
      <h3>Task 3</h3>
      <div className={styles.container}>
        <p>
          <FaTwitter />
        </p>
        <h1>Happening now</h1>
        <h4>Join Twitter today.</h4>
        <Button text='Sign up' blueBtn />
        <Button text='Log in' whiteBtn />
      </div>
    </div>
  );
}

export default Task3;

/* Task 3
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
