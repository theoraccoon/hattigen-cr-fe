import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <AppRoutes/> {/* Render the AppRoutes component */}
    </Router>
  );
}

export default App;
