
    <?php
        $name = $_POST["name"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $confirmpassword = $_POST["confirm-password"];
        $hashedpassword = password_hash($password, PASSWORD_DEFAULT);
        if (file_exists("users.json")){
            $current_data = file_get_contents("users.json");
            $array_data = json_decode($current_data, true);
            var_dump($array_data);

            if ($password === $confirmpassword){
                $newData = array(
                    "Name" => $_POST["name"],
                    "Email" => $_POST["email"],
                    "Password" => $hashedpassword;
                );
            $array_data[] = $newData;
            if (file_put_contents("users.json", json_encode($array_data))){
                echo "posted successfully";
            }
            }
            else{
                echo "Password donot match"
            }
        }
    ?>
