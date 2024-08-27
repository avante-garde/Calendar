import {
  Layout,
  SidebarContainer,
  HeaderContainer,
  ContentContainer,
} from "./AppStyles";
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Layout id="layout">
        <HeaderContainer id="header-container">
          <Header />
        </HeaderContainer>
        <ContentContainer id="content-container">
          <SidebarContainer id="sidebar-container">
            <Sidebar />
          </SidebarContainer>
          <Calendar />
        </ContentContainer>
      </Layout>
    </LocalizationProvider>
  );
}

export default App;
