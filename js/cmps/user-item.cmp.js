export default {
    props: ['user'],
    emits: ['login', 'remove'],
    template: `
        <article v-on:click="login" class="user-item" v-bind:class="user.color">
            <button v-on:click.stop="remove" class="btn remove-user">X</button>
            <span class="name">{{user.userName}}</span>
        </article> 
        `,
    methods: {
        login() {
            this.$emit('login', this.user)
        },
        remove() {
            this.$emit('remove', this.user.id)
        }
    }
}