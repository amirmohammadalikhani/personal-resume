"use client"

import { useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

type AnimationVariant = "fadeIn" | "slideUp" | "slideRight" | "slideLeft" | "scale" | "rotate" | "staggered"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  duration?: number
  id?: string
  threshold?: number
}

export function AnimatedSection({
  children,
  className = "",
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  id,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useIntersectionObserver({
    ref,
    threshold,
    freezeOnceVisible: true,
  })

  const variants = {
    hidden: {
      opacity: 0,
      y: variant === "slideUp" ? 50 : 0,
      x: variant === "slideRight" ? -50 : variant === "slideLeft" ? 50 : 0,
      scale: variant === "scale" ? 0.8 : 1,
      rotate: variant === "rotate" ? -5 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
        staggerChildren: variant === "staggered" ? 0.1 : 0,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {variant === "staggered" ? <motion.div variants={childVariants}>{children}</motion.div> : children}
    </motion.div>
  )
}

