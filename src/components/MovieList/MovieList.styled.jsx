import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  max-width: calc(100vw - 30px);

  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledItem = styled.li`
  display: flex;
  flex-wrap: wrap;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const StyledImg = styled.img`
  width: 300px;
  height: 400px;

  border-radius: 10px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fdf0d5;

  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    border-radius: 10px;
    transform: scale(1.04);
    box-shadow: 1px 4px 34px -4px rgba(187, 208, 255, 1);
  }
`;
export const StyledSubtitle = styled.p`
  width: 300px;
  height: 30px;

  font-size: 16px;
  line-height: 1.71;
  letter-spacing: 0.03em;
`;
