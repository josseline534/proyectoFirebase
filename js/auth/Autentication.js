export default class Autentication{
    constructor (name,email, password){
        this.name=name,
        this.email=email,
        this.password=password
    }
    async createEmailPassword (name, email, password) {
        try{
            if(!email || !password)
                return false
            else{
                const result = await firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                await result.user.updateProfile({
                    displayName : name
                })
                console.log(result)
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
    async ingresarGmail (provider){
        provider.addScope('https://www.googleapis.com/auth/cloud-platform')
        firebase.auth().languageCode = 'es'
        try{
            const result = await firebase.auth().signInWithPopup(provider)
                let token = result.credential.accessToken;
                let user = result.user;
                console.log(user);
                return true
            
        }catch (error){
            console.log(error);
        }
        
    }
    
}