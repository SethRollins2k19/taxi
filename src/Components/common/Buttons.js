import React from "react";

import s from "./style/Buttons.module.css";
import {Link} from "react-router-dom";


const ButtonVoid = ({action = () => {}, title = "", isLink = false, linkPath = "", type="button", ...props}) => {
  if(isLink) {
    return (
      <Link to={linkPath}
            onClick={action}
            className={`${s.Button} ${s.ButtonVoid}`}
            {...props}
      >
        {title}
      </Link>
    )
  }
  return (
    <button onClick={action} className={`${s.Button} ${s.ButtonVoid}`} {...props}>
      {title}
    </button>
  )
};



const ButtonFilled = ({action = () => {}, title = "", isLink = false, linkPath = "", type="button", ...props}) => {
  if(isLink) {
    return (
      <Link to={linkPath}
            onClick={action}
            className={`${s.Button} ${s.ButtonFilled}`}
            {...props}
      >
        {title}
      </Link>
    )
  }
  return  (
    <button type={type} onClick={action} className={`${s.Button} ${s.ButtonFilled}`} {...props}>
      {title}
    </button>
  )
};

export {
  ButtonVoid,
  ButtonFilled
}
