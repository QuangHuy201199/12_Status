import { useStoreUser } from "../reducers/userReducer";
import { userApi } from "../api/index"

async function getDataUser() {
    const actions = useStoreUser()
    await actions.getRequest()
    try {
        let res = await userApi.GetUser()
        await actions.getSuccess(res)
    } catch (err) {
        await actions.getFailure(err)
    }
}

async function addDataUser(payload) {
    console.log(payload, 'payload ');
    const actions = useStoreUser()
    await actions.addRequest()
    try {
        console.log('vao day');
        const res = await userApi.CreateUser(null, null, payload)
        alert(res.messenger)
        await actions.addSuccess()
        await getDataUser()

    } catch (error) {
        await actions.addFailure(error)
    }
}

async function deleteDataUser(payload) {
    console.log(payload, 'payload deleteeeeeeeeeeeeee');

    const actions = useStoreUser()
    await actions.deleteRequest()
    try {
        const res = await userApi.DeleteUser({ id_User: payload}, null, null)
        alert(res.messenger)
        await actions.deleteSuccess()
        await getDataUser()
    } catch (error) {
        await actions.deleteFailure(error)
    }
}

async function updateDataUser(payload) {
    console.log(payload, 'payload updateeeeeeeeeeeeeeee');
    const actions = useStoreUser()
    await actions.updateRequest()
    try {
        const res = await userApi.UpdateUser({ id_User: payload.id_User }, null, {name_User:payload.name_User,id_Status:payload.id_Status})
        alert(res.messenger)
        await actions.updateSuccess()
        await getDataUser()
    } catch (error) {
        await actions.updateFailure(error)
    }
}


export {
    getDataUser, addDataUser, deleteDataUser
    , updateDataUser
}