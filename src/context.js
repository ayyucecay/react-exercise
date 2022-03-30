import React, {useContext} from "react";
import { UserContext } from "./App";

const UserProfile = () => {
    const users = useContext(UserContext);

    return (
        <div>
            {users.map((user) => (
                <li>
                    I am {user.name} and I am a {user.occupation}!
                </li>
            ))}
        </div>
    )
}

export default UserProfile;