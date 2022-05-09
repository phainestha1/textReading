import React, { useState } from "react";
import styled from "styled-components";
import ContentsInputSection from "./components/ContentsInputSection";
import ContentsPreviewSection from "./components/ContentsPreviewSection";

const App = () => {
  const [preview, setPreview] = useState("");

  return (
    <Container>
      <Left>
        <ContentsInputSection setPreview={setPreview} preview={preview} />
      </Left>
      <Right>
        <ContentsPreviewSection preview={preview} />
      </Right>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

const Left = styled.div`
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
  height: 100%;
  align-items: left;
`;
