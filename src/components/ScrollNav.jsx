import React from "react";
import { useScrollTrigger } from "@mui/material";

const ScrollHandler = (props) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props.window ? window() : undefined
    });

    return React.cloneElement(props.children, {
        style: {
            backgroundColor: trigger ? "white" : "transparent",
            color: trigger ? "black" : "#576F72",
            fontWeight: trigger ? "bold" : "bold",
            transition: trigger ? "0.3s" : "0.5s",
            boxShadow: trigger ? "0px 1px 1px #afafaf": "none",
            padding: "4px 0px"
        }
    });
};

const ScrollNav = (props) => {
    return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollNav;
