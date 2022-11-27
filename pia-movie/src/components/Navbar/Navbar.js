import React, { useState } from "react";
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from './Navbar.elements';
import { FaBars, FaHome, FaTimes } from "react-icons/fa"; /*logo de la barra hamburguesa y home*/
import { GiPopcorn } from "react-icons/gi"; /*logo de la pagina palomitas*/
import { MdLocalMovies } from "react-icons/md"; /*logo de catalogo*/
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"; /*logo de sign up y login*/
import { IconContext } from "react-icons/lib"; /*para que los logos tengan el mismo size*/
import { Link, useNavigate } from "react-router-dom";
const handleClickPerfil = (e) => {
    const data = JSON.parse(localStorage.getItem("usuario"));
    //console.log("usuario", data._id);
    document.location.href = `/perfil/${data._id}`;
  };
const Navbar = () => {
    const [showMobileMenu, setshowMobileMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>

                    <LogoContainer>
                        <GiPopcorn />
                        <p>Fast</p>
                        <p>Review</p>
                    </LogoContainer>

                    <MobileIcon onClick={() => setshowMobileMenu(!showMobileMenu)}>
                        {
                            showMobileMenu ? <FaTimes /> : <FaBars />
                        }
                    </MobileIcon>

                    <Menu open={showMobileMenu}>
                        <MenuItem>
                            <MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)}>
                            <Link to="/">
                                <div>
                                    HOME
                                </div>
                            </Link>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)}>
                                <Link to="/catalogo">
                                <div>
                                    CATALOGO
                                </div>
                                </Link>
                                
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)}>
                            <Link to="/Rese" >
                                <div>                                
                                    RESEÑAS
                                </div>
                               </Link>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)}>
                            <Link onClick={handleClickPerfil} >
                                <div>                                
                                    PERFIL
                                </div>
                                </Link>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)}>
                                <Link to="/login" >
                                    <div>LOGIN</div>
                                </Link>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)}>
                            <Link to="/signup" >
                                <div>
                                    SIGNUP
                                </div>
                            </Link>
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    );
};

export default Navbar