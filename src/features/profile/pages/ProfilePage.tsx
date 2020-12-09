import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Id } from '../../../common/types';
import { Post } from '../types';
import { fetchUser, fetchUserPosts } from '../saga';
import { resetUser, selectUser, resetPosts, selectPosts } from '../slice';
import { StyledProfileName, StyledProfilePage } from './styles';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  const { id } = useParams<Partial<Id>>();

  useEffect(() => {
    if (id) {
      dispatch(fetchUser({ id }));
      dispatch(fetchUserPosts({ id }));
    }

    return () => {
      dispatch(resetUser());
      dispatch(resetPosts());
    };
  }, [dispatch, id]);

  return (
    <StyledProfilePage>
      <StyledProfileName>{user.name}</StyledProfileName>
      {posts.map((post: Post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </StyledProfilePage>
  );
};

export default ProfilePage;
