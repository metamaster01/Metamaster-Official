// "use client"

// import * as React from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X } from 'lucide-react'

// import { Button } from "./ui/button"
// import ConsultationDialog from "@/components/consultation-dialog"

// const NAV_ITEMS = [
//   { name: "Home", link: "#home" },
//   { name: "About", link: "#about" },
//   { name: "Services", link: "#services" },
//   { name: "Celebrity", link: "#celebrity-section" },
//   { name: "Portfolio", link: "#portfolio" },
//   { name: "Team", link: "#team" },
//   { name: "Contact", link: "#contact" },
// ]

// export default function ResizableNavigationExample() {
//   const [mobileOpen, setMobileOpen] = React.useState(false)
//   const [dialogOpen, setDialogOpen] = React.useState(false)
//   const [scrolled, setScrolled] = React.useState(false)
//   const [activeHash, setActiveHash] = React.useState<string>("")

//   React.useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 2)
//       // highlight active section
//       const currentHash = window.location.hash
//       setActiveHash(currentHash || "#home")
//     }
//     onScroll()
//     window.addEventListener("scroll", onScroll, { passive: true })
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   React.useEffect(() => {
//     // close mobile menu on resize to desktop
//     const onResize = () => {
//       if (window.innerWidth >= 768) setMobileOpen(false)
//     }
//     window.addEventListener("resize", onResize)
//     return () => window.removeEventListener("resize", onResize)
//   }, [])

//   const handleOpenDialog = () => setDialogOpen(true)
//   const handleMobileNavToggle = () => setMobileOpen((o) => !o)
//   const handleMobileNavClose = () => setMobileOpen(false)

//   // Smooth scroll behavior for internal links
//   const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
//     if (href.startsWith("#")) {
//       e.preventDefault()
//       const el = document.querySelector(href)
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" })
//         history.replaceState(null, "", href)
//         setActiveHash(href)
//         handleMobileNavClose()
//       }
//     }
//   }

//   return (
//     <>
//       <motion.header
//         initial={{ y: -24, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 220, damping: 24 }}
//         className="sticky top-0 z-50"
//       >
//         <div
//           className={[
//             "w-full",
//             "border-b",
//             scrolled ? "bg-black/80 backdrop-blur border-white/10" : "bg-black border-transparent",
//             "transition-colors"
//           ].join(" ")}
//         >
//           <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8 h-16 md:h-20 text-white">
//             {/* Logo */}
//             <Link href="/" aria-label="Go to home" className="flex items-center gap-3">
//               <Image
//                 src={"/logo2.png"}
//                 alt="Company logo"
//                 width={80}
//                 height={60}
//                 className="h-18 w-18 rounded-full object-contain"
//                 priority
//               />
//               <span className="sr-only">Company</span>
//             </Link>

//             {/* Desktop Nav */}
//             <div className="hidden md:flex items-center gap-8">
//               {NAV_ITEMS.map((item) => {
//                 const isActive = activeHash === item.link || (!activeHash && item.link === "#home")
//                 return (
//                   <a
//                     key={item.name}
//                     href={item.link}
//                     onClick={(e) => handleAnchorClick(e, item.link)}
//                     className={[
//                       "relative text-sm font-medium transition-colors",
//                       "hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm",
//                       isActive ? "text-white" : "text-white/80"
//                     ].join(" ")}
//                   >
//                     <span className="px-1">{item.name}</span>
//                     <motion.span
//                       layoutId="nav-underline"
//                       className="absolute left-0 right-0 -bottom-1 h-px bg-white/60"
//                       initial={false}
//                       animate={{ opacity: isActive ? 1 : 0 }}
//                       transition={{ duration: 0.2 }}
//                       style={{ borderRadius: 999 }}
//                     />
//                   </a>
//                 )
//               })}
//             </div>

//             {/* Desktop CTA */}
//             <div className="hidden md:block">
//               <Button
//                 onClick={handleOpenDialog}
//                 className="rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition-colors px-5 h-10"
//               >
//                 Book Consultation
//               </Button>
//             </div>

//             {/* Mobile Toggle */}
//             <button
//               aria-label={mobileOpen ? "Close menu" : "Open menu"}
//               aria-expanded={mobileOpen}
//               aria-controls="mobile-menu"
//               onClick={handleMobileNavToggle}
//               className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-white hover:bg-white/10 transition-colors"
//             >
//               {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </button>
//           </nav>

//           {/* Mobile Menu */}
//           <AnimatePresence>
//             {mobileOpen && (
//               <motion.div
//                 id="mobile-menu"
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.2, ease: "easeOut" }}
//                 className="md:hidden overflow-hidden border-t border-white/10 bg-black"
//               >
//                 <div className="px-4 py-4 space-y-1">
//                   {NAV_ITEMS.map((item, idx) => (
//                     <motion.a
//                       key={item.name}
//                       href={item.link}
//                       onClick={(e) => handleAnchorClick(e, item.link)}
//                       className="block px-2 py-3 text-white/90 hover:text-white text-sm font-medium rounded-md transition-colors"
//                       initial={{ x: -12, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: 0.03 * idx }}
//                     >
//                       {item.name}
//                     </motion.a>
//                   ))}
//                   <div className="pt-2">
//                     <Button
//                       onClick={() => {
//                         handleMobileNavClose()
//                         handleOpenDialog()
//                       }}
//                       className="w-full justify-center rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition-colors h-10"
//                     >
//                       Book Consultation
//                     </Button>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.header>

//       {/* Consultation Dialog */}
//       <ConsultationDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
//     </>
//   )
// }
