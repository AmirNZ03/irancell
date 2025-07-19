const myIrancell=require("./DB/myirancelldb")

const gettoken=(userToken)=>{
    let token=`SELECT id FROM user WHERE token="${userToken}"`
  return  new Promise((resolve, reject) => {
            myIrancell.query(token,(error,result)=>{
        if(error){
            console.log("Error getting token",error);
                reject(error);
            
        }
        console.log(result[0].id);
        
                resolve(result[0]?.id); // فقط id برگشت داده شود
    })
    })


}
module.exports=gettoken