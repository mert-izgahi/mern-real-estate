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
import { SignInPage, SignUpPage, AuthLayout } from "./pages/auth";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Root Routes */}
                    <Route index element={<HomePage />} />
                    <Route path="properties" element={<PropertiesPage />} />
                    <Route
                        path="properties/:propertyId"
                        element={<SinglePropertyPage />}
                    />

                    {/* Auth Routes */}
                    <Route path="auth" element={<AuthLayout />}>
                        <Route path="sign-in" element={<SignInPage />} />
                        <Route path="sign-up" element={<SignUpPage />} />
                    </Route>

                    {/* Dashboard Routes */}
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
                </Route>
            </Routes>
        </>
    );
}

export default App;
