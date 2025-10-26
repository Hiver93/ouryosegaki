import { localServer } from "./http";

const api = localServer();
async function postGroup(info:{name :string, password: string},success : any, fail : any){
    await api.post(`/groups`, info)
        .then(success)
        .catch(fail);
}

export {postGroup}