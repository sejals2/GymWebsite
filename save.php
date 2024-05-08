<?php
  

  $servername="localhost";
  $username="root";
  $password="";
  $dbname="members";


  $con=mysqli_connect($servername,$username,$password,$dbname);
   
  if(!$con)
  {
    echo "not connected";
  }
  

  $name = $_POST['name'];
  $gender= $_POST['gender'];
  $age=$_POST['age'];
  $contact=$_POST['contact'];

  $sql ="INSERT INTO `members`(`name`, `gender`, `age`, `contact`) VALUES ('$name','$gender','$age','$contact')";

   $result= mysqli_query($con ,$sql);
   if($result)
   {
    echo "data submitted";
   }
   else {
     echo "query failed...!!!";
   }
   ?>