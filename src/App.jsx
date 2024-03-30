import Layout from "./components/Layout";
import ThemeProvider from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
