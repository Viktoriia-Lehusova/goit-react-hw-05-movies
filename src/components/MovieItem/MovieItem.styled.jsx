import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;
export const StyledImg = styled.img`
  width: 400px;
  height: 500px;

  margin-right: 50px;

  border-radius: 10px;
`;
export const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.16;
  letter-spacing: 0.03em;

  margin-bottom: 10px;

  color: #bbd0ff;
`;
export const StyledText = styled.p`
  font-size: 20px;
  line-height: 1.16;
  letter-spacing: 0.03em;

  margin-bottom: 10px;

  color: #1e6091;
`;
export const StyledSubtitle = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 1.16;
  letter-spacing: 0.03em;

  margin-bottom: 10px;

  color: #bbd0ff;
`;
export const StyledItem = styled.li`
  font-size: 16px;
  line-height: 1.16;
  letter-spacing: 0.03em;

  margin-bottom: 10px;

  color: #1e6091;
`;
export const StyledLink = styled(Link)`
  font-size: 18px;

  text-decoration: none;
  color: #1e6091;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: #bbd0ff;
  }
`;
