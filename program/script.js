// تابعی برای ارسال فرم تماس
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('پیام شما ارسال شد! از پیام شما سپاسگزاریم.');
      return true;
    } else {
      alert('لطفاً تمامی فیلدها را پر کنید.');
      return false;
    }
  }