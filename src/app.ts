
import Vue from 'vue';
import { Student } from './Model/greeter'


const app = new Vue({
    data() {

    },
    methods: {
            geta(){
                  var student = new Student("李", "四");
                  student.greeter();
            }
    },
    mounted: {
        
    }

}).$mount("#app");
