//A toi de jouer ! https://youtu.be/1dLcnxIock0
let app ={
    data(){
        return { //listing d'un ensemble de clés/valeurs qui seront renvoyés dans l'html
            input: "",
            todolist: [],
            
        }
    },
    methods:{
        addToTodoList(){
        if(this.input != ""){
            this.todolist.push({task:this.input,
                isDone: false,
            });
            this.input="";
            }
        },

        clearTodoList(){
            this.todolist =[];
        },

        isDoneDone(task){
            task.isDone=true;
        }

        
    }
    
};
let App = Vue.createApp(app);
App.component("todo",{
    props:["content"],
    methods:{

        
    },
    template: `
    <li class="m-2 p-4 rounded cursor-pointer bg-blue-200 hover:bg-blue-500 hover:text-white" @click="isDoneDone(content)"> 
    
    <p v-bind:style="{'line-through':content.isDone}" >{{content}}</p>
    </li>
    `
});

App.mount("#app");


