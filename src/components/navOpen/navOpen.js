import "./navOpen.scss";
import * as React from "react";
import ButtonColored from "../buttonColored/buttonColored";
import {Link} from "react-router-dom";

const NavOpen = (props) => {

    if (props.open) {
        return(
            <div className='navOpenContainer'>
                <i className="fas fa-times" onClick={() => props.setOpen(false)}></i>

                <div className='navOpenOptions'>
                    <Link to={'/'}>  <h2>Terug naar de vragen</h2></Link>
                    <Link to={'/about'}><h2>Over het product</h2></Link>
                    <Link to={'/contact'}><h2>Contactgegevens</h2></Link>
                </div>

                <div class='buttonNavOpen'>
                    <ButtonColored text='Zoek een passende dietist' background='#ffffff' color='#0E656C'/>
                </div>

            </div>
        );
    } else return null;
};

export default NavOpen;
