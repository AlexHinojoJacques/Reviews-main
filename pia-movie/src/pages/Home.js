import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ImageSlider from "../components/ImageSlider";//<ImageSlider slides={SliderData}/> aaaaaaaaaaaaaaaaaaaaaaaaaa
import { SliderData } from "../components/SliderData";
import ReseCom from "../components/Rese/ReseCom";



export default function Home(){
    return(
        <div>
            <header>
                <Navbar/>
                <ImageSlider slides={SliderData}/> 
            </header>
            <div>
                <ReseCom/>
            </div>
        </div>
    )
}