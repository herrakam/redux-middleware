import CounterContainer from "./containers/CounterContainer";
import { Route } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
function App() {
  return (
    <>
      <CounterContainer></CounterContainer>
      <Route path="/" component={PostListPage} exact={true}></Route>
      <Route path="/:id" component={PostPage}></Route>
    </>
  );
}

export default App;
