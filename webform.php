<?php

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $telephone_number = $POST['telephone'];
    $message = $_POST['message'];

    $email_from = "joseph.m.percival@gmail.com";

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Telephone: $telephone_number.\n".
                        "User Message: $message.\n";

    $to = "joseph.m.percival@gmail.com";

    $headers = "From: $email_from \r\n";
    $headers .= "Reply_To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: http://portfolio.josephmpercival.co.uk/contact-form.html");
?>