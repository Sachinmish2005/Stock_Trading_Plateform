import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDesciption,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,}
) {
  return ( 
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
          <img src={imageURL} />
        </div>
        <div className='col-6 p-5 mt-5'>
          <h1>{productName}</h1>
          <p>{productDesciption}</p>
          <div>
          <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
          <a href={learnMore} style={{marginLeft:"50px" ,textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className='mt-3'><a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
          <a href={appStore}><img src="media/images/appStoreBadge.svg"/></a></div>
        </div>
      </div>
    </div>
   );
}

export default LeftSection;