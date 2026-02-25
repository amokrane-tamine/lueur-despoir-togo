import Link from 'next/link'

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="hero-accent" />
        <div className="hero-left">
          <div className="hero-label">Association · Togo, Afrique de l'Ouest</div>
          <h1>
            Allumer<br />
            une <span className="green">lueur</span><br />
            <span className="outline">d&apos;espoir</span>
          </h1>
          <p className="hero-desc">
            Nous œuvrons pour l&apos;éducation, la santé et le développement durable
            des communautés togolaises. Chaque action compte.
          </p>
          <div className="hero-actions">
            <Link href="/nous-aider" className="btn-vert">Faire un don</Link>
            <Link href="/a-propos" className="btn-ghost">Découvrir nos missions</Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">1 200<span>+</span></div>
              <div className="stat-label">Bénéficiaires</div>
            </div>
            <div className="stat">
              <div className="stat-num">8</div>
              <div className="stat-label">Projets actifs</div>
            </div>
            <div className="stat">
              <div className="stat-num">5</div>
              <div className="stat-label">Ans d&apos;engagement</div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-bg-image" />
          <div className="hero-big-number">LET</div>
          <div className="hero-right-content">
            <div className="hero-card">
              <div className="hero-card-top">
                <div className="hero-card-tag">Éducation</div>
                <div className="hero-card-year">2024</div>
              </div>
              <div className="hero-card-title">Construction de 2 salles de classe à Lomé</div>
            </div>
            <div className="hero-card">
              <div className="hero-card-top">
                <div className="hero-card-tag">Santé</div>
                <div className="hero-card-year">2025</div>
              </div>
              <div className="hero-card-title">Campagne de vaccination — 340 enfants</div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="strip">
        <div className="strip-items">
          {['Éducation','Santé communautaire','Développement durable','Autonomisation','Agriculture responsable','Eau potable',
            'Éducation','Santé communautaire','Développement durable','Autonomisation','Agriculture responsable','Eau potable'
          ].map((item, i) => (
            <div key={i} className="strip-item">{item}</div>
          ))}
        </div>
      </div>

      {/* MISSIONS */}
      <section className="section-missions">
        <div className="missions-top">
          <div>
            <div className="eyebrow">Nos actions</div>
            <h2 className="missions-title">Ce que nous<br />construisons<br />ensemble</h2>
          </div>
          <div>
            <p className="missions-desc">Depuis 2019, nous intervenons sur le terrain avec des équipes locales pour des projets concrets et durables au Togo.</p>
            <Link href="/a-propos" className="missions-link">Voir toutes nos missions</Link>
          </div>
        </div>
        <div className="missions-grid">
          {[
            { num: '01', title: 'Éducation & Formation', desc: 'Bourses scolaires, construction de classes et formation d\'enseignants pour offrir un avenir meilleur aux enfants.' },
            { num: '02', title: 'Santé & Bien-être', desc: 'Accès aux soins, prévention et sensibilisation avec les communautés locales pour améliorer les conditions de vie.' },
            { num: '03', title: 'Développement durable', desc: 'Agriculture responsable, eau potable et énergies renouvelables pour des villages autonomes.' },
          ].map((m) => (
            <div key={m.num} className="mission-card">
              <div className="mission-num">{m.num}</div>
              <h3 className="mission-title">{m.title}</h3>
              <p className="mission-desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-impact">
        <div className="impact-left">
          <div className="eyebrow">Notre impact</div>
          <h2 className="impact-title">Des chiffres qui<br />parlent d&apos;eux-mêmes</h2>
          <p className="impact-desc">Chaque euro donné est tracé, chaque projet documenté. Nous croyons en la transparence totale de nos actions.</p>
          <Link href="/a-propos" className="missions-link">Télécharger notre rapport d&apos;activité</Link>
        </div>
        <div className="impact-right">
          {[
            { num: '1 200', sup: '+', label: 'Bénéficiaires directs' },
            { num: '8', sup: '', label: 'Projets en cours' },
            { num: '12', sup: '', label: 'Villages accompagnés' },
            { num: '93', sup: '%', label: 'Fonds sur le terrain' },
          ].map((s, i) => (
            <div key={i} className="impact-stat-card">
              <div className="impact-num">{s.num}{s.sup && <sup>{s.sup}</sup>}</div>
              <div className="impact-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="section-partenaires">
        <div className="partenaires-inner">
          <div className="partenaires-label">Nos partenaires</div>
          <div className="partenaires-logos">
            {['Partenaire A','Partenaire B','Partenaire C','Partenaire D','Partenaire E'].map((p) => (
              <div key={p} className="part-logo">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="cta-bg-text">AGIR</div>
        <div className="cta-content">
          <div className="cta-label">Passer à l&apos;action</div>
          <h2 className="cta-title">
            Ensemble,<br />
            <span className="outline-white">changeons</span><br />
            des vies
          </h2>
        </div>
        <div className="cta-buttons">
          <Link href="/nous-aider" className="btn-blanc">Faire un don</Link>
          <Link href="/nous-aider" className="btn-outline-vert">Devenir bénévole</Link>
        </div>
      </section>

    </main>
  )
};