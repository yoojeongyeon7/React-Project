import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Grid.css';

function Grid({ sectionRef }) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const { companyData } = await import('./companyData');
        setCompanies(companyData);
      } catch (err) {
        setError('데이터를 불러오는 데 실패했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, []);

  return (
    <section ref={sectionRef} className="grid-section">
      <h2 className="grid-title">✨ 추천 기업</h2>
      {loading && <div>로딩 중...</div>}
      {error && <div className="error-message">{error}</div>}
      <div className="grid">
        {!loading && !error && companies.map(company => (
          <Card key={company.id} data={company} />
        ))}
      </div>
    </section>
  );
}

export default Grid;
