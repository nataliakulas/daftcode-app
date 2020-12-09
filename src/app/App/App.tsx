import { Router, Switch } from 'react-router-dom';
import { history } from '../Router';

const App = () => (
  <Router history={history}>
    <Switch />
  </Router>
);

export default App;
