import { Button } from '@mui/material';
import { useParams } from "react-router-dom";
import React, { useState, useEffect  } from 'react'
import './Card.css'
import { GetById } from "../services/UsuarioService";

function authFailed() {
    alert("El token ha expirado, inicie sesión de nuevo")
    localStorage.clear()
    document.location.href = "/login"
};

export const Card = () => {
    const { usuarioId } = useParams();
    const [usuario, setUsuario] = useState("usuarioId");
    const [option, setOption] = useState("posts");
    //const name = JSON.parse(localStorage.getItem("usuario"));
    //const [user, setUser ] = JSON.parse(localStorage.getItem("usuario"));
    const [bio, setEmail ] = useState();

    useEffect(() => {
        async function fetchData() {
          const data = await GetById(usuarioId);
          if (data.message) {
            setUsuario(null);
            console.log("no jalo");
          } else {
            setUsuario(data);
            
            //console.log("usuario", data._id);
            
            //name = data.user;
            //const [user, setUser ] = useState();
            //const [bio, setEmail ] = useState();
          }
        }
        
        fetchData();
        
      }, []);
  return (
    <header>
      <div className='App'>

          <div className='Card'>
              <div className='upper-container'>
                  <div className='image-container'>
                      <img src="https://media.istockphoto.com/vectors/popcorn-in-a-paper-cup-vector-id1216436314?k=6&m=1216436314&s=612x612&w=0&h=kkGrjTg12lG9vDgP1KnxP5lirUJgPaWJuH67yc07_Cs=" alt="" height="100px" width="100px" />

                  </div>

              </div>
              <div className='lower-container'>
                  <h3> {usuario.user}    </h3>
                  <h4> {usuario.name}    </h4>
                  <h4> {usuario.bio}    </h4>
              </div>
          </div>
      </div>    
      </header>
  )
}

export default Card
