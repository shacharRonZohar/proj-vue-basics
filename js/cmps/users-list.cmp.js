import { utilService } from "../services/utilService.js"

export default {
    props: [],
    emits: ['login', 'back'],
    template: `
            <h2>Profiles:</h2>
        <section class="users-list gallery">
            <add-item v-on:toggleModal="onToggleModal"></add-item>
            <user-item class="click" v-on:remove="onRemove" v-on:login="onLogin" v-for="currUser in users" v-bind:user="currUser"></user-item>
            <button v-on:click="onBack" class="btn back">Back</button>
            <modal v-on:confirm="onAddUser" v-on:closeModal="onToggleModal" v-if="isModal"></modal>
        </section>
    `,
    data() {
        return {
            isModal: false,
            users: [
                {
                    id: utilService.makeId('u', 5),
                    userName: 'puki',
                    color: 'red',
                    videos: [{
                        videoName: 'Parasite',
                    }]
                },
            ]
        }
    },
    methods: {
        onLogin(user) {
            this.$emit('login', user)
        },
        onBack() {
            this.$emit('back')
        },
        onToggleModal() {
            console.log(this.isModal)
            this.isModal = !this.isModal
        },
        onAddUser(userName) {
            this.isModal = false
            this.users.push({
                userName,
                color: utilService.getRandomColor(),
                videos: [{
                    videoName: 'Parasite',
                }]
            })
        },
        onRemove(userId) {
            const userIdx = this.users.findIndex(user => user.id === userId)
            this.users.splice(userIdx, 1)
        }
    },
    computed: {
    },
}