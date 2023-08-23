const Task = {
    data() {
      return {
        title:"",
        tasks:[],
      };
    },
    methods: {
      addTask(){
        this.tasks.push({
            id: Date.now(),
            title: this.title,
        })
        this.title = ""
      },
      delTask(id){
        this.tasks = this.tasks.filter((el)=> el.id !== id)
      }
    },
    template: `
    <div>
        <input type="text" v-model="title" />
        <button @click="addTask">addTask</button>
        <ul>
        <li v-for="task in tasks" :key="task.id">
            {{task.title}}
            <button @click="delTask(task.id)">delTask</button>
        </li>
        </ul>
    </div>
    `,
  };
  