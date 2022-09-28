import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { ButtonRPS } from "../Button";
import { Results } from "../../types/interfaces";
import { usePlay } from "../../hooks/usePlay";
import { Rules } from "../Rules";
import { Shadow } from "../Shadow";
export const Interval: React.FC<Results | any> = ({ results, replay }) => {
  const { winner, house, userResult, aiResult, shadow, sideEffects } =
    usePlay(results);

  useEffect(() => {
    sideEffects();
  }, [sideEffects]);

  return (
    <Row className="w-100 h-75 gap-3 gap-md-0 m-0 d-flex align-items-center justify-content-between ">
      <Col
        sm={5}
        md={5}
        lg={5}
        xl={5}
        xxl={5}
        className=" order-0 col-5 h-100  d-flex winner-gradient flex-column text-white  justify-content-center align-items-center font-barlow"
      >
      
        <h2 className="d-none d-lg-block  w-100 text-center">
          YOU PICKED
        </h2>
        <ButtonRPS
          shadow={shadow === "u"}
          image={userResult[0]}
          type={userResult[1]}
        />
        <h4 className="m-0 my-3 d-block d-lg-none w-100 text-center">
          YOU PICKED
        </h4>
      </Col> 

      <Col
        sm={12}
        md={2}
        lg={2}
        xl={2}
        xxl={2}
        className=" order-2 order-md-1  d-flex  flex-column text-white gap-2 justify-content-end align-items-center font-barlow"
      >
        {winner ? (
          <>
            {results.draft ? (
              <h1>DRAFT</h1>
            ) : (
              <>
                {results.user.winner ? (
                  <h1 className="w-100 text-center m-0">YOU WIN</h1>
                ) : (
                  <h1 className="w-100 text-center m-0">YOU LOSE</h1>
                )}
              </>
            )}

            <button onClick={replay} className="replaybtn px-5">
              <h5 className="m-0 mx-5 py-2"> REPLAY </h5>
            </button>
          </>
        ) : null}
      </Col> 

      <Col
        sm={5}
        md={5}
        lg={5}
        xl={5}
        xxl={5}
        className="order-1 order-md-2 col-5 h-100  d-flex flex-column text-white  justify-content-center align-items-center font-barlow"
      >
        <h2 className=" d-none d-lg-block  w-100 text-center">
          HOUSE PICKED
        </h2>
        {house ? (
          <div className="place-holder d-flex justify-content-center align-items-center">
            <div className="circle"></div>
          </div>
        ) : (
          <>
            <ButtonRPS
              shadow={shadow === "a"}
              image={aiResult[0]}
              type={aiResult[1]}
            />
          </>
        )}
        <h4 className="my-3 d-block d-lg-none m-0  w-100 text-center">
          HOUSE PICKED
        </h4>
      </Col>
    </Row>
  );
};
