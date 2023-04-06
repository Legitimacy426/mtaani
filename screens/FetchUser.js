import { useEffect ,useState} from "react"
import { Text } from "react-native";
import { collection, getDocs, query, where,orderBy ,onSnapshot} from "firebase/firestore"
import { db } from "../firebaseConfig";


const FetchUser = ({id}) => {
   console.log(id)
    const [userName,setuserName] = useState([])
    const [isErrorU,setErrU] = useState(null)
    const [isPendingU, setPendingU] = useState(true)
    const [username,setUsernme] = useState('')
   
    useEffect(() => {
        const UserName = []
          
            const userRef = collection(db, "users")
                    const q = query(userRef,where('userId',"==",id))
            getDocs(q).then(users => {
                users.forEach(user => {
                            UserName.push({ ...user.data(),uid:user.id})
                })
                setuserName(UserName)
                setPendingU(false)
                const user = userName[0].username
                setUsernme(user)
                
               
            }).catch(err => {
            
                console.log(err.message)
                    })
                
    }, [id])
    return (
        <Text>{ username}</Text>
    )
}
export default FetchUser