(function( $ ) {
	$(document).ready(function(){

        // HOME

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            // =)
        }
        else {

    		var waypoints = $('#why h3').waypoint({
      			handler: function(direction) {
        			if(direction=='down')
        				$('#step1 span').stop().fadeIn(500,function(){
                            $('#step1 .line').stop().fadeIn(500);
                            $('#step1 .square').stop().fadeIn(1000, function(){
                                $('#line1-2v').stop().animate({'height':200},200,function(){
                                    $('#line1-2h').animate({'width':451},200,function(){
                                        $('#step2 span').stop().fadeIn(500,function(){
                                            $('#step2 .line').stop().fadeIn(500);
                                            $('#step2 .square').stop().fadeIn(1000, function(){

                                                $('#line2-3v').stop().animate({'height':200},200,function(){
                                                    $('#line2-3h').animate({'width':451},200,function(){
                                                        $('#step3 span').stop().fadeIn(500,function(){
                                                            $('#step3 .line').stop().fadeIn(500);
                                                            $('#step3 .square').stop().fadeIn(1000);
                                                        }); 
                                                    });
                                                });

                                            });
                                        }); 
                                    });
                                });
                            });
                        });
                    else {
    			        $('#step1 span').stop().fadeOut(0);
                        $('#step1 .line').stop().fadeOut(0);
                        $('#step1 .square').stop().fadeOut(0);
                        $('#line1-2h').stop().animate({'width':0},1000);
                        $('#line1-2v').animate({'height':0},1000);
                        $('#step2 span').stop().fadeOut(0);
                        $('#step2 .line').stop().fadeOut(0);
                        $('#step2 .square').stop().fadeOut(0);
                        
                        $('#step3 span').stop().fadeOut(0);
                        $('#step3 .line').stop().fadeOut(0);
                        $('#step3 .square').stop().fadeOut(0);

                        $('#line2-3h').stop().animate({'width':0},0);
                        $('#line2-3v').animate({'height':0},0);
                    }
      			},
      			offset: '80%'
    		})
        }

        var waypoints = $('.logo').waypoint({
            handler: function(direction) {
                if(direction=='down')
                    $('#featured .cover_text').removeClass('animated fadeOutDown').addClass('animated fadeInUp');
                else
                    $('#featured .cover_text').removeClass('animated fadeInUp').addClass('animated fadeOutDown');
            }
        });

        var waypoints = $('#types').waypoint({
            handler: function(direction) {
                if(direction=='down')
                    $('#types .type').addClass('animated slideInUp').css('display','inline-block').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $('#types .button').css('display','inline-block');
                        $('#chat').fadeIn();
                    });

                else{
                    $('#types .type').removeClass('animated slideInUp').css('display','none');
                    $('#types .button').css('display','none');
                    $('#chat').fadeOut(0);
                }
            },
            offset: '50%'
        });

        $('.show').hover(function() {
            var obj = $(this).parent().parent();
            $('.cover',obj).stop().animate({height:414})
        });

        $('.type .cover').hover(function() {
            $(this).addClass('cool');
        }, function() {
            $(this).stop().animate({height:0})
        });

        $('.up').on('click',function(){
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        })

        $('.submenu li').on('click',function(){
            $('.submenu li').removeClass('active');
            console.log($(this).hasClass('urban'));
            if( $(this).hasClass('urban') ){
                $('.text_reg').fadeIn(0);
                $('.rege').fadeOut(0);
            }
            else{
                $('.text_reg').fadeOut();
                $('.rege').fadeIn(0);
            }
            $(this).addClass('active');
            $('.cards').fadeOut(200,function(){
                $('.cards').fadeIn();
            })
        })

        $('.subselect').on('change',function(){
            $('.cards').fadeOut(200,function(){
                $('.cards').fadeIn();
            })
        })
		
        $('.trigger_tooltip').on('click',function(){
            var rel = $(this).attr('rel');
            if(rel==0){
                $(this).attr('rel',1);
                $('.tooltip',this).fadeIn();
            }
            else{
                $(this).attr('rel',0);
                $('.tooltip',this).fadeOut();
            }
        })

        $('.square.hide').on('click',function(){
            var rel = $(this).attr('rel');
            if(rel==0){
                $(this).attr('rel',1);
                $('.total',this).css('display','block');
                $('.down', this).css({transform: 'rotate( 180deg )'})
            }
            else{
                $(this).attr('rel',0);
                $('.total',this).css('display','none');
                $('.down', this).css({transform: 'rotate( 0deg )'})
            }
        })

        if( $('#slide').length == 1){
            var slider = new Slider('#slide', {
                formatter: function(value) {
                    return 'Current value: ' + value;
                },
                value: 50000,
                min: 50000,
                max: 1000000,
                step: 10000
            });

            $('#slide').slider().on('change', function(ev){
                var money = $(this).val();
                $('#money p').html( money.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
                /*
                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('#money p').animateNumber({
                    number: money,
                    numberStep: comma_separator_number_step
                });
                */
            });
            
        }

        var player;
        setTimeout(function(){ 
            player = new YT.Player('video', {
                height: '100%',
                width: '100%',
                videoId: 'E7Vsorm6n4I',
                playerVars: { 'autoplay': 0, 'controls': 0, 'cc_load_policy': 0, 'showinfo' : 0, 'rel' : 0 },
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }, 100);

        $('.controls *').on('click',function(){
            $('body').css('overflow','hidden');
            player.seekTo(10).playVideo();
            $('#supervideo').fadeIn();
        })

        $('#triggervideo').on('click',function(){
            $('html,body').animate({ scrollTop: 0 },0);
            $('body').css('overflow','hidden');
            player.seekTo(10).playVideo();
            $('#supervideo').fadeIn();
        })

        $('#closevideo').on('click',function(){
            player.stopVideo();
            $('#supervideo').fadeOut();
            $('body').css('overflow','auto');
        })

        function onPlayerStateChange(event) {        
            if(event.data === 0) {          
                $('#supervideo').fadeOut();
            }
        }

        // MENU
        var waypoints = $('.header_page').waypoint({
            handler: function(direction) {
                if(direction=='down'){
                    $('#menu').addClass('fill');
                    $('#menu img').attr('src','/images/general/menu_logo_r.svg');
                } else {
                    $('#menu').removeClass('fill');
                    $('#menu img').attr('src','/images/general/menu_logo.svg');
                }
            },offset: '-325px'
        });

        $('#trigger_menu').on('click',function(){
            $('#menu_mobile').animate({height: $( window ).height()});
        })

        $('#menu_mobile #close_menu_mobile').on('click',function(){
            $('#menu_mobile').animate({height: 0});
        })

        $('#trigger_menu_login').on('click',function(){
            $('#menu_mobile_login').animate({height: $( window ).height()});
        })

        $('#menu_mobile_login #close_menu_mobile').on('click',function(){
            $('#menu_mobile_login').animate({height: 0});
        })


        // NOTIFICATION
            $('#notification .icon').on('click',function(){
                $('#notification').fadeOut(0);
                $('#menu').removeClass('notification');
            })

        // PERFIL
        $('#fakefile').on('click',function(){
            $('#file').click();
        })

        $('#file').on('change',function(){
            $('#prevfile').css('display','inline-block');
            $('#fakefile').html('Cambiar imagen')
        })

        $('#arrows').on('click',function(){
            var time = parseInt($('#hour').html());
            $('#hour').html(time+=1);
        })

        // SUBIR CONTRATOS
        $('#fakefiles').on('click',function(){
            $('#files').click();
        })

        $('#files').on('change',function(){
            $('#prevfiles').css('display','inline-block');
            $('#fakefiles').html('<div class="icon"></div>Cambiar archivos')
        })

        $('#prevfiles, #prevfile').on('click',function(){
            $(this).fadeOut(0);
        })


        // DESARROLLADOR
        $('.desarrollador .enter').on('click',function(){
            $(this).fadeOut(0);
            $('.desarrollador form').fadeIn();
            $('.cover_text').fadeIn().css('z-index','-1');
        })

        $('.addproyect').on('click',function(){
            var rel = $(this).attr('rel');
            $('#proyect'+rel).fadeIn();
            if(rel  == 3 )
                $('.addproyect').fadeOut(0);    
            $('.addproyect').attr('rel',3);
        })

        $('.check').on('click',function(){
            $('.icon', this).addClass('active');
        })

        $('#addnew').on('click',function(){
            $('.desarrollador .content').fadeOut(0);
            $('.thanks').fadeIn();
        })

        // PROYECTO CONTRATOS
        $('#download').on('click',function(){
            $('.card').fadeOut(0);
            $('.contrato').fadeOut(0);
            $('.text_red').fadeOut(0);
            $('.instructions').fadeIn();
        })

        // GALLERY
        var openPhotoSwipe = function() {
            var pswpElement = document.querySelectorAll('.pswp')[0];

            // build items array
            var items = [
                {
                    src: 'http://imganuncios.mitula.net/ventanas_coyoacan_desde_3_030_000_00_por_favor_no_ofertar_4970132455317790458.jpg',
                    w: 1024,
                    h: 800
                },
                {
                    src: 'http://vistazo.com/sites/default/files/field/image/2015/04/28/spiderman_edificio-1.jpg',
                    w: 1024,
                    h: 800
                },
                {
                    src: 'http://imganuncios.mitula.net/ventanas_coyoacan_desde_3_030_000_00_por_favor_no_ofertar_4970132455317790458.jpg',
                    w: 1024,
                    h: 800
                },
                {
                    src: 'http://vistazo.com/sites/default/files/field/image/2015/04/28/spiderman_edificio-1.jpg',
                    w: 1024,
                    h: 800
                },
                {
                    src: 'http://imganuncios.mitula.net/ventanas_coyoacan_desde_3_030_000_00_por_favor_no_ofertar_4970132455317790458.jpg',
                    w: 1024,
                    h: 800
                },
                {
                    src: 'http://vistazo.com/sites/default/files/field/image/2015/04/28/spiderman_edificio-1.jpg',
                    w: 1024,
                    h: 800
                }
                
            ];
        
            // define options (if needed)
            var options = {
                     // history & focus options are disabled on CodePen        
                history: false,
                focus: false,
                shareEl: false,

                showAnimationDuration: 0,
                hideAnimationDuration: 0
                
            };
        
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };

            
        if( $('#initgallery').length>0 ){
            document.getElementById('initgallery').onclick = openPhotoSwipe;
        }

        // RUN SIMULATOR

        $('#inputinversion').on('keyup',function(){
            $('.content').stop();
            $('#reload').addClass('black').html('Calcular mi retorno').attr('href','/next_simulador');
        })

        function animate_point(h,obj,callback){
            $('.content').animate({
                height: h,
                marginTop : [(h/2) * -1]
            },3000,function(){
                $('#'+obj).fadeIn().css('display','inline-block');
                callback();
            });
        }

        $('.controlup').on('click',function(){
            var input = parseInt($('#inputinversion').attr('tag'));
            input += 10000;
            input_value = input.toLocaleString();
            $('#inputinversion').val('$'+input_value+' MXN').attr('tag',input);
            $('#reload').addClass('black').html('Calcular mi retorno').attr('href','/next_simulador');
            $('.content').stop();
        })

        $('.controldown').on('click',function(){
            var input = parseInt($('#inputinversion').attr('tag'));
            input -= 10000;
            input_value = input.toLocaleString();
            $('#inputinversion').val('$'+input_value+' MXN').attr('tag',input);
            $('#reload').addClass('black').html('Calcular mi retorno').attr('href','/next_simulador');
            $('.content').stop();
        })

        
        if( $('.next_simulador').length == 1 && $( window ).width()>768 ){
            var w_height = $( window ).height();
            $('#ficha').css('height','1000px');
            $('#canvas').css('height','1000px');
            
            animate_point(360,'step1',function(){
                $('#line2').animate({height: 280},3000,function(){
                    $('#point2').css('display','inline-block');
                });
                $('#point1 .icon').removeClass('active');
                animate_point(620,'step2',function(){
                    $('#line3').animate({height: 300},3000,function(){
                        $('#point2 .icon').removeClass('active');
                        $('#point3').css('display','inline-block');
                    });
                    animate_point(1200,'step3',function(){
                        $('#line4').animate({height: 140},3000,function(){
                            $('#point3 .icon').removeClass('active');
                            $('#point4').css('display','inline-block');
                        });
                        animate_point(1600,'step4',function(){
                            $('#line5').animate({height: 240},3000,function(){
                                $('#point4 .icon').removeClass('active');
                                $('#point5').css('display','inline-block');
                            });
                            animate_point(1800,'step5',function(){

                                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                                $('#moneyb .currency').animateNumber({
                                    number: 75000,
                                    numberStep: comma_separator_number_step
                                },2000,function(){

                                    $('#line6').animate({height: 140},3000,function(){
                                        $('#point5 .icon').removeClass('active');
                                        $('#point6').css('display','inline-block');
                                    });

                                    animate_point(2000,'step6',function(){

                                        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                                        $('#moneyb .currency').animateNumber({
                                            number: 100000,
                                            numberStep: comma_separator_number_step
                                        },2000,function(){
                                            //$('#point6 .icon').removeClass('active');
                                        });


                                    });

                                });
                            });


                        });
                    });
                });
                /*
                animate_point(400,'step2',function(){
                    $('#point2 .icon').removeClass('active');
                    animate_point(800,'step3',function(){
                        $('#point3 .icon').removeClass('active');
                        animate_point(1000,'step4');
                    });
                });
                */
            });

        }


	})
})( jQuery );