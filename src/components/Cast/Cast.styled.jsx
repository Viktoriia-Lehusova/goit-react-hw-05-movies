import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: calc(100vw - 30px);

  margin: 0 auto;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledItem = styled.li`
  width: 180px;
  height: 180px;

  margin-right: 10px;
  margin-bottom: 20px;
`;
export const StyledImg = styled.img`
  width: 120px;
  height: 150px;

  border-radius: 10px;
`;
export const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.03em;

  width: 100px;

  margin-bottom: 5px;

  color: #bbd0ff;
`;
export const StyledSubtitle = styled.p`
  width: 200px;

  font-size: 12px;
  line-height: 1.71;
  letter-spacing: 0.03em;

  color: #1e6091;
`;
