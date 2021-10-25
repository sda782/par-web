const baseUrl = "https://par-music-rest.azurewebsites.net/MusicRecord"
Vue.createApp({
    data() {
        return {
            music_records: []
        };
    },
    async created() {
        this.get_records();
    },
    methods: {
        async get_records() {
            const response = await axios.get(baseUrl);
            this.music_records = await response.data
            console.log(this.music_records);
        }
    },
}).mount("#app");