import React from 'react'
import {Card,CardActions,CardContent,CardContent,Typography} from '@mui/material';

function DeletePopUp(){

  return ( 
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <div>
          <h1>delete this address?</h1>
          <button>X</button>
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Delete</Button>
      </CardActions>
    </Card>
  );
}
  
export default DeletePopUp;