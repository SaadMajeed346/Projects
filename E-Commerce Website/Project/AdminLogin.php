<!DOCTYPE html>
<html>

<head>
    <title>Codester | Login</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" type="image/png" sizes="16x16" href="Images/Logo1.png">
    <link href="lib/StyleCss.css" rel="stylesheet">
    <link href="lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="lib/bootstrap/dist/css/bootstrap-grid.min.css" rel="stylesheet" />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

</head>

<body style="background-image: url(Images/Bg2.jpg); background-attachment: fixed; background-repeat: no-repeat; background-position: center; background-size: cover;">
    <div class="container-fluid bodyContent mb-3">
        <div class="col-lg-12 col-md-12 col-sm-12 mb-3 ">
            <form method="POST" action="Login.php" class="form-inline text-center was-validated justify-content-center" style="margin-top: 160px;">
                <div class="shadow pb-5 pl-5 pr-5" style="background-color: white;">
                    <h3 class="m-2"><img src="Images/logo.png" height="45px"></h3>
                    <hr>
                    <label class="mr-2" for="inputName">Enter Email</label>
                    <?php
                        if(isset($_COOKIE["ADMIN_EMAIL"]))
                        {   
                            $EMAIL = $_COOKIE["ADMIN_EMAIL"];
                            echo '<input type="email" required class="form-control m-1" id="Email" value="'.$EMAIL.'" name="Email"><br>';
                        }
                        else
                        echo '<input type="email" required class="form-control m-1" id="Email" name="Email"><br>'
                    ?>
                    <label class="mr-2" for="inputName">Enter Password</label>
                    <?php
                        if(isset($_COOKIE["ADMIN_PASSWORD"]))
                        {   
                            $PASSWORD = $_COOKIE["ADMIN_PASSWORD"];
                            echo ' <input type="password" required class="form-control m-1" name="Password" value="'.$PASSWORD.'" id="Password"><br>';
                        }
                        else
                        echo '<input type="password" required class="form-control m-1" name="Password" id="Password"><br>'
                    ?>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input class="form-check-input" name="RememberMe" id="RememberMe" type="checkbox" checked="checked"> Remember me
                      </label>
                    </div>
                    <button type="button" id="Login" class="btn btn-warning btn-md mt-2 ">
                        Login
                    </button>
                </div>
            </form>
        </div>

    </div>

    <script src="jquery/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="lib/jquery/dist/jquery.min.js "></script>
    <script src="lib/bootstrap/dist/js/bootstrap.bundle.min.js "></script>
    <script>
       /* $("#Email").keydown(function() {
            if ($(this).val().length == 0) {
                $('#Email').removeClass("is-valid");
                $('#Email').addClass("is-invalid");
            } else {
                $('#Email').removeClass("is-invalid");
                $('#Email').addClass("is-valid");
            }
        });

        $("#Password").keydown(function() {
            if ($(this).val().length == 0) {
                $('#Password').removeClass("is-valid");
                $('#Password').addClass("is-invalid");
            } else {
                $('#Password').removeClass("is-invalid");
                $('#Password').addClass("is-valid");
            }
        });*/

        $("#Login").click(function() {
            var Email = $('#Email').val();
            var Password = $('#Password').val();
            var RememberMe;
            if ($('#RememberMe').is(":checked")) {
                RememberMe = 1;
            } else {
                RememberMe = 0;
            }
            $.ajax({
                url: "Login.php", //the page containing php script
                type: "post", //request type,
                dataType: 'json',
                data: {
                    email: Email,
                    password: Password,
                    rememberMe: RememberMe
                },
                success: function(result) {
                    if (result.Match == 'Fail') {
                        Swal.fire({
                            icon: 'error',
                            text: 'Username or Password Incorrect!',
                            width: '22rem',
                            padding: '0.5rem'
                        })
                    } else {
                        window.location.href = "Dashboard.php";
                    }
                }
            });
        });
    </script>

</body>

</html>