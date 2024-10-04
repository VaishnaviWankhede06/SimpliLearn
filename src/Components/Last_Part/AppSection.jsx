/*import React from "react";
import logo from './free-app.avif';
import logo1 from './qr-code.avif';
import logo2 from './google play.webp';
import logo3 from './app_store.webp';

function AppSection(){
    return(
        <section class="app-promotion d-flex justify-content-center pt-5" style={{backgroundColor:'rgb(248, 251, 255)'}}>
            <div className="" style={{marginRight:'2rem'}}>
            <h2 style={{color:'rgb(39, 44, 55)'}}>Learn Free on the App</h2>
            <p style={{color:'rgb(81, 86, 94)'}} className="">Download the lessons and learn anytime, anywhere from the free<br/> courses available on our app.</p>
            <div class="qr-code">
    <img src={logo} alt=""/>
  </div>
            </div>
       <div>
       <p className="text-size1 fw-semibold" style={{color:'rgb(81, 86, 94)'}}>Scan this QR code on your camera <br/> app to download the app</p>
       <img src={logo1} className="w-50"/>
       <div>
        <a href=""><img src={logo2} className="w-25 me-5 rounded"/></a>
        <a href=""><img src={logo3} className="w-25 rounded"/></a>
       </div>
       </div>
  
</section>
    );
}

export default AppSection;*/


import React from "react";
import logo from './free-app.avif';
import logo1 from './qr-code.avif';
import logo2 from './google play.webp';
import logo3 from './app_store.webp';

function AppSection() {
  return (
    <section className="app-promotion d-flex justify-content-center pt-5 mb-0" style={{ backgroundColor: 'rgb(248, 251, 255)' }}>
      <div className="" style={{ marginRight: '8rem', marginLeft:'0'}}> 
        <h2 className="mb-4" style={{ color: 'rgb(39, 44, 55)', fontFamily:'Roboto, sans-serif' }}>Learn Free on the App</h2>
        <p  style={{ color: 'rgb(81, 86, 94)', fontFamily:'Roboto, sans-serif', fontSize:'1rem'}} className="mb-4">
          Download the lessons and learn anytime, anywhere from the free
          <br /> courses available on our app.
        </p>
        <div className="qr-code mt-5">
          <img src={logo} alt="Free app" />
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginLeft: '8rem', marginTop:'3rem'}}> {/* Added marginLeft */}
        <p className="text-size1 fw-semibold" style={{ color: 'rgb(81, 86, 94)' }}>
          Scan this QR code on your camera <br /> app to download the app
        </p>
        <img src={logo1} className=" mb-4" alt="QR Code" style={{width:'14rem', height:'14rem'}}/>
        <div className="d-flex align-items-center w-100 my-3"> 
    <hr className="flex-grow-1" /> 
    <span className="px-2" style={{ color: 'rgb(81, 86, 94)' }}>or</span> 
    <hr className="flex-grow-1" /> 
  </div>
        <div className="mt-3 d-flex align-tems-center justify-content-center"> 
          <a href=""><img src={logo2} className=" me-5 ms-2 rounded" style={{width:'120px'}} alt="Google Play" /></a>
          <a href=""><img src={logo3} className=" rounded" style={{width:'120px'}} alt="App Store" /></a>
        </div>
      </div>
    </section>
  );
}

export default AppSection;
