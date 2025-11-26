import { readUsers, writeUser } from "../helpers/fileDB"
import parseBody from "../helpers/parseBody"
import addRoute from "../helpers/RouteHandellar"
import sendJson from "../helpers/sendjson"

addRoute("GET","/",(req,res)=>{
    sendJson(res,201,{message:"sujon biswas",profession:'developer'})
})

addRoute("GET","/api",(req,res)=>{
    sendJson(res,201,{message:"rajon biswas",profession:'businessman'})
})

addRoute("GET","/api/users",(req,res)=>{
    sendJson(res,201,{message:"ridoy biswas",profession:'student'})
})

addRoute("POST","/api/user",async(req,res)=>{
    const body = await parseBody(req)
    const users= readUsers();
    const newUser = {
        id:Date.now(),
        ...body
    }
    users?.push(newUser)
    writeUser(users)
    sendJson(res,201,{sucess:true,data:body})
})

addRoute("PUT","/api/users/:id",async(req,res)=>{
    const {id}= (req as any).params;
    const body = await parseBody(req)
    const users = readUsers()
    const index= users.findIndex((user:any)=>user.id==id)
    if(index==-1){
        sendJson(res,404,{sucess:false,message:"user not found"})
    }
    users[index]={
        ...users[index],
        ...body
    }
    writeUser(users)
    sendJson(res,202,{sucess:true,message:`id ${id} user updated `,data:users[index]})
})