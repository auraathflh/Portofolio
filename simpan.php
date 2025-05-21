<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form
    $name    = $_POST['name'] ?? '';
    $email   = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';
    $created_at = date("Y-m-d H:i:s");

    // Query simpan
    $sql = "INSERT INTO contact_messages (name, email, message, created_at)
            VALUES (?, ?, ?, ?)";

    $stmt = mysqli_prepare($conn, $sql);
    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "ssss", $name, $email, $message, $created_at);
        if (mysqli_stmt_execute($stmt)) {
            echo "Pesan berhasil dikirim!";
        } else {
            echo "Gagal menyimpan (stmt): " . mysqli_stmt_error($stmt);
        }
    } else {
        echo "Query error: " . mysqli_error($conn);
    }
}
?>
