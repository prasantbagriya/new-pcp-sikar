<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LinkSeoAttributesTest extends TestCase
{
    use RefreshDatabase;

    public function test_post_creation_preserves_seo_link_rel_attributes(): void
    {
        $admin = User::factory()->create(['is_admin' => true, 'role' => 'super_admin']);
        $category = Category::create([
            'id' => 'jee-coachings',
            'name' => 'JEE Coachings',
            'slug' => 'jee-coachings'
        ]);

        $contentWithLinks = '<p>Check out the <a href="https://external-untrusted.com" rel="nofollow" target="_blank">External Guide</a>, '
            . 'the <a href="https://affiliate-partner.com" rel="sponsored" target="_blank">Sponsored Institute Link</a>, '
            . 'and the <a href="https://user-forum.com" rel="ugc">Community Forum</a>, '
            . 'along with a <a href="https://hybrid-affiliate.com" rel="nofollow sponsored ugc" target="_blank">Multi Tag Link</a> '
            . 'and an internal clean <a href="https://sikareducationhub.com/about">Clean Internal Link</a>.</p>';

        $postData = [
            'title' => 'Complete Sikar Coaching Guide 2026',
            'slug' => 'complete-sikar-coaching-guide-2026',
            'content' => $contentWithLinks,
            'category' => 'JEE Coachings',
            'status' => 'published',
            'published' => true,
        ];

        $response = $this->actingAs($admin)->postJson('/api/admin/posts', $postData);
        $response->assertStatus(200);

        $post = Post::where('slug', 'complete-sikar-coaching-guide-2026')->first();
        $this->assertNotNull($post);

        // Verify rel="nofollow" is preserved
        $this->assertStringContainsString('nofollow', $post->content);

        // Verify rel="sponsored" is preserved
        $this->assertStringContainsString('sponsored', $post->content);

        // Verify rel="ugc" is preserved
        $this->assertStringContainsString('ugc', $post->content);

        // Verify multi-tag link preserved all attributes
        $this->assertStringContainsString('https://hybrid-affiliate.com', $post->content);
        $this->assertTrue(
            str_contains($post->content, 'nofollow') &&
            str_contains($post->content, 'sponsored') &&
            str_contains($post->content, 'ugc')
        );

        // Verify clean internal link has no nofollow or sponsored or ugc
        $cleanLinkMatch = preg_match('#<a\s+href="https://sikareducationhub\.com/about"[^>]*>Clean Internal Link</a>#i', $post->content, $matches);
        $this->assertEquals(1, $cleanLinkMatch);
        $this->assertStringNotContainsString('nofollow', $matches[0]);
        $this->assertStringNotContainsString('sponsored', $matches[0]);
        $this->assertStringNotContainsString('ugc', $matches[0]);
    }
}
