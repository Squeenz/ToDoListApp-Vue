import assingment from "./assingment.js"

export default
{
    components: { assingment },

    template: `
        <section class="bg-gray-800 p-5 rounded m-5" v-if="filteredAssingments.length">
            <h1 class="text-xl">List Of {{ assingmentName }} Tasks ({{ filteredAssingments.length }})</h1>
            <div class="flex gap-2">
                <button 
                @click="currentTag = tag"
                v-for="tag in tags"
                :class="
                {
                    'border-blue-500 text-blue-500': tag == currentTag
                }">
                {{ tag }}</button>
            </div>
            <ul>
                <assingment
                    v-for="assingment in filteredAssingments" 
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
    },

    data()
    {
        return {
            currentTag: 'all'
        }
    },

    computed:
    {
        filteredAssingments()
        {
            if (this.currentTag == 'all'){
                return this.assignmentList;
            }
            else
            {
                return this.assignmentList.filter(a => a.tag == this.currentTag);
            }
        },
        tags()
        {
            return ['all', ...new Set(this.assignmentList.map(a => a.tag))];
        }
    }
}