import styled from "styled-components";

const HeaderBar = styled.header`
    background-color: ${props =>props.theme.colors.background};
    padding: 15px;
    width: 100%;
    text-align: center;
    font-size: 1.7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    a{
        color: #ffffff;
        :active{
            color: ${props => props.theme.colors.btnActive};
        }
    }
`;

const MenuBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuBtn = styled.button`
    background-color: transparent;
    border: none;
    img{
        width: 65px;
    }

`;

const MenuClose = styled.button`
    background-color: transparent;
    border:none;
    color:#ffffff;
    font-size: 1.5rem;
    font-weight: 600;
    &:hover{
        cursor:pointer;
        color: #d1cbcb;        
    }
    &:active{
        transform: scale(0.85);
    }
`;

const AppName = styled.div`
    width: 95%;
    align-content: center;
    h1{
        font-size:2rem;
        font-weight: 300;
        letter-spacing:2    px;
    }
`;

const MenuNav = styled.nav`
    display: none;
    
    ${props => props.$show &&`
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-start;
        background-color: #2c2626;
        width: 18.5rem;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
        z-index: 3000;
        padding: 30px 15px;
        box-shadow: 5px 0 #27232b5d;        
        `
    }
`;

const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    padding:10px 0 0 20px;
    gap: 15px;
`;




export {
    HeaderBar,
    MenuBtn,
    MenuBox,
    MenuNav,
    MenuClose,
    AppName,
    NavLinks,

}