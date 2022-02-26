import { utilService } from '../services/utilService.js'

export default {
    props: ['time'],
    emits: ['due'],
    template: `
                <h2>Countdown</h2>
                <span >{{formatedMinutes}} : <span v-bind:class="cRed">{{formatedSeconds}}</span></span>
              `,
    data() {
        return {
            timeLeft: null,
            intervalId: null
        }
    },
    created() {
        this.countTime()
        this.intervalId = setInterval(this.countTime, 1000)
    },
    methods: {
        countTime() {
            this.timeLeft = this.time - Date.now()
            if (this.timeLeft <= 0) this.timeDone()
        },
        timeDone() {
            const doneAudio = new Audio('assets/sounds/done.mp3')
            // doneAudio.play()
            this.timeLeft = 0
            clearInterval(this.intervalId)
            this.$emit('due', 'Time is done!')
        },
    },
    computed: {
        formatedMinutes() {
            return utilService.formatTime(this.timeLeft, {
                minute: 'numeric'
            })
        },
        formatedSeconds() {
            return utilService.formatTime(this.timeLeft, {
                second: 'numeric'
            })
        },
        cRed() {
            return { 'c-red': this.timeLeft <= 11000 }
        }
    },
}