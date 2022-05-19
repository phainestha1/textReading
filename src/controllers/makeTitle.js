import React from "react";
import styled from "styled-components";

export const makeTitle = (text) => {
  const response = text?.split("\n");

  const result = response.map((sentences) => (
    <div>
      {sentences.includes("//") ? (
        <Title>{sentences.replaceAll("//", "")}</Title>
      ) : (
        sentences
      )}
    </div>
  ));

  return result;
};

const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;

  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
      opacity: 0;
    }

    to {
      margin-left: 0%;
      width: 100%;
      opacity: 1;
    }
  }
`;
