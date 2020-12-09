import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { route } from '../../../app/Router';
import { Id } from '../../../common/types';
import { Post } from '../types';
import PostBar from '../components/PostBar';
import { fetchUser, fetchUserPosts } from '../saga';
import { resetPosts, resetUser, selectPosts, selectUser } from '../slice';
import { StyledButtonPost, StyledLink, StyledProfileHeader, StyledProfileName, StyledProfilePage } from './styles';

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
      <StyledProfileHeader>
        <StyledLink to={route.dashboard} />
        <StyledProfileName>{user.name}</StyledProfileName>
        <StyledButtonPost>+</StyledButtonPost>
      </StyledProfileHeader>
      {posts.map((post: Post) => (
        <PostBar key={post.id} post={post} />
      ))}
    </StyledProfilePage>
  );
};

export default ProfilePage;
