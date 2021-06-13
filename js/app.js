/* var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var asunto = document.getElementById('asunto');
var mensaje = document.getElementById('mensaje');

 */
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#fundamental')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:teraflop.computacion@gmail.com?subject=Nombre: ${form.get('nombre')} - Asunto: ${form.get('asunto')}&body=${form.get('mensaje')}`)
    $buttonMailto.click()
}

