import styled from "@emotion/styled";

const Layout = styled.div`
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 8px;
  border-bottom: 1px solid rgb(218, 220, 224);
`;

/*
  Calendar height = 100% layout size - (48 header height + 8 * 2 padding + 1px border)
*/
const ContentContainer = styled.div`
  display: flex;
  position: absolute;
  height: calc(100% - 66px);
  width: 100%;
`;

const SidebarContainer = styled.div`
  width: 256px;
`;

export { Layout, SidebarContainer, HeaderContainer, ContentContainer };
