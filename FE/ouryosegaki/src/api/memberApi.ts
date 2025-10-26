import { localServer } from "./http";

const api = localServer();

async function getGroupMembers(info:{password : string, groupId: number}, success : any, fail : any){
    console.log("group id : " + info.groupId)
    await api.post(`/groups/${info.groupId}`,{password:info.password})
    .then(success)
    .catch(fail);
}

async function postMembers(info:{password: string, memberList: Array<string>, groupId:number}, success: any, fail : any){
    console.log(info.password)
    await api.post(`/groups/${info.groupId}/members`,{password:info.password, memberList:info.memberList})
    .then(success)
    .catch(fail);
} 


export {getGroupMembers, postMembers}