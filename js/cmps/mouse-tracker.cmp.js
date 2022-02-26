export default {
    template: `
        <div class="mouse-tracker">
            <span>X: {{mouseX}}</span>
            <span>Y: {{mouseY}}</span>
        </div>
    `,
    created() {
        document.body.addEventListener('mousemove', (ev) => {
            this.mouseX = ev.clientX
            this.mouseY = ev.clientY
        })
    },
    data() {
        return {
            mouseX: null,
            mouseY: null
        }
    },
}