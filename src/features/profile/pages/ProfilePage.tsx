import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Id } from '../../../common/types';
import { fetchUser } from '../saga';
import { resetUser, selectUser } from '../slice';
import { StyledProfileName, StyledProfilePage } from './styles';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { id } = useParams<Partial<Id>>();

  useEffect(() => {
    id && dispatch(fetchUser({ id }));

    return () => {
      dispatch(resetUser());
    };
  }, [dispatch, id]);

  return (
    <StyledProfilePage>
      <StyledProfileName>{user.name}</StyledProfileName>
    </StyledProfilePage>
  );
};

export default ProfilePage;
