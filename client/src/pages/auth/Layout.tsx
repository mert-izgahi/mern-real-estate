import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { useEffect } from "react";

function Layout() {
    const { user } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    console.log("user", user);

    useEffect(() => {
        if (user) {
            console.log("user", user);

            navigate("/dashboard/profile");
        }
    }, [user]);

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default Layout;
