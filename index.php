<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Brush</title>
    <link href="src/main.css?<?=time()?>" rel="stylesheet">
    <!--<link href="src/main.css?<?=time()?>" rel="stylesheet">-->
</head>
<body>
<? include 'partial/modal.php'?>

<!-- /.modal -->
<div class="container">
    <? include 'partial/header.php'?>
    <!--<div class="container">-->
    <? include 'partial/'.(isset($_GET['page'])?$_GET['page']:'main') . '.php'; ?>
</div>

<!--<div class="b-gallery">-->
<!--<div class="g-cover"></div>-->
<!--<div class="b-gallery-i"></div>-->
<!--</div>-->

<? include 'partial/footer.php'?>
<script src="src/bundle.js"></script>
</body>
</html>