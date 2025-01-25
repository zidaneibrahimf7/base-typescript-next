'use client'

import { AppSidebar } from "@/components/layout/SidebarUI/Shadcn/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import React from "react"
import HeaderBar from "./HeaderBar"

export default function SidebarShadcn({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <HeaderBar />
          </div>
        </header>
        <div className="pt-2 px-3">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
