import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  font-size: 16px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  text-align: center;

  text-decoration: none;
  color: #fdf0d5;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: #99a4f7;
  }
`;
