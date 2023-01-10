//[AppComp 1.08]

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


//[APB 2.40] Define Modal CSS Styling
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

//[APB 2.50] Definition of Static Modal
export default function BasicModal({ event }) {

  //[APB 2.51] Set States 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //[APB 2.61] Return Modal Structure and Behaviour
  
  return (
    <div>
      <Button onClick={handleOpen}>See More Info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Event: 
            {event.Competition}<br></br>
            No. of Players: 
            {event.Players}<br></br>
            Top Cut:
            {event.TopCut}<br></br>
            Tournament Organiser:
            {event.Organiser}<br></br>
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}