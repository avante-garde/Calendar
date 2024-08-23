import {
  Layout,
  SidebarContainer,
  CalendarContainer,
  HeaderContainer,
  ContentContainer,
} from "./AppStyles";
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Layout>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <ContentContainer>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>
        </ContentContainer>
      </Layout>
    </LocalizationProvider>
  );
}

export default App;
