new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Estou alertando no click!')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})