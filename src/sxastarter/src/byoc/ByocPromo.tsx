import React from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';

interface ByocPromoProps {
  imageUrl: string;
  text: string;
  url: string;
  urlText: string;
}

export const ByocPromo = (props: ByocPromoProps): JSX.Element => {
  return (
    <div className="component promo col-12 link-button">
      <div className="component-content">
        <div className="field-promoicon">
          {props.imageUrl && <img alt="Kayee" width="2000" height="1116" src={props.imageUrl} />}
        </div>
        <div className="promo-text">
          <div>
            <div className="field-promotext">
              <div>
                <p>{props.text}</p>
              </div>
            </div>
          </div>
          {props.url && (
            <div className="field-promolink">
              <a href={props.url} title={props.urlText} target="_blank">
                {props.urlText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FEAAS.External.registerComponent(ByocPromo, {
  name: 'ByocPromo',
  title: 'BYOC Promo',
  description: 'BYOC Promo',
  thumbnail:
    'http://xmcloudcm.localhost/-/media/Project/Kayee/shared/kayee-blogpost-15x-sitecore-mvp-award-2024.png?h=1116&amp;iar=0&amp;w=2000&amp;hash=E2C0DDB5A74094A79E34C2321845F27C',
  group: 'BYOC - Promos',
  required: ['text', 'imageUrl', 'url'],
  properties: {
    imageUrl: {
      type: 'string',
    },
    text: {
      type: 'string',
    },
    url: {
      type: 'string',
    },
    urlText: {
      type: 'string',
    },
  },
  ui: {
    text: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:placeholder': 'Write a great Promo text',
    },
  },
});
