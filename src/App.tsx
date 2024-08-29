import { useCallback, useEffect, useMemo, useState } from "react";
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

export interface IMonth {
  containsTwoMonths: boolean;
  prevMonth?: string;
  currMonth: string;
  nextMonth?: string;
}

export interface IYear {
  containsTwoYears: boolean;
  prevYear?: number;
  currYear: number;
  nextYear?: number;
}

function App() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  const currentDate = new Date();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [currentWeekStartDate, setCurrentWeekStartDate] = useState<Date>(
    getFirstDayOfWeek(currentDate),
  );
  const [month, setMonth] = useState<IMonth>({
    containsTwoMonths: false,
    prevMonth: "",
    currMonth: months[currentDate.getMonth()],
    nextMonth: "",
  });
  const [year, setYear] = useState<IYear>({
    containsTwoYears: false,
    prevYear: 0,
    currYear: currentDate.getFullYear(),
    nextYear: 0,
  });
  const currentDayNumbersInWeek = useMemo(
    () => getDatesForWeek(currentWeekStartDate),
    [currentWeekStartDate],
  );

  function getFirstDayOfWeek(currDate: any) {
    const weekStartDate = currDate.getDate() - currDate.getDay();
    return new Date(currDate.setDate(weekStartDate));
  }

  function getDatesForWeek(weekStartDate: Date) {
    const dayNumbersOfCurrentWeek = [];
    const totalDaysInWeek = 7;
    const prevDate = new Date(weekStartDate);
    for (let weekIndex = 0; weekIndex < totalDaysInWeek; weekIndex++) {
      const nextDate = new Date(weekStartDate);
      nextDate.setDate(prevDate.getDate() + weekIndex);
      dayNumbersOfCurrentWeek.push(nextDate.getDate());
    }
    return dayNumbersOfCurrentWeek;
  }

  const onToggleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen, setIsSidebarOpen]);

  const getCurrentMonthAndYear = useCallback(
    (weekStartDate: Date) => {
      const weekEndDate = new Date(weekStartDate);
      weekEndDate.setDate(weekStartDate.getDate() + 6);

      setCurrentWeekStartDate(getFirstDayOfWeek(weekStartDate));

      if (weekStartDate.getMonth() !== weekEndDate.getMonth()) {
        setMonth({
          ...month,
          containsTwoMonths: true,
          prevMonth: months[weekStartDate.getMonth()],
          nextMonth: months[weekEndDate.getMonth()],
        });
      } else {
        setMonth({
          ...month,
          containsTwoMonths: false,
          currMonth: months[weekEndDate.getMonth()],
        });
      }

      if (weekStartDate.getFullYear() !== weekEndDate.getFullYear()) {
        setYear({
          ...year,
          containsTwoYears: true,
          prevYear: weekStartDate.getFullYear(),
          nextYear: weekEndDate.getFullYear(),
        });
      } else {
        setYear({
          ...year,
          containsTwoYears: false,
          currYear: weekStartDate.getFullYear(),
        });
      }
    },
    [getFirstDayOfWeek, months, setCurrentWeekStartDate, setMonth, setYear],
  );

  const onPreviousWeekClick = useCallback(() => {
    const previousWeekStartDate = new Date(currentWeekStartDate);
    previousWeekStartDate.setDate(currentWeekStartDate.getDate() - 7);
    getCurrentMonthAndYear(previousWeekStartDate);
  }, [currentWeekStartDate, getCurrentMonthAndYear]);

  const onNextWeekClick = useCallback(() => {
    const nextWeekStartDate = new Date(currentWeekStartDate);
    nextWeekStartDate.setDate(currentWeekStartDate.getDate() + 7);
    getCurrentMonthAndYear(nextWeekStartDate);
  }, [currentWeekStartDate, getCurrentMonthAndYear]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Layout id="layout">
        <HeaderContainer id="header-container">
          <Header
            month={month}
            year={year}
            onToggleSidebar={onToggleSidebar}
            onLeftArrowIconClick={onPreviousWeekClick}
            onRightArrowIconClick={onNextWeekClick}
          />
        </HeaderContainer>
        <ContentContainer id="content-container">
          {!isSidebarOpen && (
            <SidebarContainer id="sidebar-container">
              <Sidebar />
            </SidebarContainer>
          )}
          <Calendar
            currentDayNumbersInWeek={currentDayNumbersInWeek}
            dayNames={dayNames}
          />
        </ContentContainer>
      </Layout>
    </LocalizationProvider>
  );
}

export default App;
