$(document).ready(function(){
    $("#menubr").click(function(){
        $(this).toggleClass("fa-times");
        $(".navbar").toggleClass("activeNav");
    });
    $(window).on("load scroll",function(){
        $("section").each(function(){
            var top=$(window).scrollTop();
            var height=$(this).height();
            var id=$(this).attr('id');
            var offset=$(this).offset().top-200;
            if(top>=offset && top<height+offset){
                $(".navbar ul li a").removeClass("active");
                $(".navbar").find(`[href="#${id}"]`).addClass("active");
            }
        });
        $(".navbar").removeClass("activeNav");
        $("#menubr").removeClass("fa-times");
    });

    $('.skillshead').each(function(){
       $(this).click(function(){
            let item;
            const iio=document.getElementsByClassName('skillcnt');
            for(i=0;i<iio.length;i++){
                item=$(this).parents().get(i).className;
                if(item === 'skillcnt skillscl'){
                    $(this).parent().get(i).className='skillcnt skillsop';
               }else{
                    $(this).parent().get(i).className='skillcnt skillscl';
               }
            }
       });

    });

    $("#btn").click(
        function(){
            var n=$("#n").value,
            p=("#p").value,
            nu=("#nu").value,
            e=("#e").value,
            m=("#msg").value;
            if(p!="" && nu!="" && n!="" && e!="" && m!=""){
                window.location="FeedBack.html";
            }
        }
    );

});

var typed=new Typed(".typing",{
    strings : ['Front end developer .','web designer .','graphic designer .','web developer .','desktop application developer .','Android application developer .'],
    loop : true,
    typeSpeed : 500
});

VanillaTilt.init(document.querySelectorAll('.titl'),{
    max : 25
});

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});
function ScrollToping(){
    const scrollTop=document.getElementById("toping");
    if(this.scrollY>=460)
    scrollTop.classList.add('toping2');
    else
    scrollTop.classList.remove('toping2');
}
window.addEventListener('scroll',ScrollToping);









