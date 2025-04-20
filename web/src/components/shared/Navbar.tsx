import React, { useState } from 'react'
import ParticlesContainer from '@/components/ParticlesContainer'
import Typewriter from 'typewriter-effect'
import { FaBars } from 'react-icons/fa'
// import Resume from "@/images/resume/Resume_of_shamim_islam.pdf";
import { motion } from 'framer-motion'
import { styles } from '@/utils/styles'
import Link from 'next/link'
import Image from 'next/image'
import bannerImage from '@/images/banner.jpg'
import StarsCanvas from '../canvas/Stars'

const Navbar = () => {
  // handle navbar visibility
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 60) {
      setVisible(true)
    } else if (scrolled <= 60) {
      setVisible(false)
    }
  }
  window.addEventListener('scroll', toggleVisible)

  // animation added
  const buttonVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      rotate: 360,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20,
        // delay: 0.8,
      },
    },
    hover: {
      // x: [0, 20, -20, 25, -25, 0],
      transition: {
        type: 'spring',
        stiffness: 400,
      },
      scale: 1.2,
      color: '#FF8C00',
    },
  }

  const titleVariants = {
    hidden: {
      opacitiy: 0,
      x: '-100vw',
    },
    visible: {
      opacitiy: 1,
      color: '#FF8C00',
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: 0.2,
        duration: 1.5,
      },
    },
  }

  const navbarItems = ['about', 'projects', 'skills', 'contacts']

  return (
    <div className="h-screen relative ">
      {/* bg image  */}
      <div className="h-full w-full ">
        <div className="banner-gradient h-screen z-[-9]"></div>
        <Image
          src={bannerImage}
          alt="banner image"
          // height={100}
          // width={100}
          layout="fill"
          objectFit="cover"
          priority
          className="z-[-10]"
        />
      </div>

      <StarsCanvas />

      <div className="absolute top-0 left-0 right-0">
        <ParticlesContainer></ParticlesContainer>
      </div>

      {/* -------------navbar------------------- */}
      <div className="absolute left-0 right-0 top-0">
        <nav
          className={
            visible
              ? 'bg-primary shadow-2xl shadow-slate-400 fixed z-50 w-full px-4 md:px-10 py-1 lg:py-3 flex items-center justify-between transition ease-in-out delay-75'
              : 'w-full px-4 md:px-10 py-10 flex items-center justify-between transition-all delay-75'
          }
        >
          <div>
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl text-accent"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 50,
              }}
            >
              <a href="#home">{`</SI>`}</a>
            </motion.h1>
          </div>

          {/* --------------dropdown menu for mobile & tablet--------- */}
          <div className="flex lg:hidden dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle bg-slate-700 p-3 rounded-full"
            >
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="bg-gradient-to-b from-pink-500 to-violet-900 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Link href={`#${item}`}>{item}</Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ------visible for large device------- */}
          <div className="uppercase text-white text-sm font-bold tracking-widest hidden lg:flex gap-6">
            {navbarItems.map((item, index) => (
              <motion.h1
                key={index}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="text-xs"
              >
                <a href={`#${item}`} className="py-4">
                  {item}
                </a>
              </motion.h1>
            ))}
          </div>
        </nav>

        {/* ---------banner------- */}
        <div className="flex justify-center items-center pt-40">
          {/* <div className="mr-2">
            <div className="h-3 w-3 rounded-full bg-accent" />
            <div className="h-64 w-1 bg-gradient-to-b from-pink-500 to-violet-900 mx-auto" />
          </div> */}

          <div>
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className={styles.heroHeadText}
            >
              SHAMIM ISLAM
            </motion.h1>

            {/* ---typewriter--- */}
            <p
              className={`${styles.heroSubText} md:w-96 sm:w-72 w-36 mx-auto h-[70px]`}
            >
              <Typewriter
                options={{
                  strings: [
                    'I am a React Native Developer',
                    'Building Seamless and Scalable Web & Mobile Applications',
                    'I am a Full Stack Web Developer',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 0.2,
                }}
              />
            </p>

            {/* ---download resume--- */}
            <motion.div
              whileHover={{
                scale: 1.1,
                x: [0, -10, 10, 0],
                textShadow: '0px 0px 8px rgb(255, 255, 255)',
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
              }}
              className="p-5"
            >
              <Link
                className="btn btn-outline rounded-full hover:bg-transparent hover:text-secondary btn-xs md:btn-md font-bold text-secondary"
                href="https://drive.google.com/file/d/1OfQDRPlM564uKIMepX_5b5h3wg4beC2V/view?usp=sharing"
                target="_blank"
                download="Resume of shamim islam"
              >
                Download Resume
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
