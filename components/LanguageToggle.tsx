import { useTranslation } from 'react-i18next'
import Select, { ActionMeta, SingleValue } from 'react-select'
import { useTheme } from '@/context/ThemeContext'

const LanguageToggle = () => {
  const { i18n } = useTranslation()
  const { darkMode } = useTheme()

  interface CustomStyles {
    control: (styles: any, state: { isFocused: boolean }) => any
  }
  const customStyles: CustomStyles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      border: 'none',
      borderRadius: '10px',
      boxShadow: isFocused ? 'none' : styles.boxShadow,
    }),
  }

  const languageOptions = [
    { value: 'ar', label: 'العربية' },
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Española' },
  ]

  const currentLanguage = i18n.language

  const changeLanguage = (
    selectedOption: SingleValue<{ value: string; label: string }>,
    actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value)
      localStorage.setItem('selectedLanguage', selectedOption.value)
    }
  }

  const selectedOption = languageOptions.find(
    (option) => option.value === currentLanguage
  )

  return (
    <Select
      options={languageOptions}
      value={selectedOption}
      onChange={changeLanguage}
      isSearchable={false}
      styles={customStyles}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: 'black',
          color: darkMode ? 'white' : 'black',
          borderRadius: '10px',
        },
      })}
    />
  )
}

export default LanguageToggle
