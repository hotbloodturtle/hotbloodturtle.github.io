import { Route, Routes } from "react-router-dom";
import PageIndex from "./pages";
import PageComponents from "./pages/components";
import LayoutMain from "./layouts/LayoutMain";
import LayoutBody from "./layouts/LayoutBody";
import LayoutSidebar from "./layouts/LayoutSidebar";

const App = () => {
  return (
    <LayoutMain>
      <LayoutSidebar />
      <LayoutBody>
        <Routes>
          <Route exact path="/" element={<PageIndex />} />
          <Route path="/components" element={<PageComponents />} />
        </Routes>
      </LayoutBody>
    </LayoutMain>
  );
};

export default App;
