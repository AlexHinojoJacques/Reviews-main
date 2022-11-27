import Navbar from "../components/Navbar/Navbar";
import styles from './Catalogo.module.css';
import React from "react";
import { useState } from "react";
import ReseCom from '../components/Rese/ReseCom';


export default function Rese() {
    return (
        <div>
            <Navbar />
            <h1 className={styles.title}>RESEÑAS</h1>
            <section>
               <ReseCom/>
            </section>
        </div>
    )
}