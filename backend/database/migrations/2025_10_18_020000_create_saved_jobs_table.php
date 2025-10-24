<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('saved_jobs')) {
            Schema::create('saved_jobs', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->unsignedBigInteger('candidate_id');
                $table->unsignedBigInteger('job_id');
                $table->timestamp('saved_at')->useCurrent();
                $table->foreign('candidate_id')->references('id')->on('candidates')->onDelete('cascade');
                $table->foreign('job_id')->references('id')->on('jobs')->onDelete('cascade');
                $table->unique(['candidate_id', 'job_id']);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('saved_jobs');
    }
};
