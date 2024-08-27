import styled from "@emotion/styled";

const TimeBlockWrapper = styled.div`
  display: flex;
  height: 1200px;
  height: 100%;
  width: 100%;
`;

const TimeBlockDay = styled.div`
  height: 100%;
  width: calc(100% / 7);
  border-right: 1px solid lightgrey;
`;

export { TimeBlockWrapper, TimeBlockDay };
