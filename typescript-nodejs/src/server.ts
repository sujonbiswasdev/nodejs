
import http, { IncomingMessage, Server, ServerResponse } from 'http'
import config from './config';
import { RouteHandler, routes } from './helpers/RouteHandellar';

import "./routes/index"
import findDynamicRoute from './helpers/dynamicrouteHandler';



const server:Server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    console.log("server is running");

    // if(req.url=="/" && req.method=="GET"){
    //     res.writeHead(200,{"content-type":"application/json"});
    //     res.end(JSON.stringify({
    //         message:"Hello from nodejs with typescript",
    //         path:req.url
    //     }))
    // }

    const method = req.method?.toUpperCase() || ''
    const path = req.url || "";
    const methodMap = routes.get(method)

    const handler:RouteHandler | undefined = methodMap?.get(path)

    if(handler){
        handler(req,res)
    }else if(findDynamicRoute(method,path)){
        const match:any = findDynamicRoute(method,path);
        (req as any).params=match?.params;

        match.handler(req,res)
    }else{
        res.writeHead(404,{"content-type":"application/json"})
        res.end(JSON.stringify({
            sucess:false,
            message:"route not found",
            path
        }))
    }

    // if(req.url=='/api' && req.method =="GET"){
    //     res.writeHead(200,{"content-type":"application/json"});
    //     res.end(JSON.stringify({
    //         message:"Health status ok",
    //         path:req.url
    //     }))
    // }
    // if(req.url=='/api/users' && req.method=='POST'){
    //     // const user ={
    //     //     id:1,
    //     //     name:"sujon"
    //     // }

    //     // res.writeHead(200,{"content-type":"application/json"});
    //     // res.end(JSON.stringify({
    //     //    user
    //     // }))
    //     let body="processing...........\n";
    //     //listen for data chunk
    //     req.on("data",(chunk)=>{
    //         body+=chunk.toString();
    //     })
    //     req.on("end",()=>{
    //        try {
    //          const parseBody = body
    //         console.log(parseBody);
    //         res.end(JSON.stringify(parseBody))
    //        } catch (error:any) {
    //         console.log(error?.message);
    //        }
    //     })
    // }
});

server.listen(config.port,()=>{
    console.log("server is running on port ",config.port);
})