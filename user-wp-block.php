<?php

declare(strict_types=1);

/*
 * Plugin Name:       User WP Block
 * Description:       Gutenberg block for displaying user information in Gutenberg editor
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * License:           MIT License
 * License URI:       https://github.com/marciofao/user-wp-block/blob/main/LICENSE
 * Author:            Márcio Lopes Fão
 * Author URI:        https://www.linkedin.com/in/m%C3%A1rcio-lopes-f%C3%A3o-bb559133
 * Text Domain:       uwb
*/

require_once('UserInfoHandler.php');

require_once('user-info-rest-api.php');

require_once('user-fields.php');

/*
 * Setup Block editor
 */

add_action('init', static function () {
    register_block_type(__DIR__ . '/build');
});

// automatically load dependencies and version
$assetFile = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

wp_register_script(
    'user-wp-block',
    plugins_url('build/index.js', __FILE__),
    $assetFile['dependencies'],
    $assetFile['version'],
    true
);
