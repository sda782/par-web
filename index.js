const baseUrl = "https://par-music-rest.azurewebsites.net/MusicRecord"
Vue.createApp({
    data() {
        return {
            music_records: [],
            filter: '',
            add_record: {
                "id": null,
                "name": null,
                "label": null,
                "runTime": null,
                "releaseDate": null,
                "tracks": null
            }
        };
    },
    async created() {
        this.get_records();
    },
    methods: {
        async get_records() {
            if (this.filter != '') {
                this.music_records = []
                const response = await axios.get(baseUrl + '?name=' + this.filter);
                this.music_records = await response.data
                console.log(this.music_records);
                this.filter = ''
                return
            }

            const response = await axios.get(baseUrl);
            this.music_records = await response.data
            console.log(this.music_records);
        },
        async add_new_record() {

        }
    },
}).mount("#app");