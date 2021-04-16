import React from 'react';

const LandingWrapper = ({children, ...props}) => {
  return (
    <div>
      {children}
      <h1>HELLO WORLD</h1>
    </div>
  );
};

export default LandingWrapper;