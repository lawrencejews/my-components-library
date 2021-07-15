import styled from 'styled-components';

const primaryOrange = "#E38605"

const Button = styled.button`
padding: 12px 24px;
font-size: 1rem;
border-radius: 2px;
min-width: width 100px;
cursor: pointer;
font-family: "Roboto Mono", monospace;
`

export const PrimaryButton = styled(Button)`
background-color: ${primaryOrange};
border: none;
color: white;
`
export const SecondaryButton = styled(Button)`
background: none;
border: 2px solid ${primaryOrange};
color: ${primaryOrange};
`
export const TertiaryButton = styled(Button)`
background: none;
border: none;
color: ${primaryOrange};
`