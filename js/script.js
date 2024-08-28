const { createApp } = Vue


createApp({
    data() {
        return {
            // Messaggio 
            message: 'Hello Vue!',
            // URL dell'immagine da visualizzare
            imageUrl: 'https://vuejs.org/images/logo.png'
        }
    }

}).mount('#app')