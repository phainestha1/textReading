import React, { useEffect } from "react";
import styled from "styled-components";
import { makeTitle } from "../controllers/makeTitle";

const ContentsPreviewSection = ({ preview }) => {
  // useEffect(() => {}, [preview]);

  return <Container>{makeTitle(preview)}</Container>;
};

export default ContentsPreviewSection;

const Container = styled.div`
  margin: 5%;
  height: 100%;
`;
