import {useEffect, useState} from "react";

import AuthService, {DataResult} from "../../../services/auth";

const useAuthOptions = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown | undefined>(undefined);
    const [data, setData] = useState<DataResult | undefined>(undefined);

    useEffect(() => {
        setLoading(true);

        AuthService.Data()
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return {data, loading, error};
}

export default useAuthOptions;