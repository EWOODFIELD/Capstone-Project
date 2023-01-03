import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

export default function BasicModal() {
// const params = useParams();
// const leaderid = params.leaderid
// const [card, setCard] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  
//   useEffect(()=> {
//     const database = `http://localhost:8080/dbscompdex/searchdetails/`
//     console.log(database)
//       axios.get(database)
//       .then(response=> {console.log(response.data); setCard(response.data)})
//       .catch(error => {console.log(error)})
//       },[])
      
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
            {/* {card.Players} */} Hello
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}