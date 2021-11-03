const baseUrl = "https://par-music-rest.azurewebsites.net/MusicRecord"
Vue.createApp({
    data() {
        return {
            music_records: [],
            filter: '',
            add_record: {
                "id": 0,
                "name": null,
                "label": null,
                "runTime": null,
                "releaseDate": null,
                "tracks": null
            },
            deleteid: null
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
            try {
                console.log(this.add_record)
                response = await axios.post(baseUrl, this.add_record)
                console.log("response " + response.status + " " + response.statusText)
                this.get_records()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async delete_record() {
            const url = baseUrl + "/" + this.deleteid
            try {
                response = await axios.delete(url)
                console.log(response.status + " " + response.statusText)
                this.get_records()
            } catch (ex) {
                alert(ex.message)
            }
        }
    },
}).mount("#app");