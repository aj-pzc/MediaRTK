import styled from "styled-components";

export const AllSongs = styled.section`
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

export const SearchContainer = styled.div`
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

export const SearchBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    background-color:#eeecec;
    padding-bottom: 10px;
`


export const SearchBtn = styled.button`
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
export const SearchBar = styled.input`
    border: 1px solid #ccc;
    border-radius: 25px;
    width: 75rem;
    height: 2.5rem;
    font-size: 1.1rem;
    padding-left: 15px;
`;

export const SongsHeaders = styled.article`
    position: sticky;  
    top:120px;
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
    justify-content: space-between;
    align-items: center;
`;

export const SongsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;



export const EachSong = styled.article`
    padding: 0;
    margin: 5px;
    width: auto;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &:hover {
        background-color: #e5e5e5;
        transform: scale(1.002);
    }
`;

export const SongCover = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
      img{
        width: auto;
        max-width: 80px;;
    }
`;

export const SongItem = styled.div`
    width: 15%;
    align-content: center;

`;
export const AddPlaylist = styled.div`
    width: 10%;
    align-content: center;
`;

export const AddButton = styled.button`
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

export const AddIcon = styled.img`
    width: 30px;
    height: auto;
`;