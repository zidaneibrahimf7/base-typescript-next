'use client'

import { ModeToggle } from "@/components/custom/Theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
     const router = useRouter()
     return (
          <main className="flex min-h-screen justify-center items-center">
               <div className="grid grid-rows-2 gap-2">
                    <div className="flex gap-2 justify-center items-center">
                         Hello World!
                         <ModeToggle />
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                              <Button onClick={() => router.push('/login')} >Login</Button>
                              {/* <Button onClick={() => console.log('wew')} >Home</Button> */}
                              <Button onClick={() => router.push('/playground')}>Playground</Button>
                              <Button onClick={() => router.push('/dashboard')} >Dashboard</Button>
                    </div>
               </div>
          </main>
     );
}
