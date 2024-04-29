import * as React from "react";
import styled from "styled-components";

function Logomed() {
  return (
    <HeaderWrapper>
      <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d0421f3344ff55e85a2b1045427fbd709a1427e0a3da5cc678932007bc349cf?apiKey=f472f26ac3b9476d953e83db26ba4da7&" alt="Medify logo" />
      <LogoText>Medify</LogoText>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 20px;
`;

const Logo = styled.img`
  width: 23px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const LogoText = styled.span`
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #2aa8ff;
  letter-spacing: 0.36px;
  white-space: nowrap;
`;

export default Logomed;