import {CSSProperties, ReactNode} from "react";

const CardCSS: CSSProperties = {
    padding: "1rem",
    display: "flex",
    gap: "0.6rem",
    flexDirection: "column",
    background: "rgb(29,29,29)",
    color: "rgb(255,255,255)",
    minWidth: "12rem",
    width: "fit-content",
    borderRadius: "0.2rem",
}

export const Card = ({children}: { children: ReactNode }) => {
    return (<div style={CardCSS}>
        {children}
    </div>)
}