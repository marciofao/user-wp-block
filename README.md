# user-wp-block
### Gutenberg block for displaying user information

## UI Basics

This plugin generates an gutenberg block that enables the selection of users from wordpress instance.

![Editor and user selector widget](https://i.imgur.com/fG05JSA.png)


On the frontend some custom usermeta fields and image will be rendered

![Frontend rendering](https://i.imgur.com/ISwu1ca.png)


The data used in rendering, except from First and Last name, are custom user meta fields added to user edit UI as follows: 

![User edit meta fields](https://i.imgur.com/Lougm3W.png)


## The approach I used

When editing on Gutenberg editor, the user data is fetched asynchronously, for that an endpoint is serving it.

Once a post is saved some HTML will be saved to the post containing some basic informations for later be used in order to retrieve the data.

The actual user data is not stored inside the post, that is loaded asynchronously when the page loads.

## Available Endpoints

**Listing all users**
`[site_url]wp-json/uwp/v1/users`

**Listing all user data by id**
`[site_url]wp-json/uwp/v1/users?id=1`

### Client side rendering?
Yes, this is the method for rendering it in pages and posts.

This method has the advantage of whenever some user data changes over the time the page will keep updated.

Otherwise, if everything was consolidated when the post/page were saved it would require an update on the post to actually updating the data on the website.


## Database included
A export of the testing site users and posts is available in this repo.

It can be imported using the plugin All-in-on-import.

The admin user credentials are:
User: Admin
Pass: 123

