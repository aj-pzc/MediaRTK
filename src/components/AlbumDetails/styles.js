import styled from "styled-components";

const Album = styled.section`
    display: flex;
    justify-content: center;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
`;

const AlbumContainer = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center; 
    justify-content: center;
    gap: 50px;
    background-color: #eeecec;
    width: 90%;
    max-width: 1400px;
    padding: 15px 30px;
    border-radius: 12px;
    height: 55.7rem;
`;

const AlbumInfo = styled.div`
    display: flex; 
    flex-direction: column;
    flex: 1; 
    align-items: center;
    text-align: center;

}
`;

const AlbumCover = styled.img`
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    margin-bottom: 20px;
`;

const AlbumTracks = styled.div`
    flex: 1.5; 
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    width: 100%;
    height: 100%;
    max-height: 55rem;
    overflow-y: scroll;
    scrollbar-width: none;
`;

const TracksHeader = styled.div`
    width: 100%;
    padding: 30px 0 10px;
    text-align: left;
    margin:0;
    position: sticky;
    top:0;
    z-index: 1000;
    background-color: #eeecec;
    border-bottom: 1px solid #ccc;
`;

const Tracks = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;

    &:hover {
    background-color: #e5e5e5;
    transform: scale(1.002);
    }
`;

const TrackTitles = styled.div`
    text-align: left;
    font-weight: 500;
    width: 75%;
`;

const TrackDuration = styled.div`
    color: #666;
`;



export{
    Album,
    AlbumContainer,
    AlbumInfo,
    AlbumCover,
    AlbumTracks,
    TrackDuration,
    TrackTitles,
    Tracks,
    TracksHeader
}

