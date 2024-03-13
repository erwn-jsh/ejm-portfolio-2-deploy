import React from 'react';
import styles from './styles.module.scss';
import Word from '../Common/TextGradeOpacityWord';

export default function About() {
  return (
    <div className={styles.container} id="About">
      <h3 className={`${styles.about} zilla-slab-regular`}>About</h3>
      <div className={styles.text_container}>
        <div className={`${styles.text}`}>
          <Word
            values={[
              { word: { text: 'As', style: '' } },
              { word: { text: 'a ', style: '' } },
              { word: { text: 'web ', style: '' } },
              { word: { text: 'developer, ', style: '' } },
              { word: { text: 'I ', style: '' } },
              { word: { text: 'empower ', style: '' } },
              { word: { text: 'businesses ', style: 'text-dark-bg-blue' } },
              { word: { text: 'and ', style: 'text-dark-bg-blue' } },
              { word: { text: 'organizations ', style: 'text-dark-bg-blue' } },
              { word: { text: 'by ', style: '' } },
              { word: { text: 'building ', style: '' } },
              { word: { text: 'online ', style: 'text-dark-bg-purple' } },
              { word: { text: 'services.', style: 'text-dark-bg-purple' } },
            ]}
          />
        </div>

        <div className={`${styles.text}`}>
          <Word
            values={[
              { word: { text: 'With ', style: '' } },
              { word: { text: 'a ', style: '' } },
              { word: { text: 'passion ', style: 'text-dark-bg-orange' } },
              { word: { text: 'for ', style: '' } },
              { word: { text: 'design ', style: '' } },
              { word: { text: 'and ', style: '' } },
              { word: { text: 'development, ', style: '' } },
              { word: { text: 'I ', style: '' } },
              { word: { text: 'aim ', style: 'text-dark-bg-red' } },
              { word: { text: 'to ', style: '' } },
              { word: { text: 'deliver ', style: '' } },
              { word: { text: 'products ', style: '' } },
              { word: { text: 'and ', style: '' } },
              { word: { text: 'experiences ', style: '' } },
              { word: { text: 'that ', style: '' } },
            ]}
            offset1={0.6}
            offset2={0.25}
          />
        </div>

        <div className={styles.git_container}>
          <Word
            values={[
              { word: { text: 'are ', style: '' } },
              { word: { text: 'high ', style: '' } },
              { word: { text: 'impact', style: 'text-dark-bg-green' } },
            ]}
            offset1={0.6}
            offset2={0.25}
          />
          <img src="/assets/About/saitama.gif" alt="" />
        </div>

        <div className={styles.git_container}>
          <Word
            values={[
              { word: { text: 'drive ', style: 'text-dark-bg-purple' } },
              { word: { text: 'value ', style: 'text-dark-bg-purple' } },
              { word: { text: 'and', style: '' } },
            ]}
            offset1={0.6}
            offset2={0.25}
          />
          <img src="/assets/About/dogecoin.gif" alt="" />
        </div>

        <div className={styles.git_container}>
          <Word
            values={[
              { word: { text: 'look ', style: 'text-dark-bg-orange' } },
              { word: { text: 'good ', style: 'text-dark-bg-orange' } },
              { word: { text: 'too', style: '' } },
            ]}
            offset1={0.6}
            offset2={0.25}
          />
          <img src="/assets/About/adtime.gif" alt="" />
        </div>
      </div>
    </div>
  );
}
