import { useDispatch } from 'react-redux';
import { Id } from '../../../../common/types';
import { Post } from '../../types';
import { deleteUserPost } from '../../saga';
import { StyledButtonDelete, StyledPostBar, StyledPostTitle } from './styles';

const PostBar = ({ post: { id, title } }: { post: Post }) => {
  const dispatch = useDispatch();

  const handleDelete = ({ id }: Id) => dispatch(deleteUserPost({ id }));

  return (
    <StyledPostBar>
      <StyledButtonDelete onClick={() => handleDelete({ id })} />
      <StyledPostTitle>{title}</StyledPostTitle>
    </StyledPostBar>
  );
};

export default PostBar;
