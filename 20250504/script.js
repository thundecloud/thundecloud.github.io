document.addEventListener('DOMContentLoaded', () => {
  const videoModal = document.getElementById('videoModal');
  const regionVideo = document.getElementById('regionVideo');
  const regions = document.querySelectorAll('.region');

 // 检查微信内置浏览器的用户代理
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes('micromessenger')) {
    wechatWarning.classList.remove('hidden');
    return; // 如果在微信中打开，则不需要执行后续的 JavaScript
  }

  regions.forEach(region => {
    region.addEventListener('click', (e) => {
      const videoSrc = e.currentTarget.getAttribute('data-video');
      regionVideo.src = videoSrc;
      videoModal.classList.remove('hidden');
      regionVideo.play().catch(error => {
        console.error('自动播放失败:', error);
      });
    });
  });

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoModal.classList.add('hidden');
      regionVideo.pause();
      regionVideo.src = ''; // 重置视频源以停止下载
    }
  });
});
