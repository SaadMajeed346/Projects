<?php
$connection =  new mysqli("localhost","root","","codester");
if($connection->connect_error)
    die("Connection Failed" . $connection->connect_error);
?>
<!DOCTYPE html>
<html>

<head>
    <title>Course Schedule</title>
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
                <li class="nav-item ">
                    <a class="nav-link" href="Index.php"><span class="fa fa-home"> </span> HOME </a>
                </li>
                <li class="nav-item dropdown ">
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
                <li class="nav-item active">
                    <a class="nav-link" href="Schedule.php"><span class="fa fa-calendar"> </span> SCHEDULE</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="#About"><span class="fa fa-institution"> </span> ABOUT US</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="col px-0 mx-0 mb-3">
        <div class="Banner">
            <div class="container-fluid">
                <h3 class="font-weight-bold text-center">
                    Courses Schedules
                </h3>
            </div>
        </div>
    </div>

    <div class="container-fluid bodyContent mb-3">
        <div class="col-lg-12 col-md-12 col-sm-12 mb-3">
            <div class="row">
                <?php
                     $query= "SELECT* FROM schedule s join course c on s.C_ID = c.COURSE_ID";
                     $Result = $connection->query($query);
                     while($Schedule= $Result->fetch_assoc())
                     {
                echo' <div class="col-lg-4">
                         <div class="scheduleCard">
                             <div class="row">
                                 <section class="col-lg-12">
                                     <img class="card-img-top" src="CourseImages/'. $Schedule['IMAGE'] .'" alt="Card image" style="width:100%; height: 191.36px;">
                                     <div class="schedule-heading-container">
                                         <h3 class="Line-Alignment" style="font-size: 19px;color:white">
                                             '. $Schedule['TITLE'] .' By { Codester } ONLINE
                                         </h3>
                                     </div>
                                 </section>
                                 <section class="col-lg-12 col-sm-12 ">
                                     <div class="col-lg-12" style="padding: 15px;">
                                         <h5 class="schedule-class-heading">
                                             <strong>
                                             <i class="fa fa-calendar"></i>
                                             &nbsp;&nbsp; Seminar on '. date('F j, Y, g:i a', strtotime($Schedule['SEMINAR_DATE'])) .'
                                             </strong>
                                         </h5>
                                         <h5 class="schedule-class-heading">
                                             <span>
                                             <i class="fa fa-calendar-check-o"></i>
                                             &nbsp;&nbsp; Classes start from 
                                         </span> '. date('M j, Y', strtotime($Schedule['START_FROM_DATE'])) .'
                                         </h5>
                                         <ul style="padding-left: 0px;">';
                                         $myArray = explode(',', $Schedule["TIMINGS"]);
                                         foreach($myArray as $Single){
                                             echo '<li>';
                                                         $timing = explode(';', $Single);
                                                         echo '<div style="float:left;width:121px;">'.$timing[0].' <span class="pull-right" style="margin:0 10px 0 0;"> : </span></div>
                                                               <div style="float:left">'.$timing[1].'</div>
                                                               <div class="clearfix"></div>';                                            
                                                     echo '</li>';}
                                         echo '</ul>
                                     </div>
                                 </section>
                             </div>
                         </div>
                     </div>';
                     }
                ?>
            </div>
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
        <div class="container-fluid" style="background-color: #262d33; color: white; ">
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

    <script src="jquery/dist/jquery.min.js"></script>
    <script src="lib/jquery/dist/jquery.min.js "></script>
    <script src="lib/bootstrap/dist/js/bootstrap.bundle.min.js "></script>
</body>

</html>