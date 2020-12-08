import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ListView, DetailView } from './Pages';
import { Header, Footer } from './Components';

export const App = () => {
  return (
    <Router forceRefresh={true}>
      <Header />
      <Switch>
        <Route exact path='/' component={ListView} />
        <Route path='/detail' component={DetailView} />
      </Switch>
      <Footer />
    </Router>
  );
};
