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
                },
                {
                    text: "Eseguire seppuku",
                    done: false,
                },
                {
                    text: "Far fuori il mio vicino di casa",
                    done: true,
                },
                {
                    text: "Effettuare lavanda gastrica",
                    done: true,
                },
                {
                    text: "Contattare l'ingenier Cane riguado il ponte sullo stetto di Messina",
                    done: false,
                }
            ]
        }
        
    }
}).mount('#app');