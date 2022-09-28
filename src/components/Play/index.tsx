import React from "react";
import { ButtonRPS } from "../Button";
import json from "../Button/button.json";
import { Game } from "../../types/interfaces";
export const Play:React.FC <Game>= ({start}) => {
  return (
    <>
      {json.map((button,index) => {
        return (
              <section key={index} className="bg-play h-100 d-flex justify-content-center align-items-center flex-column ">
                <div className="d-flex m-1  justify-content-center gap-5">
                  <ButtonRPS
                    play={start}
                    id={button["paper-id"]}
                    type={button["type-paper"]}
                    image={button["image-paper"]}
                  />
                  <ButtonRPS
                  play={start}
                  id={button["scissors-id"]}
                    type={button["type-scissors"]}
                    image={button["image-scissors"]}
                  />
                </div>
                <div className="justify-content-center m-1 d-flex">
                  <ButtonRPS
                  play={start}
                  id={button["rock-id"]}
                    type={button["type-rock"]}
                    image={button["image-rock"]}
                  />
                </div>
              </section>
        );
      })}
    </>
  );
};
