import React from "react";
import { ButtonType } from "../../types/interfaces";
import { Shadow } from "../Shadow";

export const ButtonRPS: React.FC<ButtonType> = ({
  type,
  image,
  play,
  id,
  shadow = false,
}) => {
  return (
    <div className={` dbutton p-relative`}>

     {
      shadow ? <Shadow/> : null
     } 
      
            <div
              className={`${type} buttonRPS d-flex justify-content-center align-items-center`}
              onClick={() => {
                if (play) play(id!);
              }}
            >   <div className="insidebtn d-flex justify-content-center align-items-center">
                <img  width={60} height={60} src={image} alt={type}></img>
                </div>
            </div>
        
    </div>
  );
};
