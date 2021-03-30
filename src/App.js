import React from 'react';
import PostList from './PostList'
import Form from './Form';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route path ="/" exact component={PostList} />
          <Route path="/form" component={Form} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App