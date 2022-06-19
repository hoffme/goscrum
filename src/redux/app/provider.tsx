import { ReactNode } from "react";
import { Provider } from "react-redux";

import store from "./store";

interface Props {
    children?: ReactNode
}

const StateProvider = (props: Props) => (
    <Provider store={store}>
        { props.children }
    </Provider>
);

export default StateProvider;