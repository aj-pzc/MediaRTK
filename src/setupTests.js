
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';



require('jest-fetch-mock').enableFetchMocks();



global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

 jest.mock('react-router-dom', () => ({
    Link: ({ to, onClick, children }) => (
        <a href={to} onClick={onClick}>{children}</a>
    ),
    NavLink: ({ to, onClick, children }) => (
        <a href={to} onClick={onClick}>{children}</a>
    ),
    useNavigate: () => jest.fn(),
    useLocation: () => ({ pathname: '/' }),
}));

jest.mock('axios');

