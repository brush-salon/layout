<div class="b-press">
    <? for($i=1; $i<5;$i++){?>
    <div class="b-press-item">
        <div class="b-press-item-image">
            <img src="../images/press/press<?=$i?>.png"/>

            <div class="b-press-item-details">
                <div class="g-cover"></div>
                <div class="b-press-control">
                    <div class="showPopupButton b-press-control__zoom" data-slide="<?=$i-1?>">
                        <span class="i-row3 i-row3__zoom"></span>
                    </div>
                </div>
            </div>

        </div>
        <div class="b-press__desc">салон месяца</div>
        <div class="b-press__source">
            <span class="journal">Cosmopolitan</span>
            <span class="date">Июнь 2015</span>
        </div>
    </div>
    <?}?>

    <div style="display: none">

        <div id="pressModal" class="b-press-modal">
            <div class="modal-content b-modal-content">
                <div class="modal-body b-modal-body">

                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <? for($i=1; $i<5;$i++){?>
                            <div class="swiper-slide">
                                <img class='center-block' src="../images/press/press<?=$i?>.png"/>
                            </div>
                            <?}?>
                        </div>
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <div id='arrowControls' class="controls">
                        <span class="prev glyphicon glyphicon-menu-left"></span>
                        <span class="next glyphicon glyphicon-menu-right"></span>
                    </div>
                </div>


            </div>
            <div class="modal-footer pull-left">
                <div class="header">Cosmopolitan</div>
                <div class="text">Июнь 2015</div>
            </div>
        </div>
    </div>


</div>