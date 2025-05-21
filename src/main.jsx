import { StrictMode } from 'react' //reactのパッケージからStrictModというライブラリをインポートしている
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( //空のdivタグにつけられたrootの中にrenderの中身をレンダリングをしている
  <StrictMode> {/*開発者モード、脆弱性の発見や危険性の発見に役立つ*/}
    <App />
  </StrictMode>,
)
