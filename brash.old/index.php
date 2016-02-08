<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title></title>
    <link href="css/fonts.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
</head>
<body>
<div class="b-page">
    <header class="b-head">
        <div class="b-contacts">
            <div class="b-contacts__item"><img src="http://placehold.it/15x15">+7 495 211-95-13</div>
            <div class="b-contacts__item"><img src="http://placehold.it/15x15">ул. трубецкая 28 с1</div>
        </div>
        <div class="b-logo">
            <img src="/images/logo.png">
        </div>
        <div class="b-register">
            <span class="b-register__button">записаться</span>
        </div>
    </header>
    <nav class="b-menu">
        <div class="b-menu-main">
            <ul>
                <li>главная</li>
                <li>о салоне</li>
                <li>школа brush</li>
                <li>цены</li>
                <li>пресса о нас</li>
                <li>спецпредложения</li>
            </ul>
        </div>
        <div class="b-menu-example">
            <ul>
                <li>волосы</li>
                <li>ногти</li>
                <li>брови & ресницы & макияж</li>
                <li>косемтология & эпиляция</li>
                <li>пермаментный макияж</li>
            </ul>
        </div>
    </nav>
    <? include $_GET['page'] . '.php'; ?>
    <? include 'footer.php'; ?>
</div>

</body>
</html>