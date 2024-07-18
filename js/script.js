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
            ],
            newtask: []
        }
        
    },

    methods: {
        //controlDone ha il aggiungere la classe "text-decoration-line-through" SE il valore di Done equivale a true
        controlDone() {
            if (done = true) {
                task.classList.add("text-decoration-line-through");
            }
        },
        //cancelTask ha il compito di rimuovere UN elemento dall'array di oggetti tasks
        cancelTask(index) {
           this.tasks.splice(index, 1);
        },
        //addTask ha il compito di aggiungerre un nuovo elemento all'array di oggetti tasks
        //non riesco ad aggiungere nuovo elemento ma è privo di testo, come se vue e/o javascript non predesse ciò che scrivo nel placeholder
        addTask(new_task) {
            this.tasks.push(new_task);
        }
        
    }
}).mount('#app');