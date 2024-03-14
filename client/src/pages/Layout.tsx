import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";

function Layout() {
    return (
        <div>
            <Header />
            <div className="min-h-screen container max-w-7xl mx-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
