import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useTheme } from '@/context/ThemeContext'
import LanguageToggle from '@/components/LanguageToggle'

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  const { t } = useTranslation()

  return (
    <>
      <div className={` ${darkMode ? 'dark' : ''}`}>
        <div className='dark:bg-gray-800 bg-gray-200 p-4  flex flex-wrap items-center justify-between mx-auto'>
          <ul className='flex justify-center space-x-5'>
            <li>
              <Link
                href='/'
                className='text-black dark:text-white hover:text-sky-500'
              >
                {t('navbar.home')}
              </Link>
            </li>

            <li>
              <Link
                href='/about'
                className='text-black dark:text-white hover:text-sky-500'
              >
                {t('navbar.about')}
              </Link>
            </li>
          </ul>
          <button className='dark:text-white' onClick={toggleDarkMode}>
            {darkMode ? <BiSun /> : <BiMoon />}
          </button>
          <LanguageToggle />
        </div>
      </div>
    </>
  )
}

export default Navbar
