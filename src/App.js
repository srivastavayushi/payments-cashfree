import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="max-h-screen lg:overflow-hidden flex">
      <Sidebar />
      <main className="shrink-0 grow max-h-screen overflow-scroll">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
