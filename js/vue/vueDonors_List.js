export function donorsApp() {
    const app = Vue.createApp({
        data() {
            return {
                donors: [], 
                error: ''
            };
        },
        methods: {
            fetchDonors() {
                fetch('http://localhost/github/BrothersInArms-Level4-FIP/bia-backend/brothers_in_arms_fip_backend/public/donors')
                .then(response => response.json())
                    .then(data => {
                        this.donors = data; // This will fetch all the donors data from the API


                        // But in a case where donors are becoming huge and we have multiple entries, we can setup a page by page data or instead limit the number of data in this script or the solution is endless, but for now lets say we Limit to 5 donors
                        // this.donors = data.slice(0, 5); // This will limit the number of donors to 5
                        this.loading = false;
                    })
                    .catch(error => {
                        this.error = 'Unable to load donors data. Please check Your connection.';
                        console.error(error);
                    });
            }
        },
        mounted() {
            this.fetchDonors(); 
        }
    });

    app.mount("#donorsApp");
}
