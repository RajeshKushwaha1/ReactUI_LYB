import React from "react";
import Navbar from "./Components/Navbar";
import bg from "./img/Banner-bg.png";
import phone1 from "./img/Banner-ing.png";
import phone2 from "./img/img-2.png";
import logo1 from "./img/logo-1.png";
import logo2 from "./img/logo-2.png";
import logo3 from "./img/logo-3.png";
import logo4 from "./img/logo-4.png";
import logo5 from "./img/logo-5.png";
import speed from "./img/speed.png";
import prototyping from "./img/prototyping.png";
import vector from "./img/vector.png";
import play from "./img/play.png";
import store from "./img/store.png";
import img3 from "./img/Img3.png";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      {/* top section starts here */}
      <div className="container - fluid">
        <div div className="row bg-image-top">
          <img src={bg} className="img-responsive img-center" />
        </div>
        <div className="row texts-top">
          <div className="col-sm-6">
            <h4 className="h4">Editors choice App of 2020</h4>
            <h1 className="mt-2">Best app for your modern lifestyle</h1>
            <p className="mt-1">
              Increase productivity with a simple to-do app for managing your
              personal budgets
            </p>
            <br />
            <button className="btn btn-primary p-1 mr-1">Try for free</button>
            <button className="btn btn-outline p-1 ml-1">
              Watch demo video
            </button>
          </div>
          <div className="col-sm-6 phone-1">
            <img className="pl-2 mt-0" src={phone1} />
          </div>
        </div>
      </div>
      {/* top section ends here */}
      {/* middle section starts here */}
      <p className="text-center mt-2"> trusted by companies like </p>
      <div className="row middle-section">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center mt-3">
          <img src={logo1} className="img-responsive img-center" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12  text-center mt-3">
          <img src={logo2} className="img-responsive img-center" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12  text-center mt-3">
          <img src={logo3} className="img-responsive img-center" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center mt-3 ">
          <img src={logo4} className="img-responsive img-center" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12  text-center mt-3">
          <img src={logo5} className="img-responsive img-center" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-7 phone-2 text-center mt-5">
          <img className="img-fluid" src={phone2} />
        </div>
        <div className="col-sm-5 mt-5 pr-5 awesome">
          <h3 h3 className="text-left">
            Awesome Apps features
          </h3>
          <p>
            increase productivity with a a simple to do app for managing your
            personal budgets.
          </p>
          <div div className = "row mt-5" >
            <div className="col-2 awesome">
              <img src={speed} className="img-fluid" />
            </div>
            <div className="col-10">
              <span>
                get your blood tests dilevered at your home.collect your sapmle
                from here.
              </span>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-2 awesome">
              <img src={prototyping} className="img-fluid" />
            </div>
            <div className="col-10">
              <span>
                
                get your blood tests dilevered at your home.collect your sapmle
                from here.
              </span>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-2 awesome">
              <img src={vector} className="img-fluid" />
            </div>
            <div className="col-10">
              <span> 
                get your blood tests dilevered at your home.collect your sapmle
                from here.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* download app section */}
      <div className="row mt-4 ">
        <div className="col-sm-2"></div>
        <div className="col-sm-5 download">
          <h1>Download our  App now</h1>
          <p>the rise of mobile devices transform the way we consume the information entirely and the worlds most elevant channels such as facebook.</p>
          <span className="download-btns"><img src={play} /></span>
          <span className="download-btns"><img src={store} /></span>
        </div>
        <div className="col-sm-5">
          <span className= "bottom-image"> <img src = {img3} className="img-fluid" /> </span>
        </div>
  </div>
      {/* middle section ends here */}

      <Footer/>
    </>
  );
};

export default App;
