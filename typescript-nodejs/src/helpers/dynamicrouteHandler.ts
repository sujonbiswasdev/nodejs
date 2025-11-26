import { routes } from "./RouteHandellar";

function findDynamicRoute(method:string,url:string){
    const methodMap = routes.get(method)
    if(!method) return null;
    for(const [routePath,handler] of methodMap?.entries()!){
        const routePaths = routePath.split('/');
        // /api/users/1
        const urlPat = url.split('/')
        if(routePaths.length !==urlPat.length){
            continue;
        }
        const params:any = {}; //{id:2}
        let matched= true;

        for(let i =0;i<routePaths.length;i++){
            if(routePaths[i]?.startsWith(':')){
                params[routePaths[i]?.substring(1)!]=urlPat[i]
            }else if(routePaths[i]!==urlPat[i]){
                matched=false;
                break;
            }
        }

        if(matched){
            return {handler,params}
        }
    }
    return null
}
export default findDynamicRoute