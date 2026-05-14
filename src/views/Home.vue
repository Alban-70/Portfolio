<template>
    <Navbar />

    <section class="hero">

        <div class="hero_left animate_left">
            <div class="hero_eyebrow">
                <span class="eyebrow_dot"></span>
                PORTFOLIO · RAPPORT DE STAGE
            </div>

            <h1>Développeur<br><em>Fullstack</em></h1>

            <p>
                Ce portfolio documente mon stage chez <strong>Appup</strong>, une agence web spécialisée dans la
                conception de sites et applications sur mesure. Vous y trouverez
                <span>mes projets réalisés en conditions réelles</span>,
                <span>mes compétences techniques</span> et
                <span>mon expérience professionnelle</span>.
            </p>

            <nav class="site_nav_pills">
                <p class="pill">Contexte</p>
                <p class="pill">Savoir-faire</p>
                <p class="pill">Réalisations</p>
                <p class="pill">Bilan</p>
            </nav>

            <div class="status">
                DÉVELOPPEUR EN FORMATION · FULLSTACK · STAGE EN ENTREPRISE
            </div>
        </div>

        <div class="hero_right animate_right">
            <div class="terminal">
                <div class="terminal_header">
                    <div class="terminal_dots">
                        <span class="dot red"></span>
                        <span class="dot yellow"></span>
                        <span class="dot green"></span>
                    </div>
                    <span class="terminal_title">portfolio.sh</span>
                </div>
                <div class="terminal_body">
                    <p class="line1"></p>
                    <p class="line2"></p>
                    <p class="line3"></p>
                    <p class="line4"></p>
                    <p class="line5"></p>
                    <p class="cursor_line"><span class="prompt">~$</span><span class="cursor">▋</span></p>
                </div>
            </div>
        </div>

    </section>

    <section class="experience_timeline">

        <div class="section_header_centered animate_fade">
            <div class="section_label">// CONTEXTE ENTREPRISE</div>
            <h2>Stage & Entreprise</h2>
        </div>

        <div class="timeline">

            <div class="container left animate_fade">
                <div class="content appup">
                    <div class="appup_header">
                        <img src="/logo_appup.png" alt="Logo Appup" class="appup_logo">
                        <div>
                            <h3>Appup</h3>
                            <span class="company_tag">Entreprise d'accueil</span>
                        </div>
                    </div>
                    <p class="intro">
                        Mon stage s'est déroulé au sein d'<strong>Appup</strong>, agence spécialisée dans la création
                        de sites web et applications sur mesure pour des clients locaux et nationaux.
                    </p>
                    <div class="tags">
                        <span class="tag">Développement web & applications</span>
                        <span class="tag">Solutions sur mesure</span>
                    </div>
                </div>
            </div>

            <div class="container right animate_fade" style="--delay: 0.2s">
                <div class="content">
                    <h3>Personnels impliqués</h3>
                    <p class="intro">
                        L'équipe est volontairement resserrée, ce qui favorise un suivi technique direct et des
                        échanges réguliers tout au long du projet.
                    </p>
                    <div class="people">
                        <div class="person">
                            <div class="person_header">
                                <div class="person_avatar">MF</div>
                                <div>
                                    <h4>Marouane Fekkar</h4>
                                    <p>Maître de stage · Développeur Fullstack · Dirigeant</p>
                                </div>
                            </div>
                        </div>
                        <div class="person">
                            <div class="person_header">
                                <div class="person_avatar">NB</div>
                                <div>
                                    <h4>Noa Bigeard</h4>
                                    <p>Collaborateur · Étudiant BUT Informatique</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tags">
                        <span class="tag">Petite équipe</span>
                        <span class="tag">Développement fullstack</span>
                        <span class="tag">Suivi continu</span>
                    </div>
                </div>
            </div>

            <div class="container left animate_fade" style="--delay: 0.4s">
                <div class="content">
                    <h3>Moyens de travail</h3>
                    <p class="intro">
                        Environnement fullstack avec Node.js, gestion de version Git, et intégration de services
                        externes spécialisés :
                    </p>
                    <div class="tags">
                        <span class="tag">Node.js</span>
                        <span class="tag">Git</span>
                        <span class="tag">API REST</span>
                        <span class="tag">Stripe</span>
                        <span class="tag">AWS</span>
                        <span class="tag">Brevo</span>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section class="subject_section">

        <div class="subject_intro animate_fade">
            <div class="section_label">// CONTEXTE DU SUJET</div>
            <h2 class="section_title">Sujet, enjeux & objectifs</h2>
        </div>

        <div class="subject_grid">

            <div class="subject_card card_subject animate_fade" style="--delay: 0.15s">
                <div class="card_stripe stripe_accent"></div>
                <div class="card_inner">
                    <div class="card_icon_wrap icon_accent">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>
                    </div>
                    <div class="card_kicker">Sujet</div>
                    <h3>API modulaire réutilisable</h3>
                    <p>
                        Concevoir et développer une API REST en Node.js qui serve de fondation commune à plusieurs
                        projets, adaptable à chaque client sans réécriture du code — uniquement par configuration
                        de la base de données.
                    </p>
                    <div class="subject_badge">Node.js · REST · Modulaire</div>
                </div>
            </div>

            <div class="subject_card card_goals animate_fade" style="--delay: 0.25s">
                <div class="card_stripe stripe_green"></div>
                <div class="card_inner">
                    <div class="card_icon_wrap icon_green">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                    <div class="card_kicker">Enjeux &amp; objectifs</div>
                    <h3>Impact concret pour l'agence</h3>
                    <ul class="goals_list">
                        <li>
                            <span class="goal_num">01</span>
                            <div>
                                <strong>Qualité</strong>
                                <p>Garantir des standards cohérents (sécurité, erreurs, logs) sur tous les projets.</p>
                            </div>
                        </li>
                        <li>
                            <span class="goal_num">02</span>
                            <div>
                                <strong>Montée en compétences</strong>
                                <p>Maîtriser architecture fullstack, intégrations tierces et déploiement cloud.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>

    <section class="tech_section animate_fade">
        <div class="section_label">// CONTEXTE TECHNIQUE</div>
        <h2 class="section_title">Architecture & environnement du projet</h2>
        <p class="section_sub">
            Développement d'une API réutilisable en Node.js pensée pour être intégrée dans différents projets
            sans modification du code, uniquement par adaptation à la base de données.
        </p>

        <div class="tech_bento">

            <div class="bento_card bento_services animate_fade" style="--delay: 0.3s">
                <div class="bento_icon">◎</div>
                <h3>Services externes</h3>
                <div class="services_grid">
                    <div class="service_pill">
                        <span class="service_dot"></span>
                        <div>
                            <strong>Stripe</strong>
                            <small>Paiement en ligne</small>
                        </div>
                    </div>
                    <div class="service_pill">
                        <span class="service_dot"></span>
                        <div>
                            <strong>AWS S3</strong>
                            <small>Stockage fichiers</small>
                        </div>
                    </div>
                    <div class="service_pill">
                        <span class="service_dot"></span>
                        <div>
                            <strong>Brevo</strong>
                            <small>Emails transactionnels</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bento_card bento_wide animate_fade" style="--delay: 0.1s">
                <div class="bento_icon">⬡</div>
                <h3>Architecture modulaire</h3>
                <p>API centralisée servant de base commune à plusieurs projets. Conçue pour être réutilisée sans
                    réécriture, uniquement par configuration.</p>
                <div class="bento_tags">
                    <span>Node.js</span>
                    <span>API REST</span>
                    <span>Architecture modulaire</span>
                </div>
            </div>

            <div class="bento_card animate_fade" style="--delay: 0.2s">
                <div class="bento_icon">◈</div>
                <h3>E-commerce</h3>
                <p>Intégration de l'API dans un site marchand avec paiement en ligne, gestion de fichiers et génération
                    de PDF.</p>
                <div class="bento_tags">
                    <span>Paiement</span>
                    <span>PDF</span>
                    <span>Fichiers</span>
                </div>
            </div>

        </div>
    </section>

    <!-- <section class="skills_section">

        <div class="skills_intro animate_fade">
            <div class="section_label">// SAVOIR-FAIRE GÉNÉRAUX</div>
            <h2 class="section_title">Compétences mobilisées</h2>
            <p class="section_sub">
                Synthèse des savoir-faire mis en jeu par le sujet. Les compétences
                <mark>surlignées</mark> font l'objet d'une présentation détaillée dans les autres pages du portfolio.
            </p>
        </div>

        <div class="skills_layout">

            <div class="skills_col animate_fade" style="--delay: 0.1s">
                <div class="skill_group">
                    <div class="skill_group_header">
                        <span class="skill_group_dot"></span>
                        Back-end & Architecture
                    </div>
                    <div class="skill_items">
                        <div class="skill_item skill_featured">
                            <span class="skill_name">Conception d'API REST</span>
                            <span class="skill_tag featured_tag">Détaillé p.2</span>
                        </div>
                        <div class="skill_item skill_featured">
                            <span class="skill_name">Architecture modulaire Node.js</span>
                            <span class="skill_tag featured_tag">Détaillé p.2</span>
                        </div>
                        <div class="skill_item">
                            <span class="skill_name">Gestion des erreurs & logs</span>
                        </div>
                        <div class="skill_item">
                            <span class="skill_name">Authentification & sécurité</span>
                        </div>
                    </div>
                </div>

                <div class="skill_group">
                    <div class="skill_group_header">
                        <span class="skill_group_dot"></span>
                        Base de données
                    </div>
                    <div class="skill_items">
                        <div class="skill_item skill_featured">
                            <span class="skill_name">Modélisation relationnelle</span>
                            <span class="skill_tag featured_tag">Détaillé p.3</span>
                        </div>
                        <div class="skill_item">
                            <span class="skill_name">ORM & requêtes SQL</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="skills_col animate_fade" style="--delay: 0.2s">
                <div class="skill_group">
                    <div class="skill_group_header">
                        <span class="skill_group_dot"></span>
                        Front-end & Intégration
                    </div>
                    <div class="skill_items">
                        <div class="skill_item skill_featured">
                            <span class="skill_name">Développement Vue.js</span>
                            <span class="skill_tag featured_tag">Détaillé p.4</span>
                        </div>
                        <div class="skill_item">
                            <span class="skill_name">Intégration UI/UX responsive</span>
                        </div>
                        <div class="skill_item">
                            <span class="skill_name">Consommation d'API REST</span>
                        </div>
                    </div>
                </div>

                <div class="skill_group">
                    <div class="skill_group_header">
                        <span class="skill_group_dot"></span>
                        Services & Déploiement
                    </div>
                    <div class="skill_items">
                        <div class="skill_item">
                            <span class="skill_name">Paiement en ligne (Stripe)</span>
                        </div>
                        <div class="skill_item">
                            <span class="skill_name">Stockage cloud (AWS S3)</span>
                        </div>
                        <div class="skill_item">
                            <span class="skill_name">Emails transactionnels (Brevo)</span>
                        </div>
                        <div class="skill_item">
                            <span class="skill_name">Versioning Git & collaboration</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section> -->

    

</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { onMounted } from 'vue'

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible')
        })
    }, { threshold: 0.1 })

    document.querySelectorAll('.animate_fade, .animate_left, .animate_right').forEach(el => {
        observer.observe(el)
    })

    const lines = [
        { selector: '.line1', text: 'init portfolio.sh', delay: 800 },
        { selector: '.line2', text: 'Chargement du contexte...', delay: 2000 },
        { selector: '.line3', text: 'Récupération des projets...', delay: 3600 },
        { selector: '.line4', text: 'Connexion entreprise établie ✔', delay: 5000 },
        { selector: '.line5', text: 'Système prêt. Bienvenue.', delay: 6200 },
    ]

    lines.forEach(({ selector, text, delay }) => {
        const el = document.querySelector(selector)
        if (!el) return
        el.style.opacity = 1
        const promptColor = 'var(--quaternary-color)'
        const prompt = `<span style="color: ${promptColor}; margin-right: 8px;">~$</span>`
        setTimeout(() => {
            let i = 0
            const interval = setInterval(() => {
                el.innerHTML = prompt + text.slice(0, i)
                i++
                if (i > text.length) clearInterval(interval)
            }, 35)
        }, delay)
    })
})
</script>

<style scoped>
.animate_left {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.animate_right {
    opacity: 0;
    transform: translateX(40px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.animate_fade {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease var(--delay, 0s), transform 0.6s ease var(--delay, 0s);
}

.animate_left.visible,
.animate_right.visible,
.animate_fade.visible {
    opacity: 1;
    transform: translate(0);
}

.hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 55vh;
    padding: 80px;
    gap: 60px;
    align-items: center;
}

.hero_eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: monospace;
    font-size: 0.72rem;
    letter-spacing: 3px;
    color: var(--quaternary-color);
    margin-bottom: 20px;
    opacity: 0.8;
}

.eyebrow_dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--tertiary-color);
    box-shadow: 0 0 8px var(--tertiary-color);
    flex-shrink: 0;
    animation: pulse_dot 2s ease-in-out infinite;
}

@keyframes pulse_dot {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.5;
        transform: scale(0.7);
    }
}

.hero_left h1 {
    font-size: 3.8rem;
    color: var(--secondary-color);
    line-height: 1.1;
    margin-bottom: 24px;
}

.hero_left h1 em {
    font-style: normal;
    color: var(--tertiary-color);
}

.hero_left p {
    font-size: 1.05rem;
    line-height: 1.85;
    color: var(--secondary-color);
    opacity: 0.85;
    margin-bottom: 30px;
}

.hero_left p strong {
    color: var(--secondary-color);
    opacity: 1;
}

.hero_left span {
    color: var(--tertiary-color);
    font-weight: 600;
}

.site_nav_pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
}

.pill {
    padding: 7px 16px;
    font-size: 0.78rem;
    font-family: monospace;
    letter-spacing: 1px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: var(--secondary-color);
    opacity: 0.6;
    cursor: pointer;
    transition: 0.2s ease;
    text-decoration: none;
}

.pill:hover,
.pill.active {
    opacity: 1;
    border-color: var(--tertiary-color);
    color: var(--tertiary-color);
    background: rgba(255, 255, 255, 0.03);
}

.status {
    display: inline-block;
    padding: 9px 14px;
    border: 1px solid var(--tertiary-color);
    color: var(--tertiary-color);
    font-size: 0.72rem;
    letter-spacing: 2px;
    font-family: monospace;
    opacity: 0.75;
}

.hero_right {
    display: flex;
    justify-content: center;
}

.terminal {
    width: 100%;
    max-width: 480px;
    border-radius: 12px;
    overflow: hidden;
    background: rgba(10, 10, 15, 0.85);
    border: 1px solid rgba(192, 180, 194, 0.2);
    box-shadow: 0 0 0 1px rgba(192, 180, 194, 0.05), 0 25px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.terminal_header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.04);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.terminal_dots {
    display: flex;
    gap: 6px;
}

.terminal_dots .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.dot.red {
    background: #ff5f57;
}

.dot.yellow {
    background: #febc2e;
}

.dot.green {
    background: #28c840;
}

.terminal_title {
    flex: 1;
    text-align: center;
    font-size: 0.75rem;
    color: rgba(192, 180, 194, 0.5);
    font-family: monospace;
    letter-spacing: 1px;
}

.terminal_body {
    padding: 20px 24px;
    font-family: monospace;
    font-size: 0.9rem;
    line-height: 2;
}

.terminal_body p {
    margin: 0;
    color: var(--secondary-color);
    opacity: 0;
}

.prompt {
    color: var(--quaternary-color);
    margin-right: 8px;
}

.line1 {
    animation: appear 0.3s ease forwards 0.4s;
}

.line2 {
    animation: appear 0.3s ease forwards 2s;
}

.line3 {
    animation: appear 0.3s ease forwards 2.7s;
}

.line4 {
    animation: appear 0.3s ease forwards 3.9s;
}

.line5 {
    animation: appear 0.3s ease forwards 5s;
}

.cursor_line {
    opacity: 1 !important;
    color: var(--secondary-color);
}

.cursor {
    display: inline-block;
    color: var(--tertiary-color);
    animation: blink 1s step-end infinite;
}

@keyframes appear {
    to {
        opacity: 1;
    }
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

.timeline,
.experience_timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
}

.section_header_centered {
    text-align: center;
    margin-bottom: 20px;
}

.section_header_centered h2 {
    font-size: 2rem;
    color: var(--secondary-color);
}

.timeline::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: var(--quaternary-color);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.6;
    z-index: 0;
}

.container {
    padding: 10px 40px;
    position: relative;
    width: 50%;
    z-index: 2;
}

.container::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--primary-background);
    border: 3px solid var(--tertiary-color);
    box-shadow: 0 0 12px var(--quaternary-color);
    right: -12px;
    top: 15px;
    z-index: 2;
}

.content {
    padding: 20px 25px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    transition: 0.3s ease;
}

.content:hover {
    transform: scale(1.03);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.content h3 {
    color: var(--tertiary-color);
    margin-bottom: 10px;
    font-size: 1.1rem;
}

.content p {
    color: var(--secondary-color);
    opacity: 0.9;
    line-height: 1.6;
    font-size: 0.95rem;
}

.left {
    left: 0;
}

.right {
    left: 50%;
}

.right::after {
    left: -12px;
    right: auto;
}

.left::before {
    content: '';
    position: absolute;
    top: 20px;
    right: 26px;
    z-index: 2;
    border-width: 8px 0 8px 10px;
    border-style: solid;
    border-color: transparent transparent transparent var(--quaternary-color);
    filter: drop-shadow(0 0 4px var(--tertiary-color));
}

.right::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 26px;
    z-index: 2;
    border-width: 8px 10px 8px 0;
    border-style: solid;
    border-color: transparent var(--quaternary-color) transparent transparent;
    filter: drop-shadow(0 0 4px var(--tertiary-color));
}

.appup_header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}

.appup_header::before {
    content: '';
    position: absolute;
    left: -10px;
    width: 90px;
    height: 90px;
    background: radial-gradient(circle, var(--tertiary-color), transparent 70%);
    filter: blur(25px);
    opacity: 0.25;
    z-index: 0;
}

.appup_logo {
    position: relative;
    width: 70px;
    height: 70px;
    object-fit: contain;
    filter: brightness(1.4) contrast(1.2);
    opacity: 0.95;
    transition: all 0.4s ease;
    z-index: 1;
}

.appup:hover .appup_logo {
    transform: scale(1.15);
    filter: brightness(1.8) drop-shadow(0 0 15px var(--tertiary-color));
}

.company_tag {
    display: inline-block;
    margin-top: 4px;
    font-size: 0.75rem;
    opacity: 0.7;
    color: var(--secondary-color);
}

.intro {
    font-size: 0.9rem;
    opacity: 0.85;
    margin-bottom: 15px;
    line-height: 1.5;
}

.people {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
}

.person {
    padding: 15px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    transition: 0.3s ease;
}

.person:hover {
    transform: translateY(-3px);
    border-color: var(--tertiary-color);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.person_header {
    display: flex;
    align-items: center;
    gap: 14px;
}

.person_avatar {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid var(--tertiary-color);
    background: rgba(255, 255, 255, 0.03);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 0.78rem;
    color: var(--tertiary-color);
    letter-spacing: 1px;
    flex-shrink: 0;
}

.person h4 {
    margin: 0;
    color: var(--tertiary-color);
    font-size: 1rem;
}

.person p {
    margin: 2px 0 0;
    font-size: 0.85rem;
    color: var(--secondary-color);
    opacity: 0.8;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tag {
    padding: 6px 10px;
    font-size: 0.75rem;
    border-radius: 20px;
    color: var(--tertiary-color);
    border: 1px solid rgba(192, 180, 194, 0.3);
    background: rgba(255, 255, 255, 0.03);
    transition: 0.25s ease;
}

.tag:hover {
    background: var(--tertiary-color);
    color: #000;
    transform: scale(1.05);
}

.section_label {
    font-family: monospace;
    font-size: 0.78rem;
    color: var(--quaternary-color);
    letter-spacing: 3px;
    margin-bottom: 12px;
}

.section_title {
    font-size: 2rem;
    color: var(--secondary-color);
    margin-bottom: 14px;
    line-height: 1.25;
}

.section_sub {
    font-size: 1rem;
    color: var(--secondary-color);
    opacity: 0.6;
    max-width: 640px;
    line-height: 1.75;
    margin-bottom: 48px;
}

.subject_section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.subject_intro {
    margin-bottom: 52px;
}

.subject_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: start;
}

.subject_card {
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    overflow: hidden;
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    position: relative;
}

.subject_card:hover {
    transform: translateY(-6px);
    box-shadow: 0 28px 64px rgba(0, 0, 0, 0.5);
    border-color: rgba(255, 255, 255, 0.15);
}

.card_stripe {
    height: 3px;
    width: 100%;
}

.stripe_red {
    background: linear-gradient(90deg, #ff5f57, transparent);
}

.stripe_accent {
    background: linear-gradient(90deg, var(--tertiary-color), transparent);
}

.stripe_green {
    background: linear-gradient(90deg, #28c840, transparent);
}

.card_inner {
    padding: 28px;
}

.card_icon_wrap {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
}

.icon_red {
    background: rgba(255, 95, 87, 0.12);
    color: #ff5f57;
    border: 1px solid rgba(255, 95, 87, 0.25);
}

.icon_accent {
    background: rgba(192, 180, 194, 0.1);
    color: var(--tertiary-color);
    border: 1px solid rgba(192, 180, 194, 0.2);
}

.icon_green {
    background: rgba(40, 200, 64, 0.1);
    color: #28c840;
    border: 1px solid rgba(40, 200, 64, 0.2);
}

.card_kicker {
    font-family: monospace;
    font-size: 0.68rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--secondary-color);
    opacity: 0.4;
    margin-bottom: 8px;
}

.subject_card h3 {
    font-size: 1.05rem;
    color: var(--secondary-color);
    margin-bottom: 14px;
    line-height: 1.35;
}

.subject_card>.card_inner>p {
    font-size: 0.88rem;
    color: var(--secondary-color);
    opacity: 0.65;
    line-height: 1.7;
    margin-bottom: 20px;
}

.problem_list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.problem_list li {
    font-size: 0.82rem;
    color: var(--secondary-color);
    opacity: 0.6;
    padding-left: 16px;
    position: relative;
    line-height: 1.5;
}

.problem_list li::before {
    content: '×';
    position: absolute;
    left: 0;
    color: #ff5f57;
    opacity: 0.8;
    font-family: monospace;
}

.subject_badge {
    display: inline-block;
    padding: 5px 12px;
    font-size: 0.7rem;
    font-family: monospace;
    letter-spacing: 1px;
    color: var(--tertiary-color);
    border: 1px solid var(--tertiary-color);
    border-radius: 20px;
    opacity: 0.7;
    margin-top: 4px;
}

.goals_list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.goals_list li {
    display: flex;
    align-items: flex-start;
    gap: 14px;
}

.goal_num {
    font-family: monospace;
    font-size: 0.72rem;
    color: #28c840;
    opacity: 0.7;
    padding-top: 3px;
    flex-shrink: 0;
}

.goals_list strong {
    display: block;
    font-size: 0.9rem;
    color: var(--secondary-color);
    margin-bottom: 3px;
}

.goals_list p {
    margin: 0;
    font-size: 0.82rem;
    color: var(--secondary-color);
    opacity: 0.55;
    line-height: 1.5;
}

.skills_section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.skills_intro {
    margin-bottom: 48px;
}

.skills_intro mark {
    background: rgba(192, 180, 194, 0.15);
    color: var(--tertiary-color);
    padding: 1px 5px;
    border-radius: 3px;
    font-style: italic;
}

.skills_layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
}

.skills_col {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.skill_group {
    padding: 24px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.025);
    border: 1px solid rgba(255, 255, 255, 0.07);
}

.skill_group_header {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: monospace;
    font-size: 0.73rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--quaternary-color);
    margin-bottom: 18px;
    opacity: 0.8;
}

.skill_group_dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--tertiary-color);
    opacity: 0.7;
    flex-shrink: 0;
}

.skill_items {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.skill_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(255, 255, 255, 0.02);
    transition: 0.2s ease;
}

.skill_item:hover {
    border-color: rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.05);
}

.skill_featured {
    border-color: rgba(192, 180, 194, 0.2);
    background: rgba(192, 180, 194, 0.04);
}

.skill_featured:hover {
    border-color: var(--tertiary-color);
    box-shadow: 0 0 16px rgba(192, 180, 194, 0.08);
}

.skill_name {
    font-size: 0.88rem;
    color: var(--secondary-color);
    opacity: 0.85;
}

.skill_featured .skill_name {
    color: var(--secondary-color);
    opacity: 1;
    font-weight: 600;
}

.skill_tag {
    font-family: monospace;
    font-size: 0.65rem;
    letter-spacing: 0.5px;
    padding: 3px 9px;
    border-radius: 10px;
    white-space: nowrap;
    flex-shrink: 0;
}

.featured_tag {
    color: var(--tertiary-color);
    border: 1px solid var(--tertiary-color);
    opacity: 0.8;
}

/* ── Tech section (inchangée) ── */
.tech_section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.tech_bento {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
}

.bento_card {
    padding: 32px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: 0.35s ease;
    position: relative;
    overflow: hidden;
}

.bento_card:hover {
    border-color: rgba(255, 255, 255, 0.18);
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

.bento_card:nth-child(1) {
    grid-row: span 2 / span 2;
}

.bento_card:nth-child(3) {
    grid-column-start: 2;
        grid-row-start: 2;
}

.bento_services {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}

.bento_icon {
    font-size: 1.4rem;
    color: var(--tertiary-color);
    opacity: 0.6;
    margin-bottom: 16px;
}

.bento_card h3 {
    font-size: 1.05rem;
    color: var(--secondary-color);
    margin-bottom: 10px;
}

.bento_card p {
    font-size: 0.88rem;
    color: var(--secondary-color);
    opacity: 0.6;
    line-height: 1.65;
    margin-bottom: 20px;
}

.bento_tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.bento_tags span {
    padding: 5px 12px;
    font-size: 0.72rem;
    border-radius: 20px;
    color: var(--tertiary-color);
    border: 1px solid rgba(192, 180, 194, 0.25);
    background: rgba(255, 255, 255, 0.02);
    font-family: monospace;
    letter-spacing: 0.5px;
}

.services_grid {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
}

.service_pill {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 16px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    transition: 0.25s ease;
}

.service_pill:hover {
    border-color: var(--tertiary-color);
    background: rgba(255, 255, 255, 0.06);
}

.service_dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--tertiary-color);
    flex-shrink: 0;
    box-shadow: 0 0 8px var(--tertiary-color);
}

.service_pill strong {
    display: block;
    font-size: 0.9rem;
    color: var(--secondary-color);
    font-weight: 600;
}

.service_pill small {
    display: block;
    font-size: 0.75rem;
    color: var(--secondary-color);
    opacity: 0.5;
    margin-top: 1px;
}
</style>