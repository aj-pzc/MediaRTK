import styled from "styled-components";

const AllSongs = styled.section`
    background-color: ${props => props.theme.colors.primary};
    border-radius: 8px;
    padding: 0 20px 20px 20px;
    margin: 20px auto;
    max-width: 110rem;
    text-align: center; 
    height: auto;
    max-height: 55rem;
    overflow-y: ${props => props.theme.layering.overflow};
`;

const SearchContainer = styled.div`
    background-color: ${props => props.theme.colors.primary};
    max-width: 110rem;
    text-align: center; 
    position: sticky;
    top:0;
    z-index: 1000;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2{
      margin:0;
      font-size:1.5rem;
    }
`;

const SearchBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    background-color:#eeecec;
    padding-bottom: 10px;
`


const SearchBtn = styled.button`
    background-color: ${props => props.theme.colors.background};
    color:${props => props.theme.colors.textInvtd};
    font-size: 1.1rem;
    padding: 5px 15px;
    border-radius: 25px;
    height: 2.5rem;
    text-align: center;

    &:hover{
        cursor:pointer;
        transform:translateY(-3px);
        background-color: ${props => props.theme.colors.btnHover};
    }

    &:active{
        transform: scale(0.97);
        background-color: ${props => props.theme.colors.btnActive};
    }
`;
const SearchBar = styled.input`
    border: 1px solid #ccc;
    border-radius: 25px;
    width: 75rem;
    height: 2.5rem;
    font-size: 1.1rem;
    padding-left: 15px;
`;

const SongsHeaders = styled.article`
    position: sticky;  
    top:115px;
    z-index: 1000;
    background-color: ${props => props.theme.colors.primary};
    border-bottom: 2px solid #ccc;
    height: 45px;
    transform: none;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const SongsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;



const EachSong = styled.div`
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

const SongCover = styled.div`
    width: 10%;
      img{
        width: auto;
        max-width: 80px;;
    }
`;

const SongItem = styled.div`
    width: 20%;
    align-content: center;

`;


export {
    AllSongs,
    SearchBtn,
    SearchBar,
    SearchBox,
    SearchContainer,
    SongsHeaders,
    SongsContainer,
    EachSong,
    SongCover,
    SongItem
}