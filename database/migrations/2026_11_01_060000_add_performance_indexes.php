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
        Schema::table('posts', function (Blueprint $table) {
            $table->index(['published', 'community_id', 'date'], 'posts_pub_comm_date_idx');
            $table->index(['category'], 'posts_category_idx');
            $table->index(['date'], 'posts_date_idx');
            $table->index(['url_format'], 'posts_url_format_idx');
        });

        Schema::table('navigations', function (Blueprint $table) {
            $table->index(['is_active', 'order'], 'navigations_active_order_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropIndex('posts_pub_comm_date_idx');
            $table->dropIndex('posts_category_idx');
            $table->dropIndex('posts_date_idx');
            $table->dropIndex('posts_url_format_idx');
        });

        Schema::table('navigations', function (Blueprint $table) {
            $table->dropIndex('navigations_active_order_idx');
        });
    }
};
