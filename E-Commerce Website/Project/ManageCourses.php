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
                    <li class="nav-item active">
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
                    <a href="#" data-toggle="modal" data-target="#modelId" class="btn btn-warning btn-round">Add New Course <span class="pl-1 fa fa-plus"></span></a>
                </div>

                <div class="container-fluid">
                    <div class="col-lg-12 col-md-12">
                        <div class="card">
                            <div class="card-header card-header-danger">
                                <h4 class="card-title">Courses Detail</h4>                                
                            </div>
                            <div class="card-body table-responsive">
                                <table class="table table-hover">
                                    <thead class="text-warning">
                                        <th>IMAGE</th>
                                        <th>TITLE</th>
                                        <th>DURATION</th>
                                        <th>FEES</th>
                                        <th>ACTION</th>
                                    </thead>
                                    <tbody>

                                    <?php
                                            $connection =  new mysqli("localhost","root","","codester");
                                            if($connection->connect_error)
                                                die("Connection Failed" . $connection->connect_error);
                                                $query= "SELECT* FROM course";
                                                $Result = $connection->query($query);

                                                while($Course= $Result->fetch_assoc())
                                                {
                                                    echo '<tr>';                                
                                                    echo '<td><img src="CourseImages/'. $Course["IMAGE"] .'" class="rounded-circle" height="40" width="40"></td>';
                                                    echo '<td>'.$Course["TITLE"].'</td>';
                                                    echo '<td>'.$Course["DURATION"].'</td>';
                                                    echo '<td>'.$Course["FEES"].'</td>';
                                                    echo ' <td class="td-actions">';
                                                    echo '<a href="'.$Course["COURSE_ID"].'" class="editCourse btn btn-primary btn-link btn-sm">';
                                                    echo ' <i class="material-icons">edit</i>
                                                          </a>
                                                            <a href="'.$Course["COURSE_ID"].'" class="deleteCourse btn btn-danger btn-link btn-sm">
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
                            <h5 class="modal-title"><span class="fa fa-book"></span> Course Detail</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form action="AddCourse.php" class="was-validated" method="POST" id="AddAdmin" enctype="multipart/form-data">
                            <div class="modal-body">

                                <label for="Name">Course Image</label>
                                <input type="file" required id="Image" class="form-control" name="Image" accept='image/*' placeholder="Select Image" required><br><br>


                                <label for="Name">Course Title</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="text" required class="form-control" id="Title" name="Title" placeholder="Enter Title" required>
                                </div>

                                <label for="Name">Course Fees</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="text" required class="form-control" id="Fees" name="Fees" placeholder="Enter Fees" required>
                                </div>

                                <label for="Email">Course Discription</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <textarea class="form-control" id="Discription" name="Discription" placeholder="Enter Discription" required></textarea>
                                </div>

                                <label for="Email">Course Content</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <textarea class="form-control" id="Content" name="Content" placeholder="Enter Content" required></textarea>
                                </div>

                                <label for="Email">Course Duration</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="text" required class="form-control" id="Duration" name="Duration" placeholder="Enter Duration">
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-warning">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="model" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-warning">
                            <h5 class="modal-title"><span class="fa fa-book"></span>Edit Course Detail</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form  class="was-validated" id="AddAdmin" enctype="multipart/form-data">
                            <div class="modal-body">


                                <label for="Name">Course Title</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="text" required class="form-control" id="_Title" name="Title" placeholder="Enter Title">
                                    <input type="hidden" required class="form-control" id="_CID" name="CID">

                                </div>

                                <label for="Name">Course Fees</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="text" required class="form-control" id="_Fees" name="Fees" placeholder="Enter Fees">
                                </div>

                                <label for="Email">Course Discription</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <textarea class="form-control" id="_Discription" name="Discription" placeholder="Enter Discription" required></textarea>
                                </div>

                                <label for="Email">Course Content</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <textarea class="form-control" id="_Content" name="Content" placeholder="Enter Content" required></textarea>
                                </div>

                                <label for="Email">Course Duration</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="text" required class="form-control" id="_Duration" name="Duration" placeholder="Enter Duration">
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
nav
<script>

     $(".editCourse").click(function(a) {
            a.preventDefault();
            var href = $(this).attr('href');
            $.ajax({
                url: "GetCourse.php", //the page containing php script
                type: "get", //request type,
                dataType: 'json',
                data: {
                    Id : href
                },
                success: function(result) {
                    $("#_CID").val(result.Id);
                    $("#_Title").val(result.Title);
                    $("#_Fees").val(result.Fees);
                    $("#_Discription").val(result.Discription);
                    $("#_Content").val(result.Content);
                    $("#_Duration").val(result.Duration);
                }
            }); 
            $('#model').modal('show');
            
        });

        $(".deleteCourse").click(function(a) {
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
                                         url: "DeleteCourse.php", //the page containing php script
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
            var Id = $("#_CID").val();
            var Title = $("#_Title").val();
            var Fees = $("#_Fees").val();
            var Discription = $("#_Discription").val();
            var Content = $("#_Content").val();
            var Duration = $("#_Duration").val();
            if(Title==""){
                document.getElementById("_Title").focus();
                return;
            }
            else if(Fees==""){
                document.getElementById("_Fees").focus();
                return;
            }
            else if(Discription==""){
                document.getElementById("_Discription").focus();
                return;
            }
            else if(Content==""){
                document.getElementById("_Content").focus();
                return;
            }
            else if(Duration==""){
                document.getElementById("_Duration").focus();
                return;
            }
            $.ajax({
                url: "UpdateCourse.php", //the page containing php script
                type: "post", //request type,
                dataType: 'json',
                data: {
                    id : Id,
                    title : Title,
                    fees : Fees,
                    discription : Discription,
                    content : Content,
                    duration : Duration
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