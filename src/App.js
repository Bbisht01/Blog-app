import "bootstrap/dist/css/bootstrap.min.css";
import { /*Router, */Route, Switch/*, Redirect, useHistory*/ } from "react-router-dom";
import Blogs from "./Components/AfterLogin/Blogs";
import Collection from './Components/Collection/Collection';
import { ShowFeed } from "./Components/DetailsPage/FeedDetails";
import Navbar from "./Components/Navbar/Navbar";
import Register from './Components/Register/Register';
import Login from "./Components/Login/Login";
import WriteBlogs from "./Components/Write/WriteBlog";
// import createHistory from "history/createBrowserHistory";

// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

function App() {  
  // const history  = useHistory()
  return (
    <div className="App">
      <Navbar />
      {/*<Router history={history}>*/}
        <Switch  >
     <Route exact  path="/" component = {Blogs}/>
     <Route  path="/showFeed" component = {ShowFeed}/>
     <Route  path="/write" component = {WriteBlogs}/>
     <Route  path="/login" component = {Login}/> 
     <Route path="/register" component={Register}/>
     <Route path="/collection" component = {Collection}/>
 
     

        </Switch> 
        
      {/* </Router> */}
    </div>
  );
}

export default App;
