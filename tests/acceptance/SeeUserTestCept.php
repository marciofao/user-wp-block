<?php 
$I = new AcceptanceTester($scenario);
$I->wantTo('See Page with Second User');
$I->amOnPage('/yeye/');
$I->See('Tester test');
