import React from 'react'

function NavbarSpacer({ className = '' }: { className?: string }) {
  return (
    <div className={`navbar-spacer ${className}`} data-store-navbar-spacer />
  )
}

NavbarSpacer.displayName = 'Navbar Spacer'

export default NavbarSpacer
