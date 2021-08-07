import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import AssessmentIcon from '@material-ui/icons/Assessment';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextSnippetIcon from '@material-ui/icons/TextSnippet';
import LogoutIcon from '@material-ui/icons/Logout';
const Sidebar = () => {
  return (
    <Box sx={{ width: 269, height: 1024, background: '#fff', position: 'absolute', borderRight: '1px solid #ccc' }}>
      <Typography sx={{ ml: 5, mt: 2, mb: 5 }} variant='h4'>Logo</Typography>
      <Box mb={30}>
        <Typography sx={{ ml: 5 }} variant='caption' color='textSecondary'>Admin tools</Typography>
        <List>
          <ListItem >
            <ListItemButton sx={{ backgroundColor: '#355DFF', color: '#fff', borderRadius: 3 }} >
              <ListItemIcon>
                <DashboardIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary='Investigate' />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <AddAlertIcon />
              </ListItemIcon>
              <ListItemText primary='Alart & Insights' />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary='Global' />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider sx={{ mb: 5 }} variant='middle' />
        <Typography sx={{ ml: 5 }} variant='caption' color='textSecondary'>Others</Typography>
        <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <TextSnippetIcon />
              </ListItemIcon>
              <ListItemText primary='Report' />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary='Notifications' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <List>
        <ListItem >
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar
