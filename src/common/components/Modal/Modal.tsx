import { ReactNode } from 'react';
import ReactModal from 'react-modal';
import { style, StyledModal, StyledButtonClose } from './styles';

ReactModal.setAppElement('#root');

const Modal = ({ children, open, onClose }: { children: ReactNode; open: boolean; onClose: () => void }) => (
  <ReactModal
    isOpen={open}
    onRequestClose={onClose}
    // @ts-ignore
    style={style}
  >
    <StyledModal>
      <StyledButtonClose onClick={onClose}>x</StyledButtonClose>
      {children}
    </StyledModal>
  </ReactModal>
);

export default Modal;
