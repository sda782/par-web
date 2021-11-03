const baseUrl = "https://par-music-rest.azurewebsites.net/MusicRecord"
Vue.createApp({
    data() {
        return {
            music_records: [],
            filter: '',
        };
    },
    async created() {
        this.get_records();
    },
    methods: {
        async get_records() {
            if (this.filter != '') {
                const response = await axios.get(baseUrl + '?name=' + this.filter);
                this.music_records = await response.data
                console.log(this.music_records);
                this.filter = ''
                return
            }

            const response = await axios.get(baseUrl);
            this.music_records = await response.data
            console.log(this.music_records);
        }
    },
}).mount("#app");