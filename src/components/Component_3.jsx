import { useEffect, useRef } from 'react';
import Component_3_1 from './Component_3_1';
import Component_3_2 from './Component_3_2';
import Component_3_3 from './Component_3_3';
import Component_3_4 from './Component_3_4';
import Component_3_5 from './Component_3_5';
import Component_3_6 from './Component_3_6';
import Component_3_7 from './Component_3_7';
import Component_3_8 from './Component_3_8';
import Component_3_9 from './Component_3_9';

function Component_3() {
  const trackRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const initHorizontalScroll = () => {
      if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
        setTimeout(initHorizontalScroll, 100);
        return;
      }

      const { gsap } = window;
      const { ScrollTrigger } = window;

      if (!trackRef.current || !frameRef.current) return;

      // Get the container and content
      const track = trackRef.current;
      const frame = frameRef.current;
      const items = frame.querySelector('.section_projects');

      if (!items) return;

      // Function to calculate scroll distance
      const getScrollDistance = () => {
        return items.scrollWidth - window.innerWidth;
      };

      // Set the track height to match the scroll distance + viewport height
      const updateTrackHeight = () => {
        const distance = getScrollDistance();
        track.style.height = `${distance + window.innerHeight}px`;
      };

      updateTrackHeight();

      // Create the horizontal scroll animation
      const scrollTween = gsap.to(items, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: track,
          start: 'top top',
          end: 'bottom bottom',
          pin: '.page-camera',
          pinSpacing: false,
          scrub: true,
          invalidateOnRefresh: true,
          onRefresh: updateTrackHeight,
        }
      });

      // Cleanup function
      return () => {
        if (scrollTween.scrollTrigger) {
          scrollTween.scrollTrigger.kill();
        }
        scrollTween.kill();
      };
    };

    const cleanup = initHorizontalScroll();

    // Window resize handler
    const handleResize = () => {
      if (typeof window.ScrollTrigger !== 'undefined') {
        window.ScrollTrigger.refresh();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, []);

  return (
    <div
      ref={trackRef}
      data-w-id="952e6c8f-691b-1c9b-3fb0-6f9cf81dd64e"
      id="project"
      className="page-track content-list"
      data-frz-id="qsgtvw13iq"
      data-component-id="Component_3"
    >
      <div className="page-camera" data-frz-id="n75e4hba27j">
        <div ref={frameRef} className="page-frame" data-frz-id="om8qzkz8s2">
          <div
            className="collection-list-wrapper w-dyn-list"
            data-frz-id="y4nbqsoomw"
          >
            <div
              role="list"
              className="section_projects w-dyn-items"
              data-frz-id="kikmr3t1lkd"
            >
              <Component_3_1 />
              <Component_3_2 />
              <Component_3_3 />
              <Component_3_4 />
              <Component_3_5 />
              <Component_3_6 />
              <Component_3_7 />
              <Component_3_8 />
              <Component_3_9 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component_3;
