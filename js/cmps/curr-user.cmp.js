export default {
    props: ['user'],
    emits: ['back'],
    template: `
      <article class="user-item curr-user" v-bind:class="user.color">
            <span class="name">{{user.userName}}</span>
        </article> 
     <button v-on:click="onBack" class="btn back">Switch User</button>
    `,
    data() {
        return {

        }
    },
    methods: {
        onBack() {
            this.$emit('back')
        }
    },
    computed: {
    },
}