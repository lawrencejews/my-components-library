import React from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton, SecondaryButton,TertiaryButton }from './components/buttons';

function App() {
    return (
        <div>
            <PrimaryButton>Hello world</PrimaryButton>
            <SecondaryButton>Goodbye world</SecondaryButton>
            <TertiaryButton>Hey world</TertiaryButton>
        </div>
    );
}
    
ReactDOM.render(
    <App />,
    document.querySelector("#root"));