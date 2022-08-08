import page from './node_modules/page/page.mjs';
import { homeView } from './views/home.js';
import { articlesView } from './views/articles.js';
import { aboutView } from './views/about.js';
import { articleView } from './views/article.js';

page('/home', homeView);
page('/articles', articlesView);
page('/articles/:articleId', articleView);
page('/about', aboutView);

page.start();