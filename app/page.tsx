"use client"

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { useInView } from "framer-motion";
// import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { Link, Button, Element, Events, scrollSpy } from 'react-scroll'
import Typed from "typed.js";

export default function Home() {
  
  const [current, setCurrent] = useState("Home")
  const homeref = useRef(null);
  const homeisInView = useInView(homeref, { once: false });
  const aboutref = useRef(null);
  const aboutisInView = useInView(aboutref, { once: false });
  const typedref = useRef(null)

  useEffect(() => {

    const typed = new Typed(typedref.current, {
      strings: ['.', '- Software Developer .', '- Engineer .', '- Student .', '- Programmer .', '.'],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
      startDelay: 250,
      backDelay: 2000,
    })

    return () => {
      typed.destroy()
    }

  }, [])

  const elements = {
    "Home": "#2196F3", 
    "About": "#ffce39", 
    "Resume": "", 
    // "Projects": "#9C27B0", 
    "Contact": "#F44336"}

  useEffect(() => {
    console.log(aboutisInView)
  }, [aboutisInView])
  const NavBar = () => {

    return (

      <div className="sticky top-20 mr-24 mt-[5%] flex justify-end" style={{
        opacity: current === "Home" ? 0 : 1
      }}>

        <nav className="flex flex-row gap-12 ">
          {Object.keys(elements).map((elt: string) => {
            if (elt === "Resume") {
              return <a className="text-xl text-gray-300" target="_blank">Resume</a>
            }
            return <p className={elt !== current ? "text-xl text-gray-300" : "text-xl"} style={{
              color: elt !== current ? "#FFFFFF" : "#2196F3"
            }}><Link activeClass="active" to={elt} smooth={true} duration={100} onClick={() => setCurrent(elt)}>{elt}</Link></p>
          })}
        </nav>

      </div>
    )
  }
  
  
  

  useEffect(() => {

    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  
  return (
  <div className="max-w-[90vw] mx-auto">
      <div ref={homeref} id="Home" className="flex flex-col h-screen">
        <div className="flex flex-col gap-6 mt-[20%]">
          <p className="text-6xl font-bold">Prathik Murthy <span className="text-blue-500" ref={typedref} /></p>
          <nav className="flex flex-row gap-12 mt-4">
            {Object.keys(elements).map((elt) => {
              if (elt === "Resume") {
                return <a className="text-xl text-gray-300" target="_blank">Resume</a>
              }
              return <p className={elt !== "Home" ? "text-xl text-gray-300" : "text-xl text-blue-500 "}><Link activeClass="active" to={elt} smooth={true} duration={100} onClick={() => setCurrent(elt)}>{elt}</Link></p>
            })}
          </nav>
          <div className="flex flex-row gap-16 mt-4 text-white">
            <a target="_blank" href="https://github.com/prathikmurthy"><IconBrandGithub width={50} height={50} /></a>
            <a target="_blank" href="https://www.linkedin.com/in/prathikmurthy/"><IconBrandLinkedin width={50} height={50} /></a>
          </div>
        </div>
      </div>
      <div id="content" >
          <NavBar /> 
          <div id="About" ref={aboutref} className="flex  h-screen mb-24 max-w-5xl" > 
            <div ref={aboutref} style={{
              transform: aboutisInView ? "none" : "translateY(-100px)",
              opacity: aboutisInView ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}>
            <div className="flex flex-col ml-24 gap-12 mt-[20vh]" style={{
              opacity: current == "About" ? 1 : 0
            }}>
                <div className="flex flex-row">
                  <p className="text-xl text-gray-400 font-bold tracking-widest">ABOUT</p>
                  <div className="ml-4 pr-64 mb-[1.5%] border-b-4" style={{borderColor: (elements as any)[current]}}></div>
                </div>
              <p className="text-6xl font-bold" style={{ color: (elements as any)[current] }}>Hi, I'm Prathik !</p>

              <p className="text-xl leading-10">I'm a <span style={{ color: (elements as any)[current] }}>software developer</span> and engineer studying Computer Science at the <span style={{ color: (elements as any)[current] }}>University of Michigan </span> in Ann Arbor, MI.</p>

              <p className="text-xl leading-10">Some languages and tools I have experience with are:</p>

              <div className="grid grid-cols-2" ref={aboutref} style={{
                transform: aboutisInView ? "none" : "translateY(-100px)",
                opacity: aboutisInView ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s"
              }}> 
                <div>
                  <ul className="list-disc gap-y-12 list-inside leading-10 " >
                    <span style={{ color: (elements as any)[current] }} className="underline underline-offset-8">Programming Languages</span>
                    <li className="">
                      TypeScript / JavaScript
                    </li>
                    <li className="">
                      C++
                    </li>
                    <li className="">
                      Python
                    </li>
                    <li className="">
                      SQL
                    </li>

                  </ul>
                </div>
                <div>
                  <ul className="list-disc gap-y-12 list-inside leading-10" >
                    <span style={{ color: (elements as any)[current] }} className="underline underline-offset-8">Tools</span>
                    <li className="">
                      Microsoft Azure
                    </li>
                    <li className="">
                      Autodesk Inventor / Solidworks / OnShape
                    </li>
                    <li className="">
                      Git
                    </li>
                    <li className="">
                      React / NextJS / Vue / Svelte
                    </li>

                  </ul>

                </div>

              </div>

                {/* <p className="text-3xl font-light">I am a <span className="text-blue-500">Coder </span></p> */}
              </div>
            </div>
          </div>

          <div id="Projects" className="h-screen">

          </div>
          <div id="Contact" className="h-screen">

          </div> 
      </div>  
  </div>
  )
}


