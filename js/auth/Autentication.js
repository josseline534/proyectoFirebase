export default class Autentication{
    constructor (email, password){
        this.email=email,
        this.password=password
    }
    async createEmailPassword (email, password) {
        try{
            if(!email || !password)
                return false
            else{
                const result = await firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                await result.user.updateProfile({
                    displayName : "jose"
                })
                return true
            }
        }
        catch (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
        }
    }
    async ingresarUser (email, password) {
        try{
            if(!email || !password)
                return false
            else{
                const result = await firebase.auth().signInWithEmailAndPassword(email, password)
                console.log(result)
                return true
            }
            
        }
        catch (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(`[ERROR-CODE]${errorCode}\n[ERROR-MESSAGE]${errorMessage}`)
        }
    }
    
}