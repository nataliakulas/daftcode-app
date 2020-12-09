import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../saga';
import { resetUsers, selectUsers } from '../slice';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());

    return () => {
      dispatch(resetUsers());
    };
  }, [dispatch]);

  console.log(users);

  return <div>App</div>;
};

export default DashboardPage;
