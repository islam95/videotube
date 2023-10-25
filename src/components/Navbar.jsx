import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

import { SearchBar } from './';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          backgroundColor: '#fff',
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '50px',
          height: '41px',
        }}
      ></div>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
