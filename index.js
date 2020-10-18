import './tweaks.css'
import 'normalize.css/normalize.css'

//Javascript Tweaks
if (typeof window !== undefined) { //Pre render compatibility
  document.addEventListener('contextmenu', event => event.preventDefault());
}