const {createApp} = Vue;

createApp ({
    data() {
        return {
            tasks: [
                {
                    text: "Vattelapesca",
                    done: true, 
                },
                {
                    text: "Fare la spesa",
                    done: false, 
                }
            ]
        }
    }
}).mount('#app');