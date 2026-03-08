import styled from "styled-components";

const UserList = styled.section`
    background-color: #eeecec;
    border-radius: 8px;
    padding: 0 20px 20px 20px;
    margin: 20px auto;
    max-width: 110rem;
    text-align: center; 
    height: auto;
    max-height: 55rem;
    overflow-y: scroll;
`;

const ListHeader = styled.div`
    position: sticky;
    top:0;
    z-index: 1000;
    background-color: #eeecec;
    padding-top: 30px;
    h2{
        font-size:1.5rem;
    }
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.div`
    padding: 0;
    margin: 5px;
    width: auto;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    &:hover {
    background-color: #e5e5e5;
    transform: scale(1.002);
    }
`;

const ListItemHeader = styled.div`
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: sticky;  
    top:65px;
    z-index: 1000;
    background-color: #eeecec;
    border-bottom: 2px solid #ccc;
    height: 45px;
    width: 100%;
    margin: 0;
`;

const ItemBox = styled.div`
    width: 20%;
    align-content: center;
`;

const Cover = styled.div`
    width: 10%;
    img{
        width: auto;
        max-width: 100px;;
    }
`;

export {
    UserList,
    ListHeader,
    ListContainer,
    ListItem,
    ListItemHeader,
    ItemBox,
    Cover        
}