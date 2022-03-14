/* 
Quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Pra isso vamos precisar trabalhar com dois elementos: 
1- listagem 
2- cartão do pokémon

*/

//Precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela.

const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
const pokemonsCard = document.querySelectorAll(".cartao-pokemon")


listaSelecaoPokemons.forEach(pokemon => {
    //Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons:

    pokemon.addEventListener("click", () => {
       //- Remover a classe aberta só do cartão que está aberto.
        const cartaoPokemonParaAberto = document.querySelector(".aberto")
        cartaoPokemonParaAberto.classList.remove("aberto")

       //- Ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar. 
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = "cartao-"+ idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add("aberto")

        //- Remover a classe ativo que marca o pokémon selecionado.
        const pokemonAtivoNaListagem = document.querySelector(".ativo")
        pokemonAtivoNaListagem.classList.remove("ativo")

        //- Adicionar a classe ativo no item da lista selecionado.
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add("ativo")

    })
})