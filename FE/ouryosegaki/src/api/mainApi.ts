import { localServer } from "./http";

const api = localServer();

async function getGroupList(info:{keyword : string}, success : any, fail : any){
    
    await api.get(`/groups${"?keyword="+info.keyword}`)
    .then(success)
    .catch(fail);
}

export {getGroupList}