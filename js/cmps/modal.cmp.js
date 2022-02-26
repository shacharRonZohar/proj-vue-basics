export default {
    props: [],
    emits: ['confirm', 'closeModal'],
    template: `
    <div class="modal-background click" v-on:click="onClose"></div>
        <div class="modal">
            <form class="form-group field">
                <input 
                  type="input"
                  class="form-field"
                  placeholder="Name" 
                  name="name" 
                  id='name' 
                  v-model="val" 
                  required 
                  autocomplete="off" />
                <label for="name" class="form-label" v-bind:class="isRedClass">Name</label>
                <button v-bind:class="isRedClass" class="btn" v-on:click.prevent="submitName" type="submit">Add</button>
            </form>
        </div>
    `,
    created() {
        window.addEventListener('keyup', (ev) => {
            if (ev.key === 'Escape') this.onClose()
        }, { once: true })
    },
    data() {
        return {
            val: null,
            isRed: false
        }
    },
    methods: {
        submitName(ev) {
            if (this.val) {
                this.onClose(ev)
                this.$emit('confirm', this.val)
            }
            else {
                this.isRed = true
                setTimeout(() => this.isRed = false, 2000)
            }
        },
        onClose() {
            this.$emit('closeModal')
        }
    },
    computed: {
        isRedClass() {
            return { 'red': this.isRed }
        }
    },
    unmounted() {
        window.removeEventListener('keyup', (ev) => {
            console.log(ev.key)
            if (ev.key === 'escape') this.onClose()
        }, { once: true })
    },
}