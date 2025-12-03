import Navbar from "./components/Navbar";
import AppRouter from "./router";

export default function App() {
  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <main className="py-4">
        <div className="container">
          <AppRouter />
        </div>
      </main>
    </div>
  );
}