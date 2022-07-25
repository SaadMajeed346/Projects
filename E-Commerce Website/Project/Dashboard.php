<?php
 session_start();
if(!isset($_SESSION['Name']))
echo header("location:AdminLogin.php");
?>
<!DOCTYPE html>
<html>

<head>
    <title>Dashboard</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!--     Fonts and icons     -->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
    <!-- Material Kit CSS -->
    <link href="lib/bootstrap/css/material-dashboard.css" rel="stylesheet" />

    <link rel="icon" type="image/png" sizes="16x16" href="Images/Logo1.png">
    <link href="lib/StyleCss.css" rel="stylesheet">
    <link href="lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="lib/bootstrap/dist/css/bootstrap-grid.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

</head>

<body>
    <div class="wrapper ">
        <div class="sidebar" data-color="purple" data-background-color="white">
            <div class="logo">
                <a class="navbar-brand pl-3" href="#"><img alt="LOGO" height="45px" src="images/logo.png"></a>
            </div>
            <div class="sidebar-wrapper">
                <ul class="nav">
                    <li class="nav-item active  ">
                        <a class="nav-link" href="Dashboard.php">
                            <i class="material-icons">content_paste</i>
                            <p>Apply Online</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="ManageCourses.php">
                            <i class="material-icons">book</i>
                            <p>Manage Courses</p>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="ManageSchedules.php">
                            <i class="material-icons">event</i>
                            <p>Manage Schedule</p>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="ManageAdmin.php">
                            <i class="material-icons">person</i>
                            <p>Manage Admin</p>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="Index.php">
                            <i class="material-icons">home</i>
                            <p>Go Home</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="main-panel">
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <a class="navbar-brand" href="#">Dashboard</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="navbar-toggler-icon icon-bar"></span>
                        <span class="navbar-toggler-icon icon-bar"></span>
                        <span class="navbar-toggler-icon icon-bar"></span>
                      </button>
                    <div class="collapse navbar-collapse justify-content-end">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:;">
                                    <?php
                                    echo $_SESSION['Name'];
                                    ?>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownProfile" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <?php
                                        if($_SESSION['IMAGE'] == "")
                                            echo '<img src="Images/Admin.png" class="rounded-circle" height="40" width="40">';
                                        else
                                        echo '<img src="AdminImages/'. $_SESSION['IMAGE'] .'" class="rounded-circle" height="40" width="40">';
                                    ?>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                                    <a class="dropdown-item" href="Logout.php">Log out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- End Navbar -->
            <div class="content pt-1">
                <hr>
                <div class="container-fluid">
                    <div class="row">
                    <?php
                                            $connection =  new mysqli("localhost","root","","codester");
                                            if($connection->connect_error)
                                                die("Connection Failed" . $connection->connect_error);
                                                $query= "SELECT* FROM registrationform r join course c on r.C_ID = c.COURSE_ID  where ACTION = 0";
                                                $Result = $connection->query($query);

                                                while($Form= $Result->fetch_assoc())
                                                {
                                                   echo ' <div class="col-lg-3 col-md-6 col-sm-6">
                                                   <div class="card card-stats">
                                                       <div class="card-header card-header-danger card-header-icon">
                                                           <div class="card-icon">
                                                               <i class="material-icons">info_outline</i>
                                                           </div>
                                                           <p class="card-category">Online Admission</p>
                                                       </div>
                                                       <div class="card-footer">
                       
                                                           <div class="col-lg-12 p-0 m-0">
                                                               <div class="p-0 m-0">
                                                                   <div class="stats" style="display: block;">
                                                                       <i class="material-icons">person</i> '. $Form["NAME"] .'
                                                                   </div>
                                                                   <div class="stats" style="display: block;">
                                                                       <i class="material-icons">phone</i>'. $Form["PHONE_NUMBER"] .'
                                                                   </div>
                                                                   <div class="stats" style="display: block;">
                                                                       <i class="material-icons">email</i> '. $Form["EMAIL"] .'
                                                                   </div>
                                                                   <div class="stats" style="display: block;">
                                                                       <i class="material-icons">done</i> '. $Form["TITLE"] .'
                                                                   </div>
                                                                   <div class="col-lg-12">
                                                                       <div class=" text-center">
                                                                           <a class="btn btn-danger btn-round" href="RemoveForm.php?id='. $Form["REGIST_ID"] .'">Remove</a>
                                                                       </div>
                       
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>' ;
                                                }
                        ?>
                    </div>

                </div>
            </div>
            <footer class="footer">
                <div class="container-fluid">
                    <nav class="float-left">
                        <ul>
                            <li>
                                <a href="#">CODESTER</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="copyright float-right">
                        &copy;
                        <script>
                            document.write(new Date().getFullYear())
                        </script>, All Copyrights Reserved.
                    </div>
                    <!-- your footer here -->
                </div>
            </footer>
        </div>
    </div>
</body>

<script src="jquery/dist/jquery.min.js"></script>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" crossorigin="anonymous"></script> !-->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script src="lib/jquery/dist/jquery.min.js "></script>
<script src="lib/bootstrap/dist/js/bootstrap.bundle.min.js "></script>
<script src="jquery/bootstrap-material-design.min.js" type="text/javascript"></script>
<script src="jquery/perfect-scrollbar.jquery.min.js" type="text/javascript"></script>
<script src="jquery/material-dashboard.js?v=2.1.2" type="text/javascript"></script>

<script>
    $(function() {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-start',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Welcome To Dashboard...'
        })
    });
</script>

</html>