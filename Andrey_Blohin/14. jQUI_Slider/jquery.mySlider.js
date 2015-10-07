/*
на основе самописного плагина необходимо дабавить такую опцию как dots(точки переключения слайда, и отображения активного в данный момент),
и немножко усложненная версия - добавить в опции возможность пользователю самому указывать класс для обертки точек
*/

$(document).ready(function() {
    $.fn.mySlider = function (options) {
        var options = $.extend({
            leftBtn: 'leftBtn',
            rightBtn: 'rightBtn',
            quantity: 3,
            autoPlay: false,  // true or false
            autoPlayDelay: 2,  // delay in seconds
            dots: false,
            dotsClass : "superDots"
        }, options);
        var make = function () {
            $(this).css('overflow', 'hidden');
            var el = $(this).children('ul');
            el.css({
                position: 'relative',
                left: '0'
            });

            var sliderFirst = el.children('li').slice(0, options.quantity);
            var tmp = '';
            sliderFirst.each(function () {
                tmp = tmp + '<li>' + $(this).html() + '</li>';
            });
            sliderFirst = tmp;
            var sliderLast = el.children('li').slice(-options.quantity);
            tmp = '';
            sliderLast.each(function () {
                tmp = tmp + '<li>' + $(this).html() + '</li>';
            });
            sliderLast = tmp;

            var elRealQuant = el.children('li').length;
            el.append(sliderFirst);
            el.prepend(sliderLast);
            var elWidth = el.width() / options.quantity;
            el.children('li').css({
                float: 'left',
                width: elWidth
            });
            var elQuant = el.children('li').length;
            el.width(elWidth * elQuant);
            el.css('left', '-' + elWidth * options.quantity + 'px');

            function disableButtons() {
                $('.' + options.leftBtn + ', .' + options.rightBtn).addClass('inactive');
            }

            function enableButtons() {
                $('.' + options.leftBtn + ', .' + options.rightBtn).removeClass('inactive');
            }

            $('.' + options.leftBtn).click(function (event) {
                event.preventDefault();
                if (!$(this).hasClass('inactive')) {
                    disableButtons();
                    el.animate({left: '+=' + elWidth + 'px'}, 300,
                        function () {
                            if ($(this).css('left') == '0px') {
                                $(this).css('left', '-' + elWidth * elRealQuant + 'px');
                            }
                            enableButtons();
                        }
                    );

                    if ( $("." + options.dotsClass + " li:first-child").hasClass("active") ){
                        $("." + options.dotsClass + " li.active").removeClass("active").addClass("disabled");
                        $("." + options.dotsClass + " li:last-child").addClass("active").removeClass("disabled");
                    } else {
                    $("." + options.dotsClass + " li.active").removeClass("active").addClass("disabled").prev().addClass("active").removeClass("disabled");
                    }                    
                }
                return false;
            });

            $('.' + options.rightBtn).click(function (event) {
                event.preventDefault();
                if (!$(this).hasClass('inactive')) {
                    disableButtons();
                    el.animate({left: '-=' + elWidth + 'px'}, 300,
                        function () {
                            if ($(this).css('left') == '-' + (elWidth * (options.quantity + elRealQuant)) + 'px') {
                                $(this).css('left', '-' + elWidth * options.quantity + 'px');
                            }
                            enableButtons();
                        }
                    );

                    if ( $("." + options.dotsClass + " li:last-child").hasClass("active") ){
                        $("." + options.dotsClass + " li.active").removeClass("active").addClass("disabled");
                        $("." + options.dotsClass + " li:first-child").addClass("active").removeClass("disabled");
                    } else {
                    $("." + options.dotsClass + " li.active").removeClass("active").addClass("disabled").next().addClass("active").removeClass("disabled");
                    }
                }
                return false;
            });

            if (options.autoPlay) {
                function aPlay() {
                    $('.' + options.rightBtn).click();
                    delId = setTimeout(aPlay, options.autoPlayDelay * 1000);
                }

                var delId = setTimeout(aPlay, options.autoPlayDelay * 1000);
                el.hover(
                    function () {
                        clearTimeout(delId);
                    },
                    function () {
                        delId = setTimeout(aPlay, options.autoPlayDelay * 1000);
                    }
                );
            }

            if(options.dots){
                $(this).parent().append("<ul class=" + options.dotsClass + "></ul>");
                for(var i=0; i<(elRealQuant); i++){
                    $("." + options.dotsClass).append("<li></li>")
                }
                $("." + options.dotsClass + " li:first-child").addClass("active");
            }

            // ОБРАБОТЧИК НАЖАТИЯ НА ТОЧКИ
            $("." + options.dotsClass + " li").click(function (event){    
                event.preventDefault();
                var arr = $("." + options.dotsClass).children();                
                var posOld = $.inArray( $("." + options.dotsClass + " li.active")[0], arr );
                $("." + options.dotsClass + " li.active").addClass("disabled").removeClass("active");
                $(this).addClass("active").removeClass("disabled");                
                var posNew = $.inArray( $("." + options.dotsClass + " li.active")[0], arr );                
                deltaPos = posOld - posNew;

                if (deltaPos < 0){
                    deltaPos *= (-1);
                    el.animate({left: '-=' + elWidth * deltaPos + 'px'}, 300,
                        function () {
                            if ($(this).css('left') == '-' + (elWidth * (options.quantity + elRealQuant)) + 'px') {
                                $(this).css('left', '-' + elWidth * options.quantity + 'px');
                            }
                            enableButtons();
                        }
                    ); 
                } else {
                    el.animate({left: '+=' + elWidth * deltaPos + 'px'}, 300,
                        function () {
                            if ($(this).css('left') == '-' + (elWidth * (options.quantity + elRealQuant)) + 'px') {
                                $(this).css('left', '-' + elWidth * options.quantity + 'px');
                            }
                            enableButtons();
                        }
                    ); 
                }// end if         
            });            
        };
        return this.each(make);
    };
});

/*
=== ВОПРОС ===
В коде встречается
 $("." + options.dotsClass + " li").click(function (event){    
                event.preventDefault();
Может я забыл, но зачем он здесь нужен? Мы ранее click() без него описывали.
*/
