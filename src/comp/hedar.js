import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Hedar = () => { 
       return (
              <div className='hedar' >
                     <Link to="/">Logo</Link>

                     <ul>
                            <NavLink to="/html">Html</NavLink>
                            <NavLink to="/css">Css</NavLink>
                            <NavLink to="/java">Javascript</NavLink>

                     </ul>

              </div>
       );
}

export default Hedar;
