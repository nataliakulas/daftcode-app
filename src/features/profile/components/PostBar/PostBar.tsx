import { Post } from '../../types';
import { StyledButtonDelete, StyledPostBar, StyledPostTitle } from './styles';

const PostBar = ({ post: { title } }: { post: Post }) => (
  <StyledPostBar>
    <StyledButtonDelete />
    <StyledPostTitle>{title}</StyledPostTitle>
  </StyledPostBar>
);

export default PostBar;
