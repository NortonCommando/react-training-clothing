import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0px 60px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: fixed;
  clear: both;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const LogoContainer = styled(Link)`
  width: 50px;
  padding: 15px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Cleaner = styled.div`
  height: 80px;
`;
