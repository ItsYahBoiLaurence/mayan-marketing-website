'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function Hotjar() {
    const HOTJAR_ID = process.env.HOTJAR_ID
    const HOTJAR_VERSION = 6
    return (
        <Script id="hotjar-script" strategy="afterInteractive">
            {`
             (function (c, s, q, u, a, r, e) {
                c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
                c._hjSettings = { hjid: a };
                r = s.getElementsByTagName('head')[0];
                e = s.createElement('script');
                e.async = true;
                e.src = q + c._hjSettings.hjid + u;
                r.appendChild(e);
            })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 533958
            `}
        </Script>
    )
}