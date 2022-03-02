// global styles shared across the entire site
import 'styles/global.css'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'

// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'

// used for collection views selector (optional)
// TODO: re-add if we enable collection view dropdowns
// import 'rc-dropdown/assets/index.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'

// core styles for static tweet renderer (optional)
import 'react-static-tweets/styles.css'

// global style overrides for notion
import 'styles/notion.css'

// global style overrides for prism theme (optional)
import 'styles/prism-theme.css'

// here we're bringing in any languages we want to support for
// syntax highlighting via Notion's Code block
import 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'

import React, { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { gcUrl } from 'lib/config'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(
    function sendGoatCounterEventsOnRoute() {
      const handleRouteChange = (path) => {
        ;(window as any)?.goatcounter?.count?.({
          path
        })
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    },
    [router.events]
  )

  return (
    <>
      <Component {...pageProps} />
      {/* GoatCounter */}
      {gcUrl && (
        <Script
          async
          data-goatcounter={gcUrl}
          src='//gc.zgo.at/count.js'
          strategy='afterInteractive'
        />
      )}
    </>
  )
}
