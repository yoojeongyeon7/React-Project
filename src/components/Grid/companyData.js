import React from 'react';
import Card from '../Card/Card';
import './Grid.css';
import { companyData } from './companyData';

function Grid({ sectionRef }) {
  return (
    <section ref={sectionRef} className="grid-section">
      <h2 className="grid-title">✨ 추천 기업</h2>
      <div className="grid">
        {companyData.map(company => (
          <Card key={company.id} data={company} />
        ))}
      </div>
    </section>
  );
}

export default Grid;
