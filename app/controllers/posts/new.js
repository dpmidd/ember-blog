import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newPost: function() {
      var title = this.get('postTitle');
      var body = this.get('postCopy');
      var post = this.store.createRecord('post', { body: body, title: title });
      this.set('postCopy', '');
      this.set('postTitle', '');
      post.save();
      this.transitionToRoute('posts');
    }
  }
});
