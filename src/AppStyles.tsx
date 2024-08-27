import styled from "@emotion/styled";

const Layout = styled.div`
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  padding: 8px;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  border-top: rgb(218, 220, 224) 1px solid;
`;

const SidebarContainer = styled.div`
  display: flex;
  width: 256px;
`;

export { Layout, SidebarContainer, HeaderContainer, ContentContainer };
