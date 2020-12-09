import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow from '../../../common/assets/arrow.svg';

export const StyledProfilePage = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;
`;

export const StyledProfileHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  width: 2.4rem;
  height: 2.4rem;

  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledProfileName = styled.h1`
  font-size: 3.6rem;
  line-height: 4.6rem;
  font-weight: 300;

  margin: 1rem auto;
`;
