import styled from 'styled-components';
import { typeScale} from '../utils';
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;  
    `
    ,
    large: () => `
    font-size : ${typeScale.h5};
    padding: 16px 24px;
    `,

    warning: ({props}) => `
        background-color: ${props.theme.status.warningColor};
        color: ${props.textColorInverted},

        &:hover, &:focus {
            background-color: ${props.theme.status.warningColorHover};
            outline: 3px solid ${props.theme.status.warningColorHover};
        }

        &:active {
            background-color: ${props.theme.status.warningColorActive};
        }
    `,
    SecondaryButtonWarning: ({props}) => `
        background: none;
        border-color: 2px solid ${props.theme.status.warningColor};
        color: ${props.theme.status.warningColor};
    `,
    tertiaryButtonWarning: ({props}) => `
    background: none;
    color: ${props.theme.status.warningColor};
    `,
    error: ({props}) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.textColorInverted};

    &: hover , &:focus {
        background-color: ${ props.theme.status.errorColor };
    }

    &:active {
        background-color: ${
        props.theme.status.errorColor
        };
    }
    `,
    success: ({props}) => `
    background: none;
    color: ${props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: 3px solid ${props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({props}) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.textColorInverted};
  `,
  secondaryButtonSuccess: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
  `
};

const Button = styled.button`
padding: 12px 24px;
font-size: ${typeScale.paragraph};
border-radius: 2px;
min-width: width 100px;
cursor: pointer;
font-family: "Roboto Mono", monospace;
transition: background-color 0.2s linear, color 0.2s linear;

&:hover {
    background-attachment: ${props => props.primaryColorHover};
    color: ${props => props.textColorOnPrimary};
}

&.focus {
    outline: 3px solid ${props => props.primaryColorHover};
}

&.active {
    background-color: ${props => props.primaryColorActive};
    border-color: ${props => props.primaryColorActive};
    color: ${props => props.textColorOnPrimary};
}

`;

export const PrimaryButton = styled(Button)`
background-color: ${props => props.primaryColor};
border: none;
color: white;

&:disabled {
    background-color: ${props => props.disabled};
    color: ${props => props.textOnDisabled};
    color: ${props => props.primaryColor};
    cursor: not-allowed;
}

${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
background: none;
border: 2px solid ${props => props.primaryColor};
color: ${props => props.primaryColor};

&:disabled {
    background-color: none;
    color: ${props => props.disabled};
    border-color: ${props => props.disabled};
    color: ${props => props.primaryColor};
    cursor: not-allowed;
}
${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
background: none;
border: none;
color: ${props => props.primaryColor};

&:disabled {
    background-color: disabled;
    color: ${props => props.disabled};
    color: ${props => props.primaryColor};
    cursor: not-allowed;
}

${applyStyleModifiers(BUTTON_MODIFIERS)}
`;