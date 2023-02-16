import React, { useEffect, useRef } from 'react';

function WebConsole() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const consoleCode = `
      // Load the web console code
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/vConsole/dist/vconsole.min.js';
      document.head.appendChild(s);
      
      // Initialize the web console
      s.onload = function() {
        var vConsole = new VConsole();
      }
    `;
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write('<html><head></head><body></body></html>');
    iframe.contentWindow.document.close();
    iframe.contentWindow.addEventListener('load', () => {
      iframe.contentWindow.postMessage(consoleCode, '*');
    });
  }, []);

  return (
    <iframe
      ref={iframeRef}
      title="Web Console"
      style={{ width: '100%', height: '300px', border: '1px solid #ccc' }}
      src="about:blank"
      sandbox="allow-scripts allow-same-origin"
    />

  );
}

export default WebConsole;
