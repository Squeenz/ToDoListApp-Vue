import assingmentsList from "./assingmentsList.js"
import createAssingment from "./createAssingment.js"

export default
{
    components: { assingmentsList, createAssingment },

    template: `
        <assingments-list assingmentName="In Progress" :assignmentList="filters.inProgress" @remove="remove"></assingments-list>
        <assingments-list assingmentName="Completed" :assignmentList="filters.completed" @remove="remove"></assingments-list>
        <create-assingment @add="add"></create-assingment>
        `,

    data() {
        return {
            assingments: [
                {id: 1, name: 'Re - create the to do list app', completed: false, tag:'science'},
                {id: 2, name: 'Test VUE knowledge', completed: false, tag:'science'},
                {id: 3, name: 'Another Task', completed: false, tag:'maths'},
                {id: 4, name: 'Master this shit for laravel', completed: false, tag:'science'}
            ]
        }
    },

    computed: {
        filters(){
            return {
                completed: this.assingments.filter(assingment => assingment.completed),
                inProgress: this.assingments.filter(assingment => ! assingment.completed)
            }
        },
    },

    methods: {
        add(name, tag){
            this.assingments.push({
                id: this.assingments.length + 1,
                name: name,
                completed: false,
                tag: tag
            });
        },
        remove(id)
        {
            let index = this.assingments.map(ass => ass.id).indexOf(id);
            this.assingments.splice(index, 1);
        }
    },
}