import * as React from "react";
import styled from "styled-components";

const menuItems = [
  { label: "Find Doctors", link: "/find-doctors" },
  { label: "Hospitals", link: "/hospitals" },
  { label: "Medicines", link: "/medicines" },
  { label: "Surgeries", link: "/surgeries" },
  { label: "Software for Provider", link: "/software-for-provider" },
  { label: "Facilities", link: "/facilities" },
];

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  font-size: 14px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  color: #102851;
  font-weight: 400;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const NavItem = styled.a`
  font-family: Poppins, sans-serif;
  text-decoration: none;
  color: inherit;
`;

const MyBookingsButton = styled.button`
  font-family: Poppins, sans-serif;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.28px;
  border-radius: 8px;
  background-color: #2aa8ff;
  margin-left: 20px;
  padding: 10px 19px;
  border: none;
  cursor: pointer;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        {menuItems.map((item) => (
          <NavItem key={item.label}>{item.label}</NavItem>
        ))}
      </Nav>
      <MyBookingsButton>My Bookings</MyBookingsButton>
    </HeaderWrapper>
  );
}

export default Header;
