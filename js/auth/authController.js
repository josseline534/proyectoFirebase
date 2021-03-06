import Autentication from "./Autentication.js"
import Usuario from "../class/User.js"
const objAut = new Autentication()
const modal = document.createElement('div')
formIngreso.addEventListener("submit", async (e) => {
  e.preventDefault()
  const usuario = new Usuario (userIngreso.value, passwordIngreso.value)
  const result = await objAut.ingresarUser(usuario.getEmail(), usuario.getPassword())
  mostrarInfo(result) 
})
formRegistro.addEventListener("submit", async (e) => {
  e.preventDefault()
  const usuario = new Usuario (nameRegistro.value,userRegistro.value, passwordRegistro.value)
  const result = await objAut.createEmailPassword(usuario.getName(), usuario.getEmail(), usuario.getPassword())
  mostrarInfo(result)     
})
gmail.addEventListener('click', async (e) =>{
  let provider = new firebase.auth.GoogleAuthProvider()
  const result = await objAut.ingresarGmail(provider)
  console.log(result)
  mostrarInfo(result)
  
})
const mostrarInfo = result => {
  switch (result){
    case true:
      modal.innerHTML=`
      <h1>Ingreso correcto!</h1>
      <p class="lead"></p>`
    break
    case false:
      modal.innerHTML=`
      <h1>Faltan campos por llenar!</h1>
      <p class="lead"></p>`
    break
    default :
      modal.innerHTML=`
      <h1>Error inesperado</h1>
      <p class="lead"></p>`
    break
  }
  login.appendChild(modal) 
}