// const chart=document.querySelector("#test-chart")
// const ctx=chart.getContext("2d")
// new chart(ctx,{
//     type:'bar',
//     data:{
//         labels:['Mehr','Aban','azar'],
//         datasets:[{
//             label:'Month of sale',
//             data:[12000000,9000000,34000000],
//             backgroundColor:[
//                 'rgba(255,99,132,0.2)',
//                   'rgba(54,162,235,0.2)',
//                     'rgba(255,206,86,0.2)',
                     
//             ],
//                borderColor:[
//                 'rgba(255,99,132,1)',
//                   'rgba(54,162,235,1)',
//                     'rgba(255,206,86,1)',
                     
//             ],
//             borderWidth:2

//         }]
//     }
// })
const chart=document.querySelector("#test-chart")
const ctx=chart.getContext("2d")
new chart(ctx,{
    type:'line',
    data:{
        labels:['Mehr','Aban','azar'],
        datasets:[{
            label:'Month of sale',
            data:[12000000,9000000,34000000],
            backgroundColor:[
                'rgba(255,99,132,0.2)',         
            ],
              fill:true,
              tension:0.45,
               borderColor:[
                'rgba(255,99,132,1)',        
            ],

        }]
    },
    options:{
        plugins:{
            legend:false
        },
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
             y:{
                grid:{
                    display:false
                }
            },
        }
    }
})