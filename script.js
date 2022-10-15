btn = document.getElementById('fun')
move = document.getElementById('move')
var flag = true

localStorage.setItem('shreyas','123')

const user=document.getElementById('user')
const pass=document.getElementById('pass')
const avatar = document.getElementById('avatar')
var inputuser = ''
var newuser = false
user.addEventListener('change',(e)=>{
        
        inputuser=e.target.value
        if(inputuser){
        if(!(inputuser in localStorage))
        {
                newuser = true
        }}
})
var inputpass = ''
pass.addEventListener('input',(e)=>{
        inputpass=e.target.value
        if(inputpass){
        if(newuser)

        pass.classList.add('border-yellow-300')
        pass.classList.add('border-red-300')
        if(newuser)
        {
                localStorage.setItem(inputuser,inputpass);
                btn.classList.add('bg-yellow-400')
                flag=false
        }
        else{
        if(localStorage[inputuser]===inputpass)
        {
                avatar.src = './working.svg'
                pass.classList.add('border-green-400')
                btn.classList.add('bg-green-500')
                flag=false
        }
        else
        {
                avatar.src = './smile.svg'
                pass.classList.remove('border-green-400')
                btn.classList.remove('bg-green-500')
                flag=true
        }
}}
})


btn.addEventListener('mouseover',()=>{
        if(flag)
        move.classList.toggle('translate-x-2/3')
        
})

btn.addEventListener('click',()=>{
        if(newuser)
        {
                alert("New User Added")
                newuser = false
        }
        else{
        if(!flag)
        {
                alert("Login Successfully")
        }
        else
        {
                btn.classList.add('bg-red-400')
        }
}       
})