"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Calendar } from "lucide-react"

type NavLinkProps = {
  name: string
  href: string
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

const NavLink = ({ name, href, onClick }: NavLinkProps) => (
  <Link
    href={href}
    className="hover:text-white transition-colors duration-150 relative group"
    onClick={(e) => onClick(e, href)}
  >
    {name}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-150 group-hover:w-full"></span>
  </Link>
)

type IconLinkProps = {
  href: string
  ariaLabel: string
  children: React.ReactNode
}

const IconLink = ({ href, ariaLabel, children }: IconLinkProps) => {
  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5 },
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-150"
      aria-label={ariaLabel}
      variants={iconVariants}
      initial="initial"
      whileHover="hover"
    >
      {children}
    </motion.a>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <motion.div
        className="container mx-auto px-4 md:px-8 flex justify-between items-center"
        animate={{ color: scrolled ? "#fff" : "#000" }}
        transition={{ duration: 0.4 }}
      >
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="#home" onClick={(e) => scrollToSection(e, "#home")}>
            MRiyan<span className="text-red-500">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              name={link.name}
              href={link.href}
              onClick={scrollToSection}
            />
          ))}
          <IconLink href="https://calendly.com/riyan20riyan/quickchat" ariaLabel="Schedule a meeting">
            <Calendar size={24} />
          </IconLink>
          <IconLink href="https://github.com/Riyan-Dev" ariaLabel="GitHub">
            <Github size={24} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/muhammad-riyan-aslam-7b2340188" ariaLabel="LinkedIn">
            <Linkedin size={24} />
          </IconLink>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <IconLink href="https://calendly.com/riyan20riyan/quickchat" ariaLabel="Schedule a meeting">
            <Calendar size={24} />
          </IconLink>
          <IconLink href="https://github.com/Riyan-Dev" ariaLabel="GitHub">
            <Github size={24} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/muhammad-riyan-aslam-7b2340188" ariaLabel="LinkedIn">
            <Linkedin size={24} />
          </IconLink>
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="container mx-auto px-4 py-4"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center mb-4 text-white"
                >
                  <Link
                    href={link.href}
                    className="py-2 transition-colors duration-150 text-lg"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
