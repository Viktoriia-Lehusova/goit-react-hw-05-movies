import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledMain = styled.main`
  max-width: calc(100vw);
  height: 100%;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  height: 40px;
  max-width: calc(100vw);
`;
export const StyledLink = styled(NavLink)`
  color: #fdf0d5;
  text-decoration: none;
  margin-right: 50px;

  font-weight: 700;
  font-size: 36px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.03em;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover {
    color: #99a4f7;
  }
`;
