<template>
      <div class="quill-editor">
        <quill-editor ref="myTextEditor"
                      v-model="content"
                      :options="editorOption"
                      @change="onEditorReady($event)">
        </quill-editor>
      </div>
</template>

<script>
  import {debounce} from 'lodash'
  export default {
    props: {
      htmlStr: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        name: 'text',
        content: '',
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic','underline', 'strike'],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'list': 'ordered' },{ 'align': [] },{ 'indent': '-1' }, { 'indent': '+1' },{ 'direction': 'rtl' }],
              ['code-block'],
              ['clean'],
              [{ 'font': [] },{ 'size': ['small', false, 'large', 'huge'] }],
            ]
          }
        }
      }
    },
    methods: {
      onEditorReady: debounce(function(editor) {//{html,text,quill}
        this.$emit('onchange',editor)
      },1000)
    },
    watch: {
      'htmlStr': function(val) {
        this.content = val;
      }
    },
  }
</script>

<style lang="scss">
.ql-container{
  height:250px !important;
  font-size: 14px !important;
}
.ql-toolbar{
  text-align: left !important;
}
</style>
