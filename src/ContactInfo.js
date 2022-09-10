import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
padding: 3em;
background-color:#05445E;
border-radius: 10px;
`

const ContactInfo = () => {
    return(
        <>
            <header>Feel free to get in touch!</header>

            <main id="contact">
                <Wrapper>
                   <a href="https://www.linkedin.com/in/doro-hinrichs/">LinkedIn</a>
                </Wrapper>
                <Wrapper>
                    <a href="https://github.com/D-oro">GitHub</a>
                </Wrapper>
                <Wrapper>
                    <a href="mailto:doro.codes@gmail.com">Email</a>
                </Wrapper>
            </main>
        </>
    )
}

export default ContactInfo