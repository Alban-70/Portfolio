<template>
    <Navbar />

    <!-- HERO SPLIT -->
    <section class="hero">

        <div class="hero_left animate_left">
            <h1>Mon Portfolio</h1>

            <p>
                Ce site est une interface de présentation structurée en modules :
                <span>Introduction</span>, <span>Technique</span>,
                <span>Suivi de projet</span>, <span>Intégration en entreprise</span>.
            </p>

            <div class="status">
                DÉVELOPPEUR EN FORMATION • FULLSTACK • STAGE EN ENTREPRISE
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

        <h2 class="animate_fade">// STAGE & ENTREPRISE</h2>

        <div class="timeline">
            <div class="container left animate_fade">
                <div class="content appup">
                    <div class="appup_header">
                        <img src="/logo_appup.png" alt="Logo Appup" class="appup_logo">
                        <div>
                            <h3>Appup</h3>
                            <span class="company_tag">Entreprise de développement web</span>
                        </div>
                    </div>

                    <p class="intro">
                        Appup est une agence spécialisée dans la création de sites web et d’applications sur mesure.
                        Le stage s’inscrit dans une logique de production réelle pour des clients locaux.
                    </p>

                    <div class="appup_meta">
                        <div class="meta_item">
                            <span>Zone</span>
                            <p>Belfort • Montbéliard</p>
                        </div>

                        <div class="meta_item">
                            <span>Mission</span>
                            <p>Sites vitrines + SEO</p>
                        </div>

                        <div class="meta_item">
                            <span>Rôle</span>
                            <p>Développement fullstack</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container right animate_fade" style="--delay: 0.2s">
                <div class="content">
                    <h3>Encadrement</h3>

                    <p class="intro">
                        Mon stage est encadré directement par le dirigeant de l’entreprise, ce qui permet un suivi
                        proche et technique du projet.
                    </p>

                    <div class="people">

                        <div class="person pointer">
                            <div class="person_header">
                                <div>
                                    <h4>Marouane Fekkar</h4>
                                    <p>Maître de stage • Développeur Fullstack</p>
                                    <span class="mini_desc">
                                        Responsable du suivi, du développement et de la relation client.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="person pointer">
                            <div class="person_header">
                                <div>
                                    <h4>Noa Bigeard</h4>
                                    <p>Collaborateur • Étudiant BUT Informatique</p>
                                    <span class="mini_desc">
                                        Travaille en binôme sur le développement des fonctionnalités.
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="tags">
                        <span class="tag pointer">Encadrement direct</span>
                        <span class="tag pointer">Petite équipe</span>
                        <span class="tag pointer">Développement fullstack</span>
                        <span class="tag pointer">Suivi continu</span>
                    </div>
                </div>
            </div>

            <div class="container left animate_fade" style="--delay: 0.4s">
                <div class="content">
                    <h3>Objectif du stage</h3>

                    <p class="intro">
                        Ce stage a été pensé comme une montée en autonomie progressive sur des projets réels.
                    </p>

                    <div class="objective_flow">

                        <div class="step">
                            <div class="step_number">01</div>
                            <div class="step_content">
                                <h4>Concevoir des sites réels</h4>
                                <p>Développer des sites vitrines pour des clients locaux avec des besoins concrets.</p>
                            </div>
                        </div>

                        <div class="step">
                            <div class="step_number">02</div>
                            <div class="step_content">
                                <h4>Monter en compétences</h4>
                                <p>Approfondir le développement fullstack (front-end + back-end) en conditions réelles.
                                </p>
                            </div>
                        </div>

                        <div class="step">
                            <div class="step_number">03</div>
                            <div class="step_content">
                                <h4>Contribuer à l’entreprise</h4>
                                <p>Participer à l’acquisition de clients et à l’amélioration de la visibilité web.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { onMounted } from 'vue'

onMounted(() => {
    // ── Intersection Observer pour les animations scroll ──
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible')
        })
    }, { threshold: 0.15 })

    document.querySelectorAll('.animate_fade, .animate_left, .animate_right').forEach(el => {
        observer.observe(el)
    })

    // ── Effet typewriter sur le terminal ──
    const lines = [
        { selector: '.line1', text: 'init profile', delay: 800 },
        { selector: '.line2', text: 'Initialisation du profil...', delay: 2000 },
        { selector: '.line3', text: 'Chargement des compétences...', delay: 4000 },
        { selector: '.line4', text: 'Connexion entreprise établie', delay: 5500 },
        { selector: '.line5', text: 'Système prêt ✔', delay: 6500 },
    ];

    lines.forEach(({ selector, text, delay }, index) => {
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
    });
})
</script>

<style scoped>
/* ───── ANIMATIONS ───── */

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
    min-height: 50vh;
    padding: 80px;
    gap: 60px;
    align-items: center;
}

.hero_left h1 {
    font-size: 3.5rem;
    color: var(--secondary-color);
}

.hero_left p {
    margin-top: 20px;
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--secondary-color);
}

.hero_left span {
    color: var(--tertiary-color);
    font-weight: bold;
}

.status {
    margin-top: 30px;
    padding: 10px 15px;
    display: inline-block;
    border: 1px solid var(--tertiary-color);
    color: var(--tertiary-color);
    font-size: 0.8rem;
    letter-spacing: 2px;
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
    box-shadow:
        0 0 0 1px rgba(192, 180, 194, 0.05),
        0 25px 60px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
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

.prompt.success {
    color: #28c840;
}

.success {
    color: #28c840;
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

.experience_timeline h2 {
    color: var(--secondary-color);
    text-align: center;
    margin-bottom: 40px;
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

.appup_logo::after {
    content: '';
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

.appup_meta {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 15px;
}

.meta_item {
    padding: 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: 0.3s ease;
}

.meta_item:hover {
    transform: translateY(-3px);
    border-color: var(--tertiary-color);
}

.meta_item span {
    color: var(--tertiary-color);
    font-size: 0.9rem;
    opacity: 1;
}

.meta_item p {
    margin: 5px 0 0;
    font-size: 0.85rem;
    color: var(--secondary-color);
}

.intro {
    font-size: 0.9rem;
    opacity: 0.85;
    margin-bottom: 15px;
    line-height: 1.5;
}

.mini_desc {
    display: block;
    margin-top: 5px;
    font-size: 0.8rem;
    opacity: 0.7;
    color: var(--secondary-color);
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
    gap: 12px;
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

.objective_flow {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.step {
    display: flex;
    gap: 15px;
    align-items: flex-start;

    padding: 12px;
    border-left: 2px solid var(--tertiary-color);
    background: rgba(255, 255, 255, 0.02);

    transition: 0.3s ease;
}

.step:hover {
    transform: translateX(5px);
}

.step_number {
    font-family: monospace;
    font-size: 0.8rem;
    color: var(--tertiary-color);
    opacity: 0.8;
    min-width: 35px;
}

.step_content h4 {
    margin: 0;
    color: var(--tertiary-color);
    font-size: 0.95rem;
}

.step_content p {
    margin: 5px 0 0;
    font-size: 0.85rem;
    opacity: 0.85;
    color: var(--secondary-color);
}
</style>