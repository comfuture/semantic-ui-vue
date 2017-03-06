<template lang="html">
  <docs-page>
    <header slot="header">
      <h1>Button</h1>
      <p>
        A button indicates a possible user action
      </p>
    </header>
    <div class="ui basic segment">
      <h3>Simple</h3>
      <p>A standard button</p>
      <docs-example>
        <ui-button>Button</ui-button>
      </docs-example>

      <h3>Emphasis</h3>
      <p>A button can be formatted to show different levels of emphasis</p>
      <docs-example>
        <ui-button primary>Save</ui-button>
        <ui-button>Discard</ui-button>

        <ui-divider/>

        <ui-button secondary>Ok</ui-button>
        <ui-button>Cancel</ui-button>
      </docs-example>

      <h3>Animated</h3>
      <p>A button can animate to show hidden content</p>
      <ui-message>The button will be automatically sized according to the visible content size.<br>
      Make sure there is enough room for the hidden content to show</ui-message>
      <docs-example>
        <ui-button animated>
          <ui-content visible>Next</ui-content>
          <ui-content hidden><ui-icon name="right arrow"/></ui-content>
        </ui-button>

        <ui-button animated class="vertical">
          <ui-content hidden>Shop</ui-content>
          <ui-content visible><ui-icon name="shop"/></ui-content>
        </ui-button>

        <ui-button animated class="fade">
          <ui-content visible>Sign-up for a Pro account</ui-content>
          <ui-content hidden>$12.99 a month</ui-content>
        </ui-button>
      </docs-example>

      <h3>Labeled</h3>
      <p>A button can appear alongside a <router-link to="/label.html">label</a></p>
      <docs-example>
        <div is="ui-button" labeled>
          <ui-button><ui-icon name="heart"/>Like</ui-button>
          <ui-label basic>2,048</ui-label>
        </div>
        <div is="ui-button" left labeled tabindex="0">
          <ui-label basic pointing="right">2,048</ui-label>
          <ui-button><ui-icon name="heart"/>Like</ui-button>
        </div>
      </docs-example>

      <docs-example>
        <ui-button labeled>
          <ui-button color="red"><ui-icon name="heart"/>Like</ui-button>
          <ui-label basic color="red">2,048</ui-label>
        </ui-button>
        <ui-button labeled>
          <ui-button basic color="blue"><ui-icon name="fork"/>Forks</ui-button>
          <ui-label basic color="blue" pointing="left">1,048</ui-label>
        </ui-button>
      </docs-example>

      <h3>Icon</h3>
      <p>A button can have only an icon</p>
      <docs-example>
        <ui-button icon="cloud" />
      </docs-example>

      <h3>Labeled Icon</h3>
      <p>A button can use an icon as a label</p>
      <docs-example>
        <ui-button labeled icon="pause">Pause</ui-button>
        <ui-button right labeled icon="right arrow">Next</ui-button>
      </docs-example>

      <h3>Basic</h3>
      <p>A basic button is less pronounced</p>
      <docs-example>
        <ui-button basic icon="user">Add friend</ui-button>
      </docs-example>
      <docs-example>
        <ui-button basic primary>Primary</ui-button>
        <ui-button basic secondary>Secondary</ui-button>
        <ui-button basic positive>Positive</ui-button>
        <ui-button basic negative>Negative</ui-button>
      </docs-example>
      <docs-example>
        <ui-button basic color="red">Red</ui-button>
        <ui-button basic color="orange">Orange</ui-button>
        <ui-button basic color="yellow">Yellow</ui-button>
      </docs-example>

      <h3>Inverted</h3>
      <p>A button can be formatted to appear on dark backgrounds</p>
      <docs-example>
        <ui-segment inverted>
          <ui-button inverted>Standard</ui-button>
          <ui-button inverted color="red">Red</ui-button>
          <ui-button inverted color="orange">Orange</ui-button>
          <ui-button inverted color="yellow">Yellow</ui-button>
        </ui-segment>
      </docs-example>

      <docs-example>
        <ui-segment inverted>
          <ui-button inverted basic>Standard</ui-button>
          <ui-button inverted basic color="red">Red</ui-button>
          <ui-button inverted basic color="orange">Orange</ui-button>
          <ui-button inverted basic color="yellow">Yellow</ui-button>
        </ui-segment>
      </docs-example>

      <h2>Groups</h2>

      <h3>Buttons</h3>
      <p>Buttons can exist together as a group</p>
      <docs-example>
        <ui-buttons>
          <ui-button>Button 1</ui-button>
          <ui-button>Button 2</ui-button>
          <ui-button>Button 3</ui-button>
        </ui-buttons>
      </docs-example>

      <h3>Icon buttons</h3>
      <p>Button groups can show groups of icons</p>
      <docs-example>
        <ui-buttons icon>
          <ui-button icon="align left" />
          <ui-button icon="align center" />
          <ui-button icon="align right" />
          <ui-button icon="align justify" />
        </ui-buttons>
        <ui-buttons icon>
          <ui-button icon="bold" />
          <ui-button icon="underline" />
          <ui-button icon="text width" />
        </ui-buttons>
      </docs-example>

      <h2>Content</h2>

      <h3>Conditional</h3>
      <p>Button groups can contain conditionals</p>
      <docs-example>
        <ui-buttons>
          <ui-button>Cancel</ui-button>
          <div class="or"></div>
          <ui-button positive>Save</ui-button>
        </ui-buttons>
      </docs-example>

      <h2>State</h2>

      <h3>Active</h3>
      <p>A button can show it is currently the active user selection</p>
      <docs-example>
        <ui-button active icon="user">Follow</ui-button>
      </docs-example>

      <h3>Disabled</h3>
      <p>A button can show it is currently unable to be interacted with</p>
      <docs-example>
        <ui-button disabled icon="user">Follow</ui-button>
      </docs-example>

      <h3>Loading</h3>
      <p>A button can show a loading indicator</p>
      <docs-example>
        <ui-button loading>Loading</ui-button>
        <ui-button basic loading>Loading</ui-button>
        <ui-button primary loading>Loading</ui-button>
        <ui-button secondary loading>Loading</ui-button>
      </docs-example>

      <h2>Variation</h2>

      <h3>Social</h3>
      <p>A button can be formatted to link to a social website</p>
      <docs-example>
        <ui-button social="facebook">Facebook</ui-button>
        <ui-button social="twitter">Twitter</ui-button>
        <ui-button social="google plus">Google+</ui-button>
        <ui-button social="vk">VK</ui-button>
        <ui-button social="linkedin">Linked in</ui-button>
        <ui-button social="youtube">Youtube</ui-button>
      </docs-example>

      <h3>Size</h3>
      <p>A button can have different sizes</p>
      <docs-example>
        <ui-button size="mini">Mini</ui-button>
        <ui-button size="tiny">Tiny</ui-button>
        <ui-button size="small">Small</ui-button>
        <ui-button size="medium">Medium</ui-button>
        <ui-button size="large">Large</ui-button>
        <ui-button size="big">Big</ui-button>
        <ui-button size="huge">Huge</ui-button>
        <ui-button size="massive">Massive</ui-button>
      </docs-example>

      <h3>Floated</h3>
      <p>A button can be aligned to the left or right of its container</p>
      <docs-example>
        <ui-button float="right">Right floated</ui-button>
        <ui-button float="left">Left floated</ui-button>
        <div>Place holder <br> Place holder</div>
      </docs-example>

      <h3>Colored</h3>
      <p>A button can have different colors</p>
      <docs-example>
        <ui-button color="red">Red</ui-button>
        <ui-button color="orange">Orange</ui-button>
        <ui-button color="yellow">Yellow</ui-button>
      </docs-example>


      <h3>Compact</h3>
      <p>A button can reduce its padding to fit into tighter spaces</p>
      <docs-example>
        <ui-button compact>Hold</ui-button>
        <ui-button compact icon="pause"></ui-button>
        <ui-button compact labeled icon="pause">
          Pause
        </ui-button>
      </docs-example>

      <h3>Toggle</h3>
      <p>A button can be formatted to toggle on and off(??)</p>
      <docs-example>
        <ui-button toggle>Vote</ui-button>
      </docs-example>

      <h3>Positive</h3>
      <p>A button can hint towards a positive / negative consequence</p>
      <docs-example>
        <ui-button positive>Positive</ui-button>
        <ui-button negative>Negative</ui-button>
      </docs-example>

      <h3>Fluid</h3>
      <p>A button can take the width of its container</p>
      <docs-example>
        <ui-button fluid>Fits container</ui-button>
      </docs-example>

      <h3>Circular</h3>
      <p>A button can be circular</p>
      <docs-example>
        <ui-button circular icon="settings"></ui-button>
      </docs-example>

      <docs-example>
        <ui-button circular social="facebook"></ui-button>
        <ui-button circular social="twitter"></ui-button>
        <ui-button circular social="linkedin"></ui-button>
        <ui-button circular social="google plus"></ui-button>
      </docs-example>

      <h3>Vertically Attached</h3>
      <p>A button can be attached to the top or bottom of other content</p>
      <docs-example>
        <a is="ui-button" attach="top">Top</a>
        <ui-segment attached>
          ....
        </ui-segment>
        <a is="ui-button" attach="bottom">Bottom</a>
      </docs-example>
      <docs-example>
        <ui-buttons attach="top">
          <ui-button>One</ui-button>
          <ui-button>Two</ui-button>
        </ui-buttons>
        <ui-segment attached>
          ....
        </ui-segment>
        <ui-buttons attach="bottom">
          <ui-button>One</ui-button>
          <ui-button>Two</ui-button>
        </ui-buttons>

      </docs-example>

      <h3>Horizontally Attached</h3>
      <p>A button can be attached to the left or right of other content</p>
      <docs-example>
        <ui-button attach="left">Left</ui-button>
        <ui-button attach="right">Right</ui-button>
      </docs-example>


      <h2>Group variation</h2>

      <h3>Vertical Buttons</h3>
      <p>Groups can be formatted to appear vertically</p>
      <docs-example>
        <ui-buttons vertical>
          <ui-button>Feed</ui-button>
          <ui-button>Messages</ui-button>
          <ui-button>Events</ui-button>
          <ui-button>Photos</ui-button>
        </ui-buttons>
      </docs-example>

      <h3>Icon Buttons</h3>
      <p>Groups can be formatted as icons</p>
      <docs-example>
        <ui-buttons icon>
          <ui-button icon="play"/>
          <ui-button icon="pause"/>
          <ui-button icon="shuffle"/>
        </ui-buttons>
      </docs-example>
    </div>
  </docs-page>
</template>

<script>

export default {
  name: 'docs-elements-button'
}
</script>
