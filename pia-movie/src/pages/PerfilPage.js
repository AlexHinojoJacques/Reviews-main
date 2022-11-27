import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Card from '../components/Card';
import styles from './Catalogo.module.css';

export default function PerfilPage() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div>
                <h1 className={styles.title}>PROFILE</h1>
                <Card/>
            </div>
        </div>
    )
}