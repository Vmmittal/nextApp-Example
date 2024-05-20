
import {useSession, signIn} from "next-auth/react"

export default function Component (){
  const session = useSession()
  console.log("session", session)
  if(session.data == null){
    return (
      <div>
        <button onClick={signIn}>Login</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Auth</h1>
    </div>
  )
}