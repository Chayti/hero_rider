import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useUsers = () => {
    const { user } = useAuth();
    const [loggedin_user, setLoggedinUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setLoggedinUser(data));
    }, []);

    return { loggedin_user };
}

export default useUsers;