import "./modal.scss";
import Onboarding from "../onboarding/onboarding";
import Image from "../../image/no.png";
import * as React from "react";
import ButtonColored from "../buttonColored/buttonColored";

const Modal = (props) => {

    if (props.active) {
        return(
            <div className='test'>
                <div className='modalCard'>

                    <Onboarding image={Image} title={props.title} text={props.text} />
                    <ButtonColored text='Sluiten' setActive={props.setActive} link={props.buttonLink}/>
                </div>

                <div className='modalContainer'></div>
            </div>
        );
    }
    else return null;

};

export default Modal;
