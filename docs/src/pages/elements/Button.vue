<template lang="html">
  <docs-page>
    <h1 class="ui header">Button</h1>
    <div class="ui segment">
      description...
    </div>
    <div class="ui basic segment">
      <ui-button>Button</ui-button>

      <ui-button primary>Primary button</ui-button>
      <ui-button secondary>Secondary button</ui-button>

      <ui-button animated>
        <ui-content visible>Next</ui-content>
        <ui-content hidden><i class="right arrow icon"></i></ui-content>
      </ui-button>

      <ui-button labeled>
        <ui-button>Button face</ui-button>
        <div class="ui basic label">right label</div>
      </ui-button>

      <ui-button icon="cloud" />
      <ui-button labeled icon="cloud">Cloud</ui-button>

      <ui-button basic>Basic button</ui-button>
      <ui-button basic color="negative">Netagive Basic button</ui-button>

      <ui-button basic color="purple" @click="buttonClick">Purple Basic button</ui-button>

      <ui-buttons>
        <ui-button>Button 1</ui-button>
        <ui-button>Button 2</ui-button>
        <ui-button>Button 3</ui-button>
      </ui-buttons>

      <ui-buttons icon>
        <ui-button icon="edit" />
        <ui-button icon="save" />
        <ui-button icon="delete" />
      </ui-buttons>

      <ui-button social="facebook">Facebook</ui-button>

      <ui-button size="tiny">Tiny button</ui-button>
      <ui-button size="huge">Huge button</ui-button>


      <ui-button float="right">Right floated button</ui-button>

      <ui-button disabled>Disabled button</ui-button>

      <ui-button loading>Loading...</ui-button>

      <ui-button class="ui toggle button">
        Vote
      </ui-button>

      <ui-button circular social="google plus"></ui-button>


      <ui-button attached="top" tabindex="0">Top</ui-button>
      <div class="ui attached segment">
        <p>asadfasdfa</p>
      </div>
      <ui-button attached="bottom" tabindex="0">Bottom</ui-button>

      <ui-buttons vertical>
        <ui-button>Button 1</ui-button>
        <ui-button>Button 2</ui-button>
        <ui-button>Button 3</ui-button>
      </ui-buttons>

      <ui-button>ui-button</ui-button>
      <a is="ui-button">a button</a>
      <button is="ui-button">is button</button>
      <ui-button>ui-button</ui-button>
    </div>

  </docs-page>
</template>

<script>
export default {
  name: 'docs-elements-button',
  methods: {
    buttonClick(event, component) {
      console.log('button clicked', event, component)
    }
  }
}
</script>
