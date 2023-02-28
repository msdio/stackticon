/* eslint-disable */
import { useEffect, useState } from 'react';

interface ObserverProps {
  ref: any;
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

    observer.observe(ref.current);
  }, [ref, threshold]);

  return observing;
};

export default useIntersectionObserver;
