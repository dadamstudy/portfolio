$(document).ready(()=> {
    //상단메뉴
    $(".mainMenu").on("mouseenter focus", ()=> {
        $(".subMenu").stop().slideDown();
        $("#menubg").stop().slideDown();
    });
    $(".subMenu a:last-child").blur(()=> {
        $(".subMenu").stop().slideUp();
    });
    $("#topmenu ul").mouseleave( ()=> {
        $(".subMenu").stop().slideUp();
        $("#menubg").stop().slideUp();
    });

    //슬라이드
    const toLeft = ()=> {
        $('#slide').stop().animate({
            left : '-1200px'
        }, 1000, function(){
            $("#slide").css("left", 0);
            $("#slide").append($("#slide a").first());
        });
}
    setInterval(toLeft, 2800);

    //퀵메뉴 + top 버튼
    const pos = $("#rightside").position().top;
    console.log(pos); //457.5
    $(document).scroll(function(){
        const x = $(document).scrollTop();
        $("#rightside").stop().animate( {top : (pos + x )});
    });
});//js 끝.