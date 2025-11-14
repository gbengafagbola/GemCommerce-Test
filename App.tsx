import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./src/pages/index";
import NotFound from "./src/pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
