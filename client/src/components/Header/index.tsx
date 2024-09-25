import { Dispatch, SetStateAction, useCallback } from "react";
import {
  ArrowsWrapper,
  HamburgerWrapper,
  HeaderWrapper,
  LeftArrowIcon,
  MonthAndYearText,
  MonthAndYearTextWrapper,
  RightArrowIcon,
} from "./style";
import { Month, Year } from "../../App";

interface HeaderProps {
  month: Month;
  year: Year;
  onToggleSidebar: () => void;
  onLeftArrowIconClick: () => void;
  onRightArrowIconClick: () => void;
}

const Header = (props: HeaderProps) => {
  const {
    month,
    year,
    onToggleSidebar,
    onLeftArrowIconClick,
    onRightArrowIconClick,
  } = props;

  const displayMonthAndYear = useCallback(() => {
    if (month.containsTwoMonths && !year.containsTwoYears) {
      return (
        <>
          {month.prevMonth?.slice(0, 3)} - {month.nextMonth?.slice(0, 3)}{" "}
          {year.currYear}
        </>
      );
    } else if (month.containsTwoMonths && year.containsTwoYears) {
      return (
        <>
          {month.prevMonth?.slice(0, 3)} {year.prevYear} -{" "}
          {month.nextMonth?.slice(0, 3)} {year.nextYear}
        </>
      );
    }
    return (
      <>
        {month.currMonth} {year.currYear}
      </>
    );
  }, [month, year]);

  return (
    <HeaderWrapper id="header-wrapper">
      <HamburgerWrapper id="hamburger-wrapper" onClick={onToggleSidebar}>
        <svg focusable="false" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </HamburgerWrapper>
      <ArrowsWrapper id="arrows-wrapper">
        <LeftArrowIcon id="left-arrow-icon" onClick={onLeftArrowIconClick} />
        <RightArrowIcon id="right-arrow-icon" onClick={onRightArrowIconClick} />
      </ArrowsWrapper>
      <MonthAndYearTextWrapper id="month-and-year-text-wrapper">
        <MonthAndYearText id="month-and-year-text">
          {displayMonthAndYear()}
        </MonthAndYearText>
      </MonthAndYearTextWrapper>
    </HeaderWrapper>
  );
};

export default Header;
