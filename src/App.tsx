import React, { useEffect } from 'react';
import Component_1 from './components/Component_1';
import Component_2 from './components/Component_2';
import Component_3 from './components/Component_3';
import Component_4 from './components/Component_4';
import Component_5 from './components/Component_5';
import Component_6 from './components/Component_6';
import Component_7 from './components/Component_7';

function App() {
  useEffect(() => {
    // Execute delayed scripts after React has rendered
    console.log('[React] DOM rendered, executing delayed scripts...');

    // Execute regular delayed scripts first
    const delayedScripts = document.querySelectorAll(
      'script[type="text/delayed"]'
    );

    delayedScripts.forEach((script) => {
      const scriptElement = script as HTMLScriptElement;
      const newScript = document.createElement('script');

      // External script (has data-src)
      if (scriptElement.dataset.src) {
        newScript.src = scriptElement.dataset.src;

        // Copy other attributes (integrity, crossorigin, defer, etc.)
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name !== 'data-src') {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      } else {
        // Inline script
        newScript.textContent = script.textContent;

        // Copy data-* attributes
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name.startsWith('data-')) {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      }

      document.body.appendChild(newScript);
    });

    // Execute delayed module scripts (Pattern 006: Pre-bundled ES Module Scripts)
    const delayedModules = document.querySelectorAll(
      'script[type="text/delayed-module"]'
    );

    delayedModules.forEach((script) => {
      const scriptElement = script as HTMLScriptElement;
      const newScript = document.createElement('script');
      newScript.type = 'module'; // Restore original type

      // External module script (has data-src)
      if (scriptElement.dataset.src) {
        newScript.src = scriptElement.dataset.src;

        // Copy other attributes (crossorigin, etc.)
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name !== 'data-src') {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      } else {
        // Inline module script
        newScript.textContent = script.textContent;

        // Copy data-* attributes
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name.startsWith('data-')) {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      }

      document.body.appendChild(newScript);
    });

    console.log(
      `[React] Executed ${delayedScripts.length} delayed scripts + ${delayedModules.length} delayed modules`
    );
  }, []);

  return (
    <>
      <div className="page-wrapper" data-frz-id="9x4p5zxumym">
        <div className="nav padding-global" data-frz-id="gizgos6dhl7">
          <Component_1 />
        </div>
        <main className="main-wrapper" data-frz-id="s0ooztij7qr">
          <Component_2 />
          <Component_3 />
          <Component_4 />
          <Component_5 />
          <Component_6 />
        </main>
        <section className="footer" data-frz-id="xj5oag1y5u">
          <Component_7 />
        </section>
      </div>
      <a
        data-w-id="d8c11774-f340-3461-0f06-22d2b66a984e"
        href="http://8am.design"
        target="_blank"
        className="button-primary-3 hero-home-1-label-1 new-button w-inline-block"
        data-frz-id="7p7rfv5xsu5"
      >
        <img
          loading="lazy"
          src="https://cdn.prod.website-files.com/6822faf7b267d2a617501351/6879bc703dfea8254ffc66ac_Frame%206%20Tans.png"
          className="fly-icon-image"
          data-frz-id="cafa5cqej69"
        />
        <div className="button-primary-text-block" data-frz-id="x0234k76egb">
          MORE TEMPLATE
        </div>
        <div
          className="button-primary-circle _2nd"
          data-frz-id="rbpm7vmm51r"
        ></div>
      </a>
    </>
  );
}

export default App;
