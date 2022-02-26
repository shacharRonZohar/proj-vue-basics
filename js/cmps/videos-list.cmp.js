export default {
    props: ['user'],
    emits: ['back'],
    template: `
            <curr-user v-bind:user="user" v-on:back="onBack"></curr-user>
            <h2>Your shows:</h2>
        <section class="videos-list gallery">
            <add-item  v-on:toggleModal="onToggleModal"></add-item>
            <video-item v-for="currVideo in user.videos" v-bind:video="currVideo"></video-item>
        </section>
        <modal v-on:confirm="onAddVideo" v-on:closeModal="onToggleModal" v-if="isModal"></modal>
    `,
    data() {
        return {
            isModal: false
        }
    },
    methods: {
        onBack() {
            this.$emit('back')
        },
        onToggleModal() {
            console.log(this.isModal)
            this.isModal = !this.isModal
        },
        onAddVideo(videoName) {
            this.videos.push({
                videoName
            })
        }
    },
}