async function buscarCPF() {

    const cpfDigitado = document.getElementById("cpf").value;
    const resultado = document.getElementById("resultado");

    try {

        const resposta = await fetch("cadastros.json");

        const cadastros = await resposta.json();

        const pessoa = cadastros.find(function(cadastro) {
            return cadastro.cpf === cpfDigitado;
        });

        if (pessoa) {

            resultado.innerHTML = `
                <h2>Cadastro encontrado</h2>
                <p><strong>Nome:</strong> ${pessoa.nome}</p>
                <p><strong>CPF:</strong> ${pessoa.cpf}</p>
                <p><strong>Idade:</strong> ${pessoa.idade}</p>
            `;

        } else {

            resultado.innerHTML = `
                <p>CPF não encontrado.</p>
            `;

        }

    } catch (erro) {

        resultado.innerHTML = `
            <p>Erro ao carregar os cadastros.</p>
        `;

        console.log(erro);
    }
}