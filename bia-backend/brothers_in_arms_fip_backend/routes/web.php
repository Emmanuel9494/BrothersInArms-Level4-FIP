<?php
use App\Models\Blog;

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
// for MAMP localhost:8889/lumen/public/
$router->get('/', function () {
    return response()->json(blog::all());
});
// Base Routes
// returns the version of the Lumen framework

// for MAMP localhost:8889/lumen/public/books
// routes for the BlogController
$router->get('/blogs', 'BlogController@getAll');
$router->get('/blogs/{id}', 'BlogController@getOne');
$router->post('/blogs/add', 'BlogController@save');
$router->post('/blogs/edit/{id}', 'BlogController@update');
$router->delete('/blogs/delete/{id}', 'BlogController@delete');

// routes for the ContactController
$router->get('/contacts', 'ContactController@getAll');
$router->get('/contacts/intrests/{id}', 'ContactController@interests');
$router->post('/contacts/add', 'ContactController@save');
$router->delete('/contacts/delete/{id}', 'ContactController@delete');

// routes for the DonorController
$router->get('/donors', 'DonorController@getAll');
$router->get('/donors/{id}', 'DonorController@getOne');
$router->post('/donors/add', 'DonorController@save');
$router->post('/donors/edit/{id}', 'DonorController@update');
$router->delete('/donors/delete/{id}', 'DonorController@delete');

// routes for the HeadlineController
$router->get('/headlines', 'HeadlineController@getAll');
$router->get('/headlines/{id}', 'HeadlineController@getOne');
$router->post('/headlines/add', 'HeadlineController@save');
$router->post('/headlines/edit/{id}', 'HeadlineController@update');
$router->delete('/headlines/delete/{id}', 'HeadlineController@delete');

// routes for the IntrestController
$router->get('/interests', 'InterestController@getAll');
$router->get('/interests/contacts/{id}', 'InterestController@contacts');
$router->post('/interests/add', 'InterestController@save');
$router->post('/interests/edit/{id}', 'InterestController@update');
$router->delete('/interests/delete/{id}', 'InterestController@delete');