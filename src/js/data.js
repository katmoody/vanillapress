/**
 * Main JSON object of posts, pages and settings
 */
var jsonData = [
  {
    posts: [
      {
        id:1,
        date:"2016-01-09T22:05:09",
        modified:"2016-01-09T22:05:09",
        slug:"hello-world",
        type:"posts",
        title:"Hello world!",
        content:"<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p> ",
      },
      {
        id:2,
        date:"2016-01-10T22:05:09",
        modified:"2016-01-10T22:05:09",
        slug:"learning-javascript",
        type:"posts",
        title:"Learning JavaScript!",
        content:"<p>I'm learning JavaScript and super excited!!!</p> ",
      },
      {
        id:3,
        date:"2016-01-11T22:05:09",
        modified:"2016-01-11T22:05:09",
        slug:"rest-api",
        type:"posts",
        title:"The REST API!",
        content:"<p>I've started working with the REST API in WordPress, what fun!</p> ",
      },
      {
        id:4,
        date:"2016-01-12T22:05:09",
        modified:"2016-01-12T22:05:09",
        slug:"json-data",
        type:"posts",
        title:"JSON Data!",
        content:"<p>So, with the REST API it is posible to pull in WordPress data as pure JSON.  Now I'm figuring out what to do with the data</p> ",
      },
      {
        id:5,
        date:"2016-01-13T22:05:09",
        modified:"2016-01-13T22:05:09",
        slug:"javascript-project",
        type:"posts",
        title:"JavaScript Project",
        content:"<p>I've started working with the REST API in WordPress, what fun!</p> ",
      }
    ],
    pages: [
      {
        id:40,
        date:"2016-01-07T22:05:09",
        modified:"2016-01-07T22:05:09",
        slug:"home",
        type:"pages",
        title:"Home",
        content:"<p>Welcome!</p><p>Reprehenderit sit sunt nisi excepteur deserunt officia ipsum eu reprehenderits deserunt aliqua incididunt cillum dolore.</p><p>Dolor sit amet, consectetur adipisicing elit. Makingsum Lorem look coolsum.</p><p>Sit temporibus sunt doloremque enim alias pariatur debitis dolorum excepturi fugiat assumenda at, totam delectus, possimus reprehenderit earum aliquid nihil, esse voluptatem.</p>",
      },
      {
        id:41,
        date:"2016-01-09T22:05:09",
        modified:"2016-01-09T22:05:09",
        slug:"about",
        type:"pages",
        title:"About Me",
        content:"<p>Hi!  I'm me :)</p><p>Sisi excepteur deserunt officia ipsum eu reprehenderits deserunt aliqua incididunt cillum dolore.</p><p>Dolor sit amet, consectetur adipisicing elit. Makingsum Lorem look coolsum.</p><p>Sit temporibus sunt doloremque enim alias pariatur debitis dolorum excepturi fugiat assumenda at, totam delectus, possimus reprehenderit earum aliquid nihil, esse voluptatem.</p>",
      },
      {
        id:42,
        date:"2016-01-09T22:05:09",
        modified:"2016-01-09T22:05:09",
        slug:"blog",
        type:"pages",
        title:"Blog",
        content:"<p>Welcome to my blog page, please enjoy!</p>",
      },
      {
        id:43,
        date:"2016-01-19T22:06:09",
        modified:"2016-01-19T22:06:09",
        slug:"contact",
        type:"pages",
        title:"Contact",
        content:"<p>Please get in touch!</p><p>Sit temporibus sunt doloremque enim alias pariatur debitis dolorum excepturi fugiat assumenda at, totam delectus, possimus reprehenderit earum aliquid nihil, esse voluptatem.</p>",
      }
    ],
    settings: [
      {
        id:991,
        date:"2016-01-09T22:05:09",
        modified:"2016-01-09T22:05:09",
        slug:"site-name",
        type:"settings",
        title:"Site Name",
        content:"VanillaPress"
      },
      {
        id:992,
        date:"2016-01-09T22:05:09",
        modified:"2016-01-09T22:05:09",
        slug:"site-description",
        type:"settings",
        title:"Site Description",
        content:"A JS Front & Back End"
      }
    ]
  },
];

module.exports = jsonData;
