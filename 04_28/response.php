<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>폼 전송 Response API</title>

    <link rel="stylesheet" href="./css/style.css">

</head>
<body>

    <?php

        // HTML 입력 폼에서 name 속성값을 가져온다.
        $customerName   = $_POST["customerName"];
        $customerTel    = $_POST["customerTel"];
        $customerEmail  = $_POST["customerEmail"];

        echo "<table>";
        echo    "<tr>";
        echo        "<th>이름</th><th>전화번호</th><th>이메일</th>";
        echo    "</tr>";
        echo    "<tr>";
        echo        "<td>".$customerName."</td><td>".$customerTel."</td><td>".$customerEmail."</td>";
        echo    "</tr>";
        echo "</table>";
        echo "<button class='backBtn' onclick='javascript: window.history.go(-1)'>뒤로가기</button>";

    ?>

    <table>
        <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>이메일</th>
        </tr>
        <tr>
            <td><? echo $customerName ?></td>
            <td><? echo $customerTel ?></td>
            <td><? echo $customerEmail ?></td>
        </tr>
    </table>
    <button class='backBtn' onclick='javascript: window.history.back()'>뒤로가기</button>
    
</body>
</html>
