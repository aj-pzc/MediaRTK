import reset from "styled-components";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    *, body{
        font-family: ${props => props.theme.fonts.mainFont};
        box-sizing: border-box;
        scrollbar-width: 0;
        margin:0;
    }

    a{
        text-decoration: none;
        color: ${props => props.theme.colors.text};

        :hover{
            cursor:pointer;
            transform: scale(0.95);
        }
        :active{
            color: ${props => props.theme.colors.activeLink};
            transform: scale(0.9);
        }
    }
    button{
        
        :hover{
        cursor:pointer;
        transform: scale(0.95);
    }
    :active{
        transform: scale(0.8);
    }
`;

const FavButton = styled.button`
    padding:0;
    margin:0;
    border:none;
    background-color: ${props => props.theme.colors.none};
        &:hover{
            cursor:pointer;
            transform:translateY(-3px);
        }
        &:active{
            transform: scale(0.7);
        }
    }
`;
const FavIcon = styled.img`
    width: 30px;
    height: auto;
`;

const FavBox = styled.div`
    width: 10%;
    height: fill-available;
    align-content: center;
`;

export default GlobalStyle;

export {
    FavButton,
    FavIcon,
    FavBox
}
