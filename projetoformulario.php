<?php
// Verificar se o método da requisição é POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obter os dados enviados via POST
    $name = isset($_POST['name']) ? addslashes($_POST['name']) : '';
    $email = isset($_POST['email']) ? addslashes($_POST['email']) : '';
    $celular = isset($_POST['celular']) ? addslashes($_POST['celular']) : '';
    $mensagem = isset($_POST['mensagem']) ? addslashes($_POST['mensagem']) : '';

    // Montar o conteúdo JSON
    $dados = [
        'name' => $name,
        'email' => $email,
        'celular' => $celular,
        'mensagem' => $mensagem
    ];
    $jsonContent = json_encode($dados, JSON_PRETTY_PRINT);

    // Configurar o e-mail
    $para = "mikewisllen@gmail.com";
    $assunto = "Fale Comigo - Dados em JSON";
    $corpo = "Segue abaixo os dados do formulário em formato JSON:\n\n" . $jsonContent;
    $cabeca = "From: teste@inteliogia.com" . "\r\n" .
              "Reply-to: " . $email . "\r\n" .
              "X-Mailer: PHP/" . phpversion();

    // Enviar o e-mail
    if (mail($para, $assunto, $corpo, $cabeca)) {
        echo json_encode(["status" => "success", "message" => "E-mail enviado com sucesso!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Houve um erro ao enviar o e-mail."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método não permitido."]);
}
?>
