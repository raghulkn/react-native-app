import auth from '@react-native-firebase/auth'

function firebaseManager() {
    let firebaseInstance = null
    function init(){
        firebaseInstance = auth()
        console.log('called once')
    }
    function getInstance() {
        if(firebaseInstance === null) init() 
        return firebaseInstance
    }
    function removeInstance() {
        firebaseInstance = null
        console.log('clear')
    }
    async function createUser(email,password){
        return await firebaseInstance.createUserWithEmailAndPassword(email, password)
    }
    async function signIn(email, password) {
        return await firebaseInstance.signInWithEmailAndPassword(email, password)
    }
    async function getUser() {
        return await firebaseInstance.onAuthStateChanges()
    }
    async function signOut() {
        return await firebaseInstance.signOut()
    }
    return {
        instance:getInstance,
        remove:removeInstance,
        signIn:signIn,
        getUser:getUser,
        signOut:signOut,
        createUser:createUser
    }
}
const instance = firebaseManager()
console.log(instance)
export default instance