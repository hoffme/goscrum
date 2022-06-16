import {BrowserRouter} from "react-router-dom";

import AuthProvider from "../contexts/auth/provider";

import AppRoutes from "../routes";

const App = () => {
    return <BrowserRouter>
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    </BrowserRouter>
}

export default App;