import React, { Component } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import { Row, Col } from 'antd';
import IsoWidgetsWrapper from '@iso/containers/Widgets/WidgetsWrapper';
import IsoWidgetBox from '@iso/containers/Widgets/WidgetBox';
import ImagePlaceholder from '@iso/assets/images/image-placeholder.jpg'

import basicStyle from '@iso/assets/styles/constants';
const styles = {
  wisgetPageStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
};

export default class extends Component {
  render() {
    const { rowStyle, colStyle } = basicStyle;
    return (
      <LayoutContentWrapper>
      <div style={styles.wisgetPageStyle} className={'announcementsEvents'}>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={12} md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox>
                <h1>Upcoming Events</h1>
                <h2>Wednesday, January 1st, 2020</h2>
                <p className={'eventImageWrap'}><img src={ImagePlaceholder} /></p>
                <p>
                  Something about the events... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et mauris tincidunt, fringilla leo non, dapibus nunc. Fusce id imperdiet lorem. Ut fringilla tortor quis purus egestas pulvinar. Maecenas euismod in velit a pellentesque. Vestibulum luctus lacus sit amet purus posuere, ut finibus lectus fringilla. Donec ut tincidunt nisi. Cras in lorem eget augue hendrerit vulputate cursus ut libero. Quisque sit amet varius ante. Duis vitae condimentum quam, et finibus nisi. Nunc dictum ipsum tristique ultricies euismod. Nunc varius tellus et leo commodo eleifend. Etiam vitae sem at nibh suscipit pretium a nec mi.
                </p>
                <h2>Thursday, January 2nd, 2020</h2>
                <p className={'eventImageWrap'}><img src={ImagePlaceholder} /></p>
                <p>
                  Nulla finibus, ante quis luctus vestibulum, odio elit viverra ligula, eu feugiat ante massa non nunc. Aliquam mattis tincidunt efficitur. Cras mollis mi nec libero volutpat, facilisis vestibulum tortor blandit. Integer consectetur id lectus sed euismod. Sed quis nunc cursus, aliquam eros sed, aliquet ipsum. Curabitur ipsum libero, tincidunt quis venenatis sit amet, interdum a tellus. Sed viverra scelerisque pretium. Etiam vitae venenatis libero. Sed arcu augue, pretium et bibendum non, congue in felis. Pellentesque elit urna, efficitur non tempus id, lobortis non diam. In hac habitasse platea dictumst. In bibendum tristique nisl, congue sodales massa pellentesque et.
                </p>
                <h2>Friday, January 3rd, 2020</h2>
                <p className={'eventImageWrap'}><img src={ImagePlaceholder} /></p>
                <p>
                  Praesent molestie nulla metus, eu suscipit dui egestas consectetur. Vivamus dapibus fringilla vulputate. Pellentesque vitae lacinia nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam placerat magna a vestibulum vehicula. Nam accumsan sollicitudin odio rutrum sagittis. Duis vitae orci bibendum, vehicula ipsum quis, lacinia metus. In aliquet nibh maximus odio condimentum, id fringilla metus aliquet. Donec semper porta scelerisque. Nullam magna libero, fermentum eu suscipit sit amet, ultrices quis nisi. Quisque sollicitudin laoreet nisl, non scelerisque mi pellentesque sit amet. Maecenas ut commodo est. Donec vehicula quam accumsan augue vehicula, quis dictum enim finibus. Etiam quis pellentesque turpis. Vestibulum lobortis quam ac orci aliquam feugiat. Etiam tincidunt mi ut nulla convallis elementum eget eu leo.
                </p>
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>

          <Col lg={12} md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox>
                <h1>Announcements</h1>
                <p>
                  <strong>Wednesday, November 6th, 2020</strong>: Something about the announcements... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et mauris tincidunt, fringilla leo non, dapibus nunc. Fusce id imperdiet lorem. Ut fringilla tortor quis purus egestas pulvinar. Maecenas euismod in velit a pellentesque. Vestibulum luctus lacus sit amet purus posuere, ut finibus lectus fringilla. Donec ut tincidunt nisi. Cras in lorem eget augue hendrerit vulputate cursus ut libero. Quisque sit amet varius ante. Duis vitae condimentum quam, et finibus nisi. Nunc dictum ipsum tristique ultricies euismod. Nunc varius tellus et leo commodo eleifend. Etiam vitae sem at nibh suscipit pretium a nec mi.
                </p>
                <p>
                  <strong>Thursday, November 7th, 2020</strong>: Nulla finibus, ante quis luctus vestibulum, odio elit viverra ligula, eu feugiat ante massa non nunc. Aliquam mattis tincidunt efficitur. Cras mollis mi nec libero volutpat, facilisis vestibulum tortor blandit. Integer consectetur id lectus sed euismod. Sed quis nunc cursus, aliquam eros sed, aliquet ipsum. Curabitur ipsum libero, tincidunt quis venenatis sit amet, interdum a tellus. Sed viverra scelerisque pretium. Etiam vitae venenatis libero. Sed arcu augue, pretium et bibendum non, congue in felis. Pellentesque elit urna, efficitur non tempus id, lobortis non diam. In hac habitasse platea dictumst. In bibendum tristique nisl, congue sodales massa pellentesque et.
                </p>
                <p>
                  <strong>Friday, November 8th, 2020</strong>: Praesent molestie nulla metus, eu suscipit dui egestas consectetur. Vivamus dapibus fringilla vulputate. Pellentesque vitae lacinia nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam placerat magna a vestibulum vehicula. Nam accumsan sollicitudin odio rutrum sagittis. Duis vitae orci bibendum, vehicula ipsum quis, lacinia metus. In aliquet nibh maximus odio condimentum, id fringilla metus aliquet. Donec semper porta scelerisque. Nullam magna libero, fermentum eu suscipit sit amet, ultrices quis nisi. Quisque sollicitudin laoreet nisl, non scelerisque mi pellentesque sit amet. Maecenas ut commodo est. Donec vehicula quam accumsan augue vehicula, quis dictum enim finibus. Etiam quis pellentesque turpis. Vestibulum lobortis quam ac orci aliquam feugiat. Etiam tincidunt mi ut nulla convallis elementum eget eu leo.
                </p>
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>
        </div>
      </LayoutContentWrapper>
    );
  }
}
