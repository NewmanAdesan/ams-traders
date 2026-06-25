import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setActiveId(e.target.id);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    return () => {
      spy.disconnect();
    };
  }, [sectionIds]);

  return activeId;
}
