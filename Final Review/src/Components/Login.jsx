import {Box,Grid,Button,TextField,Container,Avatar,ThemeProvider,createTheme,Typography} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from './AuthContext';
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "70%",
  boxShadow: 60,
  borderRadius: 20,

};
const center = {
  position: "relative",
  top: "50%",
  left: "37%",
};

export default function Login() {
  const navigate = useNavigate();
  const[email,setemail]=useState('')
  const[pass,setpass]=useState('')
  const {login } = useAuth();
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(email==='' || pass===''){
      alert("Enter all the fields");
      return;
    }
    else{
      axios.get(`http://localhost:3001/users?email=${email}&pass=${pass}`)
      .then(res=>{
        if(res.data.length > 0){
          login()
          alert("Logged in Successfully")
          navigate("/")
        }
        else if(res.data.length === 0){
          axios.get(`http://localhost:3001/users?email=${email}`)
          .then(r=>{
            if(r.data.length === 0){
              alert("Email doesn't exist. Create an account")
              navigate('/register')
            }
            else{
              alert("Invalid Password")
            }
          })
        }
      })
      .catch(err=>{console.log(err)})
    }
  }

  return (
    <div style={{backgroundImage: 'url("https://images.wallpaperscraft.com/image/single/cup_coffee_steam_5456_1920x1080.jpg'}}>
      <div style={{height: "100vh",color: "#f5f5f5"}}>
        <Box sx={boxstyle}>
            <Grid item xs={12} sm={12} lg={6}>
              <Box style={{backgroundSize: "cover",height: "65vh",backgroundColor: " rgba(34, 35, 35, 0.5)",borderRadius:'10px'}}>
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={35} />
                        <Box sx={center}>
                        <Avatar sx={{ ml: "35px", mb: "4px", bgcolor: "#ffffff" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography variant="h5" sx={{ml:'0.7em'}}>
                            Sign In
                        </Typography>
                    </Box>
                    <Box component="form" sx={{ mt: 2 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField required fullWidth id="email" label="Email" value={email} name="email" autoComplete="email" onChange={(e)=>{setemail(e.target.value)}}/>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField required fullWidth name="password" value={pass} label="Password" type="password" id="password" autoComplete="new-password" onChange={(e)=>{setpass(e.target.value)}}/>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "14em", mr: "3em" }}>
                          <Stack direction="row" spacing={1}>
                            <Typography variant="body1" component="span" style={{ marginTop: "10px", cursor: "pointer" }}>
                              Forgot password?
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                          <Button onClick={handleSubmit} type="submit" variant="contained" fullWidth="true" size="large" sx={{mt: "0.8em",mr: "1.8em",borderRadius: 28,color: "#ffffff",minWidth: "40%",backgroundColor: "#FF9A01"}}>
                            Sign in
                          </Button>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <Stack direction="row" spacing={2}>
                            <Typography variant="body1" component="span" style={{ marginTop: "1.1em" }}>
                              Not registered yet?{" "}
                              <span style={{ color: "#beb4fb", cursor: "pointer" }} onClick={() => {navigate("/register");}}>
                                Create an Account
                              </span>
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Box>
      </div>
    </div>
  );
}


