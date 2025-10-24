# توثيق API - InsightCV

## Base URL
```
http://localhost:8000/api
```

## المصادقة

لا يوجد نظام مصادقة JWT حالياً. يتم تمرير `user_id` مع الطلبات.

---

## Authentication Endpoints

### تسجيل مستخدم جديد
```http
POST /register
```

**Body:**
```json
{
  "name": "أحمد محمد",
  "email": "ahmed@example.com",
  "password": "password123",
  "role": "candidate",
  "company_name": "اسم الشركة (مطلوب للشركات فقط)"
}
```

**Response:**
```json
{
  "message": "Registration successful",
  "user": {
    "id": 1,
    "name": "أحمد محمد",
    "email": "ahmed@example.com",
    "role": "candidate"
  }
}
```

### تسجيل الدخول
```http
POST /login
```

**Body:**
```json
{
  "email": "ahmed@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "name": "أحمد محمد",
    "email": "ahmed@example.com",
    "role": "candidate"
  }
}
```

### نسيان كلمة المرور
```http
POST /forgot-password
```

**Body:**
```json
{
  "email": "ahmed@example.com"
}
```

### إعادة تعيين كلمة المرور
```http
POST /reset-password
```

**Body:**
```json
{
  "email": "ahmed@example.com",
  "password": "newpassword123",
  "password_confirmation": "newpassword123",
  "token": "reset_token"
}
```

---

## CV Endpoints

### رفع السيرة الذاتية
```http
POST /cv/upload
```

**Body (FormData):**
- `user_id`: رقم المستخدم
- `cv_file`: ملف PDF/DOC/DOCX (حد أقصى 5MB)
- `job_title`: المسمى الوظيفي

**Response:**
```json
{
  "message": "CV uploaded and analyzed successfully",
  "cv": {
    "id": 1,
    "file_name": "cv.pdf",
    "overall_score": 85,
    "strengths": ["مهارات تقنية قوية", "خبرة عملية جيدة"],
    "weaknesses": ["قلة الشهادات المهنية"],
    "missing_skills": ["Docker", "Kubernetes"],
    "suggestions": ["احصل على شهادات مهنية"],
    "matched_companies": [
      {
        "name": "شركة التقنية",
        "match": 90,
        "location": "الرياض"
      }
    ]
  },
  "points_earned": 10
}
```

### الحصول على السير الذاتية للمستخدم
```http
GET /cv/user/{userId}
```

### الحصول على سيرة ذاتية محددة
```http
GET /cv/{id}
```

---

## AI Interview Endpoints

### بدء جلسة مقابلة
```http
POST /interview/start
```

**Body:**
```json
{
  "user_id": 1,
  "mode": "chat",
  "job_title": "مطور ويب",
  "cv_uploaded": true
}
```

**Response:**
```json
{
  "message": "Interview session started",
  "session_id": 1,
  "first_question": "Can you tell me about yourself?"
}
```

### إرسال إجابة
```http
POST /interview/{sessionId}/answer
```

**Body:**
```json
{
  "question": "Can you tell me about yourself?",
  "answer": "أنا مطور ويب بخبرة 3 سنوات...",
  "voice_analysis": {
    "confidence": 0.95,
    "clarity": 0.88
  },
  "language": "ar"
}
```

**Response:**
```json
{
  "next_question": "What are your key strengths?",
  "questions_completed": 1,
  "total_questions": 10
}
```

### إنهاء الجلسة
```http
POST /interview/{sessionId}/complete
```

**Response:**
```json
{
  "message": "Interview session completed",
  "overall_score": 85,
  "feedback": {
    "strengths": ["إجابات مفصلة", "أمثلة واضحة"],
    "improvements": ["استخدم طريقة STAR"],
    "recommendations": ["تدرب أكثر على الأسئلة السلوكية"]
  },
  "points_earned": 85
}
```

### الحصول على جلسات المستخدم
```http
GET /interview/user/{userId}
```

### الحصول على جلسة محددة
```http
GET /interview/{id}
```

---

## Job Endpoints

### الحصول على جميع الوظائف
```http
GET /jobs?search=مطور&type=full-time&experience_level=mid
```

**Query Parameters:**
- `search`: نص البحث
- `type`: نوع الوظيفة (full-time, part-time, contract, internship)
- `experience_level`: مستوى الخبرة (entry, mid, senior, lead)

### نشر وظيفة جديدة
```http
POST /jobs
```

**Body:**
```json
{
  "user_id": 1,
  "title": "مطور ويب",
  "location": "الرياض",
  "type": "full-time",
  "experience_level": "mid",
  "description": "نبحث عن مطور ويب...",
  "requirements": "خبرة 3 سنوات...",
  "salary_min": 8000,
  "salary_max": 12000,
  "skills": ["React", "Node.js", "MongoDB"]
}
```

### الحصول على وظيفة محددة
```http
GET /jobs/{id}
```

### تحديث وظيفة
```http
PUT /jobs/{id}
```

### حذف وظيفة
```http
DELETE /jobs/{id}
```

### الحصول على وظائف الشركة
```http
GET /jobs/company/{userId}
```

### التقديم على وظيفة
```http
POST /jobs/apply
```

**Body:**
```json
{
  "job_id": 1,
  "user_id": 1,
  "cover_letter": "أنا مهتم بهذه الوظيفة..."
}
```

---

## Profile Endpoints

### الحصول على الملف الشخصي
```http
GET /profile/{userId}
```

### تحديث ملف المرشح
```http
PUT /profile/candidate/{userId}
```

**Body:**
```json
{
  "name": "أحمد محمد",
  "email": "ahmed@example.com",
  "phone": "0501234567",
  "location": "الرياض",
  "title": "مطور ويب",
  "experience_years": 3,
  "bio": "مطور ويب متخصص...",
  "education": "بكالوريوس علوم حاسب",
  "expected_salary_min": 8000,
  "expected_salary_max": 12000,
  "availability": "available",
  "skills": [
    {"name": "React", "level": "advanced"},
    {"name": "Node.js", "level": "intermediate"}
  ]
}
```

### تحديث ملف الشركة
```http
PUT /profile/company/{userId}
```

**Body:**
```json
{
  "name": "أحمد محمد",
  "email": "company@example.com",
  "phone": "0501234567",
  "location": "الرياض",
  "company_name": "شركة التقنية",
  "industry": "تقنية المعلومات",
  "size": "50-200",
  "founded_year": 2015,
  "website": "https://example.com",
  "about": "نحن شركة رائدة...",
  "culture": "ثقافة عمل مرنة...",
  "benefits": ["تأمين صحي", "إجازات مدفوعة"],
  "values": ["الابتكار", "الجودة"]
}
```

### رفع صورة شخصية
```http
POST /profile/{userId}/avatar
```

**Body (FormData):**
- `avatar`: ملف صورة (JPG, PNG, GIF - حد أقصى 2MB)

### تغيير كلمة المرور
```http
PUT /profile/{userId}/password
```

**Body:**
```json
{
  "current_password": "oldpassword",
  "new_password": "newpassword123",
  "new_password_confirmation": "newpassword123"
}
```

### الحصول على الإحصائيات
```http
GET /profile/{userId}/statistics
```

**Response (للمرشح):**
```json
{
  "statistics": {
    "cvs_analyzed": 5,
    "practice_sessions": 10,
    "points_earned": 850,
    "jobs_applied": 15
  }
}
```

**Response (للشركة):**
```json
{
  "statistics": {
    "jobs_posted": 8,
    "active_jobs": 5,
    "total_applicants": 120
  }
}
```

---

## Candidate Endpoints

### الحصول على المرشحين المقترحين
```http
GET /candidates/suggested/{userId}?min_match=70
```

**Response:**
```json
{
  "suggested_candidates": [
    {
      "candidate": {
        "id": 1,
        "title": "مطور ويب",
        "experience_years": 3,
        "bio": "مطور متخصص...",
        "user": {
          "name": "أحمد محمد",
          "location": "الرياض"
        },
        "skills": [
          {"name": "React", "proficiency_level": "advanced"}
        ]
      },
      "match_percentage": 85,
      "matched_job": {
        "title": "مطور React",
        "type": "full-time"
      }
    }
  ]
}
```

### الحصول على مرشح محدد
```http
GET /candidates/{id}
```

### التحقق من اكتمال الملف الشخصي
```http
GET /candidates/check-profile/{userId}
```

**Response:**
```json
{
  "is_complete": false,
  "missing_fields": ["Job Title", "Skills"],
  "completion_percentage": 50
}
```

---

## Rating Endpoints

### إضافة تقييم
```http
POST /ratings
```

**Body:**
```json
{
  "user_id": 1,
  "rating": 5,
  "comment": "منصة رائعة ومفيدة جداً!"
}
```

### الحصول على التقييمات المعتمدة
```http
GET /ratings
```

### الموافقة على تقييم (للمسؤولين)
```http
PUT /ratings/{id}/approve
```

### حذف تقييم
```http
DELETE /ratings/{id}
```

---

## TTS Endpoints

### توليد صوت من نص
```http
POST /tts
```

**Body:**
```json
{
  "text": "مرحباً، كيف حالك؟"
}
```

**Response:**
```json
{
  "url": "http://localhost:8000/storage/tts_cache/tts_abc123.mp3",
  "cached": false
}
```

### تنظيف الملفات المؤقتة
```http
POST /tts/clean-cache
```

---

## Voice Transcription Endpoints (AssemblyAI)

### تحويل الصوت إلى نص من ملف
```http
POST /voice/transcribe
```

**Body (multipart/form-data):**
- `audio` (file): ملف صوتي (mp3, wav, m4a, webm, ogg) - حد أقصى 10MB
- `language` (string): اللغة ('en' أو 'ar') - اختياري، الافتراضي 'en'

**مثال باستخدام cURL:**
```bash
curl -X POST http://localhost:8000/api/voice/transcribe \
  -F "audio=@recording.mp3" \
  -F "language=ar"
```

**Response:**
```json
{
  "success": true,
  "transcript": "مرحباً، اسمي أحمد وأنا مطور برمجيات",
  "confidence": 0.95,
  "language": "ar"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Failed to transcribe audio"
}
```

### تحويل الصوت إلى نص من رابط
```http
POST /voice/transcribe-url
```

**Body:**
```json
{
  "audio_url": "https://example.com/audio.mp3",
  "language": "en"
}
```

**Response:**
```json
{
  "success": true,
  "transcript": "Hello, my name is Ahmed and I'm a software developer",
  "confidence": 0.92,
  "language": "en"
}
```

**ملاحظات:**
- يدعم اللغة العربية والإنجليزية
- الحد الأقصى لحجم الملف: 10MB
- الصيغ المدعومة: mp3, wav, m4a, webm, ogg
- وقت المعالجة: 5-40 ثانية حسب طول الملف
- يستخدم AssemblyAI API للتحويل عالي الجودة

---

## رموز الحالة

- `200` - نجاح
- `201` - تم الإنشاء بنجاح
- `400` - طلب خاطئ
- `401` - غير مصرح
- `404` - غير موجود
- `422` - خطأ في التحقق من البيانات
- `500` - خطأ في الخادم

## معالجة الأخطاء

جميع الأخطاء تُرجع بالصيغة التالية:

```json
{
  "message": "رسالة الخطأ",
  "errors": {
    "field_name": ["رسالة الخطأ التفصيلية"]
  }
}
```

## ملاحظات

1. جميع التواريخ بصيغة ISO 8601
2. جميع الأحجام بالبايت
3. الملفات المرفوعة تُخزن في `storage/app/public`
4. يتم التحقق من صحة جميع المدخلات
5. يتم تسجيل جميع الأخطاء في `storage/logs/laravel.log`
