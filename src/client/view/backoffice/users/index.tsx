import { Button, notification } from "antd";

import axios from "axios";
import { useMutation } from "react-query";
export const Users = React.memo(() => {
    const [mutation] = useMutation(props => axios.post("/api/users"), {
        onSuccess: () => {
            notification.success({ message: "Added" });
        },
    });

    return (
        <>
            <h1>Users page</h1>
            <Button
                onClick={() => {
                    mutation();
                }}
            >
                ADD NEW USER
            </Button>
        </>
    );
});
