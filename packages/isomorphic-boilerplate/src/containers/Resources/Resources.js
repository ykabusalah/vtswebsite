import React, { Component } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper>
        <LayoutContent>
          <h1>Recommended Resources</h1>
          <ol>
            <li>
              <h2><a href="https://cyber.harvard.edu/getinvolved">Harvard’s Berkman Klein Center for Internet & Society</a></h2>
              <p>BKC’s own research updates + related events around in the US + recommended readings & videos published on other websites</p>
            </li>
            <li>
              <h2><a href="https://datasociety.net/">Data &amp; Society</a></h2>
              <p>Data & Society’s new events and research reports</p>
            </li>
            <li>
              <h2><a href="https://www.oii.ox.ac.uk/">Oxford Internet Institute</a></h2>
              <p>OII’s new research updates</p>
            </li>
            <li>
              <h2><a href="https://www.wired.com/">Wired</a> (Limited Number of Free Articles & Paid Subscription provide more
              customized Newsletters)</h2>
              <p>Journalist articles</p>
            </li>
            <li>
              <h2><a href="https://www.technologyreview.com/">MIT Technology Review</a> (Paid Subscription Required)</h2>
              <p>Journalist articles</p>
            </li>
          </ol>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
