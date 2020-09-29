import { useHistory } from "react-router";
import { Button } from "antd";

export const SiteHomePage = React.memo(() => {
    const history = useHistory();
    return (
        <>
            <Button
                onClick={() => {
                    history.push("/admin");
                }}
            >
                G0 to backoffice
            </Button>
        </>
    );
});
