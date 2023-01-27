<?php 
$I = new AcceptanceTester($scenario);
$I->wantTo('See Page with gutenberg widget');
$I->amOnPage('/yeye/');
$I->See('Admin adm');
