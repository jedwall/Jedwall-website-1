
    <!-- background animations -->
    $(document).ready(function() {
        $(".gd").click(function() {
            $(".gdBg").animate({
                width: "100%"
            }, 800);
            $(".gdBg").animate({
                height: "2300px"
            }, 800);
            $("#wrapA").css("display", "block");
        });
    });
    $(document).ready(function() {
        $(".sm").click(function() {
            $(".smBg").animate({
                width: "100%"
            }, 800);
            $(".smBg").animate({
                height: "800px"
            }, 800);
            $("#wrapB").css("display", "block");
        });
    });
    $(document).ready(function() {
        $(".wd").click(function() {
            $(".wdBg").animate({
                width: "100%"
            }, 800);
            $(".wdBg").animate({
                height: "1200px"
            }, 800);
            $("#wrapC").css("display", "block");
        });
    });
    $(document).ready(function() {
        $(".ph").click(function() {
            $(".phBg").animate({
                width: "100%"
            }, 800);
            $(".phBg").animate({
                height: "800px"
            }, 800);
            $("#wrapD").css("display", "block");
        });
    });

    $(document).ready(function() {
        $(".va").click(function() {
            $(".vaBg").animate({
                width: "100%"
            }, 800);
            $(".vaBg").animate({
                height: "800px"
            }, 800);
            $("#wrapE").css("display", "block");
        });
    });

    $(document).ready(function() {
        $(".ai").click(function() {
            $(".aiBg").animate({
                width: "100%"
            }, 800);
            $(".aiBg").animate({
                height: "800px"
            }, 800);
            $("#wrapF").css("display", "block");
        });
    });

    $(document).ready(function() {
        $(".am").click(function() {
            $(".amBg").animate({
                width: "100%"
            }, 800);
            $(".amBg").animate({
                height: "800px"
            }, 800);
            $("#wrapG").css("display", "block");
        });
    });
    $(document).ready(function() {
        $(".co").click(function() {
            $(".coBg").animate({
                width: "100%"
            }, 800);
            $(".coBg").animate({
                height: "800px"
            }, 800);
            $("#wrapH").css("display", "block");
        });
    });
    $(document).ready(function() {
        $(".ls").click(function() {
            $(".lsBg").animate({
                width: "100%"
            }, 800);
            $(".lsBg").animate({
                height: "800px"
            }, 800);
            $("#wrapI").css("display", "block");
        });
    });
    <!-- modal information -->
    function openModal() {
        document.getElementById('myModal').style.display = "block";
    }

    function closeModal() {
        document.getElementById('myModal').style.display = "none";
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }
