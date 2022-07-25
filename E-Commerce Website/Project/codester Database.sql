-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2021 at 06:39 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `codester`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ADMIN_ID` int(11) NOT NULL,
  `NAME` varchar(200) DEFAULT NULL,
  `IMAGE` varchar(200) DEFAULT NULL,
  `EMAIL` varchar(200) DEFAULT NULL,
  `PASSWORD` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ADMIN_ID`, `NAME`, `IMAGE`, `EMAIL`, `PASSWORD`) VALUES
(3, 'Afshal Athar', NULL, 'test', 'afshal123'),
(4, 'Afshal Athar', 'squarequick_2020122613145144.jpg', 'afshal@gmail.com', '123'),
(10, 'Saad Majeed', 'glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg', 'saad@gmail.com', '123'),
(12, 'Hamza Ghulam Rasool', 'hamza.jpeg', 'hamza@gmail.com', '03117040983'),
(13, 'Nouman', 'nouman.jpg', 'nouman.nadeem.zafar@gmail.com', '123');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `COURSE_ID` int(11) NOT NULL,
  `TITLE` varchar(500) DEFAULT NULL,
  `DESCRIPTION` varchar(1000) DEFAULT NULL,
  `CONTENT` varchar(1000) DEFAULT NULL,
  `DURATION` varchar(500) DEFAULT NULL,
  `IMAGE` varchar(500) DEFAULT NULL,
  `FEES` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`COURSE_ID`, `TITLE`, `DESCRIPTION`, `CONTENT`, `DURATION`, `IMAGE`, `FEES`) VALUES
(1, 'XAMARIN MOBILE APP DEVELOPMENT', 'This hands-on training covers mobile app development using C#, Xamarin and Visual Studio 2019. It includes Mobile UI Development using Xamarin Forms; Storing and accessing local data using SQLite; Storing and accessing server data using REST APIs, JSON and XML. The course also cover deployment of Xamarin Mobile Apps to Mobile devices.', 'Developing Xamarin Forms Mobile Apps using Visual Studio 2019, Setting Xamarin Mobile A', '2 Month (8 weeks; with 3 training sessions of 1.5 hours a week)', 'XAMARIN_DEVELOPMENT.jpg', 15000),
(4, 'Advance C Sharp Course', 'C# is a powerful backend coding language used for Microsoft web and desktop applications. C# is a C-style language, so you can take C# and learn other languages such as Java, C and C++. This course will get you started with C# and the language styles including object-oriented programming (OOP).', 'Overview of Writing Application by Using Visual C#,\r\nData Types, Operators, Expressions\r\nVisual C# Programming Language Constructs,\r\nLab : Implementing Edit Functionality for the Students,\r\nImplementing Insert Functionality for the Students List,\r\nImplementing Delete Functionality for the Students List,\r\nDisplaying a Student’s Age', '2 Month (8 weeks).', 'ADVANCE_CSharp.jpg', 19000),
(5, 'Android App Development', 'This extensive course is designed to provide good understanding of Android mobile app development using latest versions of Java SE, Android SDK, Android Studio and FireBase. Participants of the course will learn essentials of Java programming for Android, creating rich UI for Android app development, Storing and accessing data from internal or external storage of a mobile and to the cloud using RESTful services and usage of device resources such as camera & location sensor in Android apps. It also covers Publishing Android Mobile Apps to Google Play store.', 'Introduction to Java & Android Mobile App Development,\r\nFundamentals of Java Programming using Java 8,\r\nObject Oriented Programming using Java,\r\nExceptions & Collections & Generics,\r\nInstallation & Configuration of Android SDK & Android Studio,\r\nAndroid Mobile App Development Architecture & Application Life Cycle,\r\nAndroid Views, Layouts, Activities, Fragments, List View & View Pages,\r\nActivities, Intents, Services, Content Providers & Broadcast Receivers,\r\nAndroid Resources, Styles, Themes & Material Design,\r\nIntegrating Social Media in Mobile Apps for Android,\r\nDialogs, Toasts, Menus, Context Menus, Popup Menus & Web View,\r\nStore/Retrieve Data in/from Shared Preference & Files (Internal & SD Card)', '3 Month', 'ANDROID_DEVELOPMENT.jpg', 20000),
(6, 'ASP.NET Course', 'This extensive project driven course covers n-tier web application development using Microsoft .NET Framework / .NET Core, Visual Studio 2019 and SQL Server 2017. It includes object oriented programming using C#, web development using HTML5, CSS3 and Bootstrap 4; Interactive and rich UI development using JavaScript, jQuery and jQuery UI; Server side programming using ASP .NET Core MVC, Web API and C#; Database programming using ADO .NET Entity Framework, LINQ and SQL Server 2017.', 'Overview of Microsoft .NET Platform & .NET Core,\r\nFundamentals of VB .NET / C# Language,\r\nObject Oriented Class Libraries Development,\r\nGenerics , Exceptions, Events and Delegates,\r\nLambda expression, Collections & LINQ,\r\nDeveloping Web Applications using Visual Studio 2019,\r\nCreate web pages and HTML Forms using HTML5 & CSS3,\r\nStyling Text, Block Elements etc. using CSS3 Selectors,\r\nEnhancing Graphical Effects by Using CSS3,\r\nEssentials of JavaScript, jQuery, & JSON,\r\nProgramming the HTML DOM with JavaScript & jQuery,\r\nValidating User Input using HTML5 Attributes, JavaScript & jQuery,\r\nResponsive Web Development using Twitter Bootstrap 4', '4 Month (16 weeks; with 3 training sessions of 1.5 hours a week)', 'ASP.NET.jpg', 30000),
(7, 'Front End Development', 'In this project based course you will learn to develop interactive and responsive websites and front-end web development of a enterprise application. It includes HTML5 and CSS3 for creating beautiful web pages; JavaScript & jQuery for more interactive and rich Web UI; BootStrap for developing responsive and elegant websites; AJAX & JSON for consuming REST Services.', 'Introduction Web Development, HTML, HTML5 & IDEs,\nBasics of HTML & CSS and HTML Headings, Paragraphs & Images,\nHTML Text Formatting, Links, Entities and Inline vs Block Level Elements,\nHTML Lists: Unordered List, Ordered List and Description List,\niframe to Display Web-Pages from other Websites on your Website,\nDetailed Overview of HTML5 and HTML5 Semantic Elements,\nUsing Audios and Videos on Websites using HTML5 Elements,\nCreating Forms to Collect Data from Users using HTML5 & CSS3,\nCreating and Using CSS Styles: Inline CSS, Internal CSS & External CSS,\nUsing CSS3 Styles with div p span etc. for Creating Beautiful Web Pages,\nCSS3 Box-Model: Padding, Margin, Outline, Border, Background,\nCSS3 Floating, Positioning, Overflow, Image-Opacity and Image-Sprites,\nCSS3 Media Queries in Detail & Creating fully', '3 Month (12 weeks; with 3 training sessions of 1.5 hours a week)', 'FRONT_END_DEVELOPER.jpg', 15000),
(8, 'JavaScript Developer', 'In our Java & Spring Framework Developer course students will learn to develop Java applications and services using Spring Framework and related technologies such as Spring Boot, Spring JPA / Hibernate & Spring Cloud. The course starts with introduction to Java & OOP in Java and moves on to Spring Framework, Inversion of Control (IoC), Dependency Injection (DI) and Java Beans. The course also covers enterprise level web application development using Spring MVC and database programming using Hibernate.', 'Introduction to Java & Fundamentals of Java Programming,\r\nDefining Classes, Methods, Constructors & Access Modifiers,\r\nMethod Overloading, Recursion, Native Methods & Packages,\r\nComposition, Inheritance, Abstract Classes & Polymorphism,\r\nInterfaces, Anonymous Classes, Nested Classes, Enumeration,\r\nExceptions, Types of Exceptions & Custom Exceptions,\r\nException object & Dealing with Exceptions,\r\nUnderstanding Streams, Input & Output Streams,\r\nAccessing File & Directories using NIO,\r\nReading & Writing Files; Serialization & Deserialization of Objects,\r\nGenerics, Lambda & Collections (Set, Sequence, Map, Hashing)\r\nStrings Mutable and Immutable, Date & Times & Regular Expression,\r\nUnderstanding & Managing Threads ; Synchronization & Deadlocks,\r\nThread Priorities & Communication b/w threads (Wait & NotifyAll)', '3 Month (12 weeks; with 3 training sessions of 1.5 hours a week)', 'JAVASCRIPT_DEVELOPER.jpg', 23000),
(9, 'PHP Development', 'In this project-based course students will learn web development using PHP 7 and Laravel Framework. It includes essentials of web programming in PHP 7, Object Oriented Programming in PHP 7, Installation and Configuration of Laravel Framework, database development using Eloquent (Laravel ORM Framework) and MySql. The students will also learn to take advantage of Laravel Framework’s MVC Architecture, its Blade template system and its powerful routing features. The course also covers REST APIs / REST Services development using PHP and Laravel Framework.', 'Setting Development Environment for PHP using Xammp & Netbeans\r\n,Introduction to PHP 7, Basics PHP syntax & Conditional Statements\r\n,PHP Programming: Loops (for, While , Do-while & Foreach)\r\n,PHP Programming: Arrays , Super Global Arrays & Functions\r\n,PHP Programming: Built in function’s\r\n,PHP Programming: Intro to OOP, Data members & Data function\r\n,PHP Programming: Access modifiers & Encapsulation\r\n,PHP Programming: Magic Methods, Setter, Getter & Constructors\r\n,PHP Programming: Inheritances, Polymorphism, Abstraction\r\n,PHP Programming: Interfaces, Final Class, Static Function\r\n,Introduction of Git Version-Control System & Git Installation\r\n,Flow chart of Repositories, Branches & Git Commands\r\n,Installing SourceTree GUI for Git & Composer Package Manager for PHP\r\n,Download Latest Laravel Framework via Composer\r\n,Intro of Laravel Directory Structure, Laravel Routing', '3 Month', 'PHP_DEVELOPMENT.jpg', 13000);

-- --------------------------------------------------------

--
-- Table structure for table `registrationform`
--

CREATE TABLE `registrationform` (
  `REGIST_ID` int(11) NOT NULL,
  `EMAIL` varchar(200) DEFAULT NULL,
  `PHONE_NUMBER` varchar(30) DEFAULT NULL,
  `C_ID` int(11) NOT NULL,
  `NAME` varchar(200) DEFAULT NULL,
  `ACTION` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registrationform`
--

INSERT INTO `registrationform` (`REGIST_ID`, `EMAIL`, `PHONE_NUMBER`, `C_ID`, `NAME`, `ACTION`) VALUES
(1, 'afshalkhan7@gmail.co', '03134423477', 1, 'Afshal athar', 1),
(3, 'umer@gmail.com', '03134355', 1, 'umer', 1),
(4, 'afshalkhan7@gmail.com', '03134423477', 1, 'Hamza', 1),
(7, 'ali123@gmail.com', '0345-7895951', 9, 'Ali', 0),
(8, 'afshalkhan7@gmail.com', '0313-4423477', 7, 'Afshal ', 0),
(9, 'ali@gmail.com', '0333-4862376', 1, 'Muhammad Ali', 0),
(10, 'Afshalathar97@gmail.com', '0313-4423477', 1, 'Afshal Athar', 0),
(11, 'ayeshagujjar830@gmail.com', '0304-1000142', 9, 'Ayesha Gujjar', 0),
(12, 'momin4415@gmail.com', '0303-4106241', 8, 'Momin ali', 0);

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `SCHEDULE_ID` int(11) NOT NULL,
  `C_ID` int(11) NOT NULL,
  `SEMINAR_DATE` datetime DEFAULT NULL,
  `START_FROM_DATE` datetime DEFAULT NULL,
  `TIMINGS` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`SCHEDULE_ID`, `C_ID`, `SEMINAR_DATE`, `START_FROM_DATE`, `TIMINGS`) VALUES
(2, 1, '2021-01-11 20:30:00', '2021-01-24 17:00:00', 'Saturday;03:30 PM To 05:00 PM,\nSunday;02:00 PM To 03:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(6, 1, '2021-01-13 11:42:00', '2021-01-29 11:42:00', 'Monday;03:30 PM To 05:00 PM,\nTuesday;02:00 PM To 03:30 PM,\nThursday (Lab);03:30 PM To 05:00 PM'),
(7, 1, '2021-01-15 11:44:00', '2021-02-01 00:45:00', 'Saturday;03:30 PM To 05:00 PM,\nSunday;02:00 PM To 03:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(8, 4, '2021-01-13 11:45:00', '2021-01-28 11:45:00', 'Monday;03:30 PM To 05:00 PM,\nTuesday;02:00 PM To 03:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(9, 4, '2021-01-15 11:45:00', '2021-01-21 13:45:00', 'Saturday;03:30 PM To 05:00 PM,\nSunday;02:00 PM To 03:30 PM,\nMonday (Lab);03:30 PM To 05:00 PM'),
(10, 4, '2021-01-16 11:30:00', '2021-01-31 11:01:00', 'Saturday;03:30 PM To 05:00 PM,\nSunday;02:00 PM To 03:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(11, 5, '2021-01-18 11:00:00', '2021-01-22 00:00:00', 'Saturday;03:30 PM To 05:00 PM,\nMonday;02:00 PM To 03:30 PM,\nWednesday (Lab);03:30 PM To 05:00 PM'),
(12, 5, '2021-01-19 13:00:00', '2021-01-24 15:00:00', 'Saturday;03:30 PM To 05:00 PM,\nSunday;03:00 PM To 04:30 PM,\nMonday (Lab);03:30 PM To 05:00 PM'),
(13, 5, '2021-01-28 11:00:00', '2021-02-06 15:30:00', 'Saturday;03:30 PM To 05:00 PM,\nSunday;02:00 PM To 03:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(14, 6, '2021-01-21 11:00:00', '2021-01-31 12:00:00', 'Saturday;03:30 PM To 05:00 PM,\nSunday;12:00 PM To 03:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(15, 6, '2021-01-30 11:00:00', '2021-02-13 11:00:00', 'Saturday;11:30 PM To 01:00 PM,\nSunday;02:00 PM To 03:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(16, 6, '2021-01-26 12:00:00', '2021-01-31 15:00:00', 'Saturday;03:30 PM To 05:00 PM,\nSunday;03:00 PM To 04:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(17, 7, '2021-02-01 12:00:00', '2021-02-08 12:00:00', 'Monday;12:00 PM To 01:30 PM,\nWednesday;02:00 PM To 03:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(18, 7, '2021-02-03 14:00:00', '2021-02-16 15:00:00', 'Tuesday;03:00 PM To 04:30 PM,\nSunday;02:00 PM To 03:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(19, 7, '2021-02-01 12:00:00', '2021-01-10 12:00:00', 'Saturday;03:30 PM To 05:00 PM,\nSunday;12:00 PM To 01:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(20, 8, '2021-02-10 14:10:00', '2021-02-14 15:10:00', 'Saturday;03:30 PM To 05:00 PM,\nSunday;03:10 PM To 04:40 PM,\nMonday (Lab);03:30 PM To 05:00 PM'),
(21, 8, '2021-02-11 12:05:00', '2021-02-16 12:00:00', 'Tuesday;12:00 PM To 05:00 PM,\nSunday;02:00 PM To 03:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(22, 8, '2021-02-20 12:10:00', '2021-02-25 16:10:00', 'Thursday;04:10 PM To 05:40 PM,\nSunday;02:00 PM To 03:30 PM,\nMonday (Lab);03:30 PM To 05:00 PM'),
(23, 9, '2021-01-10 12:10:00', '2021-01-23 17:00:00', 'Wednesday;05:00 PM To 06:40 PM,\nSunday;02:00 PM To 03:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(24, 9, '2021-01-27 12:10:00', '2021-02-01 13:15:00', 'Monday;01:15 PM To 02:45 PM,\nTuesday;02:00 PM To 03:30 PM,\nFriday (Lab);03:30 PM To 05:00 PM'),
(25, 9, '2021-01-31 12:15:00', '2021-02-14 14:15:00', 'Saturday;03:30 PM To 05:00 PM,\nSunday;02:15 PM To 03:45 PM,\nFriday (Lab);03:30 PM To 05:00 PM');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `STUDENT_ID` int(11) NOT NULL,
  `NAME` varchar(300) DEFAULT NULL,
  `EMAIL` varchar(200) DEFAULT NULL,
  `PHONE_NO` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student_courses`
--

CREATE TABLE `student_courses` (
  `ST_ID` int(11) NOT NULL,
  `C_ID` int(11) NOT NULL,
  `FEE_STATUS` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ADMIN_ID`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`COURSE_ID`);

--
-- Indexes for table `registrationform`
--
ALTER TABLE `registrationform`
  ADD PRIMARY KEY (`REGIST_ID`),
  ADD KEY `C_ID` (`C_ID`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`SCHEDULE_ID`),
  ADD KEY `C_ID` (`C_ID`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`STUDENT_ID`);

--
-- Indexes for table `student_courses`
--
ALTER TABLE `student_courses`
  ADD KEY `ST_ID` (`ST_ID`),
  ADD KEY `C_ID` (`C_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `ADMIN_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `COURSE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `registrationform`
--
ALTER TABLE `registrationform`
  MODIFY `REGIST_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `SCHEDULE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `STUDENT_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `registrationform`
--
ALTER TABLE `registrationform`
  ADD CONSTRAINT `registrationform_ibfk_1` FOREIGN KEY (`C_ID`) REFERENCES `course` (`COURSE_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`C_ID`) REFERENCES `course` (`COURSE_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_courses`
--
ALTER TABLE `student_courses`
  ADD CONSTRAINT `student_courses_ibfk_1` FOREIGN KEY (`ST_ID`) REFERENCES `students` (`STUDENT_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_courses_ibfk_2` FOREIGN KEY (`C_ID`) REFERENCES `course` (`COURSE_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
