import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutUsPage = () => {
  //--redirecting
  const history = useHistory();
  //Custom functions
  const redirectHandler = () => {
    history.push('/contact');
  };
  return (
    <div>
      <h1>AboutUs</h1>
      <button onClick={redirectHandler}>Go back</button>
    </div>
  );
};

export default AboutUsPage;
