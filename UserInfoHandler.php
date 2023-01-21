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

    public function handleRequest(): string
    {

        $search = $this->params->get_param('s');

        //retrieve user data

        // Set cache.
        $result->set_headers(['Cache-Control' => 'max-age=3600']);
        return $result;
    }
}
