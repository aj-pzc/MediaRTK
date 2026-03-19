import UserFavorites from "../components/UserFavorites";
import UserPlaylist from "../components/UserPlaylist";
import { fireEvent, render, screen } from "../test.utils";

jest.mock('react-router-dom', () => ({
    Link: ({ children, to }) => <div data-testid="mock-link" href={to}>{children}</div>,
}));

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
    album: "us",
    albumID: 1094931816,
    artist: "gnash",
    artistID: 299209053,
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/02/30/99/023099fa-d095-23f4-a645-06232a1d24f5/075679911902.jpg/100x100bb.jpg",
    genre: "Alternative",
    track: "u just can't be replaced (feat. rosabeales)",
    trackID: 1094931876
}];


describe( 'Tests for User Playlist component', () =>{

    it('should show render all songs in playlist', () => {

        const userPlaylist = {
            playlist:mockSongDB,
            favorites:[],
        };

        render(
            <UserPlaylist/>, {preloadedState: userPlaylist}
        );

        const handlePLaylist = screen.getAllByRole('button',{name: /Playlist/i})
        expect(handlePLaylist).toHaveLength(2);

        mockSongDB.forEach(song => {
            expect(screen.getByText(song.track, 'i')).toBeInTheDocument();
            }
        );
    });

    it('should remove a song from list when clicked', () => {
        const initialState = {
            playlist: mockSongDB, 
            favorites: []
        };

        const { store } = render(
            <UserPlaylist />, { preloadedState: initialState }
        );

        const removeButtons = screen.getAllByRole('button', { name: /Playlist/i });
        
        fireEvent.click(removeButtons[0]);

        const state = store.getState();
        expect(state.playlist).toHaveLength(1); 
        expect(state.playlist[0].trackID).not.toBe(mockSongDB[0].trackID); 
    });

    it('should show empty playlist message', () => {

        const emptyPlaylist = {
            playlist:[],
            favorites:[],
        };

        render(
            <UserPlaylist/>, {preloadedState: emptyPlaylist}
        );

        const EmptyPlaylist = screen.getByText(/Tu Playlist Esta Vacia/i);        
        expect(EmptyPlaylist).toBeInTheDocument();
    });
});


describe( 'Tests for Favorites List component', () =>{

    it('should show render all songs in favorites playlist', () => {

        const userFavorites = {
            playlist:[],
            favorites:mockSongDB,
        };

        render(
            <UserFavorites/>, {preloadedState: userFavorites}
        );

        const handlePLaylist = screen.getAllByRole('button',{name: /Favorites/i})
        expect(handlePLaylist).toHaveLength(2);

        mockSongDB.forEach(song => {
            expect(screen.getByText(song.track, 'i')).toBeInTheDocument();
            }
        );
    });

    it('should remove a song from list when clicked', () => {
        const initialState = {
            playlist:[],
            favorites:mockSongDB,
        };

        const { store } = render(
            <UserFavorites />, { preloadedState: initialState }
        );

        const removeButtons = screen.getAllByRole('button', { name: /Favorites/i });
        
        fireEvent.click(removeButtons[0]);

        const state = store.getState();

        expect(state.favorites).toHaveLength(1); 
        expect(state.favorites[0].trackID).not.toBe(mockSongDB[0].trackID); 
    });

    it('should show empty playlist message', () => {

        const emptyPlaylist = {
            playlist:[],
            favorites:[],
        };

        render(
            <UserFavorites/>, {preloadedState: emptyPlaylist}
        );

        const EmptyPlaylist = screen.getByText(/No hay favoritos aún/i);        
        expect(EmptyPlaylist).toBeInTheDocument();
    });
});