import { Routes, Route } from "react-router-dom";

import { TasksPage, NotFoundPage, SignInPage, SignUpPage} from "../views/pages";

import AuthRoute from "./auth";

const AppRoutes = () => {
    return <Routes>
        <Route
            path={'/tasks'}
            element={<AuthRoute page={<TasksPage />} redirect={'/'} />}
        />
        <Route
            path={'/'}
            element={<AuthRoute notLogged page={<SignInPage />} redirect={'/tasks'} />}
        />
        <Route
            path={'/register'}
            element={<AuthRoute notLogged page={<SignUpPage />} redirect={'/tasks'} />}
        />
        <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
}

export default AppRoutes;