'use client'
import React, {useEffect, useRef, useState, ReactNode} from 'react'

interface AnimatedPanelProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedPanel: React.FC<AnimatedPanelProps> = ({children, className = ''}) => {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const [reflectionPosition, setReflectionPosition] = useState<number>(0)

  useEffect(() => {
    const handleScroll = (): void => {
      if (!panelRef.current) return

      // Get element position relative to viewport
      const rect = panelRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Calculate how far the element is through the viewport (0 to 1)
      // 0 = just entered viewport from bottom
      // 0.5 = center of viewport
      // 1 = about to exit viewport from top
      const progress = 1 - (rect.bottom / (viewportHeight + rect.height))

      // Clamp progress between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, progress))

      // Set the reflection position based on scroll progress
      setReflectionPosition(clampedProgress * 100)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Trigger initial calculation
    handleScroll()

    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={panelRef}
      className={`relative overflow-hidden rounded-lg bg-white shadow-md ${className}`}
    >
      {/* The reflection element */}
      <div
        className="absolute top-0 bottom-0 w-16 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)',
          left: `${reflectionPosition - 10}%`,
          transform: 'skewX(-20deg)',
          opacity: 0.6,
          transition: 'left 0.05s ease-out'
        }}
      />

      {/* Panel content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
