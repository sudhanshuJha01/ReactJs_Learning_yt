import { useRecoilValue } from 'recoil'
import {networkNotificationAtomCount , jobsAtomCount , notificationAtomCount , messageAtomCount , totalNotificationCount} from './Store/Atoms/Count.js'


const App = () => {
  const networkCount = useRecoilValue(networkNotificationAtomCount)
  const jobCount = useRecoilValue(jobsAtomCount)
  const notificationCount = useRecoilValue(notificationAtomCount)
  const messageCount = useRecoilValue(messageAtomCount)
  const totalNotification = useRecoilValue(totalNotificationCount)
  
  return (
    <>
      <button>Network({networkCount})</button>
      <button>Job({jobCount})</button>
      <button>Notification({notificationCount})</button>
      <button>Message({messageCount})</button>
      <button>Me({totalNotification})</button>
    </>
  )
}

export default App