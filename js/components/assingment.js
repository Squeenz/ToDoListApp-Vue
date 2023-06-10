export default 
{
    template: `
        <li class="p-2 mt-2 border">
            {{ assignment.name }} <input v-model="assignment.completed" type="checkbox">
        </li>
    `,

    props: {
        assignment: Object
    },
}