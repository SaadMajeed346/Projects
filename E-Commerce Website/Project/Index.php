<?php
 session_start();
$connection =  new mysqli("localhost","root","","codester");
if($connection->connect_error)
    die("Connection Failed" . $connection->connect_error);
?>
<!DOCTYPE html>
<html>

<head>
    <title>Codester | Home</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <link rel="icon" type="image/png" sizes="16x16" href="Images/Logo1.png">

    <link rel="icon" type="image/png" sizes="16x16" href="/Images/logo.png">
    <link href="lib/StyleCss.css" rel="stylesheet">
    <link href="lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="lib/bootstrap/dist/css/bootstrap-grid.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

</head>

<body>
    <nav class="sticky-top navbar navbar-expand-sm navbar-light NavBarColor">
        <div class="col-lg-8 col-md-auto p-0">
            <a class="navbar-brand" href="#"><img alt="LOGO" height="45px" src="images/logo.png"></a>
            <button class="navbar-toggler d-lg-none pull-right mt-2" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
            </button>
        </div>

      
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 font-weight-bolder">
                <li class="nav-item active">
                    <a class="nav-link" href="Index.php"><span class="fa fa-home"> </span> HOME </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fa fa-book"> </span> COURSES</a>
                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                        <?php
                                $query= "SELECT* FROM course";
                                $Result = $connection->query($query);
                                while($Course= $Result->fetch_assoc())
                                {
                                    echo '<a class="dropdown-item" href="CourseDetail.php?id='.$Course["COURSE_ID"].'">'.$Course["TITLE"].'</a>';
                                }
                        ?>
                    </div>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="Schedule.php"><span class="fa fa-calendar"> </span> SCHEDULE</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="#About"><span class="fa fa-institution"> </span> ABOUT US</a>
                </li>

            </ul>
        </div>
    </nav>
    <div id="carouselId" class="carousel slide carousel-fade d-none d-sm-block " data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselId" data-slide-to="0" class="active"></li>
            <li data-target="#carouselId" data-slide-to="1"></li>
            <li data-target="#carouselId" data-slide-to="2"></li>

        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img src="Images/Banner1.jpg" width="100%" height="560px" alt="First slide">
            </div>
            <div class="carousel-item">
                <img src="Images/Banner2.jpg" width="100%" height="560px" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img src="Images/Banner3.jpg" width="100%" height="560px" alt="Third slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <div class="text-center m-auto bg-white  p-2 my-2 mt-5">
        <h1 class="font-weight-bolder" style="font-size:30px; border-radius: 10px;">
            { codester_courses }
        </h1>
    </div>


    <div class="container-fluid">
        <div class="row">
                        <?php
                                $query= "SELECT* FROM course";
                                $Result = $connection->query($query);
                                while($Course= $Result->fetch_assoc())
                                {
                                    echo '<div class="col-lg-4 col-md-4 col-sm-12 my-3 ">
                                    <div class="card m-auto shadow overflow-hidden" style="height: 360px;">
                                        <img class="card-img-top" src="CourseImages/'. $Course["IMAGE"] .'" alt="Card image" style="width:100%; height: 191.36px;">
                                        <div class="card-body">
                                            <h4 class="card-title">'. $Course["TITLE"] .'</h4>
                                            <p class="card-text"> '. $Course["DESCRIPTION"] .'  </p>
                                        </div>
                                        <a class="ViewMore p-2" href="CourseDetail.php?id='.$Course["COURSE_ID"].'">
                                            VIEW MORE
                                        </a>
                                    </div>
                                    </div>';
                                }
                        ?>
        </div>
    </div>



    <div id="About" class="container-fluid" style="background-color: #3d464d; color: white;">
        <div class="row p-0 m-0" style=" margin-left: 0px;">
            <div class="col-lg-4 col-md-4 col-sm-12" style="padding: 20px;">
                <div class="d-flex">
                    <i class="fa fa-institution" style="font-size: 50px;"></i>
                    <span class="m-2" style=" font-family:Arial, Helvetica, sans-serif; font-size: 30px; margin-left: 20px;">BRANCHES</span>
                </div>
                <p style="padding-left:70px">
                    Lahore Branch
                </p>
                <p style="margin-top: 10px; padding-left:70px; color: #c56034; ">
                    <span class="fa fa-location-arrow"></span> Gulberg III, Lahore
                </p>
                <p style="margin-top: 10px; padding-left:70px; color: #c56034; ">
                    <span class="fa fa-phone"></span> 0300 8 386 388
                </p>

                <p style="padding-left:70px">
                    Karachi Branch
                </p>
                <p style="margin-top: 10px; padding-left:70px; color: #c56034; ">
                    <span class="fa fa-location-arrow"></span> Satellite Town, Karachi
                </p>
                <p style="margin-top: 10px; padding-left:70px; color: #c56034; ">
                    <span class="fa fa-phone"></span> 0300 5 337 347
                </p>

            </div>
            <div class="col-lg-4 col-md-4 col-sm-12" style="padding: 20px;">
                <div class="d-flex">
                    <i class="fa fa-book" style="font-size: 50px;"></i>
                    <span class="m-2" style=" font-family:Arial, Helvetica, sans-serif; font-size: 30px;">COURSES</span>
                </div>

                <?php
                    $query= "SELECT* FROM course";
                    $Result = $connection->query($query);
                    while($Course= $Result->fetch_assoc())
                    {
                        echo '<p style="margin-top: 10px; padding-left:57px;">
                                <a class=" text-white" href="CourseDetail.php?id='.$Course["COURSE_ID"].'">'.$Course["TITLE"].'</a>
                              </p>';
                    }
                ?>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12" style="padding: 20px;">
                <div class="d-flex">
                    <i class="fa fa-certificate" style="font-size: 50px;"></i>
                    <span class="m-2" style=" font-family:Arial, Helvetica, sans-serif; font-size: 30px;">CODESTER</span>
                </div>
                <div style="padding-left:57px;">
                    <p>
                        CODESTER is one of the best IT Training Institutes in Pakistan. It has been providing quality IT education since 2020. 100+ batches of professional IT courses have been completed at CODESTER Institutes in Lahore. 400+ students have taken professional
                        IT courses from CODESTER. Most of these students are working in leading public & private sector organizations of Pakistan.
                    </p>
                </div>
            </div>

        </div>
    </div>
    <footer>
        <div class="container-fluid " style="background-color: #262d33; color: white; ">
            <div class="row ">
                <div class="col-lg-6 col-md-6 col-sm-12 p-2 d-none d-sm-block ">
                    <div class="m-2 ">
                        <span>Copyright © CODESTER. All rights Reserved.</span>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 p-2 ">
                    <a style="text-decoration: none; " class="pull-right text-white m-2 " href="AdminLogin.php">ADMIN LOGIN</a>
                    <a style="text-decoration: none; " class="pull-right text-white m-2 " href="# ">TOP &nbsp;&nbsp; |</a>
                </div>
            </div>

        </div>
    </footer>



    <!-- Modal -->
    <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h5 class="modal-title"><span class="fa fa-book"></span> Apply Online</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                       </button>
                </div>
                <form>
                    <div class="modal-body">
                        <label for="Name">Full Name</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><span class="fa fa-user"></span></div>
                            </div>
                            <input type="text" required class="form-control" id="Name" name="Name" aria-describedby="Name" placeholder="Enter Full Name">
                        </div>

                        <label for="Email">Email Address</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><span class="fa fa-envelope"></span></div>
                            </div>
                            <input type="email" required class="form-control" id="Email" name="Email" placeholder="Enter Email (e.g: abc@example.com)">
                        </div>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

                        <label for="PhoneNo">Phone No</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><span class="fa fa-phone"></span></div>
                            </div>
                            <input type="text" required class="form-control" id="PhoneNo" name="PhoneNo" placeholder="Enter Phone# XXXX-XXXXXXX">
                        </div>
                        <div class="form-group">
                            <label for="Courses">Select Course</label>
                            <select class="form-control text-sm-center" name="Courses" id="Courses">
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
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="submit" id="ApplyNow" class="btn btn-warning">Apply Now</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <a href="#" data-toggle="modal" data-target="#modelId" class="OnlineApply">
        <img class="Apply" src="Images/apply.png" height="80px" width="80px">
    </a>
    <script src="jquery/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="lib/jquery/dist/jquery.min.js "></script>
    <script src="lib/bootstrap/dist/js/bootstrap.bundle.min.js "></script>
</body>

<script>
    $("#ApplyNow").click(function(a) {
            a.preventDefault();
            
            if(document.getElementById('Name').value=="")
            {
                Swal.fire({
                            icon: 'warning',
                            text: 'Please Enter Name',
                            width: '22rem',
                            padding: '0.5rem'
                        }) 
                        $('#Name').addClass("is-invalid");
                    document.getElementById('Name').focus();
                return;
            }
            else if(document.getElementById('Name').value!="")
            {
                var na= /[A-Za-z]/;
                if(document.getElementById("Name").value.search(na) == -1)
                {
                    Swal.fire({
                            icon: 'warning',
                            text: 'Please Enter Valid Name',
                            width: '22rem',
                            padding: '0.5rem'
                        }) 
                        $('#Name').addClass("is-invalid");
                        document.getElementById('Name').focus();
                    return;
                }
            }
            $('#Name').removeClass("is-invalid");
            $('#Name').addClass("is-valid");
            

            if(document.getElementById('Email').value=="")
            {
                Swal.fire({
                            icon: 'warning',
                            text: 'Please Enter Email',
                            width: '22rem',
                            padding: '0.5rem'
                        }) 
                        $('#Email').addClass("is-invalid");
                        document.getElementById('Email').focus();
                return;
            }
            else if(document.getElementById('Email').value!="")
            {
                var em = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if(document.getElementById("Email").value.search(em) == -1)
                {
                    Swal.fire({
                            icon: 'warning',
                            text: 'Please Enter Valid Email',
                            width: '22rem',
                            padding: '0.5rem'
                        }) 
                        $('#Email').addClass("is-invalid");
                        document.getElementById('Email').focus();
                    return;
                }
            }
            $('#Email').removeClass("is-invalid");
            $('#Email').addClass("is-valid");
   

            if(document.getElementById('PhoneNo').value=="")
            {
                Swal.fire({
                            icon: 'warning',
                            text: 'Please Enter Phone Number',
                            width: '22rem',
                            padding: '0.5rem'
                        }) 
                        $('#PhoneNo').addClass("is-invalid");
                        document.getElementById('PhoneNo').focus();
                return;
            }
            else if(document.getElementById('PhoneNo').value!="")
            {
                var fn= /^[0-9]{4}-[0-9]{7}$/;
                if(document.getElementById("PhoneNo").value.search(fn) == -1)
                {
                    Swal.fire({
                            icon: 'warning',
                            text: 'Please Enter Valid Phone Number',
                            width: '22rem',
                            padding: '0.5rem'
                        }) 
                        $('#PhoneNo').addClass("is-invalid");
                        document.getElementById('PhoneNo').focus();
                    return;
                }
            }
            $('#PhoneNo').removeClass("is-invalid");
            $('#PhoneNo').addClass("is-valid");

            var Name = $("#Name").val();
            var Email = $("#Email").val();
            var PhoneNo = $("#PhoneNo").val();
            var Courses = $("#Courses").find(":selected").val();
            $.ajax({
                url: "ApplyNow.php", //the page containing php script
                type: "post", //request type,
                dataType: 'json',
                data: {
                    name : Name,
                    email : Email,
                    phoneNo : PhoneNo,
                    courses : Courses
                },
                success: function(result) {
                    if(result.ANS == "Done")
                    {
                        Swal.fire({
                            icon: 'success',
                            text: 'Thanks for Applying! We will contact you soon.',
                            width: '22rem',
                            padding: '0.5rem'
                        }).then((result) => {                          
                            if (result.isConfirmed) {
                                $("#Name").val("");
                                $("#Email").val("");
                                $("#PhoneNo").val("");
                                $('#modelId').modal('hide');
                                $('#Name').removeClass("is-valid");
                                $('#Email').removeClass("is-valid");
                                $('#PhoneNo').removeClass("is-valid");
                            } 
                        }) 

                    }
                        
                   
                }
            }); 
        });
</script>

</html>