export function contactApp() {
    const app = Vue.createApp({
        data() {
            return {
                formData: {
                    name: '',
                    email: '',
                    volunteer_type: '',
                    message: ''
                },
                interests: [],
                responseMessage: '',
                errors: {
                    name: '',
                    email: '',
                    volunteer_type: '',
                    message: ''
                },
                buttonText: 'Submit',
                flower_animation: 'images/flower-animation.svg',
                submitted: false,
                isProcessing: false
            };
        },
        methods: {
            fetchInterests() {
                fetch('http://localhost/github/BrothersInArms-Level4-FIP/bia-backend/brothers_in_arms_fip_backend/public/interests')
                    .then(response => response.json())
                    .then(data => {
                        this.interests = data;
                    })
                    .catch(error => {
                        console.error('Error fetching interests:', error);
                    });
            },
            validateForm() {
                let isValid = true;
                this.errors = {
                    name: '',
                    email: '',
                    volunteer_type: '',
                    message: ''
                };

                if (!this.formData.name.trim()) {
                    this.errors.name = 'Name is required';
                    isValid = false;
                }

                if (!this.formData.email.trim()) {
                    this.errors.email = 'Email is required';
                    isValid = false;
                } else if (!this.isValidEmail(this.formData.email)) {
                    this.errors.email = 'Please enter a valid email address';
                    isValid = false;
                }

                if (!this.formData.volunteer_type) {
                    this.errors.volunteer_type = 'Please select a volunteer interest';
                    isValid = false;
                }

                if (!this.formData.message.trim()) {
                    this.errors.message = 'Message is required';
                    isValid = false;
                }

                return isValid;
            },
            isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            },
            submitForm() {
                // Reset messages
                this.responseMessage = '';
                this.submitted = false;
                this.isProcessing = true;
                this.buttonText = this.flower_animation;

                // Validate form
                if (!this.validateForm()) {
                    this.isProcessing = false;
                    this.buttonText = 'Submit';
                    return;
                }

                // Send data to backend
                fetch('http://localhost/github/BrothersInArms-Level4-FIP/bia-backend/brothers_in_arms_fip_backend/public/contacts/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    },
                    body: new URLSearchParams(this.formData)
                })
                .then(async (response) => {
                    const data = await response.json();

                    if (!response.ok) {
                        if (data.errors) {
                            // Handle validation errors
                            Object.keys(data.errors).forEach(field => {
                                this.errors[field] = data.errors[field][0];
                            });
                        }
                        this.buttonText = 'Submit';
                        this.isProcessing = false;
                    } else {
                        // Successful submission
                        this.responseMessage = 'Thank you for reaching out! We will get back to you soon.';
                        this.submitted = true;
                        this.buttonText = this.flower_animation;
                        // Reset form
                        this.formData = {
                            name: '',
                            email: '',
                            volunteer_type: '',
                            message: ''
                        };
                    }
                })
                .catch(error => {
                    this.errors.general = 'An error occurred while submitting the form. Please try again.';
                    this.buttonText = 'Submit';
                    this.isProcessing = false;
                    console.error('Error:', error);
                });
            }
        },
        mounted() {
            this.fetchInterests();
        }
    }).mount("#contactApp");
}
