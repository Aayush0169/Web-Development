import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

export default function ColorButtons() {
  return (<div>
      <Button variant="contained" color='success' size='small'>Success</Button> <br />
      <Button variant="outlined" color='error' 
      size='large' style={{marginTop:"15px"}}
      startIcon={<DeleteIcon />}
      >Error</Button> <br /><br />
      <Alert severity="info">This is example of MaterialUi alerts</Alert>
      </div>
  );
}
