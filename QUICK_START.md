# دليل البدء السريع - InsightCV

## 🚀 ابدأ في 5 دقائق!

### المتطلبات
- ✅ PHP 8.2+
- ✅ Composer
- ✅ Node.js 16+
- ✅ npm

---

## خطوة 1️⃣: تثبيت Backend

```bash
# انتقل إلى مجلد Backend
cd backend

# تثبيت التبعيات
composer install

# نسخ ملف البيئة
copy .env.example .env

# توليد مفتاح التطبيق
php artisan key:generate

# إنشاء قاعدة البيانات
type nul > database/database.sqlite

# تشغيل Migrations
php artisan migrate

# إنشاء رابط التخزين
php artisan storage:link

# تشغيل السيرفر
php artisan serve
```

✅ Backend جاهز على: http://localhost:8000

---

## خطوة 2️⃣: تثبيت Frontend

افتح نافذة Terminal جديدة:

```bash
# انتقل إلى مجلد Frontend
cd frontend

# تثبيت التبعيات
npm install

# نسخ ملف البيئة
copy .env.example .env

# تشغيل السيرفر
npm start
```

✅ Frontend جاهز على: http://localhost:3000

---

## خطوة 3️⃣: جرب المنصة!

### للمرشحين:
1. سجل حساب جديد (اختر "مرشح")
2. أكمل ملفك الشخصي
3. ارفع سيرتك الذاتية
4. جرب المقابلة الذكية
5. ابحث عن وظائف وقدّم عليها

### للشركات:
1. سجل حساب جديد (اختر "شركة")
2. أكمل ملف الشركة
3. انشر وظيفة جديدة
4. تصفح المرشحين المقترحين
5. راجع الطلبات

---

## 🎯 الميزات الأساسية (تعمل بدون API Keys)

### ✅ تحليل السيرة الذاتية
- رفع PDF/DOC/DOCX
- تحليل تلقائي للمهارات
- تقييم شامل
- اقتراحات للتحسين

### ✅ المقابلة الذكية
- 10 أسئلة مخصصة
- وضع الدردشة أو الصوت
- تقييم الإجابات
- نظام النقاط

### ✅ إدارة الوظائف
- نشر وظائف
- البحث والتصفية
- التقديم على الوظائف
- تتبع الطلبات

### ✅ المرشحون المقترحون
- مطابقة ذكية
- نسبة التوافق
- تصفية متقدمة

---

## 🔑 تفعيل الميزات المتقدمة (اختياري)

### Gemini API (الأفضل للعربية)
1. اذهب إلى: https://aistudio.google.com/app/apikey
2. انقر "Create API Key"
3. انسخ المفتاح
4. أضفه في `frontend/.env`:
```env
REACT_APP_GEMINI_API_KEY=your_key_here
```

### Groq API (سريع جداً)
1. اذهب إلى: https://console.groq.com
2. سجل حساب مجاني
3. انسخ API Key
4. أضفه في `frontend/.env`:
```env
REACT_APP_GROQ_API_KEY=your_key_here
```

### Google Cloud TTS (صوت عربي)
1. اذهب إلى: https://console.cloud.google.com
2. فعّل Text-to-Speech API
3. أنشئ API Key
4. أضفه في `frontend/.env`:
```env
REACT_APP_GOOGLE_TTS_KEY=your_key_here
```

---

## 🎨 تخصيص المنصة

### تغيير الألوان
عدّل `frontend/src/index.css`:
```css
:root {
  --primary-color: #4f46e5;
  --secondary-color: #10b981;
}
```

### تغيير الشعار
استبدل الصور في:
- `frontend/public/mem.png`
- `frontend/public/om.jpg`

### تغيير النصوص
عدّل الملفات في `frontend/src/pages/`

---

## 📊 بيانات تجريبية

### إنشاء مستخدمين تجريبيين:

```bash
cd backend
php artisan tinker
```

```php
// مرشح
$user = User::create([
    'name' => 'أحمد محمد',
    'email' => 'ahmed@test.com',
    'password' => Hash::make('password'),
    'role' => 'candidate'
]);
Candidate::create(['user_id' => $user->id]);

// شركة
$user = User::create([
    'name' => 'شركة التقنية',
    'email' => 'company@test.com',
    'password' => Hash::make('password'),
    'role' => 'company'
]);
Company::create(['user_id' => $user->id, 'name' => 'شركة التقنية']);
```

---

## 🔧 حل المشاكل السريع

### Backend لا يعمل؟
```bash
php artisan config:clear
php artisan cache:clear
php artisan migrate:fresh
```

### Frontend لا يعمل؟
```bash
rmdir /s /q node_modules
npm install
npm start
```

### CORS Errors؟
تأكد من:
- Backend على http://localhost:8000
- Frontend على http://localhost:3000

### قاعدة البيانات فارغة؟
```bash
php artisan migrate:fresh
```

---

## 📚 المزيد من المعلومات

- [README.md](README.md) - نظرة عامة
- [INSTALLATION.md](INSTALLATION.md) - دليل التثبيت التفصيلي
- [API_DOCUMENTATION.md](API_DOCUMENTATION.md) - توثيق API
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - حل المشاكل

---

## 💡 نصائح

1. **استخدم Chrome أو Firefox** للحصول على أفضل تجربة
2. **فعّل الميكروفون** لاستخدام المقابلة الصوتية
3. **جرب اللغتين** العربية والإنجليزية
4. **اجمع النقاط** من خلال إكمال المهام
5. **استكشف جميع الميزات** لفهم المنصة

---

## 🎉 مبروك!

أنت الآن جاهز لاستخدام InsightCV! 

إذا واجهت أي مشاكل، راجع [TROUBLESHOOTING.md](TROUBLESHOOTING.md) أو افتح Issue على GitHub.

**استمتع بالمنصة! 🚀**
