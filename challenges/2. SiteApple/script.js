function getColorName()
{
    let checked_element = document.querySelector('input[name=opcao-cor]:checked')
    let id = document.getElementById(checked_element.id)
    let source = id.parentNode.children[1].children[0].src
    source = source.split('/')[5]

    let color = source.split('.')[0]
    return color
}

function trocaCor()
{
    first_path_part = "./imagens/opcoes-cores/imagens-"
    color = getColorName()

    let first_id = document.getElementById("0-imagem-miniatura")
    let second_id = document.getElementById("1-imagem-miniatura")
    let third_id = document.getElementById("2-imagem-miniatura")

    first_id.src = first_path_part + color + "/imagem-0.jpeg"
    second_id.src = first_path_part + color + "/imagem-1.jpeg"
    third_id.src = first_path_part + color + "/imagem-2.jpeg"
    trocarImagem()
}

function trocarImagem()
{
    let checked_element = document.querySelector('input[name=opcao-imagem]:checked')
    let id = document.getElementById(checked_element.id)
    let source = id.parentNode.children[1].children[0].src

    let image = document.getElementById("imagem-visualizacao")
    image.src = source
}
                                           