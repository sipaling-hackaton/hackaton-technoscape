<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\AccountSeeder;
use Database\Seeders\TermsSavingsSeeder;
use Database\Seeders\MerchantPartnersSeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\AvatarAttrSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            AvatarAttrSeeder::class,
            UserSeeder::class,
            AccountSeeder::class,
            TermsSavingsSeeder::class,
            MerchantPartnersSeeder::class,
        ]);
    }
}
