import { TIconColor } from '@/@types/icon'

export function ProfileIcon({ color = 'currentColor' }: TIconColor) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.8043 4.97933 22 5.45 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.021 19.8043 20.55 20 20 20H4ZM4 18H14.5V14.5H4V18ZM16.5 18H20V9H16.5V18ZM4 12.5H14.5V9H4V12.5Z" fill={color} />
    </svg>
  )
}
