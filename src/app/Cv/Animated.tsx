'use client'
import React, {useState, useEffect, ReactNode, FC} from 'react'

export const Animated = ({
  children,
  delay = 0,
  duration = 500,
  distance = 26,
  className = '',
  disabled = false
}: {
  children: ReactNode;
  delay?: number
  duration?: number
  distance?: number
  className?: string
  disabled?: boolean
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    if (disabled) {
      setIsVisible(true)
      return
    }

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, disabled])

  return (
    <div
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateY(0) scale(1)'
          : `translateY(${distance}px) scale(0.98)`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}