import React from 'react'
import './App.css'
import { Link } from "react-router-dom";

export function Overview() {

    return (
    <div id="container">
        <h1>Demo Projects</h1>
        <div id="subtitle">Index of projects created with <a href="https://metacity.cc" className="dim">Metacity Tools</a></div>
        <div id="projects">
        <Link className="project" to="heights">
            <div className="cover" style={{
                backgroundImage: "url(/heights.png)"}}></div>
            <h2>Prague: Building Heights</h2>
            <div className="desc">Visualization of building heights, featuring multiple datasets, and lables on click.</div>
        </Link>
        <Link className="project" to="flat">
            <div className="cover" style={{
                backgroundImage: "url(/flat.png)"}}></div>
            <h2>Prague: Area Utilization</h2>
            <div className="desc">Visualization of a flat area utilization model with 3D buildings on top of it.</div>
        </Link>
        </div>
    </div>
    )
}

