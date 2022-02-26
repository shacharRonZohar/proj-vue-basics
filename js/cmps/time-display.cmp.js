import { utilService } from '../services/utilService.js'

export default {
    props: [],
    template: `
            <div  v-on:click="toggleIsDark" class="time-display" v-bind:class="bgColor">
                <div class="season-img">
                    <img v-bind:src="seasonUrl">
                </div>
                <span>It is currently: {{seasonName}}</span>
                <div class="curr-time">{{formatedTime}}</div>
            </div>
    `,
    data() {
        return {
            time: null,
            intervalId: null,
            isDark: false,
            seasonName: null
        }
    },
    created() {
        this.getCurrTime()
        this.seasonName = this.getSeasonName()
        this.intervalId = setInterval(this.getCurrTime, 1000)
        console.log('Time Display succefully loaded')
    },
    methods: {
        getCurrTime() {
            this.time = Date.now()
        },
        toggleIsDark() {
            this.isDark = !this.isDark
        },
        getSeasonName() {
            const month = new Date(this.time).getMonth()
            if (3 <= month && month <= 5) return 'spring'
            if (6 <= month && month <= 8) return 'summer'
            if (9 <= month && month <= 11) return 'autumn'
            // Months 12, 01, 02
            return 'winter';
        }
    },
    computed: {
        formatedTime() {
            return utilService.formatTime(this.time, {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            })
        },
        bgColor() {
            return {
                'dark-bg': this.isDark
            }
        },
        seasonUrl() {
            return `./assets/imgs/${this.seasonName}.png`
        },

    },
    unmounted() {
        clearInterval(this.intervalId)
    },

}
