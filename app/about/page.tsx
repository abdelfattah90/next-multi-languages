'use client'
import { useTranslation } from 'react-i18next'
import Navbar from '@/components/Navbar'
import { useTheme } from '@/context/ThemeContext'

export default function About() {
  const { darkMode } = useTheme()
  const { t } = useTranslation()
  return (
    <>
      <Navbar />
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className='h-80 m-5 p-4 bg-white rounded-2xl dark:bg-gray-800 flex justify-center items-center'>
          <h2 className='text-center text-black text-3xl font-bold dark:text-white'>
            {t('navbar.about')}
          </h2>
        </div>
      </div>
    </>
  )
}
