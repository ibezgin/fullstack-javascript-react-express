import Typography from "@material-ui/core/Typography";
import React from "react";

const LazilyLoadedContent: React.FunctionComponent = () => (
    <Typography>
        This component was loaded lazily from a seperate chunk
    </Typography>
);

// eslint-disable-next-line import/no-default-export
export default LazilyLoadedContent;
