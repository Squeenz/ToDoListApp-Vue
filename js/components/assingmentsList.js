import assingment from "./assingment.js"

export default
{
    components: { assingment },

    template: `
        <section class="bg-gray-800 p-5 rounded m-5" v-if="assignmentList.length">
            <h1 class="text-xl">List Of {{ assingmentName }} Tasks ({{ assignmentList.length }})</h1>
            <ul>
                <assingment
                    v-for="assingment in assignmentList" 
                    :key="assingment.id"
                    :assignment="assingment"
                    @remove="remove"
                    >
                </assingment>
            </ul>
        </section>
    `,

    props: {
        assingmentName: String,
        assignmentList: Array
    },

    methods:
    {
        remove(id)
        {
            this.$emit('remove', id);
        }
    }
}