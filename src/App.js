import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const Loading = () => (
  <div>Loading...</div>
  );
  
const LazyWrapper = (Component) => (props) => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
)

const Home = LazyWrapper(lazy(() => import("./pages/Home/Home")));

export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
