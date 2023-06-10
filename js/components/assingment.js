import deleteAssingment from "./deleteAssingment.js"

export default 
{
    components: { deleteAssingment },

    template: `
        <li class="p-2 mt-2 border">
            {{ assignment.name }} <input class="float-right" v-model="assignment.completed" type="checkbox">
            <delete-assingment :id="assignment.id" @remove="remove"></delete-assingment>
        </li>
    `,

    props: {
        assignment: Object
    },

    methods:
    {
        remove(id)
        {
            this.$emit('remove', id);
        }
    }
}