import {defineComponent,ref} from  "vue"

export function useCount():any{
    let count = ref(0);
    let increment = ()=>{
        count.value++
    }
    return {
        count,
        increment
    }
}