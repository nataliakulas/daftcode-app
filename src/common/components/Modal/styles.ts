import styled from 'styled-components';
import color from '../../styles/colors';
import { ButtonMixin } from '../../styles/mixins';

export const style = {
  overlay: {
    zIndex: 100,
    backgroundColor: color.grey,
  },
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 'none',
    backgroundColor: 'transparent',
    overflow: 'auto',
    borderRadius: 'none',
    padding: 0,
  },
};

export const StyledModal = styled.div`
  min-height: 90vh;

  position: relative;

  padding: 4rem;
`;

export const StyledButtonClose = styled.button`
  ${ButtonMixin};

  position: absolute;
  top: 4rem;
  right: 4rem;

  color: ${color.grey};
  background-color: ${color.white};
  border-radius: 50%;

  margin: 2rem;
`;
