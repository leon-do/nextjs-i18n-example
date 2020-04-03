// https://github.com/isaachinman/next-i18next#3-project-setup
import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de']
})

module.exports = NextI18NextInstance;
