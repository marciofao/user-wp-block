<?php

declare(strict_types=1);

add_filter('user_contactmethods', static function (array $contactmethods): array {

    $contactmethods[ 'short_description' ] = 'Short Description';
    $contactmethods[ 'image_of_person' ] = 'Image of person';
    $contactmethods[ 'posrition_in_the_company' ] = 'Position in the company';
    $contactmethods[ 'github' ] = 'Github';
    $contactmethods[ 'linkedin' ] = 'Linkedin';
    $contactmethods[ 'xing' ] = 'Xing';
    $contactmethods[ 'facebook' ] = 'Facebook';

    return $contactmethods;
});
