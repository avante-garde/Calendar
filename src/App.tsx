// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
import { 
  Layout, 
  SidebarContainer, 
  CalendarContainer, 
  HeaderContainer,
  ContentContainer,
} from './AppStyles';
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

// import { Grid } from '@mui/material';

function App() {
  // const [count, setCount] = useState(0);

  return (
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
  )
}

export default App
