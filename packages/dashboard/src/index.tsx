import React from 'react'
import ReactDOM from 'react-dom'

import './lib/normalize.css'
import './lib/system-ui.css'

import App from './core/App/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
