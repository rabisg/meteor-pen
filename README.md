Meteor Pen Editor
=================

[Pen](https://github.com/sofish/pen) Editor repackaged for Meteor

##How to Use

First define a template:
```Handlebars
<template name="penEditable">
  <div id="editor">
    {{{content}}}
  </div>
</template>
```
Then add a `rendered` callback to initialize the editor
```Javascript
Template.penEditable.rendered = function () {
  this._editor = new Pen('#editor');
};
```
Additionally, you should also destroy the `Pen` instance when
the template gets destroyed
```Javascript
Template.penEditable.destroyed = function () {
  this._editor.destroy();
};
```

If the editor is a part of a larger template, you might want
to preserve it across re-renders. For more information, see the
section [template_preserve](http://docs.meteor.com/#template_preserve).
In such a case, the `rendered` callback should have an additional check
to ensure the template hasn't already been rendered before.
```Javascript
if(!this._editor) {
  this._editor = new Pen('#editor');
}
```