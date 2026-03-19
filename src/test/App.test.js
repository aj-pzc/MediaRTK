
import App from '../App';
import UserFavorites from '../components/UserFavorites';
import { fireEvent, render, screen } from '../test.utils';

jest.mock('react-router-dom', () => ({
    Link: ({children}) => <div data-testid= 'mock-link'>{children}</div>,
    useNavigate: () => jest.fn(),
    useLocation: () => ({pathname:`/`}),
    useParams: () => ({id:'1'}),

    Routes: ({ children }) => <div>{children}</div>,
    Route: ({ element }) => element,
}));

jest.mock('../components/AlbumDetails', () => () => 
    <div data-testid="mock-album-details">Album Details Mock</div>
);

jest.mock('../components/ArtistDetails', () => () => 
<div data-testid="mock-artist-details">Artist Details Mock</div>
);

const mockSongDB = [
{
    album:"we",
    albumID: 1446106131,
    artist: "gnash",
    artistID: 299209053,
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a7/f9/22/a7f9224a-5801-2864-a73b-c401ee99afbe/075679864024.jpg/100x100bb.jpg",
    genre: "Alternative",
    track: "the broken hearts club",
    trackID: 1446106140
},

{
    album: "Me",
    albumID: 1433403481,
    artist: "gnash",
    artistID: 299209053,
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f9/a8/ca/f9a8ca23-a1f3-1e17-ca4a-c40f5971b7d0/artwork.jpg/100x100bb.jpg",
    genre: "Pop",
    track: "Tell Me It's Okay",
    trackID: 1433404328
},

{
    album: "us",
    albumID: 1094931816,
    artist: "gnash",
    artistID: 299209053,
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/02/30/99/023099fa-d095-23f4-a645-06232a1d24f5/075679911902.jpg/100x100bb.jpg",
    genre: "Alternative",
    track: "u just can't be replaced (feat. rosabeales)",
    trackID: 1094931876
}];

describe('Tests for main App components', ()=>{
    it('should render all components from App', ()=>{

        const initialState = {
            search: { songs: [], loading: false, error: null },
            playlist: [],
            favorites: [],

            details: { 
                details: {}, 
                loading: false, 
                error: null 
            }
        };

        render(<App/>, {preloadedState: initialState} );

        expect(screen.getByText(/MediaPlayerApp/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Buscar/i)).toBeInTheDocument();
        expect(screen.getByText(/Mi Playlist/i)).toBeInTheDocument();
        expect(screen.getByText(/My Favorites/i)).toBeInTheDocument();

    });

    it('should provide search results from input entry', () =>{
        const initialState = {
            search: { songs: mockSongDB, loading: false, error: null },
            playlist: [],
            favorites: []
        };

        render(<App />, { preloadedState: initialState });
        expect(screen.getByText(/the broken hearts club/i)).toBeInTheDocument();
    });

    it('should add item to user Playlist when clicked', () =>{
        const initialState = {
            search: { songs: mockSongDB, loading: false, error: null },
            playlist: [],
            favorites: []
        };

        const { store } = render(<App />, { preloadedState: initialState });
        const addButtons = screen.getAllByRole('button', { name: /Playlist/i }); 
        fireEvent.click(addButtons[0]);

        expect(store.getState().playlist).toHaveLength(1);
    });

    it('should add item to Favorite List when clicked', () =>{
        const initialState = {
            search: { songs: mockSongDB, loading: false, error: null },
            playlist: [],
            favorites: []
        };

        const { store } = render(<App />, { preloadedState: initialState });
        const addButtons = screen.getAllByRole('button', { name: /Favorites/i }); 
        fireEvent.click(addButtons[0]);
        expect(store.getState().favorites).toHaveLength(1);
    });
});