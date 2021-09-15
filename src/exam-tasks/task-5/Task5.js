import React, { useRef } from 'react';

function Task5() {
  //refs
  const btn1Ref = useRef();
  //Custom functions
  const colorHandler1 = () => {
    //Pakeiciau spalva i sita, nes su Jusu duota nesimato raidziu...
    btn1Ref.current.style.color = '#0055';
    btn1Ref.current.style.backgroundColor = '#f1f1f1';
  };
  const colorHandler2 = () => {
    btn1Ref.current.style.color = '#f1f1f1';
    btn1Ref.current.style.backgroundColor = '#000000';
  };
  return (
    <div ref={btn1Ref}>
      <h3>Task 5</h3>
      <h1 ref={btn1Ref}>Hello world</h1>
      <p> Goodbye world</p>
      <button onClick={colorHandler1}>Light theme</button>
      <button onClick={colorHandler2}>Dark theme</button>
    </div>
  );
}

export default Task5;

/* Task 5
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
