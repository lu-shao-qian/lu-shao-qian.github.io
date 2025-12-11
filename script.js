// 简单的交互：导航开关 & 表单提交反馈
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
  });

  // 自动填充当前年份
  document.getElementById('year').textContent = new Date().getFullYear();

  // 表单提交处理：如果使用 Formspree，form 默认会跳转。这里阻止默认并使用 fetch 显示友好提示。
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '发送中…';
    const formData = new FormData(form);

    // 如果你想使用 Formspree 的 AJAX API，确保 action 是 Formspree 的 endpoint
    try {
      const resp = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' },
      });
      if (resp.ok) {
        status.textContent = '已发送，谢谢！我会尽快回复你。';
        form.reset();
      } else {
        const data = await resp.json();
        status.textContent = data.error || '发送失败，请稍后重试或直接发送邮件。';
      }
    } catch (err) {
      status.textContent = '网络错误，请稍后重试或发送邮件到 you@example.com';
    }

    // 若你不使用 Formspree，可以在此发送到你自己的 API
  });
});
