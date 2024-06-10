<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->json('ingredients')->nullable();
            $table->json('step_by_step')->nullable();
            $table->json('equips')->nullable();
            $table->text('description')->nullable();
            $table->text('difficult')->nullable();
            $table->text('img')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipes');
    }
};

