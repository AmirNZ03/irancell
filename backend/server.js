const express=require("express")
const cors=require("cors")
const MyIrancellDB=require("./DB/myirancelldb")
const gettoken = require("./funcs")

const app=express()
app.use(cors())
app.get("/api/users",(req,res)=>{
    let userToken=req.headers.authorization
    let getmain=`SELECT * FROM user WHERE token="${userToken}"`

    MyIrancellDB.query(getmain,(error,result)=>{
        if(error){
            res.send(null)
        }else{
            res.send(result)
        }
    })
})


app.get("/api/services/:isActive",(req,res)=>{
    let isActive = req.params.isActive
    let getServices=`SELECT * FROM services WHERE isActive=${isActive}`

    MyIrancellDB.query(getServices,(error,result)=>{
        if(error){
            res.send(null)
        }else{
            res.send(result)
        }
    })
})

app.get("/api/recommend_packet", async (req, res) => {
    try {
        let userToken = req.headers.authorization;
        let userId = await gettoken(userToken);

        if (!userId) {
            return res.status(404).send({ message: "User not found" });
        }

        let getmain = `SELECT * FROM recommend_packet WHERE userID="${userId}"`;

        MyIrancellDB.query(getmain, (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send(null);
            } else {
                res.send(result);
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).send(null);
    }
});



app.get("/api/sales",(req,res)=>{
    let userToken=req.headers.authorization
    let userId=gettoken(userToken)
    let getmain=`SELECT * FROM sales WHERE userID="${userId}"`

    MyIrancellDB.query(getmain,(error,result)=>{
        if(error){
            res.send(null)
        }else{
            res.send(result)
        }
    })
})


app.listen(4000)