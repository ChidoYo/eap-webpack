import 'bootstrap/dist/css/bootstrap.css'
import '../styles/main.scss'
// import 'bootstrap/dist/js/bootstrap-min.js'
import soyChido from './chido'

console.log('EAP Webpack App - Ready to go! 🦊')

if (module.hot) {
  module.hot.accept('./chido.js', () => {
    console.log('Accepting soyChido modue ❤️')
    soyChido()
  })
}
