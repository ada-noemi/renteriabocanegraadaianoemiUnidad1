<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class AuthFlowTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        config()->set('services.recaptcha.site_key', 'test-site-key');
        config()->set('services.recaptcha.secret_key', 'test-secret-key');
        config()->set('services.recaptcha.minimum_score', 0.5);
    }

    public function test_user_can_register_and_is_persisted(): void
    {
        Http::fake([
            'https://www.google.com/recaptcha/api/siteverify' => Http::response([
                'success' => true,
                'score' => 0.9,
                'action' => 'auth_register',
            ], 200),
        ]);

        $response = $this->postJson('/auth/register', [
            'name' => 'Andrea Ramirez',
            'email' => 'andrea@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'recaptcha_token' => 'test-token',
            'recaptcha_action' => 'auth_register',
        ]);

        $response
            ->assertCreated()
            ->assertJsonPath('user.email', 'andrea@example.com');

        $this->assertDatabaseHas('users', [
            'email' => 'andrea@example.com',
        ]);
    }

    public function test_user_can_log_in_with_valid_credentials(): void
    {
        Http::fake([
            'https://www.google.com/recaptcha/api/siteverify' => Http::response([
                'success' => true,
                'score' => 0.9,
                'action' => 'auth_login',
            ], 200),
        ]);

        $user = User::factory()->create([
            'password' => 'password123',
        ]);

        $response = $this->postJson('/auth/login', [
            'email' => $user->email,
            'password' => 'password123',
            'recaptcha_token' => 'test-token',
            'recaptcha_action' => 'auth_login',
        ]);

        $response
            ->assertOk()
            ->assertJsonPath('user.email', $user->email);

        $this->assertAuthenticatedAs($user);
    }
}