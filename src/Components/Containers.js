import React from "react";

import s from "./style/Containers.module.css";



const CenterContainer = ({children}) => {
  return (
    <div className={s.CenterContainer}>
      {children}
    </div>
  )
};



export {
  CenterContainer
}
