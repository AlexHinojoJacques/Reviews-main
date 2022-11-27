import React, { useState } from "react";
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { CreateUser } from "../../services/UsuarioService";  //Añadir los servicios

const SignUp=()=>{
    const paperStyle = {padding: '30px 20px', width:400, margin:"30px auto"}
    const headerStyle = {margin: 0}
    const avatarStyle = {backgroundColor: '#D80032', margin:10}
    const btnStyle = {margin:'20px 0', backgroundColor: '#0B114A'}

    const regex = new RegExp("(?=.{8,})");

    const [user, setUser] = useState({
        name: "",
        user: "",
        email: "",
        pass: ""
        //image: null,
    });
    const handleOnChangeInput = (e) => {
        const { value, name } = e.target;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!regex.test(user.pass)) {
        alert("La contraseña debe tener más de 8 caracteres.");
        } else {
        const response = await CreateUser(user);

        if (response.message) {
            alert("Error al registrar usuario, intente más tarde.");
        } else {
            alert("Te has registrado con exito");
            localStorage.setItem("usuario", JSON.stringify(response.newObject));
            localStorage.setItem("token", JSON.stringify(response.token));
            document.location.href = "/";
        }
        }
    };

    return(
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <FavoriteBorderIcon/>
                    </Avatar>
                    <h1 style={headerStyle}>Sign Up</h1>
                    <Typography variant="caption">Please fill this form to create an account</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth name="name" margin="dense" label="Name" placeholder='Enter your name' required value={user.name} onChange={handleOnChangeInput}/>
                    <TextField fullWidth name="user" margin="dense" label="Username" placeholder='Enter your username' required value={user.user} onChange={handleOnChangeInput}/>
                    <TextField fullWidth name="email" margin="dense" label="Email" placeholder='example@outlook.com' required value={user.email} onChange={handleOnChangeInput}/>
                    <TextField fullWidth name="pass" margin="dense" label="Password" placeholder='Enter your password' required value={user.pass} onChange={handleOnChangeInput}/>
                    <TextField fullWidth name="passValidation" margin="dense" label="Confirm Password" placeholder='Confirm your password' required/>
                    <Button type="submit" style={btnStyle} size="large" variant="contained" fullWidth>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp;