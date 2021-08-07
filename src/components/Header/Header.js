import React from 'react'
import { AppBar, Box, Stack, Toolbar, Typography, TextField, Avatar } from '@material-ui/core'
import brand1 from '../../assets/images/brand-1.png'
import brand2 from '../../assets/images/brand-2.png'
import AddIcon from '@material-ui/icons/Add';
import nellieOliver from '../../assets/images/nellie-oliver.png'
import arrowIcon from '../../assets/images/arrow.png'
const Header = () => {
  return (
    <AppBar position='static' elevation={0}>
      <Toolbar sx={{ py: 2 }}>
        <Stack sx={{ width: '100%' }} justifyContent='space-between'>
          <Stack spacing={3} alignItems='center' >
            <Typography variant='h6'>Brand Monitoring</Typography>
            <Box sx={{ border: '1px solid #A2B4FE', width: 55, height: 55, backgroundColor: '#DBE2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
              <img style={{ width: '35px' }} src={brand1} alt="addidas" />
            </Box>
            <Box sx={{ border: '1px solid #A2B4FE', width: 55, height: 55, backgroundColor: '#DBE2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
              <img style={{ width: '35px' }} src={brand2} alt="addidas" />
            </Box>
            <Box sx={{ border: '1px dashed #707070', width: 55, height: 55, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
              <AddIcon />
            </Box>
          </Stack>
          <Stack spacing={3} alignItems='center'>
            <input style={{ width: 350, backgroundColor: '#FAFBFC', border: 'none', outline: 'none', padding: '22px', borderRadius: '16px', fontSize: '16px' }} type="text" placeholder='Search' />
            {/* <TextField placeholder='Search' sx={{ '.MuiOutlinedInput-root': { width: 350, borderRadius: 3, backgroundColor: '#FAFBFC' } }} /> */}
            <Avatar src={nellieOliver} alt='Nellie Oliver' />
            <Box>
              <Typography>Nellie Oliver</Typography>
              <Typography variant='caption'>Sales Manager</Typography>
            </Box>
            <img style={{ width: '24px' }} src={arrowIcon} alt="arrow" />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
