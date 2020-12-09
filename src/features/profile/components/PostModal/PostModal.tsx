import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../../common/components/Modal';
import { modalClose, selectModal } from '../../../../app/App/slice';
import { StyledPostModalHeader } from './styles';

const PostModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);

  const handleClose = () => dispatch(modalClose());

  return (
    <Modal open={modal === 'ADD_POST'} onClose={handleClose}>
      <StyledPostModalHeader>Add post</StyledPostModalHeader>
    </Modal>
  );
};

export default PostModal;
