import React from "react";
import { MoviesGrid } from "../MoviesGrid";
import Navbar from "../components/Navbar/Navbar";
import styles from './Catalogo.module.css';
import { Search } from "../components/Search";

export default function Catalogo() {
    return (
        <header>
            <Navbar />
            <div>
                <h1 className={styles.title}>MOVIES</h1>
                <Search/>
                <MoviesGrid/>
            </div>
        </header>
    )
}