import { localServer } from "./http";

const api = localServer();

async function getGroupMembers(info:{password : string, groupId: number}, success : any, fail : any){
    
    await api.post(`/groups/${info.groupId}`,{password:info.password})
    .then(success)
    .catch(fail);
}


export {getGroupMembers}