'use client'

import { Drawer } from 'vaul'
import { Menu } from '../../menu'

export function MenuBtn() {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" /></svg></Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-[#000]/80" />

        <Drawer.Content className="fixed inset-y-0 z-50 flex h-auto flex-col bg-primary p-5">
          <header className="flex items-center">
            <Drawer.Close><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" /></svg></Drawer.Close>
          </header>

          <Menu className="mt-4" />
        </Drawer.Content>

      </Drawer.Portal>
    </Drawer.Root>
  )
}
