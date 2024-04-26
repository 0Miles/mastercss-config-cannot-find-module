import DefaultTheme from 'vitepress/theme'

import '@example/ui/style'
import '.virtual/master.css'

import { initCSSRuntime } from '@master/css-runtime'
import config from '../../master.css'


if (typeof document !== 'undefined') {
  const checkLightTheme = () => {
    const classList = document.documentElement.classList
    if (classList.contains('dark') && classList.contains('light')) {
      classList.remove('light')
    } else if (!classList.contains('dark') && !classList.contains('light')) {
      classList.add('light')
    }
  }
  const observer = new MutationObserver(checkLightTheme)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  checkLightTheme()
    initCSSRuntime(config)
}

export default {
  ...DefaultTheme
}
