<template lang="html">
  <docs-page>
    <h1 class="ui header">Item</h1>
    <div class="ui basic segment">
      <ui-items divided>
        <ui-item>
          <ui-content header="Header only"></ui-content>
        </ui-item>
        <ui-item image="http://semantic-ui.com/images/avatar/large/stevie.jpg">
          <ui-content header="Image and header">
            <p slot="description">description</p>
          </ui-content>
        </ui-item>
        <ui-item>
          <ui-content header="Test">
            <p slot="description">description</p>
          </ui-content>
        </ui-item>
        <ui-item>
          <ui-content header="Test 2">
            <p slot="description">alskdjflaksjdf </p>
          </ui-content>
        </ui-item>
      </ui-items>
    </div>
  </docs-page>
</template>

<script>
export default {
  name: 'docs-views-item'
}
</script>
