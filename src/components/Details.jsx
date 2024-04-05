import Context from "../store/Context"
import { useContext } from "react"
function Details(){
    const name=useContext(Context)
   const password=useContext(Context)
    return(<>
    <h1>your Info</h1>
    <p>username: {name}</p>
    <p>password: {password}</p>
    </>)
}
export default Details