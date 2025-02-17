import {ReactNode} from "react";

export const Card = ({children}: { children: ReactNode }) => {
    return (<div style={{
        padding: '1rem',
        display: 'flex',
        gap: '0.6rem',
        flexDirection: 'column'
    }}>
        {children}
    </div>)
}