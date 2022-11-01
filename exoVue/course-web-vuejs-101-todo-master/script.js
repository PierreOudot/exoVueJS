//A toi de jouer ! https://youtu.be/1dLcnxIock0
let app ={
    data(){
        return { //listing d'un ensemble de clés/valeurs qui seront renvoyés dans l'html
            input: "",
            todolist: [],
            priority:0,
            idCount:0
        }
    },
    methods:{
        addToTodoList(){
        if(this.input != ""){
            this.idCount++;
            this.todolist.push({
                id:this.idCount,
                task:this.input,
                isDone: false,
                priority:this.priority
            });
            this.input="";
            }
        },

        clearTodoList(){
            this.todolist =[];
            this.idCount =0;
        },

        isDoneDone(task){
            task.isDone= !task.isDone;
        },

        sortByPriority(){
            this.todolist.sort(function(a,b){
                if(a.priority === b.priority){
                    return a.id-b.id;
                }else{
                    return b.priority - a.priority;
                }
            });
        }     
    } 
};
let App = Vue.createApp(app);
App.component("todo",{
    props:["task"],
    data(){return{
        task:this.task
    }   
    },    
    methods:{
        done(){
            this.$emit("checked",this.task);
        }
        
    },
    template: 
    `
    <li class="m-2 p-4 rounded cursor-pointer bg-blue-200 hover:bg-blue-500 hover:text-white" @click="done" > 
    
    <p v-bind:class="{'line-through':task.isDone}">{{task.task}}</p>
    </li>
    `
});

App.mount("#app");


