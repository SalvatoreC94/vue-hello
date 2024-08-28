const { createApp } = Vue

// Creazione dell'app Vue
createApp({
    // Definizione dei dati utilizzando l'Option API
    data() {
        return {
            // Messaggio da visualizzare nel div con id "app"
            message: 'Hello Vue!'
        }
    }
    // Monta l'app Vue sull'elemento con id "app"
}).mount('#app')