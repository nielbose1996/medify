import * as React from "react";
import styled from "styled-components";

const specializations = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c5dc4ec7f72024791a678a9934df5524397fce9505b9972681f0f9d02bb6d9b?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    name: "Dentistry",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f328c3c2bbef2c0869b898c85ce9546ec9a4e226cd3e9d935b8362729da1384c?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    name: "Primary Care",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/46f61d12bafd2b3d8fd9fe730abca82b76ceb6bb1ef9180e8a40ed1cefe23524?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    name: "Cardiology",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb1b928bfa6b78cdd4ee9f8bc64de5bf44f65472fe6cf2bdf294706049ab14e6?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    name: "MRI Resonance",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f1598ce648bfad286e8e95ea6214e6759136cfb459e8b6f4c33e17d3ab12037?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    name: "Blood Test",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/860d1efa7ff4a05f3002b1dd979c6caad4f689d5cb56ebb69da4dadf3b14762d?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    name: "Piscologist",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c5dc4ec7f72024791a678a9934df5524397fce9505b9972681f0f9d02bb6d9b?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    name: "Laboratory",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92314794af5e0bec88e1392e596b4156593afacb8668ed7777d4d77cad8d7f31?apiKey=f472f26ac3b9476d953e83db26ba4da7&",
    name: "X-Ray",
  },
];

function Specialisation() {
  return (
    <SpecializationSection>
      <SpecializationContainer>
        <SpecializationTitle>Find by specialisation</SpecializationTitle>
        <SpecializationGrid>
          {specializations.slice(0, 4).map((specialization, index) => (
            <SpecializationItem key={index}>
              <SpecializationContent>
                <SpecializationIcon
                  src={specialization.icon}
                  alt={`${specialization.name} icon`}
                />
                <SpecializationName>{specialization.name}</SpecializationName>
              </SpecializationContent>
            </SpecializationItem>
          ))}
        </SpecializationGrid>
        <SpecializationGrid>
          {specializations.slice(4).map((specialization, index) => (
            <SpecializationItem key={index}>
              <SpecializationContent>
                <SpecializationIcon
                  src={specialization.icon}
                  alt={`${specialization.name} icon`}
                />
                <SpecializationName>{specialization.name}</SpecializationName>
              </SpecializationContent>
            </SpecializationItem>
          ))}
        </SpecializationGrid>
        <ViewAllButton>View All</ViewAllButton>
      </SpecializationContainer>
    </SpecializationSection>
  );
}

const SpecializationSection = styled.section`
  background: var(
    --maine-background,
    linear-gradient(81deg, #e7f0ff 9.01%, rgba(232, 241, 255, 0.47) 89.11%)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 62px 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SpecializationContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1170px;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SpecializationTitle = styled.h2`
  color: #1b3c74;
  text-align: center;
  text-transform: capitalize;
  align-self: center;
  font: 600 48px/140% Poppins, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;






const ViewAllButton = styled.button`
  border-radius: 8px;
  background-color: var(--Primary, #2aa8ff);
  align-self: center;
  margin-top: 48px;
  color: #fff;
  letter-spacing: 0.32px;
  justify-content: center;
  padding: 19px 42px;
  font: 500 16px Poppins, sans-serif;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;
const SpecializationGrid = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* This creates a responsive grid with equal-width columns */
  gap: 20px; /* This controls the spacing between grid items */

  @media (max-width: 991px) {
    grid-template-columns: 1fr; /* Stack items in one column on small screens */
    gap: 20px;
  }
`;

const SpecializationItem = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;

  &:first-child {
    margin-left: 0;
  }

  @media (max-width: 991px) {
    width: 100%;
  }

  /* Remove any box-shadow, border, and background styles that might create an overlay effect */
  box-shadow: none;
  background: none;
  border: none;
`;

const SpecializationContent = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  font-size: 18px;
  color: var(--Gray, #abb6c7);
  font-weight: 500;
  text-align: center;
  line-height: 27px;
  width: 100%;
  padding: 22px 60px;
  flex-direction: column; /* This stacks the icon and text on top of each other */
  align-items: center; /* This centers them horizontally */

  @media (max-width: 991px) {
    margin-top: 30px;
    padding: 0 20px;
  }
`;

const SpecializationIcon = styled.img`
  width: 80px; // Adjust this to fit your design
  height: 80px; // Adjust this to fit your design
  align-self: center;
  /* Remove any styles that add overlays or extra effects */
`;



const SpecializationName = styled.div`
  font-family: Poppins, sans-serif;
  color: #1b3c74; /* Adjust the color to match the design */
  font-weight: 500;
  margin-top: 10px; /* Space between the icon and text */
`;

export default Specialisation;