import React from "react";
import styled from "styled-components";

const ContentsInputSection = ({ setPreview, preview }) => {
  const handleContents = (event) => {
    setPreview(event.target.value);
  };

  return (
    <Container>
      <ContentsArea
        placeholder="텍스트를 입력하세요"
        onChange={handleContents}
        value={preview}
      />
    </Container>
  );
};

export default ContentsInputSection;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 20px;
`;

const ContentsArea = styled.textarea`
  width: 100%;
  height: 50%;
  font-size: 40px;
`;
