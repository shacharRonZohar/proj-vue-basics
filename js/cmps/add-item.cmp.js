export default {
    props: [],
    emits: ['toggleModal'],
    template: `
        <div class="add-item click glow-on-hover" v-on:click="onToggleModal">
                <div class="plus-container">
                    <img src="./assets/icons/add.svg" alt="Add an account">
                </div>
            </div>
            `,
    data() {
        return {

        }
    },
    methods: {
        onToggleModal() {
            this.$emit('toggleModal')
        }
    },
    computed: {
    },
}