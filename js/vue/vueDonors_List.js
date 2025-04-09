export function donorsApp() {
  const app = Vue.createApp({
    data() {
      return {
        donors: [],
        error: "",
      };
    },
    methods: {
      fetchDonors() {
        fetch(
          "http://localhost:8888/BrothersInArms-Level4-FIP/bia-backend/brothers_in_arms_fip_backend/public/donors"
        )
          .then((response) => response.json())
          .then((data) => {
            this.donors = data;

            this.loading = false;
          })
          .catch((error) => {
            this.error =
              "Unable to load donors data. Please check Your connection.";
            console.error(error);
          });
      },
    },
    mounted() {
      this.fetchDonors();
    },
  });

  app.mount("#donorsApp");
}
