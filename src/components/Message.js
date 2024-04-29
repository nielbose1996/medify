import * as React from "react";
import styled from "styled-components";

function Message() {
  return (
    <HealthCareMessageWrapper>
      <HealthCareMessageText>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </HealthCareMessageText>
    </HealthCareMessageWrapper>
  );
}

const HealthCareMessageWrapper = styled.section`
  background-color: #2aa7ff;
  padding: 13px 60px 13px 103px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 991px) {
    padding: 13px 20px;
  }
`;

const HealthCareMessageText = styled.p`
  color: #fff;
  font: 400 14px Poppins, sans-serif;
  text-align: center;
`;

export default Message;