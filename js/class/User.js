export default  class Usuario {
    constructor(email,password ){
        this.email=email,
        this.password= password
    }
    getEmail(){return this.email}
    getPassword(){return this.password}
    setEmail(email){ this.email=email}
    setPassword(password){ this.password=password}
}