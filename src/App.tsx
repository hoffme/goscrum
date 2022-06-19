import { BrowserRouter } from "react-router-dom";

import StateProvider from "./redux/app/provider";
import AuthProvider from "./contexts/auth/provider";

import AppRoutes from "./routes";

const App = () => {
    return <StateProvider>
        <BrowserRouter>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </BrowserRouter>
    </StateProvider>
}

export default App;