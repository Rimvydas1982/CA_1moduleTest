import React from 'react';
import { useHistory } from 'react-router-dom';

const ContactPage = () => {
  //--redirecting
  const history = useHistory();
  //Custom functions
  const redirectHandler = () => {
    history.push('/about');
  };
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={redirectHandler}>Go back</button>
    </div>
  );
};

export default ContactPage;
