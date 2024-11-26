"use client";
import { useRef, useState } from "react";
import Header from "./header";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import ThreeDComponent from "./threeDComponent";

 // This is a client component 👈🏽

export default function Home() {
    const [ scrollPosition, setScrollPosition ] = useState({ scrollTop: 0, scrollLeft: 0 });

    const footerRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    // const footerRef, aboutRef, projectsRef, contactRef = useRef(null);

    const handleScroll = function(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if(e.target?.name === 'about') aboutRef?.current?.scrollIntoView();
        if(e.target?.name === 'projects') projectsRef?.current?.scrollIntoView();
        if(e.target?.name === 'contact') contactRef?.current?.scrollIntoView();
    }

    return (
        <main className="flex flex-col items-center w-full min-h-screen bg-transparent">
            <ThreeDComponent/>
            {/* <Header {...{handleScroll}}/>
            <About {...{aboutRef}}/>
            <Projects {...{projectsRef}}/>
            <Contact {...{contactRef}}/>
            <Footer/> */}
        </main>
    );
}
