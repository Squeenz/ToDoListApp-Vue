export default
{
    template: `
        <section class="bg-gray-800 p-5 rounded m-5 text-black">
            <label class="text-red-300" v-if="valid">The field is empty</label>
            <form class="m-0" @submit.prevent="add">
                <input v-model="newAssingment" class="p-2" type="text">
                <button class="p-2 bg-white" type="submit">ADD</button>
            </form>
        </section>
    `,

    data()
    {
        return {
            newAssingment: '',
            valid: false
        }
    },
    
    methods:{
        add(){
            if (this.newAssingment != '')
            {
                this.$emit('add', this.newAssingment);
                this.newAssingment = '';
                this.valid = false;
            }
            else
            {
                this.valid = true;
            }
        }
    }
}