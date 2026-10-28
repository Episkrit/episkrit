import './styles.css';

const app = document.getElementById('app');

const content = `
  <!-- Ambient background layers -->
  <div class="ambient-layers" aria-hidden="true">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    <div class="grid-overlay"></div>
    <div class="noise-texture"></div>
  </div>

  <div class="page-shell">
    <!-- Elite Navigation -->
    <header class="topbar" role="banner">
      <div class="brand-wrap" aria-label="Episkrit home">
        <div class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 42 42" fill="none" aria-hidden="true">
            <path d="M21 3L6 12v18l15 9 15-9V12L21 3Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M21 9v12M12 16h18" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="brand-copy">
          <span class="brand-name">Episkrit</span>
          <span class="brand-tag">Language Intelligence</span>
        </div>
      </div>

      <nav class="nav" aria-label="Main navigation">
        <a href="#solutions" data-nav="Solutions">Solutions</a>
        <a href="#services" data-nav="Services">Services</a>
        <a href="#method" data-nav="Method">Method</a>
        <a href="#industries" data-nav="Industries">Industries</a>
        <a href="#contact" data-nav="Contact">Contact</a>
      </nav>

      <div class="nav-actions">
        <button class="theme-toggle" type="button" aria-label="Toggle color theme">
          <span class="toggle-icon" aria-hidden="true"></span>
          <span class="toggle-text">Dark</span>
        </button>
        <a href="#contact" class="btn nav-cta">Begin</a>
      </div>
    </header>

    <main id="main-content">
      <!-- Hero Section -->
      <section class="hero" id="solutions" aria-labelledby="hero-title">
        <div class="hero-background" aria-hidden="true">
          <div class="hero-gradient"></div>
          <div class="hero-grid"></div>
          <div class="hero-particles" id="hero-particles"></div>
        </div>

        <div class="hero-foreground">
          <div class="hero-badge">
            <span class="badge-ring" aria-hidden="true"></span>
            <span class="badge-text">Enterprise Language Systems</span>
          </div>

          <h1 id="hero-title" class="hero-headline">
            <span class="headline-line">Precision language</span>
            <span class="headline-line headline-accent">infrastructure</span>
            <span class="headline-line">for organizations</span>
            <span class="headline-line">that cannot afford</span>
            <span class="headline-line headline-accent">ambiguity.</span>
          </h1>

          <p class="hero-lead">
            We help ambitious companies convert multilingual complexity into operational clarity — through strategy,
            language engineering, and production-grade AI systems built for trust and scale.
          </p>

          <div class="hero-cta">
            <a href="#contact" class="btn btn-primary">
              <span class="btn-text">Book a consultation</span>
              <span class="btn-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
            <a href="#services" class="btn btn-secondary">
              <span class="btn-text">Explore capabilities</span>
            </a>
          </div>

          <div class="hero-stats" aria-label="Key company metrics">
            <div class="stat">
              <div class="stat-value" data-count="21">0</div>
              <div class="stat-label">Markets enabled</div>
              <div class="stat-line" aria-hidden="true"></div>
            </div>
            <div class="stat">
              <div class="stat-value" data-count="96.2">0</div>
              <div class="stat-label">Quality benchmark</div>
              <div class="stat-line" aria-hidden="true"></div>
            </div>
            <div class="stat">
              <div class="stat-value" data-count="18">0</div>
              <div class="stat-label">Years of expertise</div>
              <div class="stat-line" aria-hidden="true"></div>
            </div>
          </div>
        </div>

        <div class="hero-visual" aria-label="Global language operations dashboard">
          <div class="dashboard-container">
            <div class="dashboard-card primary-card">
              <div class="card-header">
                <div class="card-title-group">
                  <span class="card-subtitle">Global Language Stack</span>
                  <span class="live-indicator" aria-label="System operational">
                    <span class="live-dot" aria-hidden="true"></span>
                    Live
                  </span>
                </div>
              </div>

              <div class="card-metrics">
                <div class="metric">
                  <span class="metric-label">Coverage</span>
                  <div class="metric-value">
                    <span class="counter" data-target="96.2">0</span><span class="metric-suffix">%</span>
                  </div>
                </div>
                <div class="metric">
                  <span class="metric-label">Latency</span>
                  <div class="metric-value">
                    <span class="counter" data-target="320">0</span><span class="metric-suffix">ms</span>
                  </div>
                </div>
                <div class="metric">
                  <span class="metric-label">Throughput</span>
                  <div class="metric-value">
                    <span class="counter" data-target="12.4">0</span><span class="metric-suffix">k/hr</span>
                  </div>
                </div>
                <div class="metric">
                  <span class="metric-label">Uptime</span>
                  <div class="metric-value">
                    <span class="counter" data-target="99.99">0</span><span class="metric-suffix">%</span>
                  </div>
                </div>
              </div>

              <div class="card-chart" aria-hidden="true">
                <canvas id="performance-chart"></canvas>
              </div>
            </div>

            <div class="dashboard-card secondary-card">
              <div class="card-header">
                <span class="card-subtitle">Active Regions</span>
              </div>
              <div class="region-list" id="region-list"></div>
            </div>

            <div class="dashboard-card tertiary-card">
              <div class="card-header">
                <span class="card-subtitle">Language Pairs</span>
              </div>
              <div class="language-pairs" id="language-pairs"></div>
            </div>
          </div>

          <div class="floating-insight" aria-label="Key insight">
            <div class="insight-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
            </div>
            <div class="insight-content">
              <span class="insight-label">Operational Clarity</span>
              <strong>Multilingual systems designed for enterprise reliability at scale.</strong>
            </div>
          </div>
        </div>

        <div class="scroll-indicator" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      <!-- Trust Bar - Elite Partners -->
      <section class="trust-bar" aria-label="Trusted by industry leaders">
        <div class="trust-content">
          <p class="trust-label">Trusted by leaders in</p>
          <div class="trust-logos" aria-hidden="true">
            <span class="trust-sector" data-sector="Finance">Financial Services</span>
            <span class="trust-divider" aria-hidden="true"></span>
            <span class="trust-sector" data-sector="Healthcare">Healthcare &amp; Life Sciences</span>
            <span class="trust-divider" aria-hidden="true"></span>
            <span class="trust-sector" data-sector="Legal">Legal &amp; Regulatory</span>
            <span class="trust-divider" aria-hidden="true"></span>
            <span class="trust-sector" data-sector="Public">Public Sector</span>
            <span class="trust-divider" aria-hidden="true"></span>
            <span class="trust-sector" data-sector="Tech">Technology</span>
          </div>
        </div>
      </section>

      <!-- Capabilities Section -->
      <section class="section capabilities-section" id="services" aria-labelledby="capabilities-title">
        <div class="section-header">
          <div class="section-badge">
            <span class="badge-dot" aria-hidden="true"></span>
            <span>Core Capabilities</span>
          </div>
          <h2 id="capabilities-title" class="section-title">
            Language infrastructure engineered<br>for <span class="title-accent">serious business</span> environments.
          </h2>
          <p class="section-lead">
            We design the systems behind multilingual customer experience, knowledge retrieval, document intelligence,
            regulatory communication, and AI-assisted operations.
          </p>
        </div>

        <div class="capabilities-grid">
          <article class="capability-card featured" data-capability="platforms">
            <div class="card-media" aria-hidden="true">
              <div class="capability-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="6" y="6" width="36" height="36" rx="6"/>
                  <path d="M14 24h20M24 14v20"/>
                </svg>
              </div>
              <div class="card-glow" aria-hidden="true"></div>
            </div>
            <div class="card-content">
              <span class="card-number">01</span>
              <h3>Language Platforms</h3>
              <p>Custom multilingual systems designed for governance, performance, and long-term operational resilience.</p>
              <ul class="card-features">
                <li><span aria-hidden="true">✦</span> Multi-tenant architecture</li>
                <li><span aria-hidden="true">✦</span> Real-time quality gates</li>
                <li><span aria-hidden="true">✦</span> Governance &amp; audit trails</li>
              </ul>
              <a href="#contact" class="card-link" aria-label="Learn more about Language Platforms">
                <span>Learn more</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <article class="capability-card" data-capability="nlp">
            <div class="card-media" aria-hidden="true">
              <div class="capability-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M24 6c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"/>
                  <path d="M24 14v10M18 20h12"/>
                  <circle cx="24" cy="24" r="4"/>
                </svg>
              </div>
              <div class="card-glow" aria-hidden="true"></div>
            </div>
            <div class="card-content">
              <span class="card-number">02</span>
              <h3>NLP Engineering</h3>
              <p>Domain-aware language models, annotation workflows, and evaluation pipelines built around real business needs.</p>
              <ul class="card-features">
                <li><span aria-hidden="true">✦</span> Fine-tuned domain models</li>
                <li><span aria-hidden="true">✦</span> Human-in-the-loop workflows</li>
                <li><span aria-hidden="true">✦</span> Continuous evaluation</li>
              </ul>
              <a href="#contact" class="card-link" aria-label="Learn more about NLP Engineering">
                <span>Learn more</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <article class="capability-card" data-capability="qa">
            <div class="card-media" aria-hidden="true">
              <div class="capability-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M24 4l16 10v20L24 44 8 34V14z"/>
                  <path d="M20 18l4 4 8-10"/>
                  <circle cx="24" cy="26" r="3"/>
                </svg>
              </div>
              <div class="card-glow" aria-hidden="true"></div>
            </div>
            <div class="card-content">
              <span class="card-number">03</span>
              <h3>Language QA</h3>
              <p>Operational quality frameworks that protect accuracy, consistency, and brand confidence across complex outputs.</p>
              <ul class="card-features">
                <li><span aria-hidden="true">✦</span> Automated quality scoring</li>
                <li><span aria-hidden="true">✦</span> Linguistic consistency checks</li>
                <li><span aria-hidden="true">✦</span> Brand voice enforcement</li>
              </ul>
              <a href="#contact" class="card-link" aria-label="Learn more about Language QA">
                <span>Learn more</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </section>

      <!-- Services Section -->
      <section class="section services-section" aria-labelledby="services-title">
        <div class="section-header split-header">
          <div>
            <div class="section-badge">
              <span class="badge-dot" aria-hidden="true"></span>
              <span>Services</span>
            </div>
            <h2 id="services-title" class="section-title">
              Strategy, engineering, and delivery<br>without <span class="title-accent">compromise.</span>
            </h2>
          </div>
          <p class="section-lead">
            End-to-end partnership from initial assessment through production deployment and ongoing optimization.
          </p>
        </div>

        <div class="services-grid">
          <article class="service-card">
            <div class="service-number">01</div>
            <div class="service-content">
              <h3>Language Strategy</h3>
              <p>Assess maturity, define governance, and build the roadmap required for scalable multilingual operations.</p>
              <div class="service-deliverables">
                <span class="deliverable">Maturity assessment</span>
                <span class="deliverable">Governance framework</span>
                <span class="deliverable">Technology roadmap</span>
                <span class="deliverable">ROI modeling</span>
              </div>
            </div>
          </article>

          <article class="service-card">
            <div class="service-number">02</div>
            <div class="service-content">
              <h3>Model Design &amp; Engineering</h3>
              <p>Develop tailored NLP systems and linguistic tooling aligned to your sector, workflows, and risk profile.</p>
              <div class="service-deliverables">
                <span class="deliverable">Custom model training</span>
                <li class="deliverable">Annotation pipelines</span>
                <span class="deliverable">Evaluation frameworks</span>
                <span class="deliverable">Production hardening</span>
              </div>
            </div>
          </article>

          <article class="service-card">
            <div class="service-number">03</div>
            <div class="service-content">
              <h3>Operational Excellence</h3>
              <p>Monitor quality, optimize performance, and keep production systems reliable as your scale and complexity grow.</p>
              <div class="service-deliverables">
                <span class="deliverable">24/7 monitoring</span>
                <span class="deliverable">Quality dashboards</span>
                <span class="deliverable">Performance optimization</span>
                <span class="deliverable">Continuous improvement</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Method Section -->
      <section class="section method-section" id="method" aria-labelledby="method-title">
        <div class="section-header">
          <div class="section-badge">
            <span class="badge-dot" aria-hidden="true"></span>
            <span>Our Method</span>
          </div>
          <h2 id="method-title" class="section-title">
            From assessment to<br>production <span class="title-accent">value.</span>
          </h2>
          <p class="section-lead">
            A proven four-phase approach that de-risks language AI initiatives and accelerates time-to-value.
          </p>
        </div>

        <div class="method-timeline">
          <div class="timeline-track" aria-hidden="true"></div>

          <article class="method-step" data-step="1">
            <div class="step-marker" aria-hidden="true">
              <span class="step-number">01</span>
              <span class="step-ring"></span>
            </div>
            <div class="step-content">
              <h3>Assess</h3>
              <p>Identify linguistic risk, critical workflows, and strategic gaps across your operating model through structured discovery and stakeholder alignment.</p>
              <div class="step-outcomes">
                <span>Risk matrix</span>
                <span>Gap analysis</span>
                <span>Stakeholder map</span>
              </div>
            </div>
          </article>

          <article class="method-step" data-step="2">
            <div class="step-marker" aria-hidden="true">
              <span class="step-number">02</span>
              <span class="step-ring"></span>
            </div>
            <div class="step-content">
              <h3>Design</h3>
              <p>Define the right architecture, quality controls, and governance model for your environment with technical precision.</p>
              <div class="step-outcomes">
                <span>System architecture</span>
                <span>Quality framework</span>
                <span>Governance model</span>
              </div>
            </div>
          </article>

          <article class="method-step" data-step="3">
            <div class="step-marker" aria-hidden="true">
              <span class="step-number">03</span>
              <span class="step-ring"></span>
            </div>
            <div class="step-content">
              <h3>Deploy</h3>
              <p>Build and launch stable systems supported by evaluation loops, monitoring, and clear accountability structures.</p>
              <div class="step-outcomes">
                <span>Production system</span>
                <span>Eval pipelines</span>
                <span>Monitoring stack</span>
              </div>
            </div>
          </article>

          <article class="method-step" data-step="4">
            <div class="step-marker" aria-hidden="true">
              <span class="step-number">04</span>
              <span class="step-ring"></span>
            </div>
            <div class="step-content">
              <h3>Scale</h3>
              <p>Expand multilingual capability without losing precision, consistency, or operational control across new markets.</p>
              <div class="step-outcomes">
                <span>Market expansion</span>
                <span>Automated QA</span>
                <span>Continuous optimization</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Industries Section -->
      <section class="section industries-section" id="industries" aria-labelledby="industries-title">
        <div class="section-header">
          <div class="section-badge">
            <span class="badge-dot" aria-hidden="true"></span>
            <span>Industries</span>
          </div>
          <h2 id="industries-title" class="section-title">
            Built for high-stakes,<br>high-volume language <span class="title-accent">environments.</span>
          </h2>
          <p class="section-lead">
            Deep domain expertise across regulated and complex sectors where language precision is non-negotiable.
          </p>
        </div>

        <div class="industries-grid">
          <article class="industry-card" data-industry="finance">
            <div class="industry-media" aria-hidden="true">
              <div class="industry-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="6" y="10" width="36" height="28" rx="3"/>
                  <path d="M12 18h24M12 24h20M12 30h16"/>
                  <path d="M24 14v6"/>
                </svg>
              </div>
            </div>
            <div class="industry-content">
              <h3>Financial Services</h3>
              <p>Risk communication, multilingual compliance, and high-trust operational content for global institutions.</p>
              <ul class="industry-details">
                <li>Regulatory reporting automation</li>
                <li>Cross-border compliance</li>
                <li>Client communication at scale</li>
              </ul>
            </div>
          </article>

          <article class="industry-card" data-industry="healthcare">
            <div class="industry-media" aria-hidden="true">
              <div class="industry-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M24 6v36M6 24h36"/>
                  <circle cx="24" cy="24" r="16"/>
                </svg>
              </div>
            </div>
            <div class="industry-content">
              <h3>Healthcare &amp; Life Sciences</h3>
              <p>Clinical communication systems and multilingual knowledge workflows for sensitive, regulated contexts.</p>
              <ul class="industry-details">
                <li>Clinical trial documentation</li>
                <li>Patient communication</li>
                <li>Regulatory submissions</li>
              </ul>
            </div>
          </article>

          <article class="industry-card" data-industry="legal">
            <div class="industry-media" aria-hidden="true">
              <div class="industry-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 6h20a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z"/>
                  <path d="M18 16h12M18 22h12M18 28h8"/>
                </svg>
              </div>
            </div>
            <div class="industry-content">
              <h3>Legal &amp; Regulatory</h3>
              <p>Document intelligence and language control for regulated information flows and cross-border matters.</p>
              <ul class="industry-details">
                <li>Contract analysis &amp; translation</li>
                <li>Multi-jurisdiction compliance</li>
                <li>Discovery &amp; e-discovery</li>
              </ul>
            </div>
          </article>

          <article class="industry-card" data-industry="public">
            <div class="industry-media" aria-hidden="true">
              <div class="industry-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M24 6l16 10v20L24 44 8 34V16z"/>
                  <path d="M14 22h20M14 28h20"/>
                  <circle cx="24" cy="14" r="4"/>
                </svg>
              </div>
            </div>
            <div class="industry-content">
              <h3>Public Sector</h3>
              <p>Accessible services, multilingual portals, and citizen communication at scale for government agencies.</p>
              <ul class="industry-details">
                <li>Citizen service portals</li>
                <li>Multilingual accessibility</li>
                <li>Emergency communications</li>
              </ul>
            </div>
          </article>

          <article class="industry-card" data-industry="tech">
            <div class="industry-media" aria-hidden="true">
              <div class="industry-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="8" y="8" width="32" height="32" rx="6"/>
                  <path d="M16 20h16M16 28h16M16 36h12"/>
                  <circle cx="32" cy="16" r="4"/>
                </svg>
              </div>
            </div>
            <div class="industry-content">
              <h3>Technology</h3>
              <p>AI-powered localization, developer experience, and global product readiness for software companies.</p>
              <ul class="industry-details">
                <li>Continuous localization</li>
                <li>Developer tooling</li>
                <li>Global launch readiness</li>
              </ul>
            </div>
          </article>

          <article class="industry-card" data-industry="commerce">
            <div class="industry-media" aria-hidden="true">
              <div class="industry-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 16h32M12 16v28a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V16"/>
                  <path d="M16 16v-6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6"/>
                </svg>
              </div>
            </div>
            <div class="industry-content">
              <h3>Enterprise Commerce</h3>
              <p>Multilingual product content, customer support, and marketplace operations for global retail.</p>
              <ul class="industry-details">
                <li>Product content at scale</li>
                <li>Multilingual support</li>
                <li>Marketplace compliance</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section" id="contact" aria-labelledby="cta-title">
        <div class="cta-background" aria-hidden="true">
          <div class="cta-gradient"></div>
          <div class="cta-grid"></div>
          <div class="cta-orbits">
            <div class="orbit orbit-1"></div>
            <div class="orbit orbit-2"></div>
          </div>
        </div>

        <div class="cta-content">
          <div class="cta-badge">
            <span class="badge-dot" aria-hidden="true"></span>
            <span>Ready to Begin</span>
          </div>

          <h2 id="cta-title" class="cta-title">
            Build language capability<br>your business can <span class="title-accent">trust.</span>
          </h2>

          <p class="cta-lead">
            Let's discuss how precision language infrastructure can transform your multilingual operations.
          </p>

          <div class="cta-actions">
            <a href="mailto:hello@episkrit.com" class="btn btn-primary btn-large">
              <span class="btn-text">Start a conversation</span>
              <span class="btn-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
            <a href="#services" class="btn btn-secondary btn-large">
              <span class="btn-text">View case studies</span>
            </a>
          </div>

          <div class="cta-contact">
            <div class="contact-item">
              <span class="contact-label">Email</span>
              <a href="mailto:hello@episkrit.com">hello@episkrit.com</a>
            </div>
            <div class="contact-divider" aria-hidden="true"></div>
            <div class="contact-item">
              <span class="contact-label">Response time</span>
              <span>&lt; 4 business hours</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer" role="contentinfo">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand-wrap">
            <div class="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 42 42" fill="none" aria-hidden="true">
                <path d="M21 3L6 12v18l15 9 15-9V12L21 3Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M21 9v12M12 16h18" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="brand-copy">
              <span class="brand-name">Episkrit</span>
              <span class="brand-tag">Language Intelligence</span>
            </div>
          </div>
          <p class="footer-tagline">Precision language infrastructure for organizations that cannot afford ambiguity.</p>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <div class="footer-column">
            <h4>Capabilities</h4>
            <ul>
              <li><a href="#services">Language Platforms</a></li>
              <li><a href="#services">NLP Engineering</a></li>
              <li><a href="#services">Language QA</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Language Strategy</a></li>
              <li><a href="#services">Model Design</a></li>
              <li><a href="#services">Operational Excellence</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Industries</h4>
            <ul>
              <li><a href="#industries">Financial Services</a></li>
              <li><a href="#industries">Healthcare</a></li>
              <li><a href="#industries">Legal &amp; Regulatory</a></li>
              <li><a href="#industries">Public Sector</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#method">Our Method</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="footer-bottom">
        <p class="copyright">&copy; 2025 Episkrit. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </div>
      </div>
    </footer>
  </div>
`;

app.innerHTML = content;

// ==================== INTERACTIVE JAVASCRIPT ====================

// Theme Toggle
const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const toggleText = toggle.querySelector('.toggle-text');
let isDark = true;

const applyTheme = () => {
  root.dataset.theme = isDark ? 'dark' : 'light';
  toggleText.textContent = isDark ? 'Dark' : 'Light';
};

applyTheme();

toggle.addEventListener('click', () => {
  isDark = !isDark;
  applyTheme();
  // Add a subtle animation
  toggle.style.transform = 'scale(0.95)';
  setTimeout(() => toggle.style.transform = '', 150);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // Trigger counter animations
      if (entry.target.classList.contains('stat-value') || entry.target.classList.contains('counter')) {
        animateCounter(entry.target);
      }
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.stat-value, .counter, .capability-card, .service-card, .method-step, .industry-card, .stat').forEach(el => {
  observer.observe(el);
});

// Counter animation
function animateCounter(element) {
  const target = parseFloat(element.dataset.target || element.dataset.count);
  const isDecimal = target % 1 !== 0;
  const duration = 2000;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Easing function (easeOutExpo)
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = target * eased;

    if (isDecimal) {
      element.textContent = current.toFixed(1);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
    }
  }

  requestAnimationFrame(updateCounter);
}

// Hero particles
function createHeroParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const particleCount = 30;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 8}s;
      animation-duration: ${6 + Math.random() * 4}s;
      opacity: ${0.1 + Math.random() * 0.3};
    `;
    container.appendChild(particle);
  }
}

createHeroParticles();

// Performance chart
function initPerformanceChart() {
  const canvas = document.getElementById('performance-chart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = rect.height;
  const dataPoints = [0.32, 0.44, 0.38, 0.56, 0.72, 0.81, 0.92, 0.85, 0.94, 0.88, 0.96, 0.91];

  function drawChart() {
    ctx.clearRect(0, 0, width, height);

    // Gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(214, 183, 122, 0.4)');
    gradient.addColorStop(1, 'rgba(214, 183, 122, 0)');

    // Grid lines
    ctx.strokeStyle = 'rgba(214, 183, 122, 0.06)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = (height / 4) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Area
    ctx.beginPath();
    ctx.moveTo(0, height);
    dataPoints.forEach((point, i) => {
      const x = (width / (dataPoints.length - 1)) * i;
      const y = height - point * (height - 20) - 10;
      if (i === 0) ctx.lineTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line
    ctx.beginPath();
    dataPoints.forEach((point, i) => {
      const x = (width / (dataPoints.length - 1)) * i;
      const y = height - point * (height - 20) - 10;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#D6B77A';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    // Points
    dataPoints.forEach((point, i) => {
      const x = (width / (dataPoints.length - 1)) * i;
      const y = height - point * (height - 20) - 10;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#D6B77A';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#0B0D12';
      ctx.fill();
    });
  }

  drawChart();

  // Resize handler
  window.addEventListener('resize', () => {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    drawChart();
  });
}

initPerformanceChart();

// Region list
const regions = [
  { name: 'North America', status: 'optimal', latency: '42ms' },
  { name: 'Europe West', status: 'optimal', latency: '38ms' },
  { name: 'Asia Pacific', status: 'optimal', latency: '67ms' },
  { name: 'Latin America', status: 'degraded', latency: '156ms' },
  { name: 'Middle East', status: 'optimal', latency: '89ms' }
];

const regionList = document.getElementById('region-list');
if (regionList) {
  regions.forEach((region, i) => {
    const item = document.createElement('div');
    item.className = 'region-item';
    item.style.animationDelay = `${i * 0.08}s`;
    item.innerHTML = `
      <div class="region-info">
        <span class="region-name">${region.name}</span>
        <span class="region-status ${region.status}">${region.status}</span>
      </div>
      <span class="region-latency">${region.latency}</span>
    `;
    regionList.appendChild(item);
  });
}

// Language pairs
const langPairs = [
  { from: 'EN', to: 'ES', volume: 'High' },
  { from: 'EN', to: 'ZH', volume: 'High' },
  { from: 'EN', to: 'DE', volume: 'Medium' },
  { from: 'EN', to: 'FR', volume: 'Medium' },
  { from: 'EN', to: 'JA', volume: 'Medium' },
  { from: 'EN', to: 'PT', volume: 'Low' },
  { from: 'EN', to: 'AR', volume: 'Low' },
  { from: 'EN', to: 'KO', volume: 'Low' }
];

const langPairsContainer = document.getElementById('language-pairs');
if (langPairsContainer) {
  langPairs.forEach((pair, i) => {
    const item = document.createElement('div');
    item.className = 'lang-pair';
    item.style.animationDelay = `${i * 0.06}s`;
    item.innerHTML = `
      <span class="lang-code">${pair.from}</span>
      <span class="lang-arrow" aria-hidden="true">→</span>
      <span class="lang-code">${pair.to}</span>
      <span class="lang-volume">${pair.volume}</span>
    `;
    langPairsContainer.appendChild(item);
  });
}

// Parallax effect on hero
let ticking = false;
function updateParallax() {
  const scrollY = window.scrollY;
  const hero = document.querySelector('.hero');
  const orbs = document.querySelectorAll('.orb');

  if (hero) {
    const heroRect = hero.getBoundingClientRect();
    if (heroRect.bottom > 0 && heroRect.top < window.innerHeight) {
      const progress = 1 - heroRect.top / (window.innerHeight + heroRect.height);
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 0.15;
        orb.style.transform = `translate(${scrollY * speed * 0.5}px, ${scrollY * speed * 0.3}px)`;
      });
    }
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});

// Nav active state on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// Mouse move subtle effect on cards
document.querySelectorAll('.capability-card, .service-card, .industry-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Initialize - trigger initial animations
document.addEventListener('DOMContentLoaded', () => {
  // Force initial theme application
  applyTheme();

  // Trigger hero entrance animations
  requestAnimationFrame(() => {
    document.querySelector('.hero')?.classList.add('loaded');
  });
});
