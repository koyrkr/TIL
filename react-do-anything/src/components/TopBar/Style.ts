import styled from "styled-components";
import fonts from "@constants/fonts";
import { Link } from "react-router-dom";
import colors from "@constants/colors";

const TOP_BAR_HEIGHT = 60;
const SIDE_BAR_WIDTH = 150;

export const TopBarWrapper = styled.div`
  background: ${colors.blue};
  height: ${TOP_BAR_HEIGHT}px;
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
  padding-left: 8px;
`;

export const SideBarWrapper = styled.div`
  background: ${colors.blue};
  position: absolute;
  top: ${TOP_BAR_HEIGHT}px;
  width: ${SIDE_BAR_WIDTH}px;
  padding: 0px 8px;
  height: calc(100vh - ${TOP_BAR_HEIGHT}px);
`;

export const SideBarMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  height: 60px;
`;

export const SideBarMenuLink = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  align-items: center;
`;

export const SideBarMenuText = styled(fonts.BD.MD[14])`
  color: #fff;
  margin-left: 12px;
`;
