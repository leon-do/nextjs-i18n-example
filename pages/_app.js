// https://github.com/isaachinman/next-i18next#3-project-setup
// https://github.com/isaachinman/next-i18next/blob/master/examples/simple/pages/_app.js
import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../i18n'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default appWithTranslation(MyApp)