# grunt-hogan-client

> Compile Hogan Templates into ready to use script include.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-hogan-client`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-hogan-client');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Example
given the following config and template
### config
```javascript
  hoganclient: {
    options: {
      variable: 'window.tmpl'
    }
    src: ['templates/**/*.hogan'],
    dest: 'dist/tmpl.js' 
  }
```
### templates
#### templates/item.hogan
```html
<li>
  <h2>{{title}}<h2>
  <p>{{text}}</p>
</li>
```
#### templates/list.hogan
```html
<ul id="a-list">
{{#items}}
  {{>item}}
{{/items}}
</ul>
```

will output the following script file
#### dist/tmpl.js
```javascript
window.tmpl=window.tmpl||{};
window.tmpl.item=Hogan.compile('<li><h2>{{title}}</h2><p>{{text}}</p></li>');
window.tmpl.list=Hogan.compile('<ul id="a-list">{{#items}}{{>item}}{{/items}}</ul>');
```
ready to use/include/concat etc in your app like this.

```javascript
tmpl.list.render({ items: [] });
```

### Wrapping the templates.
I made this plugin for a very specific case where I also needed to wrap
the templates in some code due to async loading of Hogan using
[head.js](http://headjs.com/).

Since this task is a code generator I decided to add the **wrap**
property to the options. 

#### config
```javascript
options: {
  wrap: {
    start: 'head.ready(function() {',
    end: '});'
  }
}
```

## Todo
I guess there will be need to tweek the regex that cleans the template.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Markus Ullmark  
Licensed under the MIT license.
