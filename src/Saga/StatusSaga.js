import { useStore } from "../reducers/statusReducer";
import { StatusApi } from "../api/index"

async function getData() {
    const actions = useStore()
    await actions.getRequest()
    try {
        let res = await StatusApi.GetStatus()
        await actions.getSuccess(res)
    } catch (err) {
        await actions.getFailure(err)
    }
}

async function addData(payload) {
    console.log(payload, 'payload adddddddddddddddddd');
    const actions = useStore()
    await actions.addRequest()
    try {
        console.log('vao day');
        const res = await StatusApi.CreateStatus(null, null, payload)
        alert(res.messenger)
        await actions.addSuccess()
        await getData()

    } catch (error) {
        await actions.addFailure(error)
    }
}

async function deleteData(payload) {
    const actions = useStore()
    await actions.deleteRequest()
    try {
        const res = await StatusApi.DeleteStatus({id: payload.id}, null, null)
        await actions.deleteSuccess()
        await getData()
    } catch (error) {
        await actions.deleteFailure(error)
    }
}

async function updateData(payload) {
    console.log(payload, 'payload updateeeeeeeeeeeeeeee');
    const actions = useStore()
    await actions.updateRequest()
    try {
        const res = await StatusApi.UpdateStatus({id_Status: payload.id_Status}, null, {name_Status: payload.name_Status, level : payload.level})
        alert(res.messenger)
        await actions.updateSuccess()
        await getData()
    } catch (error) {
        await actions.updateFailure(error)
    }
}


export { getData, addData, deleteData, updateData }