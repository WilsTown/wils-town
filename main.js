Vue.createApp({
    data() {
        return {
            display: '/assets/timer.PNG',
            display_alt: 'town'
        }
    },
    methods: {
        viewTimer() {
            this.display = '/assets/timer.PNG',
            this.display_alt = 'timer'
        },
        viewTown() {
            this.display = '/assets/town.PNG',
            this.display_alt = 'town'
        },
        viewEditTown() {
            this.display = '/assets/edittown.PNG',
            this.display_alt = 'edittown'
        },
        viewSettings() {
            this.display = '/assets/settings.PNG',
            this.display_alt = 'settings'
        }
    },
}).mount('#WT-app')