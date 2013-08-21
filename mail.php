<?php
if(isset($_POST['email'])) {

// EDIT THE 2 LINES BELOW AS REQUIRED
$email_to = "info@ercsoftworks.com";
$email_subject = "Contact form submitted on ercsoftworks.com";
$ip = $_SERVER['REMOTE_ADDR'];
$name = $_POST['name']; // required
$phone = $_POST['phone']; // required
$email = $_POST['email']; // required
$reason = $_POST['reason']; // not required
$message = $_POST['message']; //not required required

$email_message = "Form details below.\n\n";

function clean_string($string) {
$bad = array("content-type","bcc:","to:","cc:","href");
return str_replace($bad,"",$string);
}

$email_message .= "Name: ".$name."\n";
$email_message .= "Phone: ".$phone."\n";
$email_message .= "Email: ".$email."\n";
$email_message .= "Reason: ".$reason."\n";
$email_message .= "Message: ".$message."\n";

// create email headers
$headers = 'From: '.$email."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
?>

<?php
}
?>
<html>
    <head>
        <title>EC Computers of Naples</title>
        <meta name="keywords" content="Naples Web Design, Naples Custom Software, Web Design, Naples, Florida, Web Sites Naples
        ,Web Design Naples, Software Naples, Computer Repair, PC Repair, Computer Repair Naples,
        Naples Computer Repair"/>
        <link href="style.css" rel="stylesheet" type="text/css"/>
        <link href="superfish.css" media="screen" rel="stylesheet"/>

        <link href='http://fonts.googleapis.com/css?family=Raleway:600' rel='stylesheet' type='text/css'>

    </head>
    <body>
        <!--scripts, scripts, and mo' scripts!-->
        <script  type="text/javascript" src="scripts/jquery-1.8.3.min.js" ></script>

        <script src="scripts/superfish.js"></script>
        <script src="scripts/supersubs.js"></script>
        <script src="scripts/hoverIntent.js"></script>

        <!--menu jQuery plugin initializer-->
        <script>
            $(document).ready(function() {
                $("ul.sf-menu").superfish();
            });

        </script>
        <div id="top_bar">
       
        </div>
        <div id="content_wrapper"class ="parent-element">
            <div id="content_wrapper_top">
                <h1>EC COMPUTERS</h1>
                <div id="content_wrapper_top_mid">
                    <p>
                        Serving Naples since 2010.
                        <br/>
                        Yes, we're available for hire!

                    </p>
                </div>
                <div id="content_wrapper_top_right">
                    <a href="contact.html"><div id="content_wrapper_top_right_container"></div></a>
                    <p>
                        Need information or have questions?
                        Email: info@ercsoftworks.com
                        <br/>

                    </p>
                </div>
            </div>
            <div id="header" >

                <ul class="sf-menu">
                    <li class="current">
                        <a href="index.html">HOME</a>
                    </li>
                    <li>
                        <a href="index.html">SERVICES</a>
                        <ul>
                            <li>
                                <a href="custom_software.html">CUSTOM SOFTWARE</a>
                            </li>
                            <li>
                                <a href="web_design.html">WEB DEVELOPMENT</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="portfolio.html">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="contact.html">CONTACT</a>
                    </li>
                    <li>
                        <a href="index.html">PAYMENTS</a>
                    </li>
                </ul>

                <div id="header_ribbon"></div>

            </div>
            <div class="blank_divider"></div>
            <div class="blank_divider"></div>

            <div id="content_tagline">

                <h2>Thank You!</h2>

            </div>
            <div class="clearfix"></div>
            <div id="contact_sent_mail"></div>
            <div id="center_message">
                Your message has been sent!
                <br/>
                <br/>
                We will reply as soon as possible!
                <br/>
                <br/>
                <a href="index.html">Return Home...</a>

            </div>
        </div>
    </body>
</html>

