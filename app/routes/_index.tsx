import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';

import styles from '~/styles/index.css?url';

export const meta: MetaFunction = () => {
  return [
    { title: 'Devin Rasmussen' },
    {
      name: 'description',
      content: 'I am Devin the developer',
    },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Hey, I&apos;m Devin</h1>
      <div className="grid">
        <div className="gridChild"></div>
      </div>
    </div>
  );
}
