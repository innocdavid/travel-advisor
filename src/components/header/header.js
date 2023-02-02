import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Box, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

import { Search, SearchIconWrapper, StyledInputBase, AppToolbar } from './style';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <AppToolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                Explore new places
            </Typography>
            {/* <Autocomplete> */}
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            {/* </Autocomplete> */}
            
          </Box>
          
        </AppToolbar>
      </AppBar>
    </Box>
    );
}

export default Header;