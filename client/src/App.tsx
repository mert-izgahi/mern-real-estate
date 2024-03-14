import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { HomePage, PropertiesPage, SinglePropertyPage } from "./pages/root";
import {
    CreatePropertyPage,
    DashboardLayout,
    DashboardPropertiesPage,
    EditPropertyPage,
    OverviewPage,
    ProfilePage,
} from "./pages/dashboard";
import { AuthLayout, SignInPage, SignUpPage } from "./pages/auth";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="properties" element={<PropertiesPage />} />
                    <Route
                        path="properties/:propertyId"
                        element={<SinglePropertyPage />}
                    />
                </Route>

                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="sign-in" element={<SignInPage />} />
                    <Route path="sign-up" element={<SignUpPage />} />
                </Route>

                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<OverviewPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route
                        path="properties/:propertyId"
                        element={<DashboardPropertiesPage />}
                    />
                    <Route
                        path="properties/create"
                        element={<CreatePropertyPage />}
                    />

                    <Route
                        path="properties/:propertyId/edit"
                        element={<EditPropertyPage />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
