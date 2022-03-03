Vue.createApp({
    data() {
        return {
            display: '/assets/timer.PNG',
            alt: 'town'
        }
    },
    methods: {
        viewTimer() {
            this.display = '/assets/timer.PNG',
            this.alt = 'timer'
        },
        viewTown() {
            this.display = '/assets/town.PNG',
            this.alt = 'town'
        },
        viewEditTown() {
            this.display = '/assets/edittown.PNG',
            this.alt = 'edittown'
        },
        viewSettings() {
            this.display = '/assets/settings.PNG',
            this.alt = 'settings'
        }
    },
}).mount('#WT-app')