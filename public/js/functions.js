(function( $ ) {
	$(document).ready(function(){

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

        var waypoints = $('.logo').waypoint({
            handler: function(direction) {
                console.log(direction);
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
                    });

                else{
                    $('#types .type').removeClass('animated slideInUp').css('display','none');
                    $('#types .button').css('display','none');
                }
            },
            offset: '50%'
        });

        $('.show').on('click',function(){
            var obj = $(this).parent().parent();
            $('.cover',obj).animate({height:414})
        })

        $('.close').on('click',function(){
           var obj = $(this).parent().parent();
           $('.cover',obj).animate({height:0})
        })

        $('.up').on('click',function(){
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        })

        $('.submenu li').on('click',function(){
            $('.submenu li').removeClass('active');
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
            }
            else{
                $(this).attr('rel',0);
                $('.total',this).css('display','none');
            }
        })

        if( $('#slide').length == 1){
            var slider = new Slider('#slide', {
                formatter: function(value) {
                    return 'Current value: ' + value;
                },
                value: 50000,
                min: 50000,
                max: 200000,
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

        // RUN SIMULATOR
        if( $('.run_simulador').length == 1){

            $('#line1').animate({'backgroundColor':'#ED1C24'},1000,function(){
                $('#point1 .icon').animate({'backgroundColor':'#ED1C24'},1000,function(){
                    $('#step1 span').animate({'color':'#ED1C24'},500,function(){
                        $('#step1 p').animate({'color':'rgba(29, 40, 47, 0.8)'},500,function(){

                            $('#line2').animate({'backgroundColor':'#ED1C24'},1000,function(){
                                $('#point2 .icon').animate({'backgroundColor':'#ED1C24'},1000,function(){
                                    $('#step2 span').animate({'color':'#ED1C24'},500,function(){
                                        $('#step2 p').animate({'color':'rgba(29, 40, 47, 0.8)'},500,function(){

                                            $('#line3').animate({'backgroundColor':'#ED1C24'},1000,function(){
                                                $('#point3 .icon').animate({'backgroundColor':'#ED1C24'},1000,function(){
                                                    $('#step3 span').animate({'color':'#ED1C24'},500,function(){
                                                        $('#step3 p').animate({'backgroundColor':'#14E06E'},500);
                                                        $('#step3 p').animate({'color':'rgba(29, 40, 47, 0.8)'},500,function(){

                                                            $('#line4').animate({'backgroundColor':'#ED1C24'},1000,function(){
                                                                $('#point4 .icon').animate({'backgroundColor':'#ED1C24'},1000,function(){
                                                                    $('#step4 span').animate({'color':'#ED1C24'},500,function(){
                                                                        $('#step4 p').animate({'color':'rgba(29, 40, 47, 0.8)'},500, function(){

                                                                            $('#line5').animate({'backgroundColor':'#ED1C24'},1000,function(){
                                                                                $('#point5 .icon').animate({'backgroundColor':'#ED1C24'},1000,function(){
                                                                                    $('#step5 span').animate({'color':'#ED1C24'},500,function(){
                                                                                        $('#step5 p').animate({'color':'rgba(29, 40, 47, 0.8)'},500,function(){

                                                                                            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                                                                                            $('#moneyb .currency').animateNumber({
                                                                                                number: 75000,
                                                                                                numberStep: comma_separator_number_step
                                                                                            },2000);

                                                                                            $('#line6').animate({'backgroundColor':'#ED1C24'},3000,function(){
                                                                                                $('#point6 .icon').animate({'backgroundColor':'#ED1C24'},1000,function(){
                                                                                                    $('#step6 span').animate({'color':'#ED1C24'},500,function(){
                                                                                                        $('#step6 p').animate({'color':'rgba(29, 40, 47, 0.8)'},500,function(){

                                                                                                            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                                                                                                            $('#moneyb .currency').animateNumber({
                                                                                                                number: 150000,
                                                                                                                numberStep: comma_separator_number_step
                                                                                                            },2000);
                                                                                                            
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });

                                                                                        });
                                                                                    });
                                                                                });
                                                                            });

                                                                        });
                                                                    });
                                                                });
                                                            });

                                                        });
                                                    });
                                                });
                                            });

                                        });
                                    });
                                });
                            });


                        });
                    });
                });
            });
        }


	})
})( jQuery );