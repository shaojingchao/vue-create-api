import Hello from '../test/hello.vue'
import createApi from '@/helpers/useApi'

let HelloApi = {
  install (Vue, options) {
    console.log(createApi)
    createApi(Hello, ['click', 'cancel'])
  }
}
export default HelloApi
