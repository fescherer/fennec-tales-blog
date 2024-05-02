'use client'

import { Drawer } from 'vaul'
import { Menu } from '../../menu'

export function MenuBtn() {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger className="mui-icon-filled">menu</Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-[#000]/80" />

        <Drawer.Content className="fixed inset-y-0 z-50 flex h-auto flex-col bg-secondary p-5">
          <header className="flex items-center">
            <Drawer.Close className="mui-icon-filled">menu</Drawer.Close>
          </header>

          <Menu className="mt-4" />
        </Drawer.Content>

      </Drawer.Portal>
    </Drawer.Root>
  )
}
