<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Kovalenko Alex">
    <title>Thai Cook</title>
    
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/animation.css">
    <link rel="stylesheet" href="../css/media.css">
    <link rel="stylesheet" href="../css/header.css">

    
</head>
<body>
    <?php
    include('header.php');
    ?>
    <main>
        <?php
    include('slider.php');
    ?>
    <section class="section2">
        
        <?php
        echo($_GET['img']);
        echo("<img id='plate-img' class='main-img'  src='../../images/plates/plate".$_GET['img'].".png'  alt='#'>");
        ?> 
    </section>

    </main>
    

    
</body>
</html>