import { LogoIcon } from '@/icons/logo'
import { Bio } from './bio'
import { Copyright } from './copyright'
import { SiteMap } from './site-map'
import { DATA } from '@/app.config'
import { Tooltip } from '../tooltip'
import { Link } from '../link'

export function Footer() {
  return (
    <div className='bg-neutral'>
      <footer className="text-neutral-content p-10 m-auto flex-col flex">
        <div className='footer sm:footer-horizontal my-6 m-auto max-w-6xl'>
          <aside className='max-w-96'>
            <LogoIcon />
            <p>{DATA.company_bio}</p>
          </aside>
          <nav>
            <h6 className="footer-title">Social</h6>

            <div className="grid grid-flow-col gap-4">
              <Tooltip tooltip="Linkedin Felipe Scherer">
                <Link aria-label="Go to Youtube Channel" target='_blank' href="https://www.linkedin.com/in/fescherer/" className='content-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g>
                      <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z" fill='white' />
                    </g>
                    <defs >
                      <clipPath id="clip0_17_68">
                        <rect width="24" height="24" fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </Link></Tooltip>
              <Tooltip tooltip="Youtube Fennec Tales">
                <Link aria-label="Go to Youtube Channel" target='_blank' href="https://www.youtube.com/@FennecTales?sub_confirmation=1" className='content-center'><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-base-content">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg></Link>
              </Tooltip>

              <Tooltip tooltip="Subscribe to RSS">
                <Link aria-label="Go to RSS's author" href="/feed.xml"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className='fill-base-content' viewBox="0 0 256 256"><path d="M106.91,149.09A71.53,71.53,0,0,1,128,200a8,8,0,0,1-16,0,56,56,0,0,0-56-56,8,8,0,0,1,0-16A71.53,71.53,0,0,1,106.91,149.09ZM56,80a8,8,0,0,0,0,16A104,104,0,0,1,160,200a8,8,0,0,0,16,0A120,120,0,0,0,56,80Zm118.79,1.21A166.9,166.9,0,0,0,56,32a8,8,0,0,0,0,16A151,151,0,0,1,163.48,92.52,151,151,0,0,1,208,200a8,8,0,0,0,16,0A166.9,166.9,0,0,0,174.79,81.21ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Z"></path></svg></Link>
              </Tooltip>
            </div>
          </nav>
        </div>
        <div className='divider'></div>
        <Copyright></Copyright>
      </footer>
    </div>

  )
}
