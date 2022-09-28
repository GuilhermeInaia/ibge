
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes?orderBy=nome') // incluindo o ?orderBy=nome fica em ordem alfabética.
    .then((resposta) => resposta.json())
    .then((regioes) => {
        regioes.forEach((cadaRegiao) => {
            document.getElementById('regiao').innerHTML += `
            <option>${cadaRegiao.nome}</option>
            `;
        });
        
    })


    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome') // incluindo o ?orderBy=nome fica em ordem alfabética.
    .then((resposta) => resposta.json())
    .then((estado) => {
        estado.forEach((cadaEstado) => {
            document.getElementById('estado').innerHTML += `
            <option>${cadaEstado.nome}</option>
            `;
        });
    })

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes?orderBy=nome') // incluindo o ?orderBy=nome fica em ordem alfabética.
    .then((resposta) => resposta.json())
    .then((cidade) => {
        cidade.forEach((cadaCidade) => {
            document.getElementById('cidade').innerHTML += `
            <option>${cadaCidade.nome}</option>
            `;
        });
    })

