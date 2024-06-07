let list    = document.querySelector('.list')
let input   = document.querySelector('.input')
let button  = document.querySelector('.button')
let total   = document.querySelector('.total')
let counter = document.querySelector('.counter')
let numbers = document.querySelector('.numbers')
let insert  = document.querySelector('.insert')
let all     = document.querySelector('.all')
let show    = document.querySelector('.show')
let heading = document.querySelector('.heading')
let display = document.querySelector('.display')
let video   = document.querySelector('.video')
let i       = 0
let n       = 0






button.addEventListener('click' , ()=>{
  if(input.value == ''){
    alert('write something first')
  }
  else{


    total.innerHTML = i++
    total.innerHTML = i


    let singleTodo = document.createElement('div')
    let complete   = document.createElement('button')
    let result     = document.createElement('input')
    let edit       = document.createElement('button')
    let remove     = document.createElement('button')

    list.appendChild(singleTodo)
    singleTodo.appendChild(complete)
    singleTodo.appendChild(result)
    singleTodo.appendChild(edit)
    singleTodo.appendChild(remove)

    singleTodo.classList.add('singleTodo')
    complete.classList.add('complete')
    result.classList.add('result')
    edit.classList.add('edit')
    remove.classList.add('remove')

   

    edit.innerHTML   = 'Edit'
    remove.innerHTML = 'Delete'
    result.value     = input.value
    input.value      = ''
    

    result.setAttribute('readonly' , 'readonly')


    edit.addEventListener('click' , ()=>{
      if(edit.innerHTML=='Edit'){
        edit.innerHTML = 'Save'
        result.removeAttribute('readonly' , 'readonly')
        edit.style     = 'background:darkgreen;'
      }
      else{
        edit.innerHTML = 'Edit'
        edit.style     = 'background:lawngreen;'
        result.setAttribute('readonly' , 'readonly')
      }
    })

    complete.addEventListener('click' , ()=>{
      complete.style    = 'background:lime;'
      edit.style        = 'display:none;'
      result.style      = 'text-decoration:line-through; color:lime'
      numbers.innerHTML = n++
      numbers.innerHTML = n
      
    })

    remove.addEventListener('click' , ()=>{
      singleTodo.remove()
      total.innerHTML --
      
      if(numbers.innerHTML >0){
        numbers.innerHTML --
      }
    })
  }
})
