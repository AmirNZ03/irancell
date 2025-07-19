window.addEventListener("load",()=>{
    const image=document.querySelector(".user-profile")
    const userName=document.querySelector(".user-name")
    const userPhone=document.querySelector(".user-phone")
    const overlay=document.querySelector(".overlay")
    const mainUrl='http://localhost:3000/api'
    const getToken=localStorage.getItem('user-token')
    fetch(`${mainUrl}/users`,{
        headers:{
            authorization:getToken
        }
    }).then(res=>res.json())
    .then(user=>{
image.setAttribute("src",user[0].image)
userName.textContent=`سلام.${user[0].name}`
userPhone.textContent=user[0].phone
overlay.textContent=user[0].charge


    })
})