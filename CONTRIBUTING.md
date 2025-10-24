# دليل المساهمة - InsightCV

شكراً لاهتمامك بالمساهمة في InsightCV! نرحب بجميع المساهمات.

## كيفية المساهمة

### 1. Fork المشروع
انقر على زر "Fork" في أعلى الصفحة

### 2. Clone المشروع
```bash
git clone https://github.com/your-username/insightcv.git
cd insightcv
```

### 3. إنشاء فرع جديد
```bash
git checkout -b feature/amazing-feature
```

### 4. قم بالتغييرات
- اتبع معايير الكود
- أضف تعليقات توضيحية
- اختبر التغييرات

### 5. Commit التغييرات
```bash
git add .
git commit -m "Add: وصف التغيير"
```

### 6. Push إلى GitHub
```bash
git push origin feature/amazing-feature
```

### 7. افتح Pull Request
افتح Pull Request من فرعك إلى الفرع الرئيسي

## معايير الكود

### Backend (PHP/Laravel)
- اتبع PSR-12 coding standard
- استخدم Type Hints
- أضف DocBlocks للدوال
- اكتب Unit Tests عند الإمكان

```php
/**
 * Get user by ID
 *
 * @param int $userId
 * @return User|null
 */
public function getUserById(int $userId): ?User
{
    return User::find($userId);
}
```

### Frontend (React/JavaScript)
- استخدم ES6+ syntax
- اتبع React best practices
- استخدم Functional Components و Hooks
- أضف PropTypes أو TypeScript

```javascript
// Good
const MyComponent = ({ title, onSubmit }) => {
  const [value, setValue] = useState('');
  
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

// Bad
class MyComponent extends React.Component {
  // Avoid class components
}
```

### CSS
- استخدم BEM naming convention
- اجعل الكود responsive
- استخدم CSS Variables للألوان

```css
/* Good */
.card {
  background: var(--primary-color);
}

.card__title {
  font-size: 1.5rem;
}

.card__title--large {
  font-size: 2rem;
}

/* Bad */
.cardTitle {
  /* Avoid camelCase */
}
```

## أنواع المساهمات

### 🐛 إصلاح الأخطاء
- ابحث في Issues عن الأخطاء المفتوحة
- أو أنشئ Issue جديد لوصف الخطأ
- اربط Pull Request بالـ Issue

### ✨ ميزات جديدة
- ناقش الميزة في Issue أولاً
- تأكد من أنها تتماشى مع أهداف المشروع
- أضف توثيق للميزة الجديدة

### 📝 تحسين التوثيق
- إصلاح الأخطاء الإملائية
- إضافة أمثلة
- تحسين الشرح
- ترجمة التوثيق

### 🎨 تحسين التصميم
- تحسين UI/UX
- إضافة رسوم متحركة
- تحسين الألوان والخطوط

### ⚡ تحسين الأداء
- تحسين سرعة التحميل
- تقليل حجم الملفات
- تحسين استعلامات قاعدة البيانات

## قواعد Commit Messages

استخدم الصيغة التالية:

```
Type: وصف قصير

وصف تفصيلي (اختياري)

Fixes #123
```

### أنواع Commits:
- `Add:` إضافة ميزة جديدة
- `Fix:` إصلاح خطأ
- `Update:` تحديث ميزة موجودة
- `Remove:` إزالة ميزة أو كود
- `Refactor:` إعادة هيكلة الكود
- `Docs:` تحديث التوثيق
- `Style:` تغييرات في التنسيق
- `Test:` إضافة أو تحديث الاختبارات
- `Perf:` تحسين الأداء

### أمثلة:
```
Add: نظام الإشعارات للمستخدمين

إضافة نظام إشعارات في الوقت الفعلي باستخدام WebSockets
يتضمن إشعارات للرسائل الجديدة والتطبيقات

Fixes #45
```

```
Fix: مشكلة رفع الملفات الكبيرة

زيادة حد رفع الملفات إلى 10MB
إضافة معالجة أفضل للأخطاء

Fixes #67
```

## اختبار التغييرات

### Backend Tests
```bash
cd backend
php artisan test
```

### Frontend Tests
```bash
cd frontend
npm test
```

### Manual Testing
1. اختبر الميزة في المتصفح
2. اختبر على أحجام شاشات مختلفة
3. اختبر في متصفحات مختلفة
4. تأكد من عدم كسر الميزات الموجودة

## Code Review

سيتم مراجعة Pull Request الخاص بك من قبل المشرفين:
- قد يُطلب منك إجراء تعديلات
- كن مستعداً للنقاش البناء
- احترم آراء المراجعين

## الحصول على المساعدة

إذا كنت بحاجة إلى مساعدة:
1. اقرأ التوثيق أولاً
2. ابحث في Issues المغلقة
3. افتح Issue جديد مع وصف واضح للمشكلة
4. انضم إلى مجتمعنا على Discord (قريباً)

## قواعد السلوك

### كن محترماً
- احترم جميع المساهمين
- لا تتسامح مع التحرش أو التمييز
- كن بناءً في النقد

### كن متعاوناً
- ساعد الآخرين
- شارك معرفتك
- اعمل كفريق

### كن صبوراً
- المراجعة تأخذ وقتاً
- قد لا يتم قبول جميع المساهمات
- تعلم من الملاحظات

## الترخيص

بالمساهمة في هذا المشروع، فإنك توافق على أن مساهماتك ستكون مرخصة بموجب نفس ترخيص المشروع.

## الشكر

شكراً لجميع المساهمين الذين يساعدون في تحسين InsightCV! 🎉

---

هل لديك أسئلة؟ لا تتردد في فتح Issue أو التواصل معنا!
