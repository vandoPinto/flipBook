$(document).ready(function () {

    /* Fullscreen */
    $(".fullscreen-enter").click(
        function () {
            document.documentElement.requestFullscreen().catch((e) => {
                console.log(e);
            });
        }
    )
    $(".fullscreen-exit").click(
        function () {
            if (document.exitFullscreen)
                document.exitFullscreen();
            else if (document.mozCancelFullScreen)
                document.mozCancelFullScreen();
            else if (document.webkitExitFullscreen)
                document.webkitExitFullscreen();
            else if (document.msExitFullscreen)
                document.msExitFullscreen();
        }
    )

    /* Audios */

    /* Elementos de áudio */
    let D1_A1 = document.getElementById("D1_A1");
    let D1_A1_Mobile = document.getElementById("D1_A1_Mobile");

    /* Captura de cliques de áudio */

    $('#btnD1_A1').on('click', function () {
        if (D1_A1.paused) {
            playAudio(D1_A1);
        } else {
            pauseAudio(D1_A1);
        }
    });
    $('#btnD1_A1_Mobile').on('click', function () {
        if (D1_A1_Mobile.paused) {
            playAudio(D1_A1_Mobile);
        } else {
            pauseAudio(D1_A1_Mobile);
        }
    });

    /* Funções de play/pause */
    function playAudio(element) {
        console.log('element', element.id)
        if (element.paused) {
            element.play();
            $('#btn' + element.id + '_Img').attr("src", "recursos/icones/icon-pause-spot.svg");
            $('#btn' + element.id + '_Text').html('pause');
            $('#btn' + element.id + '').toggleClass('col-player col-player-playing');
        }
    }
    function pauseAudio(element) {
        element.pause();
        $('#btn' + element.id + '_Img').attr("src", "recursos/icones/icone_07.svg");
        $('#btn' + element.id + '_Text').html('play');
        $('#btn' + element.id + '').toggleClass('col-player col-player-playing');
    }

    /* Accordion*/
    /* D4_C1 */
    $('#accordionD1_C1').click(function () {
        $('#btnCollapseDetachD4_C1').toggleClass('fa-angle-down fa-angle-up');
    });
    /* D2_C1 */
    $('#accordionD2_C1').click(function () {
        $('#accordionD2_C1 .click-down').toggleClass('hide-class');
        if ($('#accordionD2_C1 .click-down').hasClass('hide-class')) {
            $('.square p').removeAttr('hidden');
            $('.square i').removeAttr('hidden');
        } else {
            $('.square p').attr("hidden", true);
            $('.square i').attr("hidden", true);
        }
    });
    /* D2_C2 */
    $('#accordionD2_C2').click(function () {
        $('#accordionD2_C2 .square-end-15').toggleClass('hide-class');
        if (!$('#collapseDetachD2_C2').hasClass('show')) {
            $('#accordionD2_C2 .click-down').attr("hidden", true);
            $('#accordionD2_C2 .square-detach-15').attr("hidden", true);
        } else {
            $('#accordionD2_C2 .click-down').attr("hidden", false);
            $('#accordionD2_C2 .square-detach-15').attr("hidden", false);
        }

    });
    /* D2_C3 */
    $('#accordionD2_C3').click(function () {
        $('#accordionD2_C3 .square-end-15').toggleClass('hide-class')
        if (!$('#collapseDetachD2_C3').hasClass('show')) {
            $('#accordionD2_C3 .click-down').attr("hidden", true);
            $('#accordionD2_C3 .square-detach-15').attr("hidden", true);
        } else {
            $('#accordionD2_C3 .click-down').attr("hidden", false);
            $('#accordionD2_C3 .square-detach-15').attr("hidden", false);
        }

    });
    /* D2_C4 */
    $('#accordionD2_C4').click(function () {
        $('#accordionD2_C4 .square-end-15').toggleClass('hide-class')
        if (!$('#collapseDetachD2_C4').hasClass('show')) {
            $('#accordionD2_C4 .click-down').attr("hidden", true);
            $('#accordionD2_C4 .square-detach-15').attr("hidden", true);
        } else {
            $('#accordionD2_C4 .click-down').attr("hidden", false);
            $('#accordionD2_C4 .square-detach-15').attr("hidden", false);
        }

    });
    /* D2_C5 */
    $('#accordionD2_C5').click(function () {
        $('#accordionD2_C5 .square-end-15').toggleClass('hide-class')
        $('.row-align').toggleClass('align-items-center align-items-start')
        if (!$('#collapseDetachD2_C5').hasClass('show')) {
            $('#accordionD2_C5 .click-down').attr("hidden", true);
            $('#accordionD2_C5 .square-detach-15').attr("hidden", true);
        } else {
            $('#accordionD2_C5 .click-down').attr("hidden", false);
            $('#accordionD2_C5 .square-detach-15').attr("hidden", false);
        }

    });

    /* TollTip*/
    $(function () {
        
        $('[data-toggle="tooltip"]').tooltip(
            {
                delay: { "show": 0, "hide": 1000 },
                trigger: 'hover',
                html:true
            } 
            );
        var tempToolTip = $('[data-toggle="tooltip"]');
        tempToolTip.hover(function () {
            tempToolTip.not(this).tooltip('hide');
            $(this).tooltip('show');
        });
    });

});

/* TROCA DE POST ITS*/
$("[id^='post']").each(function(){
    $(this).on('click', function(){
        let src = $(this).attr('src');
        let looping = (src.substr(-5, 5))
        if(looping == 'a.svg'){
            let change = src.replace('a.svg','b.svg');
            $(this).attr('src', change)
        } else {
            let change = src.replace('b.svg','a.svg');
            $(this).attr('src', change)
        }
    })
})


/* Interação Números*/

$('.mainSelected').each(function(){
    $(this).on('click', function(){
        if($(this).next().hasClass("hide-op")){
            $(this).next().removeClass("hide-op");
        } else{
            $(this).next().addClass("hide-op");
        }
        
    })
})
/*  MODAIS */

function ImageA(mL){
    let modal = document.getElementById(mL);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    setTimeout(function() {
        modal.style.opacity = 1;
    }, 0.1); 
}

function closeModal1(mL) {
    let modal = document.getElementById(mL);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    setTimeout(function() {
        modal.style.opacity = 0;
    }, 0.1);

}

function ImageB(mL){
    let modal = document.getElementById(mL);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    setTimeout(function() {
        modal.style.opacity = 1;
    }, 0.1); 
}

function closeModal2(mL) {
    let modal = document.getElementById(mL);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    setTimeout(function() {
        modal.style.opacity = 0;
    }, 0.1);

}

function ImageC(mL){
    let modal = document.getElementById(mL);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    setTimeout(function() {
        modal.style.opacity = 1;
    }, 0.1); 
}

function closeModal3(mL) {
    let modal = document.getElementById(mL);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    setTimeout(function() {
        modal.style.opacity = 0;
    }, 0.1);

}

// CARDS

var cards = document.querySelectorAll('.cards');

    [...cards].forEach(card=>{
        card.addEventListener( 'click', function() {
            card.classList.toggle('flip');
        });
    });

// /* Interação Neoliberal*/



$('.dots-selected').each(function(){
    $(this).on('click', function(){
        if($(this).next().hasClass("hide-dots")){
            $(this).next().removeClass("hide-dots");
        } else{
            $(this).next().addClass("hide-dots");
        }
        
    })
})


// ACCORDION

$(document).ready(function($) {
    $(".panel-heading").click(function() {
        $(this).parent().addClass('active').find('.panel-body').slideToggle('slow');
        $(".panel-heading").not(this).parent().removeClass('active').find('.panel-body').slideUp('slow');
    });
});

// Pop-up constituição

function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.add("show");
}

function hidePopup() {
    var popups = document.getElementsByClassName("popup");
    for (var i = 0; i < popups.length; i++) {
        popups[i].classList.remove("show");
    }
}



