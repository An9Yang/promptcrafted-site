import { useEffect } from 'react';

function Component_2_1() {
  useEffect(() => {
    // Wait for GSAP to be available
    const initTypingAnimation = () => {
      if (typeof window.gsap === 'undefined') {
        setTimeout(initTypingAnimation, 100);
        return;
      }

      const { gsap } = window;
      const animatedText = document.getElementById('animated-text');
      const cursor = document.getElementById('hero-cursor');

      if (!animatedText || !cursor) return;

      // Set initial state
      animatedText.textContent = '';

      // Create typing animation
      const words = ['Touch', 'Innovation', 'Future'];
      let currentWordIndex = 0;

      const typeWord = () => {
        const currentWord = words[currentWordIndex];

        // Type the word
        gsap.to(animatedText, {
          duration: currentWord.length * 0.1,
          text: currentWord,
          ease: 'none',
          onComplete: () => {
            // Wait before erasing
            gsap.delayedCall(2, () => {
              // Erase the word
              gsap.to(animatedText, {
                duration: currentWord.length * 0.05,
                text: '',
                ease: 'none',
                onComplete: () => {
                  // Move to next word
                  currentWordIndex = (currentWordIndex + 1) % words.length;
                  gsap.delayedCall(0.5, typeWord);
                }
              });
            });
          }
        });
      };

      // Cursor blinking animation
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      // Start typing
      typeWord();
    };

    initTypingAnimation();
  }, []);

  return (
    <div
      className="hero_main"
      data-frz-id="h349ixp04r4"
      data-component-id="Component_2_1"
    >
      <div className="heading-hero-block" data-frz-id="y8y2wy7uhsa">
        <h1 className="heading-style-h1" data-frz-id="tvy3ezfv8tg">
          AI-Driven
        </h1>
        <div
          id="animated-text"
          className="heading-style-h1"
          data-frz-id="4kgrlypdlwa"
        >
          Touch
        </div>
        <h1
          id="hero-cursor"
          className="heading-style-h1"
          data-frz-id="2976o55w966"
        >
          _
        </h1>
      </div>
      <img
        loading="lazy"
        src="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/6822faf7b267d2a617501370_Arrow%201.svg"
        className="hero_arrow"
        data-frz-id="u1xc9f2toa9"
      />
    </div>
  );
}

export default Component_2_1;
