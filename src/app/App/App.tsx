import { Route, Router, Switch } from 'react-router-dom';
import { history, route } from '../Router';
import DashboardPage from '../../features/dashboard/pages';
import ProfilePage from '../../features/profile/pages';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={route.dashboard} component={DashboardPage} />
      <Route exact path={route.profile} component={ProfilePage} />
    </Switch>
  </Router>
);

export default App;
