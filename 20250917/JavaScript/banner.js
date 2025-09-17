// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化Swiper
    const swiper = new Swiper('.swiper-container', {
        // 基本配置
        speed: 1000,                    // 切换速度1000毫秒
        loop: true,                     // 启用循环模式
        
        // 自动播放配置
        autoplay: {
            delay: 5000,                // 每5秒自动切换
            stopOnLastSlide: false,     // 不在最后一张停止
            disableOnInteraction: true, // 用户交互后停止自动播放
            pauseOnMouseEnter: true,    // 鼠标悬停时暂停
        },
        
        // 切换效果
        effect: 'slide',                // 滑动效果
        
        // 分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,            // 可点击
            bulletActiveClass: 'swiper-pagination-bullet-active',
        },
        
        // 导航箭头
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // 触摸滑动
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
        
        // 键盘控制
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        // 响应式断点
        breakpoints: {
            320: {
                spaceBetween: 10,
            },
            768: {
                spaceBetween: 20,
            },
            1024: {
                spaceBetween: 30,
            },
        },
        
        // 事件回调
        on: {
            init: function () {
                console.log('Swiper初始化完成');
            },
            slideChange: function () {
                // 可以在这里添加切换时的自定义效果
                console.log('当前幻灯片索引:', this.activeIndex);
            },
            autoplayStop: function () {
                console.log('自动播放已停止');
            }
        }
    });

    // 按钮点击事件
    const ctaButton = document.querySelector('.btn-cta');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('欢迎开始您的旅程！');
            // 这里可以添加实际的业务逻辑
        });
    }

    // 可选：添加键盘快捷键控制
    document.addEventListener('keydown', function(e) {
        if (swiper) {
            if (e.key === 'ArrowLeft') {
                swiper.slidePrev();
            } else if (e.key === 'ArrowRight') {
                swiper.slideNext();
            } else if (e.key === ' ') {
                e.preventDefault();
                if (swiper.autoplay.running) {
                    swiper.autoplay.stop();
                } else {
                    swiper.autoplay.start();
                }
            }
        }
    });
});