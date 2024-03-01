import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './routes'

library.add(faUserSecret)
library.add(faUserFriends)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false

app.use(router).mount('#app')

