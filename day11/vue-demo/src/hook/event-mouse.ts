import { defineComponent,ref,onMounted ,onBeforeUnmount} from 'vue';

export function useMousePosition(){
    let x = ref<any>(0);
    let y = ref<any>(0);

    let updatedPostion = (evenet:MouseEvent)=>{
        x.value = evenet.clientX;
        y.value = evenet.clientY;
    }

    onMounted(()=>{
        document.addEventListener("click",updatedPostion)
    });

    onBeforeUnmount(() => {
        document.removeEventListener("click",updatedPostion);
    })

    return {
        x,
        y
    }

}




