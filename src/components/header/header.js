import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { 
    AppBar, 
    Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

import TitleTypograph from '../common/text';
import { 
    Search, 
    SearchIconWrapper, 
    StyledInputBase, 
    AppToolbar } from './style';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <AppToolbar>
                <TitleTypograph 
                    variant="h5" 
                    component="div" 
                    text="Alsafaru Advisor" 
                />
          
                <Box display="flex">
                    <TitleTypograph 
                        variant="h6" 
                            component="div" 
                        text="Explore new places"
                    />
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