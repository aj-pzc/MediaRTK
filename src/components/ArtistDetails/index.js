import { useParams } from "react-router-dom";
import useGetDetails from '../../hooks/useGetDetails.js';
import { Link } from "react-router-dom";


const ArtistDetails = () => {
    const{id} = useParams();
    const { data, isLoading, error } = useGetDetails(id, "album");

    if(isLoading) return <p>Cargando detalles del artista...</p>;
    if(error) return <p>Error de carga</p>

    const artistInfo = data[0];
    const albums = data.slice(1);

    return(
       <div className="artist-profile">
            <header className="artist-profile__header">
                <h1>{artistInfo.artistName}</h1>
                <p>{artistInfo.primaryGenreName}</p>
            </header>

            <section className="artist-profile__discography">
                <h3>Álbumes</h3>
                <div className="albums__grid">
                    {albums.map((album) => (
                        <article key={album.collectionId} className="albums__card">
                            <Link to={`/album/${album.collectionId}`}>
                                <img src={album.artworkUrl100.replace('100x100', '300x300')} alt={album.collectionName} />
                                <h4>{album.collectionName}</h4>
                                <p>{album.releaseDate.slice(0, 4)}</p>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ArtistDetails;