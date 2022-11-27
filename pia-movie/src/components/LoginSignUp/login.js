import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { margin } from "@mui/system";

import { LogInService } from "../../services/UsuarioService";

const Login = () => {

    const paperStyle = { padding: 30, height: '55vh', width: 400, margin: "30px auto" }
    const avatarStyle = { backgroundColor: '#D80032',margin:10}
    const btnStyle = {margin:'20px 0', backgroundColor: '#0B114A'}

    const navigate = useNavigate();
    const [usuario, setUser] = useState({
        user: "",
        pass: "",
    });

    const handleOnChangeInput = (e) => {
        const { value, name } = e.target;

        setUser({
        ...usuario,
        [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await LogInService(usuario);
        if (res.message) {
        alert("Error en usuario o contraseña.");
        } else {
        localStorage.setItem("usuario", JSON.stringify(res.userdb));
        localStorage.setItem("token", JSON.stringify(res.token));
        document.location.href = "/";
        }
    };

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><FavoriteIcon /></Avatar>
                    <h1>Log In</h1>
                </Grid>
                <form onSubmit={handleSubmit}>
                <TextField name="user" margin="dense" label='Username' placeholder='Enter your username' fullWidth required  value={usuario.user} onChange={handleOnChangeInput} />
                <TextField name="pass" margin="dense" label='Password' placeholder='Enter your password' type='password' fullWidth required  value={usuario.pass} onChange={handleOnChangeInput} />
                <Button type='submit' style={btnStyle} size="large" variant="contained" fullWidth>Log In</Button>
                </form>
                
                <Typography> Do you have an account?
                    <Link href="#">
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;