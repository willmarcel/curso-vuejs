new Vue({
    el:'#desafio',
    data: {
        nome_idade: 'Usando VueJS - Willian (31)',
        nome: 'Willian',
        idade: 31,
        imgUrl: 'https://miro.medium.com/max/2430/1*ACR0gj0wbx91V_xgURifWg.png'
    },
    methods: {
        multIdade: function() {
            return this.idade * 3
        },
        randomico: function() {
            return Math.floor(Math.random() * 2);
        }        
    }
})