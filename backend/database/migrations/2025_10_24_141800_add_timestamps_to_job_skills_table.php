<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('job_skills', function (Blueprint $table) {
            if (!Schema::hasColumn('job_skills', 'created_at')) {
                $table->timestamp('created_at')->useCurrent();
            }
            if (!Schema::hasColumn('job_skills', 'updated_at')) {
                $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            }
        });
    }

    public function down(): void
    {
        Schema::table('job_skills', function (Blueprint $table) {
            if (Schema::hasColumn('job_skills', 'updated_at')) {
                $table->dropColumn('updated_at');
            }
            if (Schema::hasColumn('job_skills', 'created_at')) {
                $table->dropColumn('created_at');
            }
        });
    }
};
