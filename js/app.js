import timeDisplayCmp from "./cmps/time-display.cmp.js"
import countDownCmp from "./cmps/countdown.cmp.js"
import whoWatchCmp from "./cmps/who-watch.cmp.js"
import usersListCmp from "./cmps/users-list.cmp.js"
import userItemCmp from "./cmps/user-item.cmp.js"
import videosListCmp from "./cmps/videos-list.cmp.js"
import videoItemCmp from "./cmps/video-item.cmp.js"
import currUserCmp from "./cmps/curr-user.cmp.js"
import addItemCmp from "./cmps/add-item.cmp.js"
import modalCmp from "./cmps/modal.cmp.js"
import mouseTrackerCmp from "./cmps/mouse-tracker.cmp.js"

const options = {
    template: `
    <section class="app">
        <section v-if="!isUsers" class="time-container">
            <time-display></time-display>
            <count-down v-on:due="timeDone" v-bind:time="Date.now() + 1000 * 20"></count-down>
            <button v-on:click="showUsers" class="showUsers btn">Show Users</button>
        </section>
        <who-watch v-on:back="onBack" v-if="isUsers"></who-watch>
        <mouse-tracker></mouse-tracker>
    </section>
    `,
    data() {
        return {
            isUsers: false
        }
    },
    methods: {
        timeDone(msg) {
            console.log(msg)
        },
        showUsers() {
            this.isUsers = true
        },
        onBack() {
            this.isUsers = false
        },
        closeModal() {
            console.log('1')
        }
    }
}

const app = Vue.createApp(options)
app.component('time-display', timeDisplayCmp)
app.component('count-down', countDownCmp)
app.component('who-watch', whoWatchCmp)
app.component('users-list', usersListCmp)
app.component('user-item', userItemCmp)
app.component('videos-list', videosListCmp)
app.component('video-item', videoItemCmp)
app.component('curr-user', currUserCmp)
app.component('add-item', addItemCmp)
app.component('mouse-tracker', mouseTrackerCmp)
app.component('modal', modalCmp)

app.mount('#app')