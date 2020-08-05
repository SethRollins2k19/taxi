import React, {useState} from "react";

import s from "./style/AuthForm.module.css";
import {PasswordInput, TextInput} from "../Components/common/Inputs";
import {ButtonFilled, ButtonVoid} from "../Components/common/Buttons";
import {formatPhoneNumber} from "../Help/Formatter";


const AuthForm = () => {
  const [text, setText] = useState("");
  return (
    <div className={s.AuthForm}>
      <p className={s.AuthTitle}>Вход</p>
      <TextInput value={text} setter={setText} title={"+7 (999) 876-54-32"} formatter={formatPhoneNumber}/>
      <PasswordInput value={text} setter={setText} title={"Пароль"}/>
      <ButtonFilled title="Войти"/>
      <ButtonVoid title="Регистрация" isLink={true} linkPath={"registration"}/>
    </div>
  )
};

export {
  AuthForm
}
