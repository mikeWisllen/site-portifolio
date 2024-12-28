    async function enviarFormulario(event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os valores do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const celular = document.getElementById("celular").value;
        const mensagem = document.getElementById("mensagem").value;

        // Validação simples no frontend
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha os campos obrigatórios.");
            return;
        }

        try {
            // Envia os dados para o backend
            const response = await fetch("processar.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nome, email, celular, mensagem }),
            });

            // Processa a resposta
            if (response.ok) {
                const resultado = await response.text();
                alert("Mensagem enviada com sucesso!");
                document.getElementById("formulario").reset(); // Limpa o formulário
            } else {
                alert("Erro ao enviar a mensagem. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Houve um problema ao enviar o formulário. Tente novamente.");
        }
    }


