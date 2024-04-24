import en from './en'
import ru from './ru'

type Locale = keyof typeof translations

export let translations = {
  en,
  ru,
}

export let locales: {
  originName: string
  name: string
  code: Locale
}[] = [
  {
    originName: 'English',
    name: 'English',
    code: 'en',
  },
  {
    originName: 'Русский',
    name: 'Russian',
    code: 'ru',
  },
]

export let defaultLocale: Locale = 'en'
