import { useEffect ,useState} from "react"

import { collection, getDocs, query, where,orderBy ,onSnapshot} from "firebase/firestore"
import { db } from "../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useFetchServices = (tbl) => {
    const col = tbl;
    const [posts,setPosts] = useState([])
    const [isErrorP,setError] = useState(null)
    const [isPendingP, setPendingP] = useState(true)
    const [loc,setLocation] = useState('Nchiru')
    

   
    useEffect((tbl) => {
      
        AsyncStorage.getItem('location')
        .then((location)=>{
          if(location !== null) {
            setLocation(location)
            if (!location) {
             setLocation('Nchiru')
              }
              
              const Posts = []
              
              const userRef = collection(db, "services")
                      const q = query(userRef,where("location","==",loc))
              getDocs(q).then(users => {
                  users.forEach(user => {
                              Posts.push({ ...user.data(),pid:user.id})
                  })
                  setPosts(Posts)
                  setPendingP(false)
                  console.log(loc)
                 
              }).catch(err => {
              
                  console.log(err.message)
                      })
    
          } else {
            // navigation.navigate('Login')
         setLocation('Nchiru')
    }
        })
          .catch((e) => {
          alert(e.message)
        })      
    }, [tbl])
    return {posts,isErrorP,isPendingP}
}
export default useFetchServices