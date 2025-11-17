import React from 'react'
import { NavBar } from './NavBar'
import { LanguageSelector } from '../ui/LanguajeSelector'
export const Header = () => {
  return (
    <header>
      <div className="logo"><h3>Jesus A.G.S.</h3></div>
      <LanguageSelector />
    </header>
  )
}
