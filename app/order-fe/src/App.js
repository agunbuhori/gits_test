import './App.css';
import { Link, Route, BrowserRouter as Router, Switch, useParams } from 'react-router-dom';
import OrderList from './pages/OrderList';
import Detail from './pages/Detail';
import NewOrder from './pages/NewOrder';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="mt-4">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/detail/:id" render = {props => <Detail {...props} key={this.props.location.key} /> } />
          
          <Route path="/new">
            <NewOrder/>
          </Route>

          <Route path="/">
            <OrderList/>
          </Route>
          
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
