<template>
    <Navbar />

    <section class="hero">
        <div class="hero_left animate_left">
            <div class="hero_eyebrow">
                <span class="eyebrow_dot"></span>
                TECHNIQUE
            </div>
            <h1>Savoir-faire<br><em>Techniques</em></h1>
            <p>
                Cette section présente les compétences techniques mobilisées durant mon stage chez
                <strong>Appup</strong>.
                Chaque sous-page documente un <span>savoir-faire élémentaire</span> appuyé sur une
                <span>trace concrète</span>, suivi d'un <span>bilan & analyse</span> global.
            </p>
            <div class="status">
                API REST · NODE.JS · VUE.JS · BASE DE DONNÉES · SERVICES EXTERNES
            </div>
        </div>

        <div class="hero_right animate_right">
            <div class="skills_overview">
                <div class="overview_header">
                    <span class="overview_label">// COMPÉTENCES COUVERTES</span>
                </div>
                <div class="overview_items">
                    <div class="overview_item" v-for="(skill, i) in subpages" :key="i"
                        :class="{ active: currentPage === i }" @click="goTo(i)">
                        <span class="overview_num">{{ String(i + 1).padStart(2, '0') }}</span>
                        <span class="overview_title">{{ skill.shortTitle }}</span>
                        <span class="overview_arrow">→</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Navigation tabs -->
    <div class="tabs_wrapper animate_fade visible">
        <div class="tabs_bar">
            <button v-for="(page, i) in allTabs" :key="i" class="tab_btn" :class="{ active: currentPage === i }"
                @click="goTo(i)">
                <span class="tab_num">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="tab_name">{{ page.tabLabel }}</span>
            </button>
        </div>
        <div class="tabs_progress">
            <div class="tabs_progress_fill" :style="{ width: progressWidth }"></div>
        </div>
    </div>

    <section v-if="currentPage === 0" class="subpage_wrapper">
        <div class="sf_left">
            <div class="sf_kicker">// SAVOIR-FAIRE 01</div>

            <h2 class="sf_title">Conception d'une API REST générique et modulaire</h2>

            <p class="sf_desc">
                Développement d'une API Node.js générique, organisée en modules indépendants afin de rendre chaque
                ressource réutilisable et facilement adaptable. Chaque module dispose de ses propres routes, contrôleurs
                et middlewares, permettant d’éviter la duplication de logique entre projets.
            </p>

            <div class="sfe_block">
                <div class="sfe_header">
                    <span class="sfe_label">// SAVOIR-FAIRE ÉLÉMENTAIRES</span>
                </div>

                <div class="sfe_items">
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_purple">
                            Savoir concevoir une architecture d’API REST générique
                            basée sur des routes dynamiques.
                        </span>
                    </div>

                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_pink">
                            Implémenter le routage dynamique via paramètres d’URL.
                        </span>
                    </div>

                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_green">
                            Construire des requêtes SQL dynamiques.
                        </span>
                    </div>

                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_orange">
                            Sécuriser la génération de requêtes contre les injections SQL.
                        </span>
                    </div>
                </div>
            </div>

            <div class="sf_trace_block">
                <div class="trace_label">
                    <span class="trace_dot"></span>
                    TRACE — Capture + description
                </div>

                <div class="trace_card">
                    <div class="trace_preview">
                        <img src="../../public/trace_api_generique_horizontal.png"
                            alt="Capture de l'architecture API" />

                        <div class="trace_caption">
                            <span class="trace_number">Trace n°1</span>
                            <span class="trace_caption_text">
                                Schéma d’une API modulaire générique
                            </span>
                        </div>
                    </div>

                    <!-- <div class="trace_header">
                        <span class="trace_icon">⬡</span>

                        <div>
                            <strong>Structure de routeur Express</strong>
                            <small>src/routes/users.js · Stage Appup</small>
                        </div>
                    </div> -->

                    <p class="trace_body">
                        La trace n°1 ci-dessus montre <span class="sfe_purple">l'architecture de l'API REST générique</span> que j'ai crée pour mon stage chez Appup. 
                        Cette copie d'écran illustre le passage d'une requête HTTP de la part du client vers le serveur en différentes étapes 
                    </p>

                </div>
            </div>
        </div>
    </section>

    <section v-if="currentPage === 1" class="subpage_wrapper">
        <div class="sf_layout">
            <div class="sf_left">
                <div class="sf_kicker">// SAVOIR-FAIRE 02</div>

                <!-- Bloc SFE -->
                <div class="sfe_block">
                    <div class="sfe_header">
                        <span class="sfe_label">// SAVOIR-FAIRE ÉLÉMENTAIRES</span>
                    </div>
                    <div class="sfe_items">
                        <div class="sfe_item">
                            <span class="sfe_bullet">›</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</span>
                        </div>
                        <div class="sfe_item">
                            <span class="sfe_bullet">›</span>
                            <span>Purus sit amet volutpat consequat mauris nunc congue nisi vitae.</span>
                        </div>
                        <div class="sfe_item">
                            <span class="sfe_bullet">›</span>
                            <span>Faucibus a pellentesque sit amet porttitor eget dolor morbi non.</span>
                        </div>
                    </div>
                </div>

                <h2 class="sf_title">Intégration du paiement en ligne (Stripe)</h2>
                <p class="sf_desc">
                    Implémentation complète du tunnel de paiement Stripe dans une boutique e-commerce : création de
                    sessions de paiement, gestion des webhooks et confirmation de commande côté serveur.
                </p>
                <div class="sf_trace_block">
                    <div class="trace_label">
                        <span class="trace_dot"></span>
                        TRACE — Capture + code
                    </div>
                    <div class="trace_card">
                        <div class="trace_header">
                            <span class="trace_icon">◎</span>
                            <div>
                                <strong>Endpoint de création de session Stripe</strong>
                                <small>src/controllers/PaymentController.js · Stage Appup</small>
                            </div>
                        </div>
                        <p class="trace_body">Création d'une session Checkout Stripe sécurisée, avec passage des
                            articles du panier, gestion des URLs de retour et écoute des webhooks pour confirmer les
                            paiements.</p>
                        <div class="trace_tags">
                            <span class="trace_tag">Stripe</span>
                            <span class="trace_tag">Webhook</span>
                            <span class="trace_tag">Node.js</span>
                            <span class="trace_tag">E-commerce</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sf_right">
                <div class="code_block">
                    <div class="code_header">
                        <div class="code_dots">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                        </div>
                        <span class="code_filename">src/controllers/PaymentController.js</span>
                    </div>
                    <pre class="code_body"><code><span style="color:#8b5cf6">const</span> <span style="color:#f8fafc">stripe</span> = <span style="color:#f472b6">require</span>(<span style="color:#a3e635">'stripe'</span>)(<span style="color:#f8fafc">process</span>.<span style="color:#f8fafc">env</span>.<span style="color:#f8fafc">STRIPE_KEY</span>);

<span style="color:#8b5cf6">exports</span>.<span style="color:#f472b6">createSession</span> = <span style="color:#8b5cf6">async</span> (<span style="color:#f8fafc">req</span>, <span style="color:#f8fafc">res</span>) => {
  <span style="color:#8b5cf6">const</span> { <span style="color:#f8fafc">items</span> } = <span style="color:#f8fafc">req</span>.<span style="color:#f8fafc">body</span>;
  <span style="color:#8b5cf6">const</span> <span style="color:#f8fafc">session</span> = <span style="color:#8b5cf6">await</span> <span style="color:#f8fafc">stripe</span>.<span style="color:#f8fafc">checkout</span>.<span style="color:#f8fafc">sessions</span>
    .<span style="color:#f472b6">create</span>({
      <span style="color:#f8fafc">payment_method_types</span>: [<span style="color:#a3e635">'card'</span>],
      <span style="color:#f8fafc">line_items</span>: <span style="color:#f8fafc">items</span>.<span style="color:#f472b6">map</span>(<span style="color:#f8fafc">i</span> => ({
        <span style="color:#f8fafc">price_data</span>: {
          <span style="color:#f8fafc">currency</span>: <span style="color:#a3e635">'eur'</span>,
          <span style="color:#f8fafc">product_data</span>: { <span style="color:#f8fafc">name</span>: <span style="color:#f8fafc">i</span>.<span style="color:#f8fafc">name</span> },
          <span style="color:#f8fafc">unit_amount</span>: <span style="color:#f8fafc">i</span>.<span style="color:#f8fafc">price</span> * <span style="color:#a3e635">100</span>,
        },
        <span style="color:#f8fafc">quantity</span>: <span style="color:#f8fafc">i</span>.<span style="color:#f8fafc">qty</span>,
      })),
      <span style="color:#f8fafc">mode</span>: <span style="color:#a3e635">'payment'</span>,
      <span style="color:#f8fafc">success_url</span>: `${<span style="color:#f8fafc">process</span>.<span style="color:#f8fafc">env</span>.<span style="color:#f8fafc">CLIENT</span>}/success`,
      <span style="color:#f8fafc">cancel_url</span>: `${<span style="color:#f8fafc">process</span>.<span style="color:#f8fafc">env</span>.<span style="color:#f8fafc">CLIENT</span>}/cart`,
    });
  <span style="color:#f8fafc">res</span>.<span style="color:#f472b6">json</span>({ <span style="color:#f8fafc">url</span>: <span style="color:#f8fafc">session</span>.<span style="color:#f8fafc">url</span> });
};</code></pre>
                </div>
                <div class="sf_competences">
                    <div class="comp_label">// COMPÉTENCES MISES EN JEU</div>
                    <div class="comp_list">
                        <div class="comp_item">
                            <div class="comp_info"><span class="comp_name">Stripe API</span><span
                                    class="comp_level">80%</span></div>
                            <div class="comp_bar_wrap">
                                <div class="comp_bar_fill" style="width:80%"></div>
                            </div>
                        </div>
                        <div class="comp_item">
                            <div class="comp_info"><span class="comp_name">Webhooks & événements</span><span
                                    class="comp_level">70%</span></div>
                            <div class="comp_bar_wrap">
                                <div class="comp_bar_fill" style="width:70%"></div>
                            </div>
                        </div>
                        <div class="comp_item">
                            <div class="comp_info"><span class="comp_name">Sécurité paiement</span><span
                                    class="comp_level">75%</span></div>
                            <div class="comp_bar_wrap">
                                <div class="comp_bar_fill" style="width:75%"></div>
                            </div>
                        </div>
                        <div class="comp_item">
                            <div class="comp_info"><span class="comp_name">Gestion async/await</span><span
                                    class="comp_level">88%</span></div>
                            <div class="comp_bar_wrap">
                                <div class="comp_bar_fill" style="width:88%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sf_nav">
            <button class="sf_nav_btn" @click="goTo(0)">← Précédent</button>
            <div class="sf_dots">
                <span v-for="(_, i) in allTabs" :key="i" class="sf_dot_item" :class="{ active: currentPage === i }"
                    @click="goTo(i)"></span>
            </div>
            <button class="sf_nav_btn" @click="goTo(2)">Suivant →</button>
        </div>
    </section>

    <section v-if="currentPage === 2" class="subpage_wrapper">
        <div class="sf_layout">
            <div class="sf_left">
                <div class="sf_kicker">// SAVOIR-FAIRE 03</div>

                <!-- Bloc SFE -->
                <div class="sfe_block">
                    <div class="sfe_header">
                        <span class="sfe_label">// SAVOIR-FAIRE ÉLÉMENTAIRES</span>
                    </div>
                    <div class="sfe_items">
                        <div class="sfe_item">
                            <span class="sfe_bullet">›</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</span>
                        </div>
                        <div class="sfe_item">
                            <span class="sfe_bullet">›</span>
                            <span>Purus sit amet volutpat consequat mauris nunc congue nisi vitae.</span>
                        </div>
                        <div class="sfe_item">
                            <span class="sfe_bullet">›</span>
                            <span>Faucibus a pellentesque sit amet porttitor eget dolor morbi non.</span>
                        </div>
                    </div>
                </div>

                <h2 class="sf_title">Gestion de fichiers avec AWS S3</h2>
                <p class="sf_desc">
                    Mise en place d'un service d'upload et de récupération de fichiers sur AWS S3 : gestion des
                    permissions, génération d'URLs présignées et intégration dans le flux de l'application.
                </p>
                <div class="sf_trace_block">
                    <div class="trace_label">
                        <span class="trace_dot"></span>
                        TRACE — Extrait de code
                    </div>
                    <div class="trace_card">
                        <div class="trace_header">
                            <span class="trace_icon">◈</span>
                            <div>
                                <strong>Service d'upload S3 avec URL présignée</strong>
                                <small>src/services/s3.service.js · Stage Appup</small>
                            </div>
                        </div>
                        <p class="trace_body">Création d'un service réutilisable pour uploader des fichiers sur S3 et
                            générer des URLs temporaires signées permettant un accès sécurisé aux ressources.</p>
                        <div class="trace_tags">
                            <span class="trace_tag">AWS S3</span>
                            <span class="trace_tag">SDK</span>
                            <span class="trace_tag">Upload</span>
                            <span class="trace_tag">Sécurité</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sf_right">
                <div class="code_block">
                    <div class="code_header">
                        <div class="code_dots">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                        </div>
                        <span class="code_filename">src/services/s3.service.js</span>
                    </div>
                    <pre class="code_body"><code><span style="color:#8b5cf6">const</span> { <span style="color:#f8fafc">S3Client</span>, <span style="color:#f8fafc">PutObjectCommand</span>,
      <span style="color:#f8fafc">GetObjectCommand</span> } = <span style="color:#f472b6">require</span>(<span style="color:#a3e635">'@aws-sdk/client-s3'</span>);
<span style="color:#8b5cf6">const</span> { <span style="color:#f8fafc">getSignedUrl</span> } = <span style="color:#f472b6">require</span>(<span style="color:#a3e635">'@aws-sdk/s3-request-presigner'</span>);

<span style="color:#8b5cf6">const</span> <span style="color:#f8fafc">s3</span> = <span style="color:#8b5cf6">new</span> <span style="color:#f472b6">S3Client</span>({ <span style="color:#f8fafc">region</span>: <span style="color:#f8fafc">process</span>.<span style="color:#f8fafc">env</span>.<span style="color:#f8fafc">AWS_REGION</span> });

<span style="color:#8b5cf6">exports</span>.<span style="color:#f472b6">uploadFile</span> = <span style="color:#8b5cf6">async</span> (<span style="color:#f8fafc">key</span>, <span style="color:#f8fafc">buffer</span>, <span style="color:#f8fafc">mime</span>) => {
  <span style="color:#8b5cf6">await</span> <span style="color:#f8fafc">s3</span>.<span style="color:#f472b6">send</span>(<span style="color:#8b5cf6">new</span> <span style="color:#f472b6">PutObjectCommand</span>({
    <span style="color:#f8fafc">Bucket</span>: <span style="color:#f8fafc">process</span>.<span style="color:#f8fafc">env</span>.<span style="color:#f8fafc">S3_BUCKET</span>,
    <span style="color:#f8fafc">Key</span>: <span style="color:#f8fafc">key</span>,
    <span style="color:#f8fafc">Body</span>: <span style="color:#f8fafc">buffer</span>,
    <span style="color:#f8fafc">ContentType</span>: <span style="color:#f8fafc">mime</span>,
  }));
  <span style="color:#8b5cf6">return</span> <span style="color:#f472b6">getSignedUrl</span>(<span style="color:#f8fafc">s3</span>,
    <span style="color:#8b5cf6">new</span> <span style="color:#f472b6">GetObjectCommand</span>({
      <span style="color:#f8fafc">Bucket</span>: <span style="color:#f8fafc">process</span>.<span style="color:#f8fafc">env</span>.<span style="color:#f8fafc">S3_BUCKET</span>,
      <span style="color:#f8fafc">Key</span>: <span style="color:#f8fafc">key</span>
    }),
    { <span style="color:#f8fafc">expiresIn</span>: <span style="color:#a3e635">3600</span> }
  );
};</code></pre>
                </div>
                <div class="sf_competences">
                    <div class="comp_label">// COMPÉTENCES MISES EN JEU</div>
                    <div class="comp_list">
                        <div class="comp_item">
                            <div class="comp_info"><span class="comp_name">AWS S3 SDK v3</span><span
                                    class="comp_level">74%</span></div>
                            <div class="comp_bar_wrap">
                                <div class="comp_bar_fill" style="width:74%"></div>
                            </div>
                        </div>
                        <div class="comp_item">
                            <div class="comp_info"><span class="comp_name">URLs présignées</span><span
                                    class="comp_level">70%</span></div>
                            <div class="comp_bar_wrap">
                                <div class="comp_bar_fill" style="width:70%"></div>
                            </div>
                        </div>
                        <div class="comp_item">
                            <div class="comp_info"><span class="comp_name">Gestion des permissions IAM</span><span
                                    class="comp_level">60%</span></div>
                            <div class="comp_bar_wrap">
                                <div class="comp_bar_fill" style="width:60%"></div>
                            </div>
                        </div>
                        <div class="comp_item">
                            <div class="comp_info"><span class="comp_name">Traitement de fichiers Node.js</span><span
                                    class="comp_level">82%</span></div>
                            <div class="comp_bar_wrap">
                                <div class="comp_bar_fill" style="width:82%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sf_nav">
            <button class="sf_nav_btn" @click="goTo(1)">← Précédent</button>
            <div class="sf_dots">
                <span v-for="(_, i) in allTabs" :key="i" class="sf_dot_item" :class="{ active: currentPage === i }"
                    @click="goTo(i)"></span>
            </div>
            <button class="sf_nav_btn" @click="goTo(3)">Suivant →</button>
        </div>
    </section>

    <section v-if="currentPage === 3" class="subpage_wrapper">
        <div class="bilan_hero">
            <div class="sf_kicker">// BILAN & ANALYSE</div>
            <h2 class="sf_title">Synthèse des savoir-faire <em>généraux</em></h2>
            <p class="sf_desc">
                Analyse réflexive des compétences développées au cours du stage, évaluation de la progression
                et identification des axes d'amélioration.
            </p>
        </div>

        <div class="bilan_grid">
            <div class="bilan_card">
                <div class="bilan_card_top">
                    <div class="bilan_icon green">✓</div>
                    <h3>Points forts acquis</h3>
                </div>
                <ul class="bilan_list">
                    <li>Conception d'une architecture API modulaire et réutilisable</li>
                    <li>Intégration de services tiers (Stripe, AWS S3, Brevo)</li>
                    <li>Gestion complète d'un projet en conditions réelles</li>
                    <li>Communication et collaboration en petite équipe</li>
                </ul>
            </div>

            <div class="bilan_card">
                <div class="bilan_card_top">
                    <div class="bilan_icon purple">↗</div>
                    <h3>Axes de progression</h3>
                </div>
                <ul class="bilan_list">
                    <li>Approfondissement des tests automatisés (Jest, Vitest)</li>
                    <li>Meilleure maîtrise du déploiement CI/CD</li>
                    <li>Documentation technique plus systématique</li>
                    <li>Exploration des architectures microservices</li>
                </ul>
            </div>

            <div class="bilan_card bilan_card_wide">
                <div class="bilan_card_top">
                    <div class="bilan_icon pink">◈</div>
                    <h3>Analyse globale</h3>
                </div>
                <p class="bilan_text">
                    Ce stage m'a permis de confronter mes connaissances théoriques à des contraintes réelles :
                    délais clients, code maintenable, intégration de services externes. La conception de l'API
                    modulaire a été particulièrement formatrice — elle m'a imposé de penser en termes de
                    réutilisabilité et de scalabilité dès la phase de conception.
                </p>
                <p class="bilan_text">
                    L'environnement en petite équipe a favorisé une autonomie rapide et une prise de responsabilité
                    sur l'ensemble du cycle de développement, du design de la base de données jusqu'au déploiement.
                </p>
                <div class="bilan_global_tags">
                    <span>Autonomie ++</span>
                    <span>Fullstack confirmé</span>
                    <span>Esprit produit</span>
                    <span>Rigueur technique</span>
                </div>
            </div>
        </div>

        <div class="radar_section">
            <div class="radar_label">// AUTO-ÉVALUATION FINALE</div>
            <div class="radar_bars">
                <div class="radar_item">
                    <div class="radar_name">Conception d'API</div>
                    <div class="radar_bar_wrap">
                        <div class="radar_bar_fill" style="width:85%;background:#f472b6"></div>
                    </div>
                    <div class="radar_score">85/100</div>
                </div>
                <div class="radar_item">
                    <div class="radar_name">Intégration services tiers</div>
                    <div class="radar_bar_wrap">
                        <div class="radar_bar_fill" style="width:78%;background:#8b5cf6"></div>
                    </div>
                    <div class="radar_score">78/100</div>
                </div>
                <div class="radar_item">
                    <div class="radar_name">Base de données</div>
                    <div class="radar_bar_wrap">
                        <div class="radar_bar_fill" style="width:72%;background:#a3e635"></div>
                    </div>
                    <div class="radar_score">72/100</div>
                </div>
                <div class="radar_item">
                    <div class="radar_name">Frontend Vue.js</div>
                    <div class="radar_bar_wrap">
                        <div class="radar_bar_fill" style="width:80%;background:#f472b6"></div>
                    </div>
                    <div class="radar_score">80/100</div>
                </div>
                <div class="radar_item">
                    <div class="radar_name">Git & collaboration</div>
                    <div class="radar_bar_wrap">
                        <div class="radar_bar_fill" style="width:88%;background:#8b5cf6"></div>
                    </div>
                    <div class="radar_score">88/100</div>
                </div>
                <div class="radar_item">
                    <div class="radar_name">Tests & qualité</div>
                    <div class="radar_bar_wrap">
                        <div class="radar_bar_fill" style="width:55%;background:#fb923c"></div>
                    </div>
                    <div class="radar_score">55/100</div>
                </div>
            </div>
        </div>

        <div class="sf_nav">
            <button class="sf_nav_btn" @click="goTo(2)">← Précédent</button>
            <div class="sf_dots">
                <span v-for="(_, i) in allTabs" :key="i" class="sf_dot_item" :class="{ active: currentPage === i }"
                    @click="goTo(i)"></span>
            </div>
            <button class="sf_nav_btn" disabled>Fin du parcours</button>
        </div>
    </section>

</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref, computed, onMounted } from 'vue'

const currentPage = ref(0)

const subpages = [
    { shortTitle: 'Conception API Générique', tabLabel: 'API Générique' },
    { shortTitle: 'Intégration API externes', tabLabel: 'API Externes' },
    { shortTitle: 'Mettre en place une borne', tabLabel: 'Borne' },
]

const bilanTab = { tabLabel: 'Bilan & Analyse' }
const allTabs = computed(() => [...subpages, bilanTab])

const progressWidth = computed(() =>
    ((currentPage.value + 1) / allTabs.value.length * 100) + '%'
)

function goTo(i) {
    if (i >= 0 && i < allTabs.value.length) {
        currentPage.value = i
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible')
        })
    }, { threshold: 0.1 })

    document.querySelectorAll('.animate_fade, .animate_left, .animate_right').forEach(el => {
        observer.observe(el)
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
    min-height: 45vh;
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

.skills_overview {
    width: 100%;
    max-width: 440px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    overflow: hidden;
}

.overview_header {
    padding: 16px 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(255, 255, 255, 0.02);
}

.overview_label {
    font-family: monospace;
    font-size: 0.7rem;
    letter-spacing: 2px;
    color: var(--quaternary-color);
    opacity: 0.7;
}

.overview_items {
    display: flex;
    flex-direction: column;
}

.overview_item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    cursor: pointer;
    transition: 0.25s ease;
}

.overview_item:last-child {
    border-bottom: none;
}

.overview_item:hover,
.overview_item.active {
    background: rgba(244, 114, 182, 0.08);
    border-left: 2px solid var(--tertiary-color);
}

.overview_num {
    font-family: monospace;
    font-size: 0.7rem;
    color: var(--quaternary-color);
    opacity: 0.6;
    flex-shrink: 0;
}

.overview_title {
    flex: 1;
    font-size: 0.9rem;
    color: var(--secondary-color);
    opacity: 0.8;
}

.overview_arrow {
    color: var(--tertiary-color);
    opacity: 0;
    transition: 0.2s ease;
}

.overview_item:hover .overview_arrow,
.overview_item.active .overview_arrow {
    opacity: 0.7;
}

.tabs_wrapper {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 80px;
}

.tabs_bar {
    display: flex;
    gap: 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    overflow-x: auto;
}

.tab_btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 22px;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--secondary-color);
    opacity: 0.45;
    cursor: pointer;
    font-size: 0.85rem;
    transition: 0.2s ease;
    white-space: nowrap;
    margin-bottom: -1px;
}

.tab_btn:hover {
    opacity: 0.75;
}

.tab_btn.active {
    opacity: 1;
    border-bottom-color: var(--tertiary-color);
    color: var(--tertiary-color);
}

.tab_num {
    font-family: monospace;
    font-size: 0.68rem;
    color: var(--quaternary-color);
    opacity: 0.6;
}

.tab_btn.active .tab_num {
    opacity: 1;
}

.tabs_progress {
    height: 2px;
    background: rgba(255, 255, 255, 0.06);
}

.tabs_progress_fill {
    height: 100%;
    background: linear-gradient(90deg, var(--tertiary-color), var(--quaternary-color));
    transition: width 0.4s ease;
}

.subpage_wrapper {
    max-width: 1500px;
    margin: 0 auto;
    padding: 60px 80px;
}

.sf_layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
    margin-bottom: 60px;
}

.sf_kicker {
    font-family: monospace;
    font-size: 0.72rem;
    letter-spacing: 3px;
    color: var(--quaternary-color);
    margin-bottom: 16px;
    opacity: 0.7;
}

/* ── Bloc SFE ── */
.sfe_block {
    margin-bottom: 28px;
    border-radius: 12px;
    background: rgba(139, 92, 246, 0.05);
    border: 1px solid rgba(139, 92, 246, 0.18);
    overflow: hidden;
}

.sfe_header {
    padding: 10px 18px;
    border-bottom: 1px solid rgba(139, 92, 246, 0.12);
    background: rgba(139, 92, 246, 0.07);
}

.sfe_label {
    font-family: monospace;
    font-size: 0.65rem;
    letter-spacing: 2px;
    color: var(--quaternary-color);
    opacity: 0.75;
}

.sfe_items {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 6px 0;
}

.sfe_item {
    display: flex;
    align-items: baseline;
    gap: 10px;
    padding: 9px 18px;
    font-size: 0.82rem;
    color: var(--secondary-color);
    opacity: 0.7;
    line-height: 1.55;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    transition: background 0.2s ease, opacity 0.2s ease;
}

.sfe_item:last-child {
    border-bottom: none;
}

.sfe_item:hover {
    background: rgba(139, 92, 246, 0.07);
    opacity: 1;
}

.sfe_bullet {
    color: var(--quaternary-color);
    font-weight: 700;
    font-size: 1rem;
    flex-shrink: 0;
    line-height: 1;
}

/* ── end bloc SFE ── */

.sf_title {
    font-size: 2rem;
    color: var(--secondary-color);
    line-height: 1.2;
    margin-bottom: 18px;
}

.sf_title em {
    font-style: normal;
    color: var(--tertiary-color);
}

.sf_desc {
    font-size: 0.95rem;
    color: var(--secondary-color);
    opacity: 0.7;
    line-height: 1.8;
    margin-bottom: 36px;
}

.trace_label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: monospace;
    font-size: 0.68rem;
    letter-spacing: 2px;
    color: var(--quaternary-color);
    margin-bottom: 14px;
    opacity: 0.7;
}

.trace_dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--tertiary-color);
    box-shadow: 0 0 6px var(--tertiary-color);
}

.trace_card {
    padding: 22px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: 0.3s ease;
}

.trace_card:hover {
    border-color: rgba(244, 114, 182, 0.3);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.trace_header {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 14px;
}

.trace_icon {
    font-size: 1.4rem;
    color: var(--tertiary-color);
    opacity: 0.7;
}

.trace_header strong {
    display: block;
    font-size: 0.92rem;
    color: var(--secondary-color);
    margin-bottom: 2px;
}

.trace_header small {
    font-family: monospace;
    font-size: 0.68rem;
    color: var(--secondary-color);
    opacity: 0.45;
}

.trace_body {
    font-size: 0.85rem;
    color: var(--secondary-color);
    opacity: 0.6;
    line-height: 1.65;
    margin-bottom: 16px;
}

.trace_tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.trace_tag {
    padding: 4px 10px;
    font-size: 0.7rem;
    border-radius: 20px;
    color: var(--tertiary-color);
    border: 1px solid rgba(244, 114, 182, 0.3);
    font-family: monospace;
}

.code_block {
    border-radius: 12px;
    overflow: hidden;
    background: rgba(5, 8, 20, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 28px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.code_header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.04);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.code_dots {
    display: flex;
    gap: 6px;
}

.code_dots .dot {
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

.code_filename {
    flex: 1;
    text-align: center;
    font-family: monospace;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 1px;
}

.code_body {
    padding: 20px 24px;
    margin: 0;
    font-family: monospace;
    font-size: 0.82rem;
    line-height: 1.9;
    overflow-x: auto;
}

.code_body code {
    color: var(--secondary-color);
}

.comp_label {
    font-family: monospace;
    font-size: 0.68rem;
    letter-spacing: 2px;
    color: var(--quaternary-color);
    opacity: 0.6;
    margin-bottom: 16px;
}

.comp_list {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.comp_info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
}

.comp_name {
    font-size: 0.82rem;
    color: var(--secondary-color);
    opacity: 0.8;
}

.comp_level {
    font-family: monospace;
    font-size: 0.72rem;
    color: var(--tertiary-color);
    opacity: 0.7;
}

.comp_bar_wrap {
    height: 4px;
    background: rgba(255, 255, 255, 0.07);
    border-radius: 2px;
    overflow: hidden;
}

.comp_bar_fill {
    height: 100%;
    background: linear-gradient(90deg, var(--tertiary-color), var(--quaternary-color));
    border-radius: 2px;
}

.sf_nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.sf_nav_btn {
    padding: 10px 20px;
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: var(--secondary-color);
    font-size: 0.85rem;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s ease;
    font-family: monospace;
    letter-spacing: 1px;
}

.sf_nav_btn:hover:not(:disabled) {
    border-color: var(--tertiary-color);
    color: var(--tertiary-color);
}

.sf_nav_btn:disabled {
    opacity: 0.25;
    cursor: not-allowed;
}

.sf_dots {
    display: flex;
    gap: 8px;
}

.sf_dot_item {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.18);
    cursor: pointer;
    transition: 0.2s ease;
}

.sf_dot_item.active {
    background: var(--tertiary-color);
    box-shadow: 0 0 8px var(--tertiary-color);
}

.bilan_hero {
    margin-bottom: 52px;
}

.bilan_grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 48px;
}

.bilan_card {
    padding: 28px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    transition: 0.35s ease;
}

.bilan_card:hover {
    transform: translateY(-5px);
    box-shadow: 0 24px 56px rgba(0, 0, 0, 0.45);
    border-color: rgba(255, 255, 255, 0.14);
}

.bilan_card_wide {
    grid-column: 1 / -1;
}

.bilan_card_top {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
}

.bilan_icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    flex-shrink: 0;
}

.bilan_icon.green {
    background: rgba(40, 200, 64, 0.12);
    color: #28c840;
    border: 1px solid rgba(40, 200, 64, 0.25);
}

.bilan_icon.purple {
    background: rgba(139, 92, 246, 0.12);
    color: var(--quaternary-color);
    border: 1px solid rgba(139, 92, 246, 0.25);
}

.bilan_icon.pink {
    background: rgba(244, 114, 182, 0.1);
    color: var(--tertiary-color);
    border: 1px solid rgba(244, 114, 182, 0.25);
}

.bilan_card_top h3 {
    font-size: 1rem;
    color: var(--secondary-color);
}

.bilan_list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.bilan_list li {
    font-size: 0.87rem;
    color: var(--secondary-color);
    opacity: 0.65;
    padding-left: 18px;
    position: relative;
    line-height: 1.5;
}

.bilan_list li::before {
    content: '›';
    position: absolute;
    left: 0;
    color: var(--tertiary-color);
    font-weight: 700;
}

.bilan_text {
    font-size: 0.9rem;
    color: var(--secondary-color);
    opacity: 0.65;
    line-height: 1.8;
    margin-bottom: 14px;
}

.bilan_global_tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 18px;
}

.bilan_global_tags span {
    padding: 6px 14px;
    font-size: 0.75rem;
    border-radius: 20px;
    color: var(--tertiary-color);
    border: 1px solid rgba(244, 114, 182, 0.3);
    background: rgba(244, 114, 182, 0.05);
    font-family: monospace;
    letter-spacing: 0.5px;
    transition: 0.2s ease;
}

.bilan_global_tags span:hover {
    background: var(--tertiary-color);
    color: #0b132b;
}

.radar_section {
    padding: 36px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.07);
    margin-bottom: 48px;
}

.radar_label {
    font-family: monospace;
    font-size: 0.68rem;
    letter-spacing: 2px;
    color: var(--quaternary-color);
    opacity: 0.6;
    margin-bottom: 28px;
}

.radar_bars {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.radar_item {
    display: grid;
    grid-template-columns: 220px 1fr 60px;
    align-items: center;
    gap: 16px;
}

.radar_name {
    font-size: 0.85rem;
    color: var(--secondary-color);
    opacity: 0.75;
}

.radar_bar_wrap {
    height: 6px;
    background: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    overflow: hidden;
}

.radar_bar_fill {
    height: 100%;
    border-radius: 3px;
    opacity: 0.85;
}

.radar_score {
    font-family: monospace;
    font-size: 0.72rem;
    color: var(--secondary-color);
    opacity: 0.5;
    text-align: right;
}

.sfe_purple {
    background: rgba(139, 92, 246, 0.8);
}

.sfe_pink {
    background: rgba(244, 114, 182, 0.8);
}

.sfe_green {
    background: rgba(34, 197, 94, 0.6);
}

.sfe_orange {
    background: rgba(251, 146, 60, 0.6);
}

.sf_trace_block {
    position: relative;
    margin-top: 40px;
}

.sf_trace_block::before {
    content: '';
    position: absolute;
    top: 26px;
    left: 14px;
    width: 1px;
    height: calc(100% - 26px);
    background: linear-gradient(to bottom,
            rgba(244, 114, 182, 0.35),
            transparent);
}

.trace_label {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 14px;
    margin-bottom: 18px;

    border-radius: 999px;
    background: rgba(244, 114, 182, 0.06);
    border: 1px solid rgba(244, 114, 182, 0.14);

    font-family: monospace;
    font-size: 0.68rem;
    letter-spacing: 2px;
    color: var(--tertiary-color);

    backdrop-filter: blur(8px);
}

.trace_dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--tertiary-color);
    box-shadow:
        0 0 0 4px rgba(244, 114, 182, 0.08),
        0 0 12px rgba(244, 114, 182, 0.6);

    animation: tracePulse 2.4s ease-in-out infinite;
}

@keyframes tracePulse {

    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(0.75);
        opacity: 0.6;
    }
}

.trace_card {
    position: relative;

    padding: 24px;
    padding-bottom: 20px;

    border-radius: 18px;

    background:
        linear-gradient(180deg,
            rgba(255, 255, 255, 0.045),
            rgba(255, 255, 255, 0.015));

    border: 1px solid rgba(255, 255, 255, 0.08);

    overflow: hidden;

    transition:
        transform 0.35s ease,
        border-color 0.35s ease,
        box-shadow 0.35s ease;
}

.trace_card::before {
    content: '';
    position: absolute;
    inset: 0;

    background:
        radial-gradient(circle at top right,
            rgba(244, 114, 182, 0.16),
            transparent 45%);

    pointer-events: none;
}

.trace_card:hover {
    transform: translateY(-4px);

    border-color: rgba(244, 114, 182, 0.28);

    box-shadow:
        0 14px 40px rgba(0, 0, 0, 0.45),
        0 0 0 1px rgba(244, 114, 182, 0.08);
}

.trace_header {
    display: flex;
    align-items: center;
    gap: 16px;

    margin-bottom: 18px;
}

.trace_icon {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 14px;

    background:
        linear-gradient(135deg,
            rgba(244, 114, 182, 0.18),
            rgba(139, 92, 246, 0.14));

    border: 1px solid rgba(255, 255, 255, 0.08);

    color: var(--tertiary-color);
    font-size: 1.1rem;

    flex-shrink: 0;
}

.trace_header strong {
    display: block;

    font-size: 0.98rem;
    font-weight: 600;

    color: var(--secondary-color);

    margin-bottom: 5px;
}

.trace_header small {
    font-family: monospace;
    font-size: 0.68rem;
    letter-spacing: 1px;

    color: var(--secondary-color);
    opacity: 0.45;
}

.trace_body {
    position: relative;

    padding-left: 16px;
    margin-bottom: 20px;

    font-size: 0.88rem;
    line-height: 1.8;

    color: var(--secondary-color);
    opacity: 0.72;
}

.trace_body::before {
    content: '';
    position: absolute;

    top: 2px;
    left: 0;

    width: 2px;
    height: calc(100% - 4px);

    border-radius: 10px;

    background:
        linear-gradient(to bottom,
            var(--tertiary-color),
            transparent);

    opacity: 0.7;
}

.trace_tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.trace_tag {
    padding: 6px 12px;

    border-radius: 999px;

    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(244, 114, 182, 0.18);

    color: var(--tertiary-color);

    font-size: 0.68rem;
    font-family: monospace;
    letter-spacing: 0.8px;

    transition:
        background 0.25s ease,
        transform 0.25s ease,
        border-color 0.25s ease;
}

.trace_tag:hover {
    background: rgba(244, 114, 182, 0.14);
    border-color: rgba(244, 114, 182, 0.35);

    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .trace_card {
        padding: 20px;
    }

    .trace_header {
        align-items: flex-start;
    }

    .trace_icon {
        width: 42px;
        height: 42px;
        font-size: 1rem;
    }

    .trace_body {
        font-size: 0.84rem;
    }
}

.trace_preview {
    width: 100%;
    border-radius: 16px;
    overflow: hidden;

    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);

    margin-bottom: 24px;

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}

.trace_preview:hover {
    transform: translateY(-3px);
    border-color: rgba(244, 114, 182, 0.3);

    box-shadow:
        0 10px 35px rgba(0, 0, 0, 0.35),
        0 0 0 1px rgba(244, 114, 182, 0.08);
}

.trace_preview img {
    width: 100%;
    display: block;
    object-fit: cover;
}

/* Légende sous l’image */
.trace_caption {
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 14px 18px;

    background:
        linear-gradient(to right,
            rgba(244, 114, 182, 0.06),
            rgba(139, 92, 246, 0.04));

    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.trace_number {
    padding: 5px 10px;

    border-radius: 999px;

    background: rgba(244, 114, 182, 0.12);
    border: 1px solid rgba(244, 114, 182, 0.25);

    color: var(--tertiary-color);

    font-size: 0.68rem;
    font-family: monospace;
    letter-spacing: 1px;

    flex-shrink: 0;
}

.trace_caption_text {
    font-size: 0.82rem;
    color: var(--secondary-color);
    opacity: 0.75;
    line-height: 1.5;
}
</style>