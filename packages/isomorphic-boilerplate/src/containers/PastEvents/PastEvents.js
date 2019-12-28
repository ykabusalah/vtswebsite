import React, { Component } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>Past Event Descriptions</h1>
          <h2>My Event #1 - Wednesday, January 1st, 2019</h2>
          <p>
            Something about the past event... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et mauris tincidunt, fringilla leo non, dapibus nunc. Fusce id imperdiet lorem. Ut fringilla tortor quis purus egestas pulvinar. Maecenas euismod in velit a pellentesque. Vestibulum luctus lacus sit amet purus posuere, ut finibus lectus fringilla. Donec ut tincidunt nisi. Cras in lorem eget augue hendrerit vulputate cursus ut libero. Quisque sit amet varius ante. Duis vitae condimentum quam, et finibus nisi. Nunc dictum ipsum tristique ultricies euismod. Nunc varius tellus et leo commodo eleifend. Etiam vitae sem at nibh suscipit pretium a nec mi.
          </p>
          <h2>My Event #2 - Thursday, January 2nd, 2019</h2>
          <p>
            Nulla finibus, ante quis luctus vestibulum, odio elit viverra ligula, eu feugiat ante massa non nunc. Aliquam mattis tincidunt efficitur. Cras mollis mi nec libero volutpat, facilisis vestibulum tortor blandit. Integer consectetur id lectus sed euismod. Sed quis nunc cursus, aliquam eros sed, aliquet ipsum. Curabitur ipsum libero, tincidunt quis venenatis sit amet, interdum a tellus. Sed viverra scelerisque pretium. Etiam vitae venenatis libero. Sed arcu augue, pretium et bibendum non, congue in felis. Pellentesque elit urna, efficitur non tempus id, lobortis non diam. In hac habitasse platea dictumst. In bibendum tristique nisl, congue sodales massa pellentesque et.
          </p>
          <h2>My Event #3 - Friday, January 3rd, 2019</h2>
          <p>
            Praesent molestie nulla metus, eu suscipit dui egestas consectetur. Vivamus dapibus fringilla vulputate. Pellentesque vitae lacinia nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam placerat magna a vestibulum vehicula. Nam accumsan sollicitudin odio rutrum sagittis. Duis vitae orci bibendum, vehicula ipsum quis, lacinia metus. In aliquet nibh maximus odio condimentum, id fringilla metus aliquet. Donec semper porta scelerisque. Nullam magna libero, fermentum eu suscipit sit amet, ultrices quis nisi. Quisque sollicitudin laoreet nisl, non scelerisque mi pellentesque sit amet. Maecenas ut commodo est. Donec vehicula quam accumsan augue vehicula, quis dictum enim finibus. Etiam quis pellentesque turpis. Vestibulum lobortis quam ac orci aliquam feugiat. Etiam tincidunt mi ut nulla convallis elementum eget eu leo.
          </p>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
