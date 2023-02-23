import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const Login = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
    }
    return (
        <Box 
sx={{
  marginTop : 8,
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}
}>
   <Typography component="h1" variant="h5">
            Sign in
          </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
  <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box 
            sx={{
              display:'flex',alignItems:'center', flexDirection:'column',
            }}>
 <Button sx={{
              mt:2,
            }} variant="contained">Submit</Button>
               <Typography component="span" variant="h5">
            Sign in
          </Typography>
            </Box>
      </Box>
</Box>
    );
}