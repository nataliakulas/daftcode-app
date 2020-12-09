import styled from 'styled-components';
import color from '../../../../common/styles/colors';

export const StyledDashboardCard = styled.div`
  width: 24rem;
  height: 32rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${color.grey};

  margin: 3rem;
  padding: 2rem;
`;

export const StyledDashboardUserName = styled.header`
  font-size: 2.6rem;
  line-height: 3.2rem;
  font-weight: 300;

  margin-bottom: 1.4rem;
`;

export const StyledDashboardUserContact = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: ${color.ash};
  }
`;
