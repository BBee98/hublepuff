import {CSSProperties, ReactNode} from "react";

const CardCSS: CSSProperties = {
    padding: "1rem",
    display: "flex",
    gap: "0.6rem",
    flexDirection: "column",
    background: "rgb(255,255,255)",
    color: "rgb(0,0,0)"
}

export const Card = ({children}: { children: ReactNode }) => {
    return (<div style={CardCSS}>
        {children}
    </div>)
}