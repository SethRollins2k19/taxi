import React from "react";
import {CenterContainer} from "../Components/Containers";
import s from "./style/Auth.module.css";
import {AuthForm} from "./AuthForm";


const Auth = () => {
  return (
    <CenterContainer>
      <p className={s.Title}>Диспетчер <span className={s.TitleSpan}>такси</span></p>
      <AuthForm/>
    </CenterContainer>
  )
};


export {
  Auth
}


