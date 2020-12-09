import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../types';
import DashboardCard from '../components/DashboardCard';
import { fetchUsers } from '../saga';
import { resetUsers, selectUsers } from '../slice';
import { StyledDashboardPage } from './styles';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());

    return () => {
      dispatch(resetUsers());
    };
  }, [dispatch]);

  return (
    <StyledDashboardPage>
      {users.map((user: User) => (
        <DashboardCard key={user.id} user={user} />
      ))}
    </StyledDashboardPage>
  );
};

export default DashboardPage;
