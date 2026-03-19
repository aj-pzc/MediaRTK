import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

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

export const FavButton = styled.button`
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
`;
export const FavIcon = styled.img`
    width: 30px;
    height: auto;
`;

export const FavBox = styled.div`
    align-content: center;
    padding: 0 10px;
`;

export default GlobalStyle;
