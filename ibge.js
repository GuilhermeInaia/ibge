

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes?orderBy=nome') // incluindo o ?orderBy=nome fica em ordem alfabética.
    .then((resposta) => resposta.json())
    .then((regioes) => {
        regioes.forEach((cadaRegiao) => {
            document.getElementById('regiao').innerHTML += `
            <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
            `;
        });
        
    })

    function procurarEstado(){
        let id_estado = document.getElementById('regiao').value 
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id_estado}/estados`) 
        .then((resposta) => resposta.json())
        .then((estado) => {
            document.getElementById('estado').innerHTML = " "
            estado.forEach((cadaEstado) => {
                document.getElementById('estado').innerHTML += `
                <option value="${cadaEstado.id}">${cadaEstado.nome}</option>
                `;
            });
        })
    }

    function procurarCidade() {
        let id_cidade = document.getElementById('estado').value 
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id_cidade}/microrregioes`) // incluindo o ?orderBy=nome fica em ordem alfabética.
        .then((resposta) => resposta.json())
        .then((cidade) => {
            document.getElementById('cidade').innerHTML = " "
            cidade.forEach((cadaCidade) => {
                document.getElementById('cidade').innerHTML += `
                <option>${cadaCidade.nome}</option>
                `;
            });
        })
    }

