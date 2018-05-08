<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h1>Add Blog Post</h1>

                <form @submit.prevent="isSubmitted = true">
                  <div class="form-group">
                    <label for="title">Title</label>
                    <input  v-model.trim="post.title"
                            type="text"
                            id="title"
                            class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="content">Content</label>
                    <textarea v-model.lazy.trim="post.content"
                              id="content"
                              class="form-control"></textarea>
                  </div>

                  <div class="form-group">

                    <input  type="checkbox"
                            v-model="post.publishImmediately"
                            true-value="Publish!"
                            false-value="Don't publish"
                            >
                  </div>

                  <div class="form-group">
                    <div>Share on</div>
                    <template v-for="media in formData.socialMedia">
                      <label :for="media">{{ media }}</label>
                      <input  type="checkbox"
                              :id="media"
                              :value="media"
                              v-model="post.shareOn">
                    </template>
                  </div>

                  <div class="form-group">
                    <div>Choose your side</div>
                    <template v-for="media in formData.categories">
                      <label :for="media">{{ media }}</label>
                      <input  type="radio"
                              :id="media"
                              :value="media"
                              v-model="post.category">
                    </template>
                  </div>

                  <div class="form-group">
                    <select v-model="post.series" class="form-control">
                      <option v-for="selected in formData.series" :value="selected">{{ selected }}</option>
                    </select>
                  </div>
                    <input type="submit" class="btn btn-primary">
                </form>

                <hr>

                <table class="table table-striped" v-if="isSubmitted">
                    <thead>
                        <tr>
                            <td class="col-xs-6"><strong>Field</strong></td>
                            <td class="col-xs-6"><strong>Value</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>{{ post.title }}</td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td style="white-space: pre;">{{ post.content }}</td>
                        </tr>
                        <tr>
                            <td>Publish immediately</td>
                            <td>{{ post.publishImmediately }}</td>
                        </tr>
                        <tr>
                            <td>Share on</td>
                            <td>
                                <ul>
                                    <li v-for="media in post.shareOn">{{ media }}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>{{ post.category }}</td>
                        </tr>
                        <tr>
                            <td>Series</td>
                            <td>{{ post.series }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    content: '',
                    publishImmediately: false,
                    shareOn: [],
                    category: '',
                    series: ''
                },
                formData: {
                    socialMedia: ['Facebook', 'Twitter'],
                    categories: ['Frontend', 'Backend'],
                    series: [
                        'Vue.js: From Beginner to Professional',
                        'Complete Guide to Elasticsearch'
                    ]
                },
                isSubmitted: false
            };
        }
    }
</script>

<style>
    input[type="radio"] + label,
    input[type="checkbox"] + label {
        font-weight: 700;
    }
</style>
