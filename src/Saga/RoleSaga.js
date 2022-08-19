import { useStoreRole } from "../reducers/RoleReducer";
import { role } from "../api/index"

async function getDataRole() {
    const actions = useStoreRole()
    await actions.getRequest()
    try {
        let res = await role.GetRole()
        await actions.getSuccess(res)
    } catch (err) {
        await actions.getFailure(err)
    }
}

async function addDataRole(payload) {
    console.log(payload, 'payload adddddddddddddddddd');
    const actions = useStoreRole()
    await actions.addRequest()
    try {
        console.log('vao day');
        const res = await role.CreateRole(null, null, payload)
        alert(res.messenger)
        await actions.addSuccess()
        await getDataRole()

    } catch (error) {
        await actions.addFailure(error)
    }
}

async function deleteDataRole(payload) {
    const actions = useStoreRole()
    await actions.deleteRequest()
    try {
        const res = await role.DeleteRole({id_Role: payload}, null, null)
        await actions.deleteSuccess()
        alert(res.messenger)
        await getDataRole()
    } catch (error) {
        await actions.deleteFailure(error)
    }
}

async function updateDataRole(payload) {
    console.log(payload, 'payload updateeeeeeeeeeeeeeee');
    const actions = useStoreRole()
    await actions.updateRequest()
    try {
        const res = await role.UpdateRole({id_Role: payload.id_Role}, null, {name_Role: payload.name_Role})
        alert(res.messenger)
        await actions.updateSuccess()
        await getDataRole()
    } catch (error) {
        await actions.updateFailure(error)
    }
}


export { getDataRole, addDataRole, deleteDataRole, updateDataRole }