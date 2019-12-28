import React, { Component } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import { Row, Col } from 'antd';
import IsoWidgetsWrapper from '@iso/containers/Widgets/WidgetsWrapper';
import IsoWidgetBox from '@iso/containers/Widgets/WidgetBox';

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
        <div style={styles.wisgetPageStyle} className={'staff'}>
          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={4} md={4} sm={8} xs={12} style={colStyle}>
              <IsoWidgetsWrapper className={'staffDescriptionWrap'}>
                <div className={'staffDescription staffImg'}>
                  <IsoWidgetBox>
                    <img src="https://cdn.vanderbilt.edu/vu-web/lab-wpcontent/sites/95/2019/10/04101629/me.4a896b0-Yousef-Abu-Salah-200x300.jpg" />
                  </IsoWidgetBox>
                </div>
              </IsoWidgetsWrapper>
            </Col>
            <Col lg={20} md={20} sm={16} xs={12} style={colStyle}>
              <IsoWidgetsWrapper>
                <div className={'staffDescription staffText'}>
                  <IsoWidgetBox className={'textWrap'}>
                    <h2>Person 1</h2>
                    <p>
                      Something about the staff... Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Ut et mauris tincidunt,
                      fringilla leo non, dapibus nunc. Fusce id imperdiet lorem.
                      Ut fringilla tortor quis purus egestas pulvinar. Maecenas
                      euismod in velit a pellentesque. Vestibulum luctus lacus
                      sit amet purus posuere, ut finibus lectus fringilla. Donec
                      ut tincidunt nisi. Cras in lorem eget augue hendrerit
                      vulputate cursus ut libero. Quisque sit amet varius ante.
                      Duis vitae condimentum quam, et finibus nisi. Nunc dictum
                      ipsum tristique ultricies euismod. Nunc varius tellus et
                      leo commodo eleifend. Etiam vitae sem at nibh suscipit
                      pretium a nec mi.
                    </p>
                  </IsoWidgetBox>
                </div>
              </IsoWidgetsWrapper>
            </Col>
          </Row>
          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={4} md={4} sm={8} xs={12} style={colStyle}>
              <IsoWidgetsWrapper className={'staffDescriptionWrap'}>
                <div className={'staffDescription staffImg'}>
                  <IsoWidgetBox>
                    <img src="https://cdn.vanderbilt.edu/vu-web/lab-wpcontent/sites/95/2019/10/04101629/me.4a896b0-Yousef-Abu-Salah-200x300.jpg" />
                  </IsoWidgetBox>
                </div>
              </IsoWidgetsWrapper>
            </Col>
            <Col lg={20} md={20} sm={16} xs={12} style={colStyle}>
              <IsoWidgetsWrapper>
                <div className={'staffDescription staffText'}>
                  <IsoWidgetBox className={'textWrap'}>
                    <h2>Person 2</h2>
                    <p>
                      Something about the staff... Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Ut et mauris tincidunt,
                      fringilla leo non, dapibus nunc. Fusce id imperdiet lorem.
                      Ut fringilla tortor quis purus egestas pulvinar. Maecenas
                      euismod in velit a pellentesque. Vestibulum luctus lacus
                      sit amet purus posuere, ut finibus lectus fringilla. Donec
                      ut tincidunt nisi. Cras in lorem eget augue hendrerit
                      vulputate cursus ut libero. Quisque sit amet varius ante.
                      Duis vitae condimentum quam, et finibus nisi. Nunc dictum
                      ipsum tristique ultricies euismod. Nunc varius tellus et
                      leo commodo eleifend. Etiam vitae sem at nibh suscipit
                      pretium a nec mi.
                    </p>
                  </IsoWidgetBox>
                </div>
              </IsoWidgetsWrapper>
            </Col>
          </Row>
          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={4} md={4} sm={8} xs={12} style={colStyle}>
              <IsoWidgetsWrapper className={'staffDescriptionWrap'}>
                <div className={'staffDescription staffImg'}>
                  <IsoWidgetBox>
                    <img src="https://cdn.vanderbilt.edu/vu-web/lab-wpcontent/sites/95/2019/10/04101629/me.4a896b0-Yousef-Abu-Salah-200x300.jpg" />
                  </IsoWidgetBox>
                </div>
              </IsoWidgetsWrapper>
            </Col>
            <Col lg={20} md={20} sm={16} xs={12} style={colStyle}>
              <IsoWidgetsWrapper>
                <div className={'staffDescription staffText'}>
                  <IsoWidgetBox className={'textWrap'}>
                    <h2>Person 3</h2>
                    <p>
                      Something about the staff... Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Ut et mauris tincidunt,
                      fringilla leo non, dapibus nunc. Fusce id imperdiet lorem.
                      Ut fringilla tortor quis purus egestas pulvinar. Maecenas
                      euismod in velit a pellentesque. Vestibulum luctus lacus
                      sit amet purus posuere, ut finibus lectus fringilla. Donec
                      ut tincidunt nisi. Cras in lorem eget augue hendrerit
                      vulputate cursus ut libero. Quisque sit amet varius ante.
                      Duis vitae condimentum quam, et finibus nisi. Nunc dictum
                      ipsum tristique ultricies euismod. Nunc varius tellus et
                      leo commodo eleifend. Etiam vitae sem at nibh suscipit
                      pretium a nec mi.
                    </p>
                  </IsoWidgetBox>
                </div>
              </IsoWidgetsWrapper>
            </Col>
          </Row>
          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={4} md={4} sm={8} xs={12} style={colStyle}>
              <IsoWidgetsWrapper className={'staffDescriptionWrap'}>
                <div className={'staffDescription staffImg'}>
                  <IsoWidgetBox>
                    <img src="https://cdn.vanderbilt.edu/vu-web/lab-wpcontent/sites/95/2019/10/04101629/me.4a896b0-Yousef-Abu-Salah-200x300.jpg" />
                  </IsoWidgetBox>
                </div>
              </IsoWidgetsWrapper>
            </Col>
            <Col lg={20} md={20} sm={16} xs={12} style={colStyle}>
              <IsoWidgetsWrapper>
                <div className={'staffDescription staffText'}>
                  <IsoWidgetBox className={'textWrap'}>
                    <h2>Person 4</h2>
                    <p>
                      Something about the staff... Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Ut et mauris tincidunt,
                      fringilla leo non, dapibus nunc. Fusce id imperdiet lorem.
                      Ut fringilla tortor quis purus egestas pulvinar. Maecenas
                      euismod in velit a pellentesque. Vestibulum luctus lacus
                      sit amet purus posuere, ut finibus lectus fringilla. Donec
                      ut tincidunt nisi. Cras in lorem eget augue hendrerit
                      vulputate cursus ut libero. Quisque sit amet varius ante.
                      Duis vitae condimentum quam, et finibus nisi. Nunc dictum
                      ipsum tristique ultricies euismod. Nunc varius tellus et
                      leo commodo eleifend. Etiam vitae sem at nibh suscipit
                      pretium a nec mi.
                    </p>
                  </IsoWidgetBox>
                </div>
              </IsoWidgetsWrapper>
            </Col>
          </Row>
          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={4} md={4} sm={8} xs={12} style={colStyle}>
              <IsoWidgetsWrapper className={'staffDescriptionWrap'}>
                <div className={'staffDescription staffImg'}>
                  <IsoWidgetBox>
                    <img src="https://cdn.vanderbilt.edu/vu-web/lab-wpcontent/sites/95/2019/10/04101629/me.4a896b0-Yousef-Abu-Salah-200x300.jpg" />
                  </IsoWidgetBox>
                </div>
              </IsoWidgetsWrapper>
            </Col>
            <Col lg={20} md={20} sm={16} xs={12} style={colStyle}>
              <IsoWidgetsWrapper>
                <div className={'staffDescription staffText'}>
                  <IsoWidgetBox className={'textWrap'}>
                    <h2>Person 5</h2>
                    <p>
                      Something about the staff... Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Ut et mauris tincidunt,
                      fringilla leo non, dapibus nunc. Fusce id imperdiet lorem.
                      Ut fringilla tortor quis purus egestas pulvinar. Maecenas
                      euismod in velit a pellentesque. Vestibulum luctus lacus
                      sit amet purus posuere, ut finibus lectus fringilla. Donec
                      ut tincidunt nisi. Cras in lorem eget augue hendrerit
                      vulputate cursus ut libero. Quisque sit amet varius ante.
                      Duis vitae condimentum quam, et finibus nisi. Nunc dictum
                      ipsum tristique ultricies euismod. Nunc varius tellus et
                      leo commodo eleifend. Etiam vitae sem at nibh suscipit
                      pretium a nec mi.
                    </p>
                  </IsoWidgetBox>
                </div>
              </IsoWidgetsWrapper>
            </Col>
          </Row>
          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={4} md={4} sm={8} xs={12} style={colStyle}>
              <IsoWidgetsWrapper className={'staffDescriptionWrap'}>
                <div className={'staffDescription staffImg'}>
                  <IsoWidgetBox>
                    <img src="https://cdn.vanderbilt.edu/vu-web/lab-wpcontent/sites/95/2019/10/04101629/me.4a896b0-Yousef-Abu-Salah-200x300.jpg" />
                  </IsoWidgetBox>
                </div>
              </IsoWidgetsWrapper>
            </Col>
            <Col lg={20} md={20} sm={16} xs={12} style={colStyle}>
              <IsoWidgetsWrapper>
                <div className={'staffDescription staffText'}>
                  <IsoWidgetBox className={'textWrap'}>
                    <h2>Person 6</h2>
                    <p>
                      Something about the staff... Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Ut et mauris tincidunt,
                      fringilla leo non, dapibus nunc. Fusce id imperdiet lorem.
                      Ut fringilla tortor quis purus egestas pulvinar. Maecenas
                      euismod in velit a pellentesque. Vestibulum luctus lacus
                      sit amet purus posuere, ut finibus lectus fringilla. Donec
                      ut tincidunt nisi. Cras in lorem eget augue hendrerit
                      vulputate cursus ut libero. Quisque sit amet varius ante.
                      Duis vitae condimentum quam, et finibus nisi. Nunc dictum
                      ipsum tristique ultricies euismod. Nunc varius tellus et
                      leo commodo eleifend. Etiam vitae sem at nibh suscipit
                      pretium a nec mi.
                    </p>
                  </IsoWidgetBox>
                </div>
              </IsoWidgetsWrapper>
            </Col>
          </Row>
        </div>
      </LayoutContentWrapper>
    );
  }
}
