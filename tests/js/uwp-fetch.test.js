




/**
 * @jest-environment jsdom
 */

Object.defineProperty(document, 'currentScript', {
  value: document.createElement('script'),
});

const test = require('../../uwp-fetch');

test('html content changed', () => {

  var data = {
    "id": "1",
    "first_name": "Admin",
    "last_name": "adm",
    "short_description": "Lorem impsum",
    "image_of_person": "https://picsum.photos/300/300",
    "position_in_the_company": "CEO",
    "github": "http://example.com",
    "linkedin": "http://example.com",
    "xing": "http://example.com",
    "facebook": "http://example.com"
  }

  // Set up our document body
  document.body.innerHTML =
    `<div class="wp-block-create-block-user-wp-block">
      <div class="uwb-block"><div class="uwb-user-id"></div>
      <div class="uwb-fullname"></div>
      <div class="uwb-image image_of_person" ></div>
      <div class="uwb-details"><div class="short_description"></div>
      <div class="position_in_the_company"></div>
      <div class="github"></div>
      <div class="linkedin"></div>
      <div class="xing"></div>
      <div class="facebook"></div>
      </div>
      </div>
      </div>`;

  uwp_populate(data,0);
  expect(document.querySelectorAll('.uwb-block .xing').item(0).innerText).toBe("http://example.com")
});