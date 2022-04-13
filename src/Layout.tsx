import React, { lazy, Suspense } from 'react'
import Footer from 'src/components/common/Footer'
import Navbar from 'src/components/common/Navbar'
import Toast from 'src/components/common/Toast'
import { useUI } from 'src/sdk/ui'
import type { PropsWithChildren } from 'react'

const CartSidebar = lazy(() => import('src/components/cart/CartSidebar'))

function Layout({ children }: PropsWithChildren<unknown>) {
  const { displayMinicart } = useUI()

  if (typeof window !== `undefined`) {
    const stylesheet = document.createElement('link')

    stylesheet.href = '/css/minicart.css'
    stylesheet.rel = 'stylesheet'
    stylesheet.type = 'text/css'
    document.getElementsByTagName('head')[0].appendChild(stylesheet)
  }

  return (
    <div id="layout">
      <Navbar />

      <main>{children}</main>

      <Footer />

      <Toast />

      {displayMinicart && (
        <Suspense fallback={null}>
          <CartSidebar />
        </Suspense>
      )}
    </div>
  )
}

export default Layout
