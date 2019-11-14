import React from 'react';
import { Link } from 'next/router';

class NavegationBar extends React.Component {
render(){
return(
    <nav className ="nav navbar-default">
    <div className ="container-fluid">
        <div className ="nav-header">
            <Link to="/" className ="navbar-brand">Red Dice
            </Link>
        </div>
        <div className = "collapse navnar-collapse">
            <ul className ="nav navbar-nav navbar-right">
            
            </ul>
        </div>
    </div>
    </nav>
)
}


}

export default NavegationBar;