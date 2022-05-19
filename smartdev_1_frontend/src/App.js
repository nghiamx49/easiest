import AppRouter from "./routers";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
function App({ token, logout }) {
  return (
    <div className="App">
      <AppRouter />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover
        limit={1}
      />
    </div>
  );
}

export default App;
