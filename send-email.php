<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Raccogli i dati dal form
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $messaggio = htmlspecialchars($_POST['messaggio']);
    
    // Validazione base
    if (empty($nome) || empty($email) || empty($messaggio)) {
        header("Location: contatti.html?error=campi_vuoti");
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: contatti.html?error=email_invalida");
        exit;
    }
    
    // Configurazione email
    $to = "tuaemail@esempio.it"; // ← CAMBIA CON LA TUA EMAIL
    $subject = "Nuovo messaggio dal sito - " . $nome;
    $headers = "From: noreply@tuosito.it\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Corpo dell'email
    $body = "Hai ricevuto un nuovo messaggio dal sito:\n\n";
    $body .= "Nome: " . $nome . "\n";
    $body .= "Email: " . $email . "\n\n";
    $body .= "Messaggio:\n" . $messaggio . "\n";
    
    // Invia email
    if (mail($to, $subject, $body, $headers)) {
        header("Location: grazie.html");
    } else {
        header("Location: contatti.html?error=invio_fallito");
    }
    exit;
}
?>
