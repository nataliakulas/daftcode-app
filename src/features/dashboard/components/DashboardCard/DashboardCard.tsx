import { profilePath } from '../../../../app/Router/utils';
import { User } from '../../types';
import {
  StyledDashboardCard,
  StyledDashboardUserName,
  StyledDashboardUserContact,
  StyledDashboardUserLink,
} from './styles';

const DashboardCard = ({ user: { id, name, email, phone, website } }: { user: User }) => (
  <StyledDashboardCard>
    <StyledDashboardUserName>{name}</StyledDashboardUserName>
    <StyledDashboardUserContact>
      <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
        {email}
      </a>
      <a href={`tel:${phone}`}>{phone}</a>
      <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
        {website}
      </a>
    </StyledDashboardUserContact>
    <StyledDashboardUserLink to={profilePath({ id })}>Details</StyledDashboardUserLink>
  </StyledDashboardCard>
);

export default DashboardCard;
