$(function () {
    // loading
    $(function () {
        var webStorage = function () {
            if (sessionStorage.getItem('access')) {
                /*2回目以降アクセス時の処理*/
                let header = document.querySelector('#splash');
                const displayOriginal = header.style.display;
                // $("#splash-logo").delay(0).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
                //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる  
                $("#splash").delay(0).fadeOut('slow', function () {//機能編 4-2-1 背景色が伸びる（下から上）が動作した後に下記アニメーションを実行
                    $('body').addClass('appear');//機能編 4-2-1 背景色が伸びる（下から上）
                    $(".open").each(function (index, element) {	//openクラスを取得
                        var Title = $(element).children('.title');	//openクラスの子要素のtitleクラスを取得
                        $(Title).addClass('close');				///タイトルにクラス名closeを付与し
                        var Box = $(element).children('.box');	//openクラスの子要素boxクラスを取得
                        $(Box).slideDown(500);					//アコーディオンを開く
                    });
                });
            // 非表示
            header.style.display = 'none';
            } else {
                /*初回アクセス時の処理*/
                sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
                $(window).on('load', function () {
                    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
                    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる  
                    $("#splash").delay(1300).fadeOut('slow', function () {//機能編 4-2-1 背景色が伸びる（下から上）が動作した後に下記アニメーションを実行
                        $('body').addClass('appear');//機能編 4-2-1 背景色が伸びる（下から上）
                        $(".open").each(function (index, element) {	//openクラスを取得
                            var Title = $(element).children('.title');	//openクラスの子要素のtitleクラスを取得
                            $(Title).addClass('close');				///タイトルにクラス名closeを付与し
                            var Box = $(element).children('.box');	//openクラスの子要素boxクラスを取得
                            $(Box).slideDown(500);					//アコーディオンを開く
                        });
                    });
                });
            }
        }
        webStorage();
    });
    // $(window).on('load', function () {
    // 	$("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    // 	//=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる  
    // 	$("#splash").delay(1300).fadeOut('slow', function () {//機能編 4-2-1 背景色が伸びる（下から上）が動作した後に下記アニメーションを実行
    // 		$('body').addClass('appear');//機能編 4-2-1 背景色が伸びる（下から上）
    // 		$(".open").each(function (index, element) {	//openクラスを取得
    // 			var Title = $(element).children('.title');	//openクラスの子要素のtitleクラスを取得
    // 			$(Title).addClass('close');				///タイトルにクラス名closeを付与し
    // 			var Box = $(element).children('.box');	//openクラスの子要素boxクラスを取得
    // 			$(Box).slideDown(500);					//アコーディオンを開く
    // 		});
    // 	});
    // });

// wow animate
new WOW().init();
wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)

// header
$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});
$(".g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});

// スムーススクロール //
$('a[href^="#"]').on('click', function () {
    var header = $('.header').innerHeight();
    var id = $(this).attr('href');
    var position = 0;
    if (id != '#') {
        var position = $(id).offset().top - header;
    }
    $('html, body').animate({
        scrollTop: position
    }, 800);
});
var headerHeight = $('.header').outerHeight();
var urlHash = location.hash;
var animeSpeed = 500;
if (urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({ scrollTop: position }, animeSpeed);
    }, 100);
}

// リンクスクロール
$('a[href^="#"]').on('click', function () {
    var header = $('.header').innerHeight();
    var id = $(this).attr('href');
    var position = 0;
    if (id != '#') {
        var position = $(id).offset().top - header;
    }
    $('html, body').animate({
        scrollTop: position
    }, 1000);
});

// top_link表示
jQuery(window).on('scroll', function () {
    if (100 < jQuery(this).scrollTop()) {
        jQuery('.top_link').addClass('add-scrolled');
    } else {
        jQuery('.top_link').removeClass('add-scrolled');
    }
});

});
