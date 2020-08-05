import React, {useState} from "react";
import {PasswordInput, TextInput} from "../Components/common/Inputs";
import {formatPhoneNumber} from "../Help/Formatter";
import s from "./style/AuthForm.module.css"
import {ButtonFilled} from "../Components/common/Buttons";

const RegistrationForm = ({}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className={s.AuthForm} onSubmit={e => {
      e.preventDefault()
    }}>
      <p className={s.AuthTitle}>Регистрация</p>
      <TextInput value={name} title="Имя" setter={setName}/>
      <TextInput value={surname} title="Фамилия" setter={setSurname}/>
      <TextInput value={email} title="E-mail" setter={setEmail}/>
      <TextInput value={phone} title="+7 (999) 876-54-32" setter={setPhone} formatter={e => formatPhoneNumber(e)}/>
      <PasswordInput value={password} title={"Пароль"} setter={setPassword}/>
      <span>Введите, не менее 6 символов</span>
      <ButtonFilled type={"submit"} title={"Зарегестрироваться"}/>
    </form>
  )
};


export {
  RegistrationForm
}
