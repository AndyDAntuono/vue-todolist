const {createApp} = Vue;

createApp ({
    data() {
        return {
            tasks: [
                {
                    text: "Vattelapesca",
                    //done: inserire booleano true or false,
                },
            ]
        }
    }
}).mount('#app');