import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FaHome, FaTrash } from 'react-icons/fa';
import { IoLinkSharp } from 'react-icons/io5';
import { FaPersonChalkboard } from 'react-icons/fa6';
import { IoIosCall, IoIosMore } from 'react-icons/io';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { CiCircleList } from 'react-icons/ci';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const pages = [
    {
    name:'Home',
    icon:<FaHome />
    },
    {
      name:'About Us',
      icon:<FaPersonChalkboard />
    },
    {
      name:'Links',
      icon:<IoLinkSharp />
    },
    {
      name:'Contact Us',
      icon:<IoIosCall />
    },
  ]

  const afterDivider =[
    {
      name:'Create Acoount',
      icon:<MdAccountBalanceWallet />
    },
    {
      name:'Know More',
      icon:<IoIosMore />
    },
    {
      name:'Delete Account',
      icon:<FaTrash />
    },
  ]

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {pages.map((page, index) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {afterDivider.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><CiCircleList size={50} /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
