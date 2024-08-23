import styled from "@emotion/styled";
// import { Grid } from '@mui/material';

const Layout = styled.div`
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: block;
  height: 64px;
  background-color: yellow;
`;

const ContentContainer = styled.div`
  display: flex;
  height: calc(100% - 64px);
  border-top: rgb(218, 220, 224) 1px solid;
`;

const SidebarContainer = styled.div`
  display: flex;
  width: 256px;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  overflow: hidden;
`;

export {
  Layout,
  SidebarContainer,
  CalendarContainer,
  HeaderContainer,
  ContentContainer,
};
