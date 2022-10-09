import React from 'react'
import './main.css';
//import vid from './vid.gif';
import SV from './ki.svg';
import { Link} from 'react-router-dom';
// import ReactRotatingText from 'react-rotating-text';
// import cro from './wave.svg';
// import AOS from 'aos';
//import 'aos/dist/aos.css'; // You can also use <link> for styles


const Main = () => {
  // AOS.init();
  return (
    <>
      <div className='main'  >

        <img className='lomb' src={SV} alt="dasdad" />


        <div className='writ' >

          {/* <span style={{color:'black'  }} className='hy' > Hire a professional helper! </span>   */}


          <h3 style={{ color: 'black' }} className='senior' >Your <i style={{ color: '#1b00ffb5' }} >Personal</i> Nutritionist.</h3>


          <h4 style={{ color: '#3c3c40' }} className='senior2'  >Here you can plan your daily meal.let's suppose
          you are on diet and doctor told you eat 1500 calories everyday but you dont know which meal contain 1500
          calories So' here our meal planner will help you to find meal under specific calories.
          </h4>


          {/*           
          <ReactRotatingText  
          className='blink'
         
          items={['We Help with Assignments.', 'We Help with Thesis Writing.','We Help with Papers.','We Help with Research Papers.','We Help with Articles.','We Help with Proposal Writing.','We Help with Case studies.',]}
                              color={'gray'}
                              typingInterval ={10   }
                              pause ={1000}
          /> */}


          <Link to='/planner'  >  <button className='sss' inverted color='grey' > let's Plan Meal </button></Link>


        </div>

      </div>

      {/* <img src={cro} alt='mugy' /> */}


    </>
  )
}

export default Main;