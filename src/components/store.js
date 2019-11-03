
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        side_width:'200px',
        isCollapse:false,
    },
    mutations:{
        isFold(state){
            if(state.isCollapse){
                state.isCollapse=false;
                state.side_width='200px'
            }else{
                state.isCollapse=true;
                state.side_width='56px'
            }
        }
    },
    actions:{

    }


})
export default store

