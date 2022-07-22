import React from "react";
import styled from "styled-components";
import Container from "../common/Container";


const StyledFooter = styled.footer`
    background-color: #fbfbfb;
    padding: 40px 0;
`

const Footer = () => {
    return(
        <StyledFooter>
            <Container>
            This is a footer
            </Container>
        </StyledFooter>
    )
}

export default Footer