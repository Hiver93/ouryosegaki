import { localServer } from "./http";

const api = localServer();

async function getYosegakies(info:{password : string, memberId: number}, success : any, fail : any){
    
    await api.post(`/yosegaki/get/${info.memberId}`,{password:info.password})
    .then(success)
    .catch(fail);
}

async function postYosegaki(info:{password: string, content: string, memberId:number}, success: any, fail : any){
    console.log("postyosegaki:"+info.memberId)
    console.log(info.password)
    await api.post(`/yosegaki/${info.memberId}`,{content:info.content, password:info.password})
    .then(success)
    .catch(fail);
} 


export {getYosegakies, postYosegaki}