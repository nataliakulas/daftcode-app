import styled from 'styled-components';
import color from '../../../../common/styles/colors';
import trash from '../../../../common/assets/trash.svg';

export const StyledPostBar = styled.div`
  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;

  background-color: ${color.grey};

  margin-bottom: 1.6rem;

  :hover {
    opacity: 0.8;
  }
`;

export const StyledButtonDelete = styled.button`
  width: 2.4rem;
  height: 2.4rem;

  background-color: ${color.grey};
  background-image: url(${trash});
  background-repeat: no-repeat;
  background-position: center;

  border: none;

  margin: 2rem;

  cursor: pointer;
`;

export const StyledPostTitle = styled.p`
  color: ${color.dust};
`;
