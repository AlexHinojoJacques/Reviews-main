import React from "react";
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Navbar from "../components/Navbar/Navbar";

const NewPeli=()=>{
    const paperStyle = {padding: '30px 20px', width:400, margin:"30px auto"}
    const headerStyle = {margin: 0}
    const avatarStyle = {backgroundColor: '#D80032', margin:10}
    const btnStyle = {margin:'20px 0', backgroundColor: '#0B114A'}

    return(
        <header>
            <Navbar/>
            <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                   
                    <h1 style={headerStyle}>Agregar Pelicula</h1>
                    <Typography variant="caption">Caca caca popo pedo pissss</Typography>
                </Grid>
                <form>
                    <TextField fullWidth margin="dense" label="Titulo" placeholder='Escriba el nombre de la pelicula' required/>
                    <TextField fullWidth margin="dense" label="Sinopsis" placeholder='Breve descripcion' required/>
                    <TextField fullWidth margin="dense" label="Genero" placeholder='Genero de la pelicula' required/>
                    <TextField fullWidth margin="dense" label="Clasificacion" placeholder='Clasificacion de la pelicula' required/>
                    <TextField fullWidth margin="dense" label="Director" placeholder='Director de la pelicula' required/>
                    <TextField fullWidth margin="dense" label="Idioma Original" placeholder='Idioma original de la pelicula' required/>
                    <Button type="submit" style={btnStyle} size="large" variant="contained" fullWidth>Guardar</Button>
                </form>
            </Paper>
        </Grid>

        </header>
        
    )
}

export default NewPeli;