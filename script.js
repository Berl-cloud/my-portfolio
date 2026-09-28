const caseStudies = {
  hyro: { kicker: '01 / Flagship case study', title: 'HYRO Exchange', summary: 'A Ghana-focused digital-asset exchange shaped across onboarding, KYC, payments, wallets and vendor dependencies.', sections: [
    ['The product', 'HYRO is being developed to let users access crypto using local currency. The product surface covers registration, authentication, KYC, identity verification, payments, fiat on/off-ramp, settlement, trading and swaps.'],
    ['My contribution', 'I worked with the founders, Product Manager and engineering teams to translate business, user and regulatory needs into product work. I helped structure more than 60 backlog items across approximately 10 workstreams, reprioritised work and followed delivery through sprint planning and standups.'],
    ['A dependency I moved forward', 'HYRO needed a reliable identity-verification provider. I coordinated research and follow-up with Ghana\'s National Identification Authority, helped prepare the application, selected the remote facial-verification service with the team, and moved the backend integration into an engineering sprint once the API access was available. Testing is ongoing; the remaining frontend connection will enable full-flow testing.'],
    ['Working across boundaries', 'I coordinated responsibility splits and handoffs between HYRO and external partner Flexx, raised concerns where deliverables did not meet product expectations, and kept internal work moving around vendor dependencies. I maintained product and delivery documentation in Jira, Confluence and Slack.'],
    ['Current state', 'The public website is live and the customer-facing frontend can be explored with simulated data. The backend integrations needed for real KYC and live transactions are still being completed.'],
    ['What this demonstrates', 'Product coordination in a regulated, multi-party environment: making dependencies visible, helping teams sequence the work, and staying precise about what is ready now versus what still needs to be built.']
  ]},
  gipc: { kicker: '02 / Product case study', title: 'GIPC Document Verification', summary: 'An AI-based certificate verification proof of concept designed to surface forgery risks for human review.', sections: [
    ['The problem', 'During discovery with the Ghana Investment Promotion Centre, certificate forgery emerged as a more immediate problem than the broader AI opportunities initially discussed. Risks included altered company details, incorrect certificate classes and invalid or outdated CEO signatures.'],
    ['My contribution', 'I helped clarify the problem, define requirements and user stories, structure Jira work, coordinate the developer and create a weekly delivery timeline. I reviewed the solution as it developed and led the final stakeholder demonstration.'],
    ['Designing useful test data', 'Because the team did not have access to the live GIPC database, I helped shape realistic dummy data: CEO records with identity and signature information, multiple certificate types and blank templates that could be populated for testing.'],
    ['The verification flow', 'The POC considered image quality, text and entity extraction, database comparison, signature comparison, company and date checks, certificate type and industry verification. Documents that did not match expected records could be flagged for human review.'],
    ['Outcome', 'The POC was positively received and the department showed interest. It did not progress into production because of internal government management, budget and approval processes.']
  ]},
  hedge: { kicker: '03 / Product case study', title: 'Hedge AI / Yield MVP', summary: 'Coordinating a DeFi product through a change in technical direction, scope and specialist dependencies.', sections: [
    ['The product', 'Hedge AI explored wallet creation and connection, peer-to-peer trading, yield farming and chatbot or trading-bot functionality. The product direction later expanded toward an automated yield-optimisation agent.'],
    ['The pivot', 'The technical direction changed from Hyperliquid to Solana during development. That changed requirements, technical dependencies and the specialist mix needed to deliver the product.'],
    ['My contribution', 'I reviewed the impact of the change, maintained change information, reassessed backlog priorities and coordinated backend, frontend, DeFi and external development work. I followed blockers and kept the team focused on an MVP while the surrounding requirements continued to evolve.'],
    ['Product thinking', 'I researched and discussed how APY, liquidity, withdrawals, risk and user expectations should shape an optimiser that could retrieve protocol data, surface risks and ask for confirmation before executing a trade.'],
    ['Outcome', 'The team delivered a working yield-farming MVP after the pivot. There is no verified public product URL, so this work is presented as a case study rather than a live demo.']
  ]},
  medirevs: { kicker: '04 / Product case study', title: 'Medirevs ecosystem', summary: 'Supporting product readiness, QA coordination and early-user planning across a growing healthcare product family.', sections: [
    ['The product space', 'Medirevs, DoctorEvs and Dieti sit within a healthtech product ecosystem focused on making healthcare services easier to access and operate.'],
    ['My contribution', 'I helped organise launch planning, product readiness, Confluence documentation, testing workflows and action items after meetings. I coordinated QA work including test cases, live QA sessions, bug triage and weekly reporting.'],
    ['Early users and partnerships', 'I supported thinking around doctor engagement, early testers and onboarding. This included conversations with doctors and plans to involve medical lecturers or practitioners as early users and advocates, alongside partnership discussions with an established Nigerian telemedicine team.'],
    ['What this demonstrates', 'Product readiness is more than a launch date. It involves making the product testable, coordinating feedback, understanding the first users and resolving the work that sits between a nearly-ready product and a credible market experience.']
  ]},
  lepta: { kicker: '05 / Product case study', title: 'Lepta Apps', summary: 'Positioning and product marketing across QA, studio and payment products, grounded in user feedback.', sections: [
    ['The product family', 'Lepta includes QA and testing workflows, a studio product for photographers and clients, and payment solutions. The products were functioning and the work focused on helping the right users understand and adopt them.'],
    ['My contribution', 'I worked on product positioning, audience definition, awareness campaigns, social content, user feedback and product-improvement messaging. I also contributed regularly to the Lepta Apps LinkedIn presence.'],
    ['What this demonstrates', 'Product management includes the work after a feature exists: finding the audience, making value clear, listening to users and feeding those learnings back into product communication and improvement.']
  ]},
  eleve: { kicker: '06 / Product case study', title: 'Elevé Beauty', summary: 'An owned e-commerce product where brand, catalogue, payments and role-based access meet real customer orders.', sections: [
    ['The product', 'Elevé Beauty is an e-commerce and beauty business with a live storefront, product catalogue, online sales, promotions and a Paystack payment experience.'],
    ['My contribution', 'I worked across business and product direction, website administration, branding, customer experience, digital acquisition, bundles, social strategy and the online sales experience. The site has processed real customer orders.'],
    ['A product decision', 'I began redesigning the admin experience so a marketing or sales employee could access relevant sales information without access to owner settings, payment credentials, security controls or role management. That work required thinking through roles and permissions from both a business and product perspective.'],
    ['What this demonstrates', 'An owned product creates a direct feedback loop between customer experience, operations and product decisions. It also makes access, trust and maintainability part of the product, not an afterthought.']
  ]}
};

const modal = document.querySelector('#case-modal');
const modalKicker = document.querySelector('#modal-kicker');
const modalTitle = document.querySelector('#modal-title');
const modalSummary = document.querySelector('#modal-summary');
const modalBody = document.querySelector('#modal-body');
const openModal = (key) => { const item = caseStudies[key]; if (!item) return; modalKicker.textContent = item.kicker; modalTitle.textContent = item.title; modalSummary.textContent = item.summary; modalBody.innerHTML = item.sections.map(([heading, text]) => `<section><h3>${heading}</h3><p>${text}</p></section>`).join(''); modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('no-scroll'); modal.querySelector('.modal-close').focus(); };
const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('no-scroll'); };
document.querySelectorAll('[data-open-case]').forEach(button => button.addEventListener('click', () => openModal(button.dataset.openCase)));
document.querySelectorAll('[data-close-case]').forEach(button => button.addEventListener('click', closeModal));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

document.querySelectorAll('.filter').forEach(filter => filter.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(item => item.classList.remove('active')); filter.classList.add('active'); const selected = filter.dataset.filter; document.querySelectorAll('.project-card').forEach(card => { card.style.display = selected === 'all' || card.dataset.category === selected ? '' : 'none'; }); }));
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); }));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.site-nav a');
const activeObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }), {rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section => activeObserver.observe(section));
