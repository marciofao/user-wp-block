<?php

declare(strict_types=1);

use UserWpBlock\UserInfoHandler;

add_action('rest_api_init', static function () {
     register_rest_route('uwp/v1', '/users', [
         'methods' => 'GET',
         'permission_callback' => '__return_true', // *always set a permission callback
         'callback' => static function (object $request): array {
            $res = new UserInfoHandler($request);
            return $res->handleRequest();
         },
     ]);
}, 10, 1);
