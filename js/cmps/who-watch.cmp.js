export default {
    emits: ['login', 'back'],
    template: `
        <users-list v-on:back="onBack" v-on:login="onLogin"  v-if="!isVideos"></users-list>
        <videos-list v-on:back="onBackToUsers" v-if="isVideos" v-bind:user="currUser"></videos-list>
    `,
    data() {
        return {
            isVideos: false,
            currUser: null
        }
    },
    methods: {
        onLogin(user) {
            console.log(user.videos)
            this.isVideos = true
            this.currUser = user
            console.log(this.currUser.videos)
        },
        onBack() {
            this.$emit('back')
        },
        onBackToUsers() {
            this.isVideos = false
        }
    },
}