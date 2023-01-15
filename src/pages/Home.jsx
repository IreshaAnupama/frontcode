import TopNav from '../components/TopNav';
import Footer from '../components/Footer';



import image1 from '../img/image1.jpg';
import './Pages.css';

import React,{Fragment} from 'react'

const Home = () => {
  return (
    <><div><TopNav class="top-bar fixed"></TopNav></div>
    
     <div >
          
          <img
            
              className="homeimg"
              src={image1}
              alt="First slide" />
             </div>
              

        
      

             <Fragment>
              <section className='home'>
              
                <div className="text">
                     <h3>Hello, Welcome to beeline courier service</h3>
                      <div className="wrapper">
                        <div className="fixed-text"><h2>We are </h2></div>
                        <div className="moving-text">
                            <li><h2>Fastest</h2><h2>Fastest</h2></li>
                            
                           
                        </div>
        
                      </div>
                      <p>
                       we use Smart route technology for our courier team.
                        we will protect your parcel until you receive
                      </p>
                    </div>
      
              </section>
             </Fragment>

             <div bac>

             </div>
              
     
      
      <div><Footer></Footer></div></>
  )     
        
}

export default Home

