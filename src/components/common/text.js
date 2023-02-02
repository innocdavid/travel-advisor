import { Typography } from "@mui/material";
import React from "react";

const TitleTypograph = ({ variant, component, text }) => {
    return (
        <Typography 
            variant={ variant }
            component={ component }
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                { text }
        </Typography>
    );
}

export default TitleTypograph;