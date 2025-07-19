window.addEventListener("load",()=>{
    const mainUrl='http://localhost:3000/api'
        const getToken=localStorage.getItem('user-token')
const recommend=document.querySelector(".recomend-table")
const packets=document.querySelector("tbody")
    fetch(`${mainUrl}/recommend_packet`,{
          headers:{
            authorization:getToken
        }
    })
    .then(res=>res.json())

    .then(packets=>{
        packets.forEach(packet => {
            packet.insertAdjacentHTML("beforeend",`
                    <tr>
                <td>${packet.}</td>
                <td>بسته اینترنت سه ماهه</td>
                <td>20%</td>
                <td>200,000</td>
               
            </tr>
                `)

        });
    })
})