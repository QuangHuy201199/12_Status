import { defineStore } from "pinia";
import { userType } from "../constants/actionsType/index";
const DEFAULT_STATE = {
    listUserOne: [],
    isFetching: false,
    error: false,
    messageError: null,
    type: ""
}

export const useStoreUserOne = defineStore({
    id: "userOne",
   
    actions: {
        getRequest() {
            userType.GET_REQUEST
            this.isFetching = true
        },
        getSuccess(payload) {
            this.listUserOne = payload.data,
                console.log(payload.data, "day la payload");
            userType.GET_SUCCESS,
                this.isFetching = false
        },
        getFailure() {
            userType.GET_FAILURE
        },
        //////////////////////////

        addRequest() {
            userType.CREATE_REQUEST
            this.isFetching = true
        },
        addSuccess() {
            console.log("day la payload add");
            userType.CREATE_SUCCESS,
                this.isFetching = false
        },
        addFailure() {
            userType.CREATE_FAILURE
        },
        //////////////////////////
        deleteRequest() {
            userType.DELETE_REQUEST
            this.isFetching = true
        },
        deleteSuccess() {
            userType.DELETE_SUCCESS,
                this.isFetching = false
        },
        deleteFailure() {
            userType.DELETE_FAILURE
        },
        //////////////////////////
        updateRequest() {
            userType.UPDATE_REQUEST
            this.isFetching = true
        },
        updateSuccess() {
            userType.UPDATE_SUCCESS,
                this.isFetching = false
        },
        updateFailure() {
            userType.UPDATE_FAILURE
        },

    }
})