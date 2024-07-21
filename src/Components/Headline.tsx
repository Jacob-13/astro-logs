import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Headline = ( { children }: Props ) => {
    return (
        <h1>{children}</h1>
    );

}

export default Headline;