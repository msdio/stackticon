import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

interface ObserverProps {
  ref: RefObject<HTMLDivElement | null>;
  threshold: number;
}

const useIntersectionObserver = ({ ref, threshold }: ObserverProps) => {
  const [observing, setObserving] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries[0].isIntersecting ? setObserving(true) : setObserving(false);
      },
      { threshold: threshold },
    );

    observer.observe(ref.current as HTMLDivElement);
  }, [ref, threshold]);

  return observing;
};

export default useIntersectionObserver;
