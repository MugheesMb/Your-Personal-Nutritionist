import React, { useState } from 'react'
import { NavLink  , Link} from 'react-router-dom';

import './heaser.css';


const Header = () => {
        const [navbar, setNavbar] = useState(false);


        // const changeBackground = () => {
        //         if (window.scrollY >= 80) {

        //                 setNavbar(true)
        //         }
        //         else {
        //                 setNavbar(false);

        //         }
        // }
        // window.addEventListener('scroll', changeBackground);

        return (

                <div className={ 'header'}>

                        <div className='options' >
                                <NavLink className='option' to='/' >
                                        <div className='logo' >
                                                {/* <img src={lo} alt='mugy' /> */}
                                                <span className=' opt  f4   ' > Nutritionist</span> 
                                        </div>  
                                </NavLink>
                        </div>

                        <div className='options'>
                                <NavLink className='option    black   ' to='/planner'>Meal Planner</NavLink>
                        
                                <Link className='option    black   ' to='/joke'>Food Jokes</Link>
                                <Link className='option       ' to='/Reviews'>
                                   
                                </Link>
                        </div>
                </div>
        )
}


export default Header;