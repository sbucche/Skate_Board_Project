import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

const DrawerComp = ({middleLinks}) => {
    
  const [open ,setOpen] = useState(false);

  return (
      <>
          <Drawer PaperProps={{ sx: {backgroundColor: "rgb(53,53,53)"}}} open={open} onClose={()=> setOpen(false)} >
              <List>
                  {
                     middleLinks.map((ele)=> (
                         <ListItemButton key={ele.tab} divider onClick={()=> setOpen(false)} LinkComponent={Link} to={`/${ele.path}`}>
                              <ListItemIcon>
                                   <ListItemText sx={{color:"white" , opacity: 0.7}} >
                                         {ele.tab}
                                   </ListItemText>
                              </ListItemIcon>
                         </ListItemButton>      
                     ))
                  }
              </List>
          </Drawer>
               <IconButton onClick={()=> setOpen(!open)} sx={{color:"white"}}>
                   <MenuRoundedIcon />
               </IconButton>
          
      </>
  )
}

export default DrawerComp