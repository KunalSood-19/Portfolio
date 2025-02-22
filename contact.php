<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    // Check if email is valid
    if (!$email) {
        die("Invalid email address.");
    }

    // Email details
    $to = "kunaalsood15@gmail.com"; // Replace with your email
    $subject = "New Contact Form Message from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:\n$message\n";

    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "Invalid request.";
}
?>
