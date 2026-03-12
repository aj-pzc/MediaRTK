import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AlbumCover, AlbumGrid, AlbumSleeve, ArtistDiscography, ArtistGenre, ArtistName, ArtistProfile, ProfileContainer } from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearDetails, fetchDetails } from "../../Redux/slices/details.slice.js";


const ArtistDetails = () => {
    const{id} = useParams();
    const { details, loading, error } = useSelector(state=> state.details);
    const dispatch = useDispatch();

     useEffect(() => {
        dispatch(fetchDetails({id, entity: "album"}))

        return () => {
        dispatch(clearDetails());
        };
      }, [dispatch, id]);

    if(loading) return <p>Cargando detalles del artista...</p>;
    if(error) return <p>Error de carga</p>
    if (!details || details.length === 0) return null;

    const artistInfo = details ? details[0]: null;
    const albums = details.slice(1).filter(item => item.collectionId && item.artworkUrl100);
    
    return(
       <ArtistProfile>
            <ProfileContainer>
                <ArtistName>{artistInfo?.artistName || "Nombre no disponible"}</ArtistName>
                <ArtistGenre>{artistInfo?.primaryGenreName || "Género desconocido"}</ArtistGenre>
            </ProfileContainer>

            <ArtistDiscography >
                <h3>Álbumes</h3>
                <AlbumGrid>
                    {albums.map((album) => (
                        <AlbumSleeve key={album.collectionId} >
                            <Link to={`/album/${album.collectionId}`}>
                                <AlbumCover src={album.artworkUrl100?.replace('100x100', '300x300')} alt={album.collectionName || "S/N"} />
                                <h4>{album.collectionName}</h4>
                                <p>{album.releaseDate ? album.releaseDate.slice(0, 4) : "N/A"}</p>
                            </Link>
                        </AlbumSleeve>
                    ))}
                </AlbumGrid>
            </ArtistDiscography>
        </ArtistProfile>
    );
};

export default ArtistDetails;