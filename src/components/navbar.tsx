"use client"
import React, { useState } from "react"
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu"
import { cn } from "@/lib/utils"

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <section
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Timeline">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Prizes">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="FAQ">
        </MenuItem>
      </Menu>
    </section>
  )
}

export default Navbar