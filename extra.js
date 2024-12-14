jQuery(document).ready(function( $ ){
    var form_type;
        if ($('body').hasClass('twosteps')) {
                var form_type = 's2';
            }
        else if ($('body').hasClass('threesteps')) {
                var form_type = 's3';
        } else {
                console.log('FORM TYPE NOT DETECTED!!!');
        }
        console.log('FORM TYPE:' + form_type);
        $('body').prepend('<div id="xstep">1</div>');
        var next = $(this).next();
        $('.e-atc-qty-button-holder').addClass('qty_wrap');
        $('input#acf-field_66437ee2a8bc5').addClass('xwidth');
        $('span.width_help').appendTo('.acf-field-66437ee2a8bc5');
        $('span.height_help').appendTo('.acf-field-66437f6ca8bc6');
        $('<input>', {id: 'xpricein', type: 'hidden', name: 'xprice', value: 0}).appendTo('#xresult');
        $('input#acf-field_66437f6ca8bc6').addClass('xheight');
        $('form.cart').eq(0).attr('id', 'xconfgcart');
        $('div#builder_section_3').append('<div class="xindicator"></div>');
        $('button.single_add_to_cart_button_xup').click(function(){
            $('button.single_add_to_cart_button').click();
            return false;
        });
        $('button.single_add_to_cart_button_xup').click(function(){
            $('button.single_add_to_cart_button').click();
            return false;
        });
        $('aside.elementor-element-2f1a5be').appendTo('.elementor-element-19cd38e');
        $('div#step-calc').before('<div class="overlay" id="overlay"></div>');
        $('button.single_add_to_cart_button.button.alt').text('');
        var xprice_min = parseFloat($('input#acf-field_66493dd57e27b').val());
        var xwidth_min = parseFloat($('input#acf-field_66437fcda8bc9').val());
        var xwidth_max = parseFloat($('input#acf-field_66437f98a8bc8').val());
        var xheight_min = parseFloat($('input#acf-field_66437f8ea8bc7').val());
        var xheight_max = parseFloat($('input#acf-field_66437ffca8bca').val());
        var price_base = parseFloat($('input#acf-field_664380c248aca').val());
        var xcalc_def = Math.ceil(price_base * 1.21).toFixed(0);
        var odometer = new Odometer({
            el: $('#totalx_price > span.xodometer')[0],
            theme: 'minimal',
            duration: 1200,
                });
            odometer.render();
        $('#totalx_price > span.xodometer').text(xcalc_def);
        $('.xcalc_box.xshopping > #totalx_shop > div.xdata_price').text(xcalc_def);
        $('<input>', {id: 'prop_panel_tit', type: 'hidden', name: 'prop_panel_tit', value: 'VLASTNOSTI'}).appendTo('.buildsec_three');
        $('input.xwidth').parent().parent().append('<span id="xsize_info">' + xwidth_min + 'mm až ' + xwidth_max + 'mm</span>');
        $('input.xheight').parent().parent().append('<span id="xsize_info">' + xheight_min + 'mm až ' + xheight_max + 'mm</span>');
        $('.e-atc-qty-button-holder > .quantity').append('<div class="help_info_wrap"><span id="help_info_text">POČET KUSŮ<br>V TOMTO PROVEDENÍ</span></div>');
        var le_empty_tit = $('div.le_panel_title_and_desc > h1').text();
        var ri_empty_tit = $('div.ri_panel_title_and_desc > h1').text();
        $('div.le_panel_title_and_desc').append('<em>POVINNÁ VOLBA: ' + le_empty_tit + '</em>');
        $('div.ri_panel_title_and_desc').append('<em>POVINNÁ VOLBA: ' + ri_empty_tit + '</em>');
        $('<input>', {id: 'size_tit', type: 'hidden', name: 'size_tit', value: 'ROZMĚRY'}).appendTo('div#builder_section_1');
        $('<input>', {id: 'le_panel_tit', type: 'hidden', name: 'le_panel_tit', value: le_empty_tit}).appendTo('.le_panel_title_and_desc');
        $('<input>', {id: 'ri_panel_tit', type: 'hidden', name: 'ri_panel_tit', value: ri_empty_tit}).appendTo('.ri_panel_title_and_desc');
         document.addEventListener('DOMContentLoaded', () => {{
        $('button.single_add_to_cart_button').eq(0).attr('form', 'xconfgcart');
        $('.var_set').each(function(){
            $(this).append('<span></span>');
        });
        setTimeout(function(){
            $('.mCSB_draggerRail').each(function(){
                $(this).appendTo($(this).parent().parent());
            });
        }, 1000);
        $('.profile_lamella_rate_class-div ul.tmcp-ul-wrap > li.is-separator').each(function(){
            $(this).nextUntil('.is-separator').wrapAll('<div class="samples_box"></div>');
        });
            $('ul.tmcp-ul-wrap > li.is-separator').each(function() {
                $(this).children().append('<div class="variant_ex_price"></div>');
            });
      var hash = window.location.hash.substr(1);
                    window.location = '#1';
              $('#xstep').html('1');
    }});
    var maxbox = function() {
        $('.js-filter-container').each(function () {
            if ($(this).hasClass('xscroll_to_start')) {
        //		var variant_box = $('.xscroll_main_wrap');
                var variant_height = $(this).children().height();
                var variant_height_double =  variant_height * 2;
                var variant_height_max = variant_height_double + 80;
                $(this).parent().parent().parent().parent().css('max-height', variant_height_max + 'px');
                console.log('max_varbox: ' + variant_height_max);
            }
        });
    };
    setTimeout(function(){
             maxbox();
    }, 2000);
        setTimeout(function(){
                const elements = document.querySelectorAll('dl.variation > dd');
                elements.forEach(e => e.innerText = e.innerText.replaceAll('_', ' '));
        }, 2000);
    $(window).resize(function(){
        maxbox();
    });
    (maxbox);
    $.fn.varboxmax = function() {
        var le_variant_height = $('.ri_panel_attributes_box').height();
        var ri_variant_height = $('.ri_panel_attributes_box').height();
        var le_variant_height_double = le_variant_height * 2;
        var ri_variant_height_double = ri_variant_height * 2;
        var le_variant_height_max = le_variant_height_double + 84;
        var ri_variant_height_max = ri_variant_height_double + 84;
        $('body').get(0).style.setProperty('--le_variant_height_max', le_variant_height_max);
        $('body').get(0).style.setProperty('--ri_variant_height_max', ri_variant_height_max);
        console.log('variant box height is' + le_variant_height_max);
        console.log('variant box height is' + ri_variant_height_max);
    };
    if (form_type === 's3') {
    $(window).on('scroll' , xeventscroll);
    function xeventscroll() {
        var currentVal = parseInt($('#xstep').html());
        var window_height = $(window).height();
        var doc_height = $(document).height();
        var xbottom_form = $('#builder_section_3').position().top + $('#builder_section_3').height();
        var client_position = $(window).scrollTop();
        var client_position_bottom =  client_position + window_height - 240;
        var client_position_bottom_x =  client_position;
        var xbottom_form_out =  client_position_bottom_x - 40;
            if (currentVal === 3 && xbottom_form < client_position_bottom) {
                setTimeout(function(){
                    if (!$('main').hasClass('help_info') && !$('main').hasClass('stop_this')) {
                            $('main').addClass('help_info');
                            console.log('YES');
                    }
                }, 100);
            }
            else if (currentVal === 3 && xbottom_form_out < client_position_bottom) {
                if ($('main').hasClass('help_info')) {
                        $('main').removeClass('help_info');
                        console.log('YES 2');
                }
            }
             else  {
                console.log('NO');
            }
        var xtest = $(window).scrollHeight;
    };
    }
    $('input.xwidth').on('focus', function(event) {
        $(this).parent().parent().toggleClass('in_xactive');
        $(this).parent().parent().parent().toggleClass('in_xactive');
        event.stopPropagation();
    }).blur(function () {
        $(this).parent().parent().removeClass('in_xactive');
        $(this).parent().parent().parent().removeClass('in_xactive');
    });
    $('input.xheight').on('focus', function(event) {
        $(this).parent().parent().toggleClass('in_xactive');
        $(this).parent().parent().parent().toggleClass('in_xactive');
        event.stopPropagation();
    }).blur(function () {
        $(this).parent().parent().removeClass('in_xactive');
        $(this).parent().parent().parent().removeClass('in_xactive');
    });
    $('input.xheight').keydown(function(event) {
    if(event.keyCode === 9)	{return false;}
    });
    $('.xcalc_box.xshopping').on('click', function(e) {
            $('main').addClass('stop_this');
        setTimeout(function(){
            $('main').removeClass('stop_this');
        }, 2000);
        maxbox();
        setTimeout(function(){
             maxbox();
        }, 200);
        var currentVal = parseInt($('#xstep').html());
        var xwidth = $('.xwidth').val();
        var xheight = $('.xheight').val();
        var xwidth_check = (xwidth < xwidth_min) || (xwidth > xwidth_max);
        var xheight_check = (xheight < xheight_min) || (xheight > xheight_max);
        var xwidth_check_empty = (xwidth.length === 0);
        var xheight_check_empty = (xheight.length === 0);
        var color_profile_not_empty = $('div#le_panel_id .le_panel_attributes_box').hasClass('tc-active');
        var color_lamella_not_empty = $('div#ri_panel_id .ri_panel_attributes_box, div#ri_panel_prop_id .propertie_attributes').hasClass('tc-active');
        var cart_check = $('htmll').hasClass('vi-wcaio-html-non-scroll');
            if (cart_check) {
            } else {
         if (xwidth_check || xheight_check || xwidth_check_empty || xheight_check_empty) {
            e.preventDefault();
            $('main.product-type-simple').addClass('this_way');
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $('div#step-calc').offset().top -100
                }, 1000);
             }, 200);
                if (xwidth_check_empty && xheight_check_empty){
                    setTimeout(function () {
                        $('input.xwidth').focus();
                        $('input.xwidth').parent().parent().addClass('in_xactive');
                        $('input.xwidth').parent().parent().parent().addClass('in_xactive');
                    }, 1000);
                }
                else if (xwidth_check_empty){
                    setTimeout(function () {
                        $('input.xwidth').focus();
                        $('input.xwidth').parent().parent().addClass('in_xactive');
                        $('input.xwidth').parent().parent().parent().addClass('in_xactive');
                    }, 1000);
                }
                else if (xheight_check_empty){
                    setTimeout(function () {
                        $('input.xheight').focus();
                        $('input.xheight').parent().parent().addClass('in_xactive');
                        $('input.xheight').parent().parent().parent().addClass('in_xactive');
                    }, 1000);
                }
                else if (xwidth_check && xheight_check){
                    setTimeout(function () {
                        $('input.xwidth').focus();
                        $('input.xwidth').parent().parent().addClass('length_bad in_xactive');
                        $('input.xwidth').parent().parent().parent().addClass('in_xactive');
                        $('input.xwidth').parent().parent().addClass('length_bad');
                        $('input.xheight').parent().parent().addClass('length_bad');
                    }, 1000);
                }
                else if (xwidth_check && !xheight_check){
                    $('input.xheight').parent().parent().removeClass('length_bad in_xactive');
                    $('input.xheight').parent().parent().parent().removeClass('in_xactive');
                    setTimeout(function () {
                        $('input.xwidth').focus();
                        $('input.xwidth').parent().parent().addClass('length_bad in_xactive');
                        $('input.xwidth').parent().parent().parent().addClass('in_xactive');
                    }, 1000);
                }
                else if (xheight_check && !xwidth_check){
                    $('input.xwidth').parent().parent().removeClass('length_bad in_xactive');
                    $('input.xwidth').parent().parent().parent().removeClass('in_xactive');
                    setTimeout(function () {
                        $('input.xheight').focus();
                        $('input.xheight').parent().parent().addClass('length_bad in_xactive');
                        $('input.xheight').parent().parent().parent().addClass('in_xactive');
                    }, 1000);
                }
                else{
                        $('input.xheight').parent().parent().removeClass('length_bad');
                        $('input.xwidth').parent().parent().removeClass('length_bad');
                        $.fn.varboxmax();
                }
        }
         else if ((currentVal === 2) && (color_profile_not_empty === false || color_lamella_not_empty === false)) {
            if (color_profile_not_empty === false || color_lamella_not_empty === false){
                e.preventDefault();
                console.log('EMPTY_COLOR_AND_LAMELL');
                $('main.product-type-simple').addClass('this_way x_color_empty_profile');
                $('main.product-type-simple').addClass('this_way x_color_empty_lamella');
                if (color_profile_not_empty === false && color_lamella_not_empty === true){
                    e.preventDefault();
                    $('main.product-type-simple').removeClass('this_way x_color_empty_lamella');
                    $('main.product-type-simple').addClass('this_way x_color_empty_profile');
                    setTimeout(function () {
                        $('html, body').animate({
                            scrollTop: $('.le_panel_title_and_desc').offset().top -100
                        }, 1000);
                     }, 200);
                    console.log('SCROLL_COLOR');
                }
                else if (color_lamella_not_empty === false && color_profile_not_empty === true) {
                    e.preventDefault();
                    $('main.product-type-simple').removeClass('this_way x_color_empty_profile');
                    $('main.product-type-simple').addClass('this_way x_color_empty_lamella');
                    setTimeout(function () {
                        $('html, body').animate({
                            scrollTop: $('.ri_panel_title_and_desc').offset().top -100
                        }, 1000);
                     }, 200);
                    console.log('SCROLL_LAMELL');
                }
            }
        }
        else if (form_type === 's2' && currentVal === 2 || form_type === 's3' && currentVal === 3) {
             $('body').addClass('xcart_spinner');
             $('button.single_add_to_cart_button').click();
        } else {
                if (!xwidth_check || !xheight_check || !xwidth_check_empty || !xheight_check_empty) {
                        $('.iprice.shop').addClass('xshift_text');
                    setTimeout(function () {
                        $('.iprice.shop > div.x_start').text('');
                        $('.iprice.shop > div.x_end').text('v této konfiguraci');
                    }, 2500);
                    setTimeout(function () {
                        $('.iprice.shop').removeClass('xshift_text');
                    }, 3000);
                }
                $('div#step-calc').addClass('card-loader xopacity');
                $('main.product-type-simple').removeClass('this_way x_color_empty_profile x_color_empty_lamella ');
                $('input.xheight').parent().parent().removeClass('length_bad');
                $('input.xwidth').parent().parent().removeClass('length_bad');
                var get_flat_price = parseFloat($(this).children().find('span.flat_price').html().replace(/[^\d.,]/g, ''));
                var get_flat_price_vat = parseFloat($(this).children().find('span.flat_price_vat').html().replace(/[^\d.,]/g, ''));
            setTimeout(function () {
                $('.var_set').each(function() {
                    var cat_coeff = parseFloat($(this).find('em').html().replace(/[^\d.,]/g, ''));
                    var ex_price = get_flat_price * cat_coeff;
                    var ex_rate = ex_price - get_flat_price;
                    var ex_rate_fix = ex_rate.toFixed(0);
                    var xresult = Number(ex_rate_fix.toString().slice(ex_rate_fix.toString().indexOf('.')+1)).toLocaleString();
                    var xresult_vat = (xresult * 1.21).toFixed(0);
                    console.log('xresult: ' + xresult);
                    if (ex_rate === 0) {
                        $(this).find('span').text('BEZ PŘÍPLATKU');
                    } else {
                    $(this).find('span').text('+ ' +  xresult_vat + ' Kč');
                    }
                });
            }, 1000);
        setTimeout(function () {
            $('div#step-calc').removeClass('xopacity');
        }, 400);
        setTimeout(function () {
            $('div#step-calc').removeClass('card-loader');
        }, 800);
          $('a.owl-next.button').click();
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: $('.elementor-element-f1143aa').offset().top -100
            }, 1000);
        }, 200);
        if (currentVal <= '2') {
                window.location.hash = currentVal + 1;
                $('main').attr('step', currentVal + 1);
                $('body').attr('step', currentVal + 1);
                  $('#xstep').html(currentVal + 1);
            }
            setTimeout(function () {
                var xbottom = $('.elementor-element-f1143aa').position().top + $('.elementor-element-f1143aa').height();
                console.log(xbottom);
             }, 200);
        }}
    });
    $('.xbar_left.shopping').on('click', function() {
          $('a.owl-prev.button').click();
        var currentVal = parseInt($('#xstep').html());
        if (currentVal > 1) {
                window.location.hash = currentVal - 1;
                $('main').attr('step', currentVal - 1);
                $('body').attr('step', currentVal - 1);
                  $('#xstep').html(currentVal - 1);
                console.log('more_one: ' + currentVal);
        }
        if (currentVal === 2) {
            $('.iprice.shop').addClass('xshift_text');
            setTimeout(function () {
                $('.iprice.shop > div.x_start').text('Základní cena za');
                $('.iprice.shop > div.x_end').text('');
            }, 3500);
            setTimeout(function () {
                $('.iprice.shop').removeClass('xshift_text');
            }, 4000);
        }
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: $('.elementor-element-f1143aa').offset().top -100
            }, 1000);
        }, 200);
        $('div#step-calc').addClass('card-loader xopacity');
        setTimeout(function () {
            $('div#step-calc').removeClass('xopacity');
        }, 400);
        setTimeout(function () {
            $('div#step-calc').removeClass('card-loader');
        }, 800);
    });
    $('body').click(function(event){
      if (!$(event.target).closest(".elementor-element-d98313c, .xbar_wrap").length) {
          $(this).find('main').removeClass('this_way');
    }});
    $('#form').submit(function(e) {
        if ($.trim($('#email, #user_name').val()) === "") {
            e.preventDefault();
        }
    });
    $('.propertie_attributes_all > .propertie_attributes').on('click', function() {
            var att_value = $(this).find('.attribute_name').text();
            var att_title = $(this).parent().prevAll('.propertie_title').find('h2').text();
            var att_fee = $(this).find('span').text();
            var att_airport_clean = $(this).siblings().children('fieldset');
            var att_airport_checkin = $(this).children('fieldset').children().length;
            var att_airport = $(this).children('fieldset');
            $(this).siblings().removeClass('tc-active');
            $(this).toggleClass('tc-active');
            att_airport_clean.empty();
            console.log(att_airport_checkin);
            $(this).each(function() {
             if (att_airport_checkin === 0) {
                $('<input>', {type: 'hidden', name: 'xdynamic_title[]', value: att_title}).appendTo(att_airport);
                $('<input>', {type: 'hidden', name: 'xdynamic[]', value: att_value}).appendTo(att_airport);
                if (att_fee !== '0'  ) {
                     $('<input>', {type: 'hidden', name: 'xdynamic_fee[]', value: ' + ' + att_fee + ' Kč'}).appendTo(att_airport);
                } else  {
                     $('<input>', {type: 'hidden', name: 'xdynamic_fee[]', value: '_'}).appendTo(att_airport);
                }
             }});
        $.fn.myFunction();
    });
    $('input.acf-is-appended').on('input', function(){
            var xwidth = $('.xwidth').val();
            var xheight = $('.xheight').val();
            var this_xwidth = $(this).hasClass('xwidth');
            var this_xheight = $(this).hasClass('xheight');
            var xrange_ok = $(this).parent().parent().hasClass('xgood');
            var xwidth_range_check = xwidth >= xwidth_min && xwidth <= xwidth_max;
            var xheight_range_check = xheight >= xheight_min && xheight <= xheight_max;
                if (this_xwidth && xwidth_range_check){
                        $(this).parent().parent().addClass('xgood');
                        $(this).parent().parent().removeClass('length_bad');
                }
                else if (this_xwidth && !xwidth_range_check){
                        $(this).parent().parent().removeClass('xgood');
                }
                if (this_xheight && xheight_range_check){
                        $(this).parent().parent().addClass('xgood');
                        $(this).parent().parent().removeClass('length_bad');
                }
                else if (this_xheight && !xheight_range_check){
                        $(this).parent().parent().removeClass('xgood');
                }
                if (xwidth_range_check && xheight_range_check){
                        $('body').removeClass('s1_noready');
                        $('body').addClass('s1_ready');
                }
                else if (!xwidth_range_check || !xheight_range_check){
                        $('body').addClass('s1_noready');
                        $('body').removeClass('s1_ready');
                }
            var xwidth_unit = xwidth / 1000;
            var xheight_unit = xheight / 1000;
            var flat = xwidth_unit * xheight_unit;
            var price_base = parseFloat($('input#acf-field_664380c248aca').val());
            var flat_price = flat * price_base;
            var flat_price_vat = Math.ceil(flat_price * 1.21).toFixed(0);
            $('.xcalc_box.xshopping > div > span.msquare').text(flat);
            $('.xcalc_box.xshopping > div > span.flat_price').text(flat_price);
            $('.xcalc_box.xshopping > div > span.flat_price_vat').text(flat_price_vat);
            $.fn.myFunction();
    });
    $('ul.tm-extra-product-options-radio > li').each(function() {
                $(this).parents('li.tm-per-row').attr('extra_price', '0');
    });
    $('ul.tm-extra-product-options-radio > li i').each(function() {
                var extra_rate = $(this).attr('data-tm-tooltip-html');
                var extra_rate_vat = extra_rate * 1.21;
                var extra_rate_show = extra_rate_vat.toFixed(0);
                $(this).parents('li.tm-per-row').attr('extra_price', extra_rate);
                $(this).parent().append('<div class="plus_price">+ ' + extra_rate_show + ' Kč</div>');
    });
    $('ul.tm-extra-product-options-radio.extra_pads-ul > li').on('click', function() {
                 var extra_price = $(this).attr('extra_price');
                $('.xcalc_box.xshopping > div').attr('extra_price', extra_price);
                $('.xcalc_box.xshopping > div > span.extra_pads').text(extra_price);
                $.fn.myFunction();
    });
    $('ul.tm-extra-product-options-radio.security_element-ul > li').on('click', function() {
                 var extra_price = $(this).attr('extra_price');
                $('.xcalc_box.xshopping > div').attr('extra_price', extra_price);
                $('.xcalc_box.xshopping > div > span.security_element').text(extra_price);
                $.fn.myFunction();
    });
    $('ul.tm-extra-product-options-radio.extra_brake-ul > li').on('click', function() {
                 var extra_price = $(this).attr('extra_price');
                $('.xcalc_box.xshopping > div').attr('extra_price', extra_price);
                $('.xcalc_box.xshopping > div > span.extra_brake').text(extra_price);
                $.fn.myFunction();
    });
    $('ul.tm-extra-product-options-radio.extra_eclipse-ul > li').on('click', function() {
                 var extra_price = $(this).attr('extra_price');
                $('.xcalc_box.xshopping > div').attr('extra_price', extra_price);
                $('.xcalc_box.xshopping > div > span.extra_eclipse').text(extra_price);
                $.fn.myFunction();
    });
    function prop_counter() {
         $('.panels_wrap .propertie_attributes_all').each(function() {
            var prop_counter = $(this).children().length;
            if (prop_counter === 3){
                $(this).addClass('three_and_more');
            }
            else if (prop_counter >= 4){
                $(this).addClass('four_and_more');
            }
            console.log('prop_counter: ' + prop_counter);
        });
    }
    prop_counter();
    $('.propertie_attributes_all > .propertie_attributes').each(function() {
            var xfee_check = Number.parseFloat($(this).find('span').text()) > 0;
            if (!xfee_check){
                    $(this).find('span').addClass('fee_none');
                    console.log('supershit');
            }
    });
    $.fn.current_step = function(){
    };
    $.fn.myFunction = function(){
            var xwidth = $('.xwidth').val();
            var xheight = $('.xheight').val();
            var xwidth_min = parseFloat($('input#acf-field_66437fcda8bc9').val());
            var xwidth_max = parseFloat($('input#acf-field_66437f98a8bc8').val());
            var xheight_min = parseFloat($('input#acf-field_66437f8ea8bc7').val());
            var xheight_max = parseFloat($('input#acf-field_66437ffca8bca').val());
            var xwidth_check = (xwidth < xwidth_min) || (xwidth > xwidth_max);
            var xheight_check = (xheight < xheight_min) || (xheight > xheight_max);
            var xwidth_check_empty = (xwidth.length === 0);
            var xheight_check_empty = (xheight.length === 0);
            var xprice_min = parseFloat($('input#acf-field_66493dd57e27b').val());
            var sum_rates = 0;
             $('.propertie_attributes_all > .propertie_attributes').each(function() {
            var att_selected = $(this).hasClass('tc-active');
            if (att_selected){
                        var get_rate = $(this).find('span').text() || 0;
                        sum_rates += parseFloat(get_rate);
                    }
            });
            var get_msquare = parseFloat($('.xcalc_box.xshopping > div > span.msquare').text().replace(/[^\d.,]/g, ''));
            var profile_color_price = parseFloat($('.xcalc_box.xshopping > div > span.profile_color_price').text().replace(/[^\d.,]/g, '')) || 0;
            var profile_lamella_price = parseFloat($('.xcalc_box.xshopping > div > span.profile_lamella_price').text().replace(/[^\d.,]/g, '')) || 0;
            var get_flat_price = parseFloat($('.xcalc_box.xshopping > div > span.flat_price').text().replace(/[^\d.,]/g, ''));
                if ( (!xwidth_check_empty && !xheight_check_empty) || (!xwidth_check && !xheight_check) ) {
                     if (get_flat_price <= xprice_min) {
                            get_flat_price = xprice_min;
                    }
                }
            var xcalc = profile_color_price + profile_lamella_price + get_flat_price + sum_rates;
            var xtotal = Math.ceil(xcalc * 1.21).toFixed(0);
            var xtotal_no_ceil = (xcalc * 1.21).toFixed(0);
            var xtotal_msquare_target = $('.iprice > span');
            var xtotal_msquare = get_msquare.toFixed(2);
            var xtotal_data = $('#totalx_shop > div.xdata_price');
            var xtotal_target = $('#totalx_price > span');
            console.log('xtotal_no_ceil: ' + xtotal_no_ceil);
            if (!xwidth_check && !xheight_check){
                    $(xtotal_data).text(xtotal_no_ceil);
                    $(xtotal_target).text(xtotal_no_ceil);
                    $(xtotal_msquare_target).text(xtotal_msquare);
            }
            $('input#xpricein').val(xcalc);
            console.log('MIN PRICE: ' + xprice_min);
        };
    $.fn.myFunction();
    $('button.xb_add').on('click', function() {
            $('#qsender > .acf-input > .acf-input-wrap > input').val(parseInt($('#qsender > .acf-input > .acf-input-wrap > input').val()) + 1);
              console.log('qsender: PLUS');
              $('input#acf-field_66931b8ee80b9').trigger('change');
          });
          $('button.xb_sub').on('click', function() {
            var currentValue = parseInt($('#qsender > .acf-input > .acf-input-wrap > input').val());
            if (currentValue > 1) {
              $('#qsender > .acf-input > .acf-input-wrap > input').val(currentValue - 1);
              $('input#acf-field_66931b8ee80b9').trigger('change');
            }
        });
        $('input#acf-field_66931b8ee80b9').on('keydown keyup change',function(){
            $('input[name="quantity"]').val($(this).val());
        });
    $('.xcolor_att').on('click', function() {
            var att_title = $(this).parents('.x_variant_attributes').prev().find('h2').text();
            var att_parent_le = $(this).parents('#le_panel_id').length === 1;
            var att_parent_ri = $(this).parents('#ri_panel_id').length === 1;
            var att_value = $(this).find('.x_attribute_name').text();
            var att_airport_clean = $(this).siblings().children('fieldset');
            var att_airport = $(this).children('fieldset');
            var att_airport_checkin = $(this).children('fieldset').children().length;
            var my_coeff = parseFloat($(this).closest('.xscroll_main_wrap').prev().find('em').text().replace(/[^\d.,]/g, ''));
            var get_flat_price = parseFloat($('.xcalc_box.xshopping > div > span.flat_price').text().replace(/[^\d.,]/g, ''));
            var profile_color_rate = my_coeff * get_flat_price;
            var profile_color_price = profile_color_rate - get_flat_price;
            var profile_color_price_fix = Number(parseFloat(profile_color_price).toFixed(0));
            console.log('att_parent_li is: ' + att_parent_le);
            console.log('att_parent_ri is: ' + att_parent_ri);
            att_airport_clean.empty();
            $(this).each(function() {
             if (att_airport_checkin === 0) {
                $('<input>', {type: 'hidden', name: 'xcolor_title[]', value: att_title}).appendTo(att_airport);
                $('<input>', {type: 'hidden', name: 'xcolor[]', value: att_value}).appendTo(att_airport);
                if (profile_color_price !== 0 ) {
                    $('<input>', {type: 'hidden', name: 'xcolor_fee[]', value: ' + ' + profile_color_price_fix + ' Kč'}).appendTo(att_airport);
                } else  {
                     $('<input>', {type: 'hidden', name: 'xdynamic_fee[]', value: '_'}).appendTo(att_airport);
                }
             }});
            if (att_parent_le === true && att_parent_ri === false){
                $('.xcalc_box.xshopping > div > span.profile_color_price').text(profile_color_price_fix);
                $('#le_panel_id .attsel').each(function() {
                        $(this).removeClass('tc-active');
                });
            }
            else if (att_parent_le === false && att_parent_ri === true){
                $('.xcalc_box.xshopping > div > span.profile_lamella_price').text(profile_color_price_fix);
                $('#ri_panel_id .attsel').each(function() {
                        $(this).removeClass('tc-active');
                });
            }
            $(this).toggleClass('tc-active');
            $.fn.myFunction();
            var currentVal = parseInt($('#xstep').html());
            var xreq = $('main[step="' + currentVal + '"] #builder_section_' + currentVal + ' [xreq="req_yes"]');
            var i = 0;
            $.each(xreq, function(i, item) {
            $(this).attr('xchose', 'yes');
            if(++i > 1) {
                    if($(this).find('.tc-active').length !== 0) {
                        $('body').addClass('s' + currentVal + '_ready');
                    } else {
                        $('body').removeClass('s' + currentVal + '_ready');
                    }
                }});
    });
    });
