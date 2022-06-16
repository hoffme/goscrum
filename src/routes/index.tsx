import { Routes, Route } from "react-router-dom";

import { DashboardPage, NotFoundPage, SignInPage, SignUpPage} from "../pages";

import AuthRoute from "./auth";

const AppRoutes = () => {
    return <Routes>
        <Route
            path={'/dashboard'}
            element={<AuthRoute page={<DashboardPage />} redirect={'/sign_in'} />}
        />
        <Route
            path={'/sign_in'}
            element={<AuthRoute reverse page={<SignInPage />} redirect={'/dashboard'} />}
        />
        <Route
            path={'/sign_up'}
            element={<AuthRoute reverse page={<SignUpPage />} redirect={'/dashboard'} />}
        />
        <Route
            path={'*'}
            element={<NotFoundPage />}
        />
    </Routes>
}

export default AppRoutes;