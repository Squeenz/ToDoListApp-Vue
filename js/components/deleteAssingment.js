export default
{
    template: `
        <form @submit.prevent="remove" class="m-0">
            <button class="bg-red-800 rounded w-full h-10" type="submit">X</button>
        </form>
    `,

    props: {
        id: Number
    },

    methods: {
        remove()
        {
            this.$emit('remove', this.id);
        }
    }
}