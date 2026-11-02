<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PrivateUnderDevelopment
{
    /**
     * Keep community and business directories private while under development.
     * Only admins/moderators can view them; all others are redirected to home.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if ($user && ($user->role === 'super_admin' || $user->role === 'admin' || (bool) $user->getAttribute('is_admin'))) {
            return $next($request);
        }

        return redirect()->route('home');
    }
}
