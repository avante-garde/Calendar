import styled from "@emotion/styled";
import { ArrowLeftIcon, ArrowRightIcon } from "@mui/x-date-pickers";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const HamburgerWrapper = styled.div`
  height: 24px;
  width: 24px;
  padding: 12px;

  &:hover {
    background-color: rgb(241, 243, 244);
    border-radius: 24px;
    cursor: pointer;
  }
`;

const MonthAndYearTextWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const MonthAndYearText = styled.span`
  color: rgb(60, 64, 67);
  font:
    400 22px/28px "Google Sans",
    Roboto,
    Arial,
    sans-serif;
`;

const ArrowsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  margin-left: 200px;
`;

const LeftArrowIcon = styled(ArrowLeftIcon)`
  color: rgb(95, 99, 104);
  &:hover {
    height: 30px;
    width: 30px;
    background-color: rgb(241, 243, 244);
    border-radius: 24px;
    cursor: pointer;
  }
`;

const RightArrowIcon = styled(ArrowRightIcon)`
  color: rgb(95, 99, 104);
  &:hover {
    height: 30px;
    width: 30px;
    background-color: rgb(241, 243, 244);
    border-radius: 24px;
    cursor: pointer;
  }
`;

export {
  HeaderWrapper,
  HamburgerWrapper,
  MonthAndYearTextWrapper,
  MonthAndYearText,
  ArrowsWrapper,
  LeftArrowIcon,
  RightArrowIcon,
};
