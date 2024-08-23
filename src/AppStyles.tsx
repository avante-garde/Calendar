import styled from '@emotion/styled';
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
`;

const SidebarContainer = styled.div`
  display: flex;
  width: 256px;
  background-color: blue;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  background-color: orange;
`;

export { 
  Layout, 
  SidebarContainer,
  CalendarContainer,
  HeaderContainer,
  ContentContainer
};



/* #root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
} */
