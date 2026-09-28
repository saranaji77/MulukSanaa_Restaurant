// . تفعيل مكتبة Toast Notification للإشعارات 
function triggerToast() {
    Toastify({
        text: "تم بنجاح! شكراً لتواصلك مع مطاعم ملوك صنعاء",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#d4af37",
        style: {
            color: "#1a1a1a",
            fontWeight: "bold"
        }
    }).showToast();
   
    // إغلاق النافذة الأولى بعد التنفيذ
    $('#ajaxModal1').modal('hide');
}

function loadAjaxModal2() {
    const name = document.querySelector('#contactForm input[type="text"]').value;
    const phone = document.querySelector('#contactForm input[type="tel"]').value;
    const message = document.querySelector('#contactForm textarea').value;

    if(!name || !phone || !message) {
        alert("الرجاء تعبئة جميع الحقول المطلوبة قبل الإرسال!");
        return;
    }

    // فتح النافذة المنبثقة Modal 2 فوراً عند الضغط
    $('#ajaxModal2').modal('show');
}

// . التحقق من صحة البيانات Validation 
function validateForm(event) {
    event.preventDefault();
    const pass = document.getElementById('regPass').value;
    if(pass.length < 6) {
        alert("كلمة المرور يجب أن تكون 6 أحرف أو أرقام على الأقل!");
        return;
    }
    alert("تم التحقق من بيانات التسجيل بنجاح!");
    document.getElementById('regForm').reset();
}