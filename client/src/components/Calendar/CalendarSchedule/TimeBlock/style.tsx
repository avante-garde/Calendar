import styled from "@emotion/styled";

interface AddEventBubbleProps {
  zIndex?: number;
  top: number | undefined;
}

interface TimeBlockDayProps {
  index: number;
}

const TimeBlockWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const TimeBlockDay = styled.div`
  position: relative;
  height: calc(50px * 24);
  width: calc(100% / 7);
  min-width: 42px;
  padding-right: 12px;
  border-right: ${(props: TimeBlockDayProps) => (props.index < 6 ? '1px solid rgb(241, 243, 244)' : 'none')};
`;

const AddEventBubble = styled.div`
  height: 50px;
  width: 85%;
  position: absolute;
  background-color: rgb(251, 223, 147);
  top: ${(props: AddEventBubbleProps) => props.top}px;
  border: 1px outset rgb(252, 150, 170);
  border-radius: 5px;
  color: #70757a;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  z-index: ${(props: AddEventBubbleProps) => (props.zIndex ? props.zIndex : 0)};

  &:hover {
    background-color: lightyellow;
    cursor: pointer;
    z-index: 2;
  }
`;

const AddEventBubbleTitle = styled.div`
  width: 100%;
`;

const AddEventBubbleTimes = styled.div`
  width: 100%;
`;

export {
  TimeBlockWrapper,
  TimeBlockDay,
  AddEventBubble,
  AddEventBubbleTitle,
  AddEventBubbleTimes,
};
