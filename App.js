import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

function App() {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
            <Alert />
        </main>
    );
}

export default App;
