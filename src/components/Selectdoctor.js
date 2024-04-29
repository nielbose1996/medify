import * as React from "react";
import styled from "styled-components";

const data = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/388f54b1f442a0082d6d7f1dec8e8653543ce3e4458d0f0642380824c2894927?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    title: "Doctors",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ad157f60fc57d90b6f6d83018c094f350b86173749eb1ab342a177194ac968d?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    title: "Labs",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/63bece285200906b51d3b71dd30d2d97cc9b450becb68a80c9e12df3e28ebea4?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    title: "Hospitals",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e6a8f9942c0b3714d702f4199eb97a4bdb6e67cbd05631eadd22d0d0ac8ba5a?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    title: "Medical Store",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f345017b29294fd35ff84195404950cf5f88d3a0f1b75006c7d9f59a2827179?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    title: "Ambulance",
  },
];

function Selectdoctor({ className }) {
  return (
    <div className={className}>
    <Container>
      <Header>
        <SearchBar>
          <SearchItem>
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d0fafd35b981b23951a0c3528308c5ec849945ef4a316dc07b2bb526b0974fa?apiKey=f472f26ac3b9476d953e83db26ba4da7&" alt="State icon" />
            <SearchText>State</SearchText>
          </SearchItem>
          <SearchItem>
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d0fafd35b981b23951a0c3528308c5ec849945ef4a316dc07b2bb526b0974fa?apiKey=f472f26ac3b9476d953e83db26ba4da7&" alt="City icon" />
            <SearchText>City</SearchText>
          </SearchItem>
          <SearchButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/e44e84a9b718e6d26c6f5988fe7732a8d0a43b33e769e88b1e9e6c282d2db47c?apiKey=f472f26ac3b9476d953e83db26ba4da7&" alt="Search button" />
        </SearchBar>
        <Heading>You may be looking for</Heading>
      </Header>
      <CardGrid>
        {data.map((item, index) => (
          <CardItem key={index} highlighted={item.title === "Hospitals"}>
            <CardIcon src={item.icon} alt={`${item.title} icon`} />
            <CardTitle>{item.title}</CardTitle>
          </CardItem>
        ))}
      </CardGrid>
    </Container>
    </div>
  );
}

const Container = styled.div`
  border-radius: 15px;
  box-shadow: 6px 6px 35px 0 rgba(16, 40, 81, 0.11);
  background-color: var(--White, #fff);
  display: flex;
  flex-direction: column;
  padding: 54px 35px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Header = styled.header`
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 931px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  font-size: 14px;
  color: var(--Gray, #abb6c7);
  font-weight: 400;
  white-space: nowrap;
  letter-spacing: 0.28px;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
`;

const SearchItem = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(240, 240, 240, 1);
  background-color: #fafbfe;
  display: flex;
  gap: 13px;
  padding: 13px 16px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const SearchText = styled.span`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const SearchButton = styled.img`
  width: 121px;
  height: 50px;
  border-radius: 8px;
  max-width: 100%;
`;

const Heading = styled.h2`
  color: var(--Dark, #102851);
  letter-spacing: 0.4px;
  align-self: center;
  margin-top: 70px;
  font: 500 20px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const CardGrid = styled.div`
  display: flex;
  margin-top: 28px;
  gap: 20px;
  font-size: 18px;
  color: var(--Gray, #abb6c7);
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.36px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  border-radius: 8px;
  background-color: ${(props) =>
    props.highlighted ? "rgba(42, 167, 255, 0.08)" : "#fafbfe"};
  border: ${(props) =>
    props.highlighted ? "1px solid rgba(42, 167, 255, 1)" : "none"};
  color: ${(props) => (props.highlighted ? "#2aa7ff" : "inherit")};
  font-weight: ${(props) => (props.highlighted ? "600" : "400")};
  padding: 29px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const CardIcon = styled.img`
  width: 60px;
  height: 60px;
  align-self: center;
`;

const CardTitle = styled.span`
  font-family: Poppins, sans-serif;
  margin-top: 22px;
`;

export default Selectdoctor;