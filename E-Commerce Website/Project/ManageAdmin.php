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
                    <li class="nav-item   ">
                        <a class="nav-link" href="Dashboard.php">
                            <i class="material-icons">content_paste</i>
                            <p>Apply Online</p>
                        </a>
                    </li>
                    <li class="nav-item ">
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

                    <li class="nav-item active">
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
                    <!-- your sidebar here -->
                </ul>
            </div>
        </div>
        <div class="main-panel">
            <!-- Navbar -->
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
                <div class="pull-center">
                    <a href="#" data-toggle="modal" data-target="#modelId" class="btn btn-warning btn-round">Add New Admin <span class="pl-1 fa fa-plus"></span></a>
                </div>

                <div class="container-fluid">
                    <div class="col-lg-12 col-md-12">
                        <div class="card">
                            <div class="card-header card-header-warning row">
                                <i class="material-icons">person</i>
                                <h4 class="card-title"> Employees Details </h4>
                            </div>
                            <div class="card-body table-responsive">
                                <table class="table table-hover">
                                    <thead class="text-warning">
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>ACTION</th>
                                    </thead>
                                    <tbody>
                                        <?php
                                            $connection =  new mysqli("localhost","root","","codester");
                                            if($connection->connect_error)
                                                die("Connection Failed" . $connection->connect_error);
                                                $query= "SELECT* FROM admin";
                                                $Result = $connection->query($query);

                                                while($Admin= $Result->fetch_assoc())
                                                {
                                                    echo '<tr>';
                                                    if($Admin["IMAGE"] == "")
                                                        echo '<td><img src="Images/Admin.png" class="rounded-circle" height="40" width="40"></td>';
                                                    else
                                                    echo '<td><img src="AdminImages/'. $Admin["IMAGE"] .'" class="rounded-circle" height="40" width="40"></td>';
                                                    echo '<td>'.$Admin["NAME"].'</td>';
                                                    echo '<td>'.$Admin["EMAIL"].'</td>';
                                                    echo ' <td class="td-actions">';
                                                    echo '<a href="'.$Admin["ADMIN_ID"].'" class="editAdmin btn btn-primary btn-link btn-sm">';
                                                    echo ' <i class="material-icons">edit</i>
                                                          </a>
                                                            <a href="'.$Admin["ADMIN_ID"].'" class="deleteAdmin btn btn-danger btn-link btn-sm">
                                                                <i class="material-icons">close</i>
                                                            </a>
                                                        </td>
                                                    </tr>';
                                                }
                                        ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
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

            <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-warning">
                            <h5 class="modal-title"><span class="fa fa-user"></span> Employee Detail</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form class="was-validated" action="AddAdmin.php" method="POST" id="AddAdmin" enctype="multipart/form-data">
                            <div class="modal-body">

                                <label for="Name">Profile Picture</label>
                                <input type="file" required class="form-control" id="Image" name="Image" accept='image/*' placeholder="Select Image"><br><br>


                                <label for="Name">Name</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="text" required class="form-control" id="name" name="Name" placeholder="Enter Name">
                                </div>

                                <label for="Name">Email</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="text" required class="form-control" id="Email" name="Email" placeholder="Enter Email (e.g: abc@example.com)">
                                </div>

                                <label for="Name">Password</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="password" required class="form-control" id="Password" name="Password" placeholder="Enter Password">
                                </div>
                               
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="submit" id="Add" class="btn btn-warning">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="model" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-warning">
                            <h5 class="modal-title"><span class="fa fa-user"></span> Employee Detail</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form class="was-validated" action="AddAdmin.php" method="POST" id="AddAdmin" enctype="multipart/form-data">
                            <div class="modal-body">
                                <label for="Name">Name</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="hidden" required class="form-control" id="Eid" name="Id">
                                    <input type="text" required class="form-control" id="Ename" name="Name" placeholder="Enter Name">
                                </div>

                                <label for="Name">Email</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="text" required class="form-control" id="Eemail" name="Email" placeholder="Enter Email (e.g: abc@example.com)">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="submit" id="SaveChanges" class="btn btn-warning">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
     $(".editAdmin").click(function(a) {
            a.preventDefault();

            var href = $(this).attr('href');
            $.ajax({
                url: "GetAdmin.php", //the page containing php script
                type: "get", //request type,
                dataType: 'json',
                data: {
                    Id : href
                },
                success: function(result) {
                    $("#Eid").val(result.Id);
                    $("#Ename").val(result.Name);
                    $("#Eemail").val(result.Email);
                }
            }); 
            $('#model').modal('show');
            
        });
        $(".deleteAdmin").click(function(a) {
            a.preventDefault();
            var href = $(this).attr('href');
             Swal.fire({
                            icon: 'warning',
                            text: 'Are You Sure To Delete?',
                            showCancelButton: true,
                            width: '22rem',
                            padding: '0.5rem'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                $.ajax({
                                         url: "DeleteAdmin.php", //the page containing php script
                                         type: "post", //request type,
                                         dataType: 'json',
                                         data: {
                                                    Id : href
                                                },
                                            success: function(p) {
                                                if(p.ANS == "Done")
                                                {
                                                    Swal.fire({
                                                        icon: 'success',
                                                        text: 'Delete Successfully!',
                                                        width: '22rem',
                                                        padding: '0.5rem'
                                                    }).then((result) => {
                                                        
                                                        if (result.isConfirmed) {
                                                            window.location.reload();
                                                        } 
                                                    }) 
                                                }
                        
                   
                                             }
                                }); 
                            } 
                        }) 
        });

        $("#SaveChanges").click(function(a) {
            a.preventDefault();
            if($("#Ename").val() == "")
            {
                Swal.fire({
                            icon: 'warning',
                            text: 'Please Enter Name',
                            width: '22rem',
                            padding: '0.5rem'
                        }) 
                        $('#Ename').addClass("is-invalid");
                        document.getElementById('Ename').focus();
                return;
            }
            else if($("#Ename").val() != "")
            {
                var na= /[A-Za-z]/;
                if(document.getElementById("Eemail").value.search(na) == -1)
                {
                    Swal.fire({
                            icon: 'warning',
                            text: 'Please Enter Valid Email',
                            width: '22rem',
                            padding: '0.5rem'
                        }) 
                        $('#Ename').addClass("is-invalid");
                        document.getElementById('Ename').focus();
                    return;
                }
            }
            $('#Ename').removeClass("is-invalid");
            $('#Ename').addClass("is-valid");

            if(document.getElementById('Eemail').value=="")
            {
                Swal.fire({
                            icon: 'warning',
                            text: 'Please Enter Email',
                            width: '22rem',
                            padding: '0.5rem'
                        })
                        $('#Eemail').addClass("is-invalid");
                        document.getElementById('Eemail').focus();
                return;
            }
            else if(document.getElementById('Eemail').value!="")
            {
                var em = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if(document.getElementById("Eemail").value.search(em) == -1)
                {
                    Swal.fire({
                            icon: 'warning',
                            text: 'Please Enter Valid Email',
                            width: '22rem',
                            padding: '0.5rem'
                        }) 
                        $('#Eemail').addClass("is-invalid");
                        document.getElementById('Eemail').focus();
                    return;
                }
            }
            $('#Eemail').removeClass("is-invalid");
            $('#Eemail').addClass("is-valid");
           
            
            var ID = $("#Eid").val();
            var NAME = $("#Ename").val();
            var EMAIL = $("#Eemail").val();
            $.ajax({
                url: "UpdateAdmin.php", //the page containing php script
                type: "post", //request type,
                dataType: 'json',
                data: {
                    Id : ID,
                    Name : NAME,
                    Email : EMAIL
                },
                success: function(result) {
                    if(result.ANS == "Done")
                    {
                        Swal.fire({
                            icon: 'success',
                            text: 'Updated Successfully!',
                            width: '22rem',
                            padding: '0.5rem'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.reload();
                            } 
                        }) 
                    }
                        
                   
                }
            }); 
        });


</script>

</html>