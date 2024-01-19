import React from "react";

const Head = () => {
  const iconStyle = {
    color: "#5c3905",  
   };

  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>INFINITY</h1>
            <span>The Language School</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon' style={iconStyle}></i>
            <i className='fab fa-instagram icon' style={iconStyle}></i>
            <i className='fab fa-twitter icon' style={iconStyle}></i>
            <i className='fab fa-youtube icon' style={iconStyle}></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
