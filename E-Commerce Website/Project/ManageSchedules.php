<?php
 session_start();
if(!isset($_SESSION['Name']))
echo header("location:AdminLogin.php");
$connection =  new mysqli("localhost","root","","codester");
if($connection->connect_error)
    die("Connection Failed" . $connection->connect_error);
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

                    <li class="nav-item active">
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
                    <a href="#" data-toggle="modal" data-target="#AddSchedule" class="btn btn-success btn-round">Add Course's Schedule <span class="pl-1 fa fa-plus"></span></a>
                </div>

                <div class="container-fluid">
                    <div class="col-lg-12 col-md-12">
                        <div class="card">
                            <div class="card-header card-header-warning">
                                <h4 class="card-title">Course Schedules</h4>                                
                            </div>
                            <div class="card-body table-responsive">
                                <table class="table table-hover">
                                    <thead class="text-warning">
                                        <th>Image</th>
                                        <th>Coure Name</th>
                                        <th>Seminar Time</th>
                                        <th>Start Date</th>
                                        <th>ACTION</th>
                                    </thead>
                                    <tbody>

                                    <?php
                                            $connection =  new mysqli("localhost","root","","codester");
                                            if($connection->connect_error)
                                                die("Connection Failed" . $connection->connect_error);
                                                $query= "SELECT* FROM schedule s join course c on s.C_ID = c.COURSE_ID";
                                                $Result = $connection->query($query);

                                                while($Schedule= $Result->fetch_assoc())
                                                {
                                                    echo '<tr>';                                
                                                    echo '<td><img src="CourseImages/'. $Schedule["IMAGE"] .'" class="rounded-circle" height="40" width="40"></td>';
                                                    echo '<td>'.$Schedule["TITLE"].'</td>';
                                                    echo '<td>'. date('m/d/Y h:i A ', strtotime($Schedule["SEMINAR_DATE"])).'</td>';
                                                    echo '<td>'.date('m/d/Y h:i A ', strtotime($Schedule["START_FROM_DATE"])).'</td>';
                                                    echo ' <td class="td-actions">';
                                                    echo '<a href="'.$Schedule["SCHEDULE_ID"].'" class="editSchedule btn btn-primary btn-link btn-sm">';
                                                    echo ' <i class="material-icons">edit</i>
                                                          </a>
                                                            <a href="'.$Schedule["SCHEDULE_ID"].'" class="deleteSchedule btn btn-danger btn-link btn-sm">
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

            <div class="modal fade" id="AddSchedule" tabindex="-1" role="dialog" aria-labelledby="ModalForAddSchedule" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-warning">
                            <h5 class="modal-title"><span class="fa fa-book"></span> Course Detail</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form class="was-validated" action="AddSchedule.php" method="POST" enctype="multipart/form-data">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="Courses">Select Course</label>
                                    <select required class="form-control text-sm-center" name="Courses" id="Courses">
                                        <?php
                                            $query= "SELECT* FROM course";
                                            $Result = $connection->query($query);
                                            while($Course= $Result->fetch_assoc())
                                            {
                                                echo '<option value="'.$Course["COURSE_ID"].'">'.$Course["TITLE"].'</option>';
                                            }
                                        ?>
                                    </select>
                                </div>
                                                
                                <label for="SeminarDate">Seminar Date</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="datetime-local" required class="form-control" id="SeminarDate" name="SeminarDate" placeholder="Select Date">
                                </div>

                                <label for="StartingDate">Starting Date</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="datetime-local" required class="form-control" id="StartingDate" name="StartingDate" placeholder="Select Date">
                                </div>

                                <label for="Timing">Course Timing</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <textarea required class="form-control" id="Timing" name="Timing" placeholder="Enter Timings" required></textarea>
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="submit" id="Add_Schedule" class="btn btn-warning">Save Changes</button>
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
                        <form class="was-validated" action="AddCourse.php" method="POST" id="AddAdmin" enctype="multipart/form-data">
                        <div class="modal-body">
                                <div class="form-group">
                                    <label for="Courses">Select Course</label>
                                    <select required class="form-control text-sm-center" name="Courses" id="_CID">
                                        <?php
                                            $query= "SELECT* FROM course";
                                            $Result = $connection->query($query);
                                            while($Course= $Result->fetch_assoc())
                                            {
                                                echo '<option value="'.$Course["COURSE_ID"].'">'.$Course["TITLE"].'</option>';
                                            }
                                        ?>
                                    </select>
                                </div>
                                                
                                <label for="SeminarDate">Seminar Date</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="hidden" required class="form-control" id="Sid" name="id" placeholder="Select Date">
                                    <input type="datetime-local" required class="form-control" id="_SeminarDate" name="_SeminarDate" placeholder="Select Date">
                                </div>

                                <label for="StartingDate">Starting Date</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <input type="datetime-local" required class="form-control" id="_StartingDate" name="_StartingDate" placeholder="Select Date">
                                </div>

                                <label for="Timing">Course Timing</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <textarea required class="form-control" id="_Timing" name="_Timing" placeholder="Enter Timings"></textarea>
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
     $(".editSchedule").click(function(a) {
            a.preventDefault();
            var href = $(this).attr('href');
            $.ajax({
                url: "GetSchedule.php", //the page containing php script
                type: "get", //request type,
                dataType: 'json',
                data: {
                    Id : href
                },
                success: function(result) {
                    $("#_CID").val(result.CId);
                    $("#Sid").val(result.Id);
                    $("#_SeminarDate").val(new Date(result.SemDate.split('GMT')[0]+' UTC').toISOString().split('.')[0]);
                    $("#_StartingDate").val(new Date(result.StartDate.split('GMT')[0]+' UTC').toISOString().split('.')[0]);
                    $("#_Timing").val(result.Timing);
                }
            }); 
            $('#model').modal('show');
            
        });

        $(".deleteSchedule").click(function(a) {
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
                                         url: "DeleteSchedule.php", //the page containing php script
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
            var CId = $("#_CID").val();
            var SId = $("#Sid").val();
            var SemDate = $("#_SeminarDate").val();
            var StartDate = $("#_StartingDate").val();
            var Timing = $("#_Timing").val();

            
            if(SId==""){
                document.getElementById("Sid").focus();
                return;
            }
            else if(SemDate==""){
                document.getElementById("_SeminarDate").focus();
                return;
            }
            else if(StartDate==""){
                document.getElementById("_StartingDate").focus();
                return;
            }
            else if(Timing==""){
                document.getElementById("_Timing").focus();
                return;
            }

            $.ajax({
                url: "UpdateSchedule.php", //the page containing php script
                type: "post", //request type,
                dataType: 'json',
                data: {
                    cId : CId,
                    sId : SId,
                    semDate : SemDate,
                    startDate : StartDate,
                    timing : Timing
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

        $("#Add_Schedule").click(function(a) {
            a.preventDefault();
            var Courses = $("#Courses").val();
            var SeminarDate = $("#SeminarDate").val();
            var StartingDate = $("#StartingDate").val();
            var Timing = $("#Timing").val();

            if(Courses==""){
                document.getElementById("Courses").focus();
                return;
            }
            else if(SeminarDate==""){
                document.getElementById("SeminarDate").focus();
                return;
            }
            else if(StartingDate==""){
                document.getElementById("StartingDate").focus();
                return;
            }
            else if(Timing==""){
                document.getElementById("Timing").focus();
                return;
            }

            $.ajax({
                url: "AddSchedule.php", //the page containing php script
                type: "post", //request type,
                dataType: 'json',
                data: {
                    courses : Courses,
                    seminarDate : SeminarDate,
                    startingDate : StartingDate,
                    timing : Timing
                },
                success: function(result) {
                    if(result.ANS == "Done")
                    {
                        Swal.fire({
                            icon: 'success',
                            text: 'Added Successfully!',
                            width: '22rem',
                            padding: '0.5rem'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.reload();
                            } 
                        }) 
                    }
                    else
                    {
                        Swal.fire({
                            icon: 'error',
                            text: 'Something Went Wrong. Try Again!',
                            width: '22rem',
                            padding: '0.5rem'
                        })
                    }
                        
                   
                }
            }); 
        });

</script>


</html>