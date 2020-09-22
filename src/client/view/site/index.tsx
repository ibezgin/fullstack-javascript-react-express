import { FunctionComponent } from "react";

interface IProps {
    children: FunctionComponent;
}
export const SiteTemplate = React.memo((props: IProps) => {
    return <>{props.children}</>;
});
