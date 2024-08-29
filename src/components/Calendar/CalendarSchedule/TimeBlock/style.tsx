import styled from "@emotion/styled";

const TimeBlockWrapper = styled.div`
  display: flex;
  height: 1200px;
  width: 100%;
`;

const TimeBlockDay = styled.div`
  height: 100%;
  width: calc(100% / 7);
  border-right: 1px solid rgb(241, 243, 244);
`;

const TimeBlockDaySeven = styled.div`
  height: 100%;
  width: calc(100% / 7);
`;

export { TimeBlockWrapper, TimeBlockDay, TimeBlockDaySeven };
