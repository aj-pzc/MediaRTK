import { fireEvent, render, screen } from '../test.utils';
import MusicLibrary from "../components/MusicLibrary";
import searchReducer, { fetchMusic } from '../Redux/slices/search.slice';


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


describe( 'Tests for Search Results component', () =>{
 
    it('should render list of songs', () => {

        const initialState = {
            search: {songs: mockSongDB, loading:false , error:null},
            playlist: [],
            favorites: []
        }

        render(
            <MusicLibrary/>, {preloadedState: initialState}
        );

        const songList = screen.getAllByRole('article')
        expect(songList).toHaveLength(4);
    });



    it('should display all components', ()=>{

        render(
            <MusicLibrary/>, {preloadedState: {
                search: {songs: mockSongDB, loading:false , error:null}}
            }
        );
        
        mockSongDB.forEach(song => {
            expect(screen.getByText(song.track, 'i')).toBeInTheDocument();
            }
        );
    });



    it('should add to playlist', ()=> {
        const initialState = {
            search: {songs: mockSongDB, loading:false , error:null},
            playlist: [],
            favorites: []
        };
        const {store} = render(
            <MusicLibrary/>, { preloadedState: initialState }
        );    

        const addBtn = screen.getAllByLabelText(/Favorites/i);  

        fireEvent.click(addBtn[0]);

        const state = store.getState();
        expect(state.favorites).toHaveLength(1);
        expect(state.favorites[0].track).toBe(mockSongDB[0].track);
    });

    it('should remove from playlist)', () => {
    const initialState = {
        search: { songs: mockSongDB, loading: false, error: null },
        playlist: [],
        favorites: []
    };

        const { store } = render(
            <MusicLibrary />, { preloadedState: initialState }
        );

        const addBtn = screen.getAllByLabelText(/Favorites/i);

        fireEvent.click(addBtn[0]);

        expect(store.getState().favorites).toHaveLength(1); 

        fireEvent.click(addBtn[0]);

        const finalState = store.getState();
        expect(finalState.favorites).toHaveLength(0);
        
        console.log("La canción fue eliminada correctamente al repetir click.");
    });
});


describe('Search Slice Reducer Tests', () => {
  const initialState = { songs: [], loading: false, error: null };

  it('should manage the pending state when loading DB', () => {
    const action = { type: fetchMusic.pending.type, };
    const state = searchReducer(initialState, action);
    
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should manage state as fulfilled', () => {
    const action = { 
      type: fetchMusic.fulfilled.type, 
      payload: mockSongDB
    };
    const state = searchReducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.songs).toEqual(mockSongDB);
  });

  it('should manage rejected state', () => {
    const action = { 
      type: fetchMusic.rejected.type,
      payload: 'Error de conexión' 
    };
    const state = searchReducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe('Error de conexión');
  });
});