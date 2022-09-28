import React from "react";

export const Shadow: React.FC = () => {
  return (
    <>
      <div className={` dbutton p-shadow-absolute `}></div>
      <div className={`rounded-circle p-shadow-absolute gradient3 `}></div>
      <div className={`rounded-circle  p-shadow-absolute gradient2 `}></div>
      <div className={`rounded-circle p-shadow-absolute gradient1 `}></div>
    </>
  );
};
