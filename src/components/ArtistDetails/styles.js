import styled from "styled-components";

const ArtistProfile = styled.section`
    display: flex;
    background-color: #eeecec;
    flex-direction: column;
    border-radius: 8px;
    margin: 20px auto;
    max-width: 110rem;
    text-align: center; 
    height: auto;
    max-height: 55rem;
    overflow-y: scroll;
`;

const ProfileContainer =styled.div`
    position: sticky;  
    top:0px;
    z-index: 1000;
    background-color: #eeecec;
    padding-bottom: 15px;
`;

const ArtistName = styled.h2`
    margin: 20px 0 7px 0;
    font-size: 2rem;
    font-weight: 500;
`;

const ArtistGenre = styled.p`
    margin: 0;
    font-size: .8rem;
`;

const ArtistDiscography = styled.div`
    padding: 0 20px 20px 20px;
    h3{
        font-size: 1.2rem;
    }
`;

const AlbumGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px 20px;
    h4, p{
        margin:0 0 5px 0;

    }
`;

const AlbumSleeve = styled.div`
    box-shadow: 3px 3px #3603582d;
    border-radius: 2%;
    background-color: #f1eff8;

    &:hover{
        transform:translateY(-5px); 
        transition: transform 300ms ease-out

    }
`;

const AlbumCover = styled.img`
    position: center;
    display:0;
`

export { 
    ArtistProfile,
    ProfileContainer,
    ArtistName,
    ArtistGenre,
    ArtistDiscography,
    AlbumGrid,
    AlbumSleeve,
    AlbumCover   
}