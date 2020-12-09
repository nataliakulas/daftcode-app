import { Route, Router, Switch } from 'react-router-dom';
import { history, route } from '../Router';
import DashboardPage from '../../features/dashboard/pages';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={route.dashboard} component={DashboardPage} />
    </Switch>
  </Router>
);

export default App;
