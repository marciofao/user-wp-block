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
        $userId = $this->params->get_param('id');
        if(null !== $userId){
            return $this->getUserDetails($userId);
          }else{
            return $this->getUserList();
          }
          
        
    }

    public function getUserList(): array
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
         
            //escape all html
            foreach ($tmpUsr as $key => $item) {
                $tmpUsr[$key] = esc_html($item);
            }

            $usersArr[] = (object) $tmpUsr;
        }
        return $usersArr;
    }

    public function getUserDetails(string $id): array
    {
        $usrDetails = [];

        $user = get_user_by( 'ID', $id );
       
        $usrDetails['id'] = $user->ID;
        $usrDetails['first_name'] = $user->first_name;
        $usrDetails['last_name'] = $user->last_name;
        $usrDetails['short_description'] = get_user_meta($user->ID, 'short_description', true);
        $usrDetails['image_of_person'] = get_user_meta($user->ID, 'image_of_person', true);
        $usrDetails['position_in_the_company'] = get_user_meta($user->ID, 'position_in_the_company', true);
        $usrDetails['github'] = get_user_meta($user->ID, 'github', true);
        $usrDetails['linkedin'] = get_user_meta($user->ID, 'linkedin', true);
        $usrDetails['xing'] = get_user_meta($user->ID, 'xing', true);
        $usrDetails['facebook'] = get_user_meta($user->ID, 'facebook', true);
        

        //escape all html
        foreach ($usrDetails as $key => $item) {
            $usrDetails[$key] = esc_html($item);
        }

        return $usrDetails;
    }
}
