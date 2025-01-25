'use client'

import SidebarShadcn from "@/components/layout/SidebarUI/Shadcn/SidebarShadcn"

export default function MainLayout({ children }: { children: React.ReactNode }){
     return (
          <main>
               <SidebarShadcn>
                    {children}
               </SidebarShadcn>
          </main>
     )              
}