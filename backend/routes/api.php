<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

// Routes for guests (not authenticated)
Route::post('/register', [RegisteredUserController::class, 'store'])->name('register');

// API Login بدون استخدام session
Route::post('/login', function(Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    if (!Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Wrong password'], 401);
    }

    return response()->json([
        'message' => 'Login successful',
        'user' => $user
    ]);
});

// Forgot Password API (بسيط للتجربة على Postman)
Route::post('/forgot-password', function(Request $request) {
    $request->validate([
        'email' => 'required|email'
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    // هنا ممكن ترسل رابط إعادة تعيين كلمة المرور
    return response()->json(['message' => 'Password reset link sent to email']);
});

// Reset Password API
Route::post('/reset-password', function(Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|confirmed',
        'token' => 'required'
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    $user->password = Hash::make($request->password);
    $user->save();

    return response()->json(['message' => 'Password has been reset successfully']);
});

// API Logout (بدون session)
Route::post('/logout', function(Request $request) {
    // بما أننا لا نستخدم جلسات، يمكننا ببساطة إرجاع رسالة نجاح
    return response()->json(['message' => 'Logout successful']);
});

// Email Verification (مبسط للتجربة على Postman)
Route::get('/verify-email/{id}/{hash}', function($id, $hash) {
    $user = User::find($id);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    // هنا ممكن تتحقق من الـ hash لو حاب، أو تعتبره تم التحقق
    $user->email_verified_at = now();
    $user->save();

    return response()->json(['message' => 'Email verified successfully']);
});

// Send Verification Email (مبسط)
Route::post('/email/verification-notification', function(Request $request) {
    $request->validate(['email' => 'required|email']);

    $user = User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    // هنا ممكن ترسل البريد الإلكتروني للتحقق
    return response()->json(['message' => 'Verification email sent']);
});
