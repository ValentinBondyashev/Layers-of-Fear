

$(document).ready(function(){
   $(".popup").magnificPopup(); 
});

function slowScroll (id) {
        var offset = 0;
        $('html, body').animate ({
            scrollTop: $(id).offset ().top - offset
        },500);
        return false;
    }
$(function() {
    $('.slid').slick({
         dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 805,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
    
	
    "use strict";
    var appendLi,
        slide,
        autoRun,
        interval_id,
        slider = $(".slider"),
        sliderUl = slider.find("ul"),
        sliderUlLi = sliderUl.find("li"),
        sliderOl = slider.find("ol"),
        sliderOlLi = sliderOl.find("li"),
        sectionDiv = slider.find("section > div");

    $(document).keydown(function(e) {
        if (e.keyCode == 39) {
            sliderUlLi.click();
        }
    });

    function changeBackground(elem) {
        $(".parent").css(
            "background-image",
            "url(" + elem.find("img").attr("src") + ")"
        );
    }

    function startSlider() {
        appendLi = sliderOl.find("li:first");
        sliderOl.append(appendLi);
    }
    startSlider();

    function gsapSlider(elem) {
        if (elem.hasClass("active")) {
            TweenMax.set(sectionDiv, { autoAlpha: 0 });
            TweenMax.set(elem, { autoAlpha: 1 });
            TweenMax.from(elem.find("h2, p"), 0.75, { x: -150, autoAlpha: 0 });
            TweenMax.from(elem.find("img"), 0.75, {
                scale: 0.05,
                autoAlpha: 0,
                rotation: 90,
                borderRadius: "100%"
            });
        }
        TweenMax.from(sliderOlLi, 0.75, { x: -100 });
    }
    function runSlider(elem) {
        elem.addClass("active").siblings("div").removeClass("active");
        startSlider();
        gsapSlider(elem);
        changeBackground(elem);
    }

    sliderUlLi.on("click", function() {
        slide = $(".slider section > div.active").is(":last-of-type")
            ? $(".slider section > div:first")
            : $(".slider section > div.active").next("div");
        runSlider(slide);
    });

    sliderOlLi.on("click", function() {
        slide = $(".slider section > div." + $(this).data("title"));
        runSlider(slide);
    });
 /*$(window)
        .focus(function() {
            if (!interval_id) {
                interval_id = setInterval(function() {
                    sliderUlLi.click();
                }, 6000);
                $(".slider li").on("mouseenter", function() {
                    clearInterval(interval_id);
                });
                $(".slider li").on("mouseleave", function() {
                    interval_id = setInterval(function() {
                        sliderUlLi.click();
                    }, 6000);
                });
            }
        })
        .trigger("focus");

    $(window).blur(function() {
        clearInterval(interval_id);
        interval_id = 0;
    });*/
   
});

