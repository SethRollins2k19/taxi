import React from "react";
import {CenterContainer} from "../Components/Containers";
import s from "./style/Auth.module.css";
import {RegistrationForm} from "./RegistrationForm";


const Registration = () => {
  return (
    <CenterContainer>
      <p className={s.Title}>Диспетчер <span className={s.TitleSpan}>такси</span></p>
      <RegistrationForm/>
    </CenterContainer>
  )
};


export {
  Registration
}


