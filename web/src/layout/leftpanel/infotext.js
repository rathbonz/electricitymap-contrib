/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
// TODO: re-enable rules

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { __ } from '../../helpers/translation';
import ColorBlindCheckbox from '../../components/colorblindcheckbox';

const Container = styled.div`
  @media (max-width: 767px) {
    display: none !important;
  }
`;

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0" nonce="ujw4FTrG"></script>

export default () => (
  <Container className="info-text">
    <ColorBlindCheckbox />
    <p>
      {__('panel-initial-text.thisproject')}
      {' '}
      <a href="https://github.com/tmrowco/electricitymap-contrib" target="_blank">
        {__('panel-initial-text.opensource')}
      </a>
      {' '}(
      {__('panel-initial-text.see')}
      {' '}
      <a href="https://github.com/tmrowco/electricitymap-contrib/blob/master/DATA_SOURCES.md" target="_blank">
        {__('panel-initial-text.datasources')}
      </a>
      ).{' '}
      <span
        dangerouslySetInnerHTML={{
          __html: __(
            'panel-initial-text.contribute',
            'https://github.com/tmrowco/electricitymap-contrib/wiki/Getting-started',
          ),
        }}
      />
      .
    </p>
    <p>
      {__('footer.foundbugs')} <a href="https://github.com/tmrowco/electricitymap-contrib/issues/new" target="_blank">{__('footer.here')}</a>.<br />
    </p>
    <p>
      {__('footer.faq-text')}
      {' '}
      <Link to={{ pathname: '/faq', search: useLocation().search }}>
        <span className="faq-link">{__('footer.faq')}</span>
      </Link>
    </p>
    <div className="social-buttons">
      <div>
        { /* Facebook share */}
          <div class="fb-share-button" data-href="https://app.electricitymap.org" data-layout="button" data-size="small">
          <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fapp.electricitymap.org%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a>
          </div>
        { /* Twitter share */}
        <a
          className="twitter-share-button"
          data-url="https://app.electricitymap.org"
          data-via="electricitymap"
          data-lang={locale}
        />
        { /* Slack */}
        <span className="slack-button">
          <a href="https://slack.tmrow.com" target="_blank" className="slack-btn">
            <span className="slack-ico" />
            <span className="slack-text">Slack</span>
          </a>
        </span>
      </div>
    </div>
  </Container>
);
