import { useStoreUserOne } from "../reducers/userOneReducer";
import { userOneApi } from "../api/index"

async function getDataUserOne() {
    const actions = useStoreUserOne()
    await actions.getRequest()
    try {
        let res = await userOneApi.GetUserOne()
        await actions.getSuccess(res)
    } catch (err) {
        await actions.getFailure(err)
    }
}



async function updateDataUserOne(payload) {
    console.log(payload, 'payload updateeeeeeeeeeeeeeee');
    const actions = useStoreUserOne()
    await actions.updateRequest()
    try {
        console.log("before update");
        await userOneApi.UpdateUserOne({ id_User: payload.id_User }, null, { id_Status: payload.id_Status })
        actions.updateSuccess()
        await getDataUserOne()
    } catch (error) {
         actions.updateFailure(error)
    }
}


export {
    getDataUserOne
    , updateDataUserOne
}