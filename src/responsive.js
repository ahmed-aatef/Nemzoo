import {css} from "styled-components"


export const mobile = (props) => {
    return css`

    @media only Screen and (max-width: 600px) {
        ${props}
    }
    
    
    
    `;
};