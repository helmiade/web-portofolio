<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    // Validasi input (tambahkan lebih banyak jika diperlukan)
    if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($message)) {
        echo 'All fields are required.';
        exit;
    }

    // Kirim email
    $to = 'pamungkasade16@gmail.com'; // Ganti dengan alamat email Anda
    $headers = "From: $email";
    $mail_subject = "Contact Form Submission: $subject";
    
    if (mail($to, $mail_subject, $message, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
}
?>
