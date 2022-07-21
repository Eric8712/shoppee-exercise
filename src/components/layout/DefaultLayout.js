import React from "react";
import Header from "./Header";
import styled, {css} from "styled-components";

const  PageHeader = styled.div`
    ${props => props.fixed && css`
    position: fixed;
    `}
`

const DefaultLayout = ({ fixedHeader, children}) => {
return(
    <div>
        <PageHeader fixed={fixedHeader}>
            <Header />
        </PageHeader>
        {children}
    </div>
)
}

export default DefaultLayout