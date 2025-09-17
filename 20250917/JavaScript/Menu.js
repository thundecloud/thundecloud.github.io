// 导航栏功能
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换功能
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // 切换图标
            const icon = this.querySelector('i') || this;
            if (navMenu.classList.contains('active')) {
                icon.innerHTML = '✕';
            } else {
                icon.innerHTML = '☰';
            }
        });
    }
    
    // 点击菜单项时关闭移动端菜单
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                if (menuToggle) {
                    const icon = menuToggle.querySelector('i') || menuToggle;
                    icon.innerHTML = '☰';
                }
            }
        });
    });
    
    // 窗口大小改变时处理菜单状态
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                const icon = menuToggle.querySelector('i') || menuToggle;
                icon.innerHTML = '☰';
            }
        }
    });
    
    // 高亮当前页面的导航项
    function highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath || 
                (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    // 页面加载时高亮当前页面
    highlightCurrentPage();
    
    // 平滑滚动到锚点（如果使用页内链接）
    navLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });
});