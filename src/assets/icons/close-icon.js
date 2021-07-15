import React from "react"
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
width: 100%;
height: 100%;
`;

export const CloseIcon = () => (
    <CloseIconWrapper aria-hidden="true">
        <path
        d="M18.184 9.6L31.912 17.2032L29.728 18.4128L16 10.8096L2.27198 18.4128L0.0879822 17.2032L13.816 9.6L0.0879822 1.9968L2.27198 0.787201L16 8.3904L29.728 0.787201L31.912 1.9968L18.184 9.6Z"
        fill="black" />
    </CloseIconWrapper>
);

