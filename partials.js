/* Shared nav + footer injected by each page */
const NAV_HTML = `
<nav id="nav" class="dark">
  <a href="../index.html" class="nav-logo">
    <div class="nav-logo-box">C</div>
    <span class="nav-logo-text">Canopy<sup>x</sup></span>
  </a>
  <ul class="nav-links">
    <li><a href="../index.html" data-page="home">Home</a></li>
    <li><a href="../pages/services.html" data-page="services">Services</a></li>
    <li><a href="../pages/pricing.html" data-page="pricing">Pricing</a></li>
    <li><a href="../pages/contact.html" data-page="contact" class="nav-cta">Work With Us</a></li>
  </ul>
  <div class="nav-hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </div>
</nav>`;

const NAV_HTML_ROOT = `
<nav id="nav" class="dark">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-box">C</div>
    <span class="nav-logo-text">Canopy<sup>x</sup></span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html" data-page="home">Home</a></li>
    <li><a href="pages/services.html" data-page="services">Services</a></li>
    <li><a href="pages/pricing.html" data-page="pricing">Pricing</a></li>
    <li><a href="pages/contact.html" data-page="contact" class="nav-cta">Work With Us</a></li>
  </ul>
  <div class="nav-hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </div>
</nav>`;

const FOOTER_HTML_ROOT = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <a href="index.html" class="nav-logo" style="margin-bottom:0.8rem;display:inline-flex">
          <div class="nav-logo-box">C</div>
          <span class="nav-logo-text">Canopy<sup>x</sup></span>
        </a>
        <p class="footer-brand-tagline">Technology &amp; creative consultancy.<br>A subsidiary of Canopy Events Pvt Ltd, Nepal.</p>
      </div>
      <div>
        <div class="footer-col-title">Services</div>
        <ul class="footer-links">
          <li><a href="pages/services.html">Web &amp; Mobile</a></li>
          <li><a href="pages/services.html">Cloud &amp; Infrastructure</a></li>
          <li><a href="pages/services.html">AI Integration</a></li>
          <li><a href="pages/services.html">Design &amp; Marketing</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="pages/pricing.html">Pricing</a></li>
          <li><a href="pages/contact.html">Contact</a></li>
          <li><a href="https://mandap.com.np" target="_blank">Canopy Events</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Contact</div>
        <ul class="footer-links">
          <li><a href="mailto:hello@canopyx.com.np">hello@canopyx.com.np</a></li>
          <li><a href="#">canopyx.mandap.com.np</a></li>
          <li><a href="#">Pokhara, Nepal</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Canopy<sup style="font-size:0.7em">x</sup> — A subsidiary of <a href="https://mandap.com.np">Canopy Events Pvt Ltd</a></span>
      <span>Pokhara, Nepal &nbsp;·&nbsp; Global delivery</span>
    </div>
  </div>
</footer>`;

const FOOTER_HTML_PAGES = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <a href="../index.html" class="nav-logo" style="margin-bottom:0.8rem;display:inline-flex">
          <div class="nav-logo-box">C</div>
          <span class="nav-logo-text">Canopy<sup>x</sup></span>
        </a>
        <p class="footer-brand-tagline">Technology &amp; creative consultancy.<br>A subsidiary of Canopy Events Pvt Ltd, Nepal.</p>
      </div>
      <div>
        <div class="footer-col-title">Services</div>
        <ul class="footer-links">
          <li><a href="services.html">Web &amp; Mobile</a></li>
          <li><a href="services.html">Cloud &amp; Infrastructure</a></li>
          <li><a href="services.html">AI Integration</a></li>
          <li><a href="services.html">Design &amp; Marketing</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <ul class="footer-links">
          <li><a href="../index.html">Home</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="https://mandap.com.np" target="_blank">Canopy Events</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Contact</div>
        <ul class="footer-links">
          <li><a href="mailto:hello@canopyx.com.np">hello@canopyx.com.np</a></li>
          <li><a href="#">canopyx.mandap.com.np</a></li>
          <li><a href="#">Pokhara, Nepal</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Canopy<sup style="font-size:0.7em">x</sup> — A subsidiary of <a href="https://mandap.com.np">Canopy Events Pvt Ltd</a></span>
      <span>Pokhara, Nepal &nbsp;·&nbsp; Global delivery</span>
    </div>
  </div>
</footer>`;
