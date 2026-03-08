import { useParams } from "react-router-dom";
import useGetDetails from '../../hooks/useGetDetails.js';
import { Link } from "react-router-dom";
import { AlbumCover, AlbumGrid, AlbumSleeve, ArtistDiscography, ArtistGenre, ArtistName, ArtistProfile, ProfileContainer } from "./styles.js";


const ArtistDetails = () => {
    const{id} = useParams();
    const { data, isLoading, error } = useGetDetails(id, "album");

    if(isLoading) return <p>Cargando detalles del artista...</p>;
    if(error) return <p>Error de carga</p>

    const artistInfo = data[0];
    const albums = data.slice(1);

    return(
       <ArtistProfile>
            <ProfileContainer className="artist-profile__header">
                <ArtistName>{artistInfo.artistName}</ArtistName>
                <ArtistGenre>{artistInfo.primaryGenreName}</ArtistGenre>
            </ProfileContainer>

            <ArtistDiscography className="artist-profile__discography">
                <h3>Álbumes</h3>
                <AlbumGrid>
                    {albums.map((album) => (
                        <AlbumSleeve key={album.collectionId} className="albums__card">
                            <Link to={`/album/${album.collectionId}`}>
                                <AlbumCover src={album.artworkUrl100.replace('100x100', '300x300')} alt={album.collectionName} />
                                <h4>{album.collectionName}</h4>
                                <p>{album.releaseDate.slice(0, 4)}</p>
                            </Link>
                        </AlbumSleeve>
                    ))}
                </AlbumGrid>
            </ArtistDiscography>
        </ArtistProfile>
    );
};

export default ArtistDetails;