import React, {useState} from "react";

import s from "./style/Inputs.module.css";


const TextInput = ({value, setter, title = "",formatter = (e) => e, ...props}) => {
  const [text, setText] = useState(value);
  return <input type="text"
                value={text}
                onChange={e => {
                  setText(formatter(e.target.value));
                  setter(e.target.value)
                }}
                className={s.TextInput}
                placeholder={title}
    {...props}
  />
};


const PasswordInput = ({value, setter, title = "", formatter = (e) => e, ...props}) => {
  const [isEye, setIsEye] = useState(false);
  return (
    <label className={s.Password}>
      <input type={isEye ? "text" : "password"}
             value={value}
             onChange={e => setter(formatter(e.target.value))}
             className={`${s.TextInput}`}
             placeholder={title}
             {...props}
      />
      {
        !isEye ?
          <svg className={s.PasswordEye}
               onClick={e => setIsEye(true)}
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
              <path
                d="M11.9841 5.25C8.33064 5.25 4.58298 7.36453 1.63267 11.5936C1.54846 11.7156 1.50231 11.8599 1.50006 12.0082C1.4978 12.1564 1.53955 12.302 1.62001 12.4266C3.88689 15.975 7.58439 18.75 11.9841 18.75C16.336 18.75 20.1094 15.9666 22.3805 12.4102C22.4591 12.2881 22.5009 12.1459 22.5009 12.0007C22.5009 11.8555 22.4591 11.7134 22.3805 11.5912C20.1042 8.07562 16.3031 5.25 11.9841 5.25Z"
                stroke="#3D3D3D" strokeLinecap="round" strokeLinejoin="round"/>
              <path
                d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                stroke="#3D3D3D" strokeMiterlimit="10"/>
            </g>
          </svg>
          :
          <svg className={s.PasswordEye}
               onClick={e => setIsEye(false)}
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                fill="#3D3D3D"/>
              <path
                d="M18.5072 6.61781C16.4578 5.2125 14.2645 4.5 11.9887 4.5C9.94078 4.5 7.94438 5.10937 6.05484 6.30375C4.14937 7.51078 2.28141 9.70312 0.75 12C1.98844 14.0625 3.6825 16.1831 5.44687 17.3991C7.47094 18.7931 9.67172 19.5 11.9887 19.5C14.2856 19.5 16.4817 18.7936 18.5184 17.4005C20.3114 16.1719 22.0177 14.0541 23.25 12C22.0134 9.96422 20.3016 7.84875 18.5072 6.61781ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4986 13.1931 16.0241 14.3369 15.1805 15.1805C14.3369 16.0241 13.1931 16.4986 12 16.5Z"
                fill="#3D3D3D"/>
            </g>
          </svg>
      }
    </label>
  )
};


export {
  TextInput,
  PasswordInput
}
