export default {
    namespace : true,
    state : {
        count : 1
    },
    getters : {
        getCount(state:{count : number}){
           return state.count * 2
        }
    },
    mutations : {
        changeCount(state:{count : number},payload:number){
            state.count += payload
        }
    },
    actions : {
        setChangeCount(context : {commit : any},payload:number){
            context.commit("changeCount",payload)
        }
    }
}