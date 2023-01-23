<?php

declare(strict_types=1);

namespace UserWpBlock;

class UserInfoHandler
{
    private $params;

    public function __construct(object $params)
    {
        $this->params = $params;
    }

    public function handleRequest(): array
    {
        $blogusers = get_users([
            'role__in' => [
                'author',
                'subscriber',
                'administrator',
                'editor',
            ],
        ]);

        $usersArr = [];

        foreach ($blogusers as $user) {
            $tmpUsr = [];
            $tmpUsr['value'] = $user->ID;
            $tmpUsr['label'] = $user->first_name .' '. $user->last_name;
         
            /* 
             $tmpUsr['id'] = $user->ID;
            $tmpUsr['first_name'] = $user->first_name;
            $tmpUsr['last_name'] = $user->last_name;
            $tmpUsr['short_description'] = get_user_meta($user->ID, 'short_description', true);
            $tmpUsr['image_of_person'] = get_user_meta($user->ID, 'image_of_person', true);
            $tmpUsr['position_in_the_company'] = get_user_meta($user->ID, 'position_in_the_company', true);
            $tmpUsr['github'] = get_user_meta($user->ID, 'github', true);
            $tmpUsr['linkedin'] = get_user_meta($user->ID, 'linkedin', true);
            $tmpUsr['xing'] = get_user_meta($user->ID, 'xing', true);
            $tmpUsr['facebook'] = get_user_meta($user->ID, 'facebook', true);
            */

            //escape all html
            foreach ($tmpUsr as $key => $item) {
                $tmpUsr[$key] = esc_html($item);
            }

            $usersArr[] = (object) $tmpUsr;
        }

        return $usersArr;
    }
}
