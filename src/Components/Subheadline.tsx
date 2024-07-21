import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Subheadline = ( { children }: Props ) => {
    return (
        <h2>{children}</h2>
    );
}

export default Subheadline;