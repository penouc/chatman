import { lstat } from 'node:fs/promises'
import { cwd } from 'node:process'
// import { runGeminiChat } from '../lib/request.ts'

lstat(cwd()).then(stats => {
  console.log('[fs.lstat]', stats)
}).catch(err => {
  console.error(err)
})

// export { runGeminiChat }
