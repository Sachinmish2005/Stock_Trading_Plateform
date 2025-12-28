import React from 'react';


function Universe() {
  return ( 
   <div className='container mt-5'>
      <div className='row text-center'>
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        
        <div className='col-4 p-3 mt-5'>
          <img src="media/images/zerodhaFundhouse.png" height={200} width={200} />
          <p className='text-small text-muted'>Our asset management venture<br/>
          that is creating simple and transparent index
          <br />
          funds to help you save for your goals.
          </p>
        </div>
         <div className='col-4 p-3 mt-5'>
          <img src="media/images/streakLogo.png" height={200} width={200} />
          <p className='text-small text-muted'>
          Systematic trading plateform <br />
          that allows you to create and backtest strategies without coding.

          </p>
        </div>
         <div className='col-4 p-3 mt-5'>
          <img src="media/images/sensibullLogo.svg" height={200} width={200} />
          <p className='text-small text-muted'>Options trading plateform that lets you <br />
          create strategies, analyze positions, and examine <br />
          data points like open interest,FII/DII, and more.</p>
        </div>
        
         <div className='col-4 p-3 mt-5'>
          <img src="media/images/smallcaseLogo.png" />
          <p className='text-small text-muted'>
            Thematic investing plateform<br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img src="media/images/goldenpiLogo.png" />
          <p className='text-small text-muted'>Bonds trading plateform</p>
        </div>
         <div className='col-4 p-3 mt-5'>
          <img src="media/images/dittoLogo.png"  height={200} width={200}/>
          <p className='text-small text-muted'>
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
        
      
       <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto", textAlign:"center"}}>Sign up for free</button>
      
    </div>
    </div>
   );
}

export default Universe;