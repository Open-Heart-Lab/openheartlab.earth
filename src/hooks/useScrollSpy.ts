'use client'

import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    let observer: IntersectionObserver | null = null

    const setupObserver = () => {
      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => !!el)

      if (elements.length === 0) return

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

          if (visible.length > 0) {
            const topId = visible[0].target.id
            console.log('Visible section:', topId)
            setActiveId(topId)
          }
        },
        {
          root: null,
          rootMargin: '-25% 0px -50% 0px',
          threshold: [0.1, 0.5, 1],
        }
      )

      elements.forEach((el) => observer!.observe(el))
    }

    // Delay to ensure elements are mounted
    const timeout = setTimeout(setupObserver, 100)

    return () => {
      clearTimeout(timeout)
      if (observer) observer.disconnect()
    }
  }, [sectionIds])

  return activeId
}