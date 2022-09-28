import React from "react";
import { Row, Col } from "react-bootstrap";
import json from "./score.json";

export const Score: React.FC<any> = ({ score }) => {
  return (
    <Row className="w-100 h-75 d-flex justify-content-center align-items-center">
      {json.map((json, index) => {
        return (
          <Col
            key={index}
            lg={7}
            xs={11}
            md={10}
            xxl={9}
            sm={8}
            className="border-header h-100  d-flex justify-content-between align-items-center"
          >
            <img src={json.logo} alt="logo"></img>
            <div className="p-2">
            <div className="display-score d-flex flex-column justify-content-center align-items-center px-4 px-sm-4 py-1  bg-white ">
              <h4 className="m-0 font-barlow">S C O R E</h4>
              <h1 className="m-0 font-barlow">{score}</h1>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};
