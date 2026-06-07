<template>
    <Navbar />

    <section class="hero">
        <div class="hero_left animate_left">
            <div class="hero_eyebrow">
                <span class="eyebrow_dot"></span>
                INTÉGRATION EN ENTREPRISE
            </div>
            <h1>Intégration<br><em>en entreprise</em></h1>
            <p>
                Cette section présente les compétences mobilisées lors de mon
                <strong>intégration au sein d'Appup</strong> durant le stage.
                Chaque sous-page documente un <span>savoir-faire élémentaire</span> appuyé sur une
                <span>trace concrète</span>, suivi d'un <span>bilan & analyse</span> global.
            </p>
            <div class="status">
                AUTONOMIE · COMMUNICATION · TRAVAIL D'ÉQUIPE · ADAPTATION
            </div>
        </div>

        <div class="hero_right animate_right">
            <div class="skills_overview">
                <div class="overview_header">
                    <span class="overview_label">// SAVOIR-FAIRE COUVERTS</span>
                </div>
                <div class="overview_items">
                    <div class="overview_item" v-for="(skill, i) in subpages" :key="i"
                        :class="{ active: currentPage === i }" @click="goTo(i)">
                        <span class="overview_num">{{ String(i + 7).padStart(2, '0') }}</span>
                        <span class="overview_title">{{ skill.shortTitle }}</span>
                        <span class="overview_arrow">→</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="tabs_wrapper animate_fade visible">
        <div class="tabs_bar">
            <button v-for="(page, i) in allTabs" :key="i" class="tab_btn" :class="{ active: currentPage === i }"
                @click="goTo(i)">
                <span class="tab_num">{{ String(i + 7).padStart(2, '0') }}</span>
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

            <h2 class="sf_title">Faire preuve d'<em>autonomie</em> & d'initiative</h2>

            <p class="sf_desc">
                J'ai conçu en grande partie seul le cœur de l'API générique — un système capable de répondre à
                n'importe quelle table à partir de l'URL. Pour avancer <strong>sans supervision constante</strong>,
                je me suis appuyé sur une check-list personnelle où je décomposais le problème en sous-tâches et
                suivais leur réalisation au fur et à mesure.
            </p>

            <div class="sfe_block">
                <div class="sfe_header">
                    <span class="sfe_label">// SAVOIR-FAIRE ÉLÉMENTAIRES</span>
                </div>

                <div class="sfe_items">
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c1">Décomposer seul un problème technique complexe en sous-tâches concrètes et actionnables.</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c2">Concevoir et mettre en œuvre une solution sans supervision constante.</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c3">Suivre et valider sa propre progression au fil de l'avancement.</span>
                    </div>
                </div>
            </div>

            <div class="sf_trace_block">
                <div class="trace_label">
                    <span class="trace_dot"></span>
                    TRACE — Capture + description
                </div>

                <div class="trace_card trace_split">
                    <div class="trace_preview">
                        <img src="/trace_integration_01.png"
                            alt="Check-list personnelle de développement de l'API générique" />

                        <div class="trace_caption">
                            <span class="trace_number">Trace n°7</span>
                            <span class="trace_caption_text">
                                Check-list personnelle de développement de l'API générique.
                            </span>
                        </div>
                    </div>

                    <div class="trace_split_text">
                    <p class="trace_body">
                        Cette capture en trace n°7 montre la check-list que j'ai tenue tout au long du développement de l'API
                        générique — un système conçu pour répondre à n'importe quelle table de la base à partir de la
                        seule URL. Comme le sujet était large et peu balisé au départ, j'ai commencé par le
                        <span class="sfe_c1">décomposer moi-même en sous-tâches concrètes et actionnables</span>,
                        chacune correspondant à une brique précise du système : analyser ce qui suit le domaine
                        (endpoint puis id), récupérer le nom de table via <code>/:table_name</code>, interpréter les
                        <code>?fields=id,name,email</code>, faire de même pour les <code>?filters=age,gt,10</code>,
                        créer la route d'ajout de données, ou encore contrôler l'<code>access_level</code> présent
                        dans les headers. Chaque ligne va plus loin qu'un simple intitulé : elle détaille en
                        sous-points la démarche et les exemples d'URL, ce qui transforme une intention floue en un
                        plan d'action exécutable.
                    </p>

                    <ul class="trace_defs">
                        <li>
                            <b>Endpoint</b> — la partie de l'URL après le domaine qui désigne la ressource ciblée :
                            dans <code>localhost:3000/user</code>, l'endpoint <code>/user</code> pointe vers la table
                            <code>user</code>. C'est lui qui indique à l'API <em>sur quoi</em> agir.
                        </li>
                        <li>
                            <b>Fields</b> (<code>?fields=id,name,email</code>) — permet de choisir <em>quelles
                            colonnes</em> récupérer au lieu de renvoyer toute la ligne ; la réponse ne contient alors
                            que les données demandées, ce qui l'allège.
                        </li>
                        <li>
                            <b>Filters</b> (<code>?filters=age,gt,10</code>) — permet de ne garder que les lignes
                            respectant une <em>condition</em> : ici l'âge supérieur à 10
                            (<code>gt</code> = <em>greater than</em>, « plus grand que »).
                        </li>
                    </ul>

                    <p class="trace_body">
                        Ces tâches, je les ai ensuite <span class="sfe_c2">conçues et mises en œuvre sans supervision
                        constante</span>, en prenant moi-même les décisions techniques structurantes : centraliser
                        toutes les requêtes dans un <em>dispatch</em> générique, isoler le contrôle des droits dans un
                        middleware <code>accessLevel</code>, générer automatiquement un fichier par table à partir
                        d'un template (avec vérification, au démarrage, que toutes les tables sont bien présentes), ou
                        encore distinguer paiement et abonnement dans le webhook Stripe. Plusieurs items témoignent
                        aussi d'une démarche d'amélioration de ma propre initiative — par exemple « tout passer via
                        des paramètres de fonctions plutôt que par des attributs de classe », une refactorisation que
                        personne ne m'avait demandée mais qui rendait le code plus clair.
                    </p>

                    <p class="trace_body">
                        Enfin, les marqueurs <strong>[ V ]</strong> (fait) et <strong>[ X ]</strong> (restant à faire)
                        montrent que je <span class="sfe_c3">suivais et validais ma propre progression</span> au fur
                        et à mesure. Cette check-list me servait de fil conducteur : elle me permettait de savoir à
                        tout moment où j'en étais, ce qu'il restait à traiter, et de reprendre le travail sans temps
                        mort d'une session à l'autre — le tout sans dépendre de quelqu'un pour cadrer ou prioriser
                        mes tâches. C'est précisément ce qui distingue un travail réellement autonome.
                    </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="sf_nav">
            <button class="sf_nav_btn" disabled>← Précédent</button>
            <div class="sf_dots">
                <span v-for="(_, i) in allTabs" :key="i" class="sf_dot_item" :class="{ active: currentPage === i }"
                    @click="goTo(i)"></span>
            </div>
            <button class="sf_nav_btn" @click="goTo(1)">Suivant →</button>
        </div>
    </section>

    <section v-if="currentPage === 1" class="subpage_wrapper">
        <div class="sf_left">
            <div class="sf_kicker">// SAVOIR-FAIRE 02</div>

            <h2 class="sf_title">S'adapter à l'<em>environnement</em> technique</h2>

            <p class="sf_desc">
                En arrivant chez Appup, j'ai dû m'approprier un environnement technique en grande partie nouveau
                pour moi : un développement <strong>fullstack Node.js</strong> et surtout l'intégration de plusieurs
                <strong>services externes</strong>. Apprendre à utiliser ces outils inconnus, à partir de leur
                documentation, a été une part importante de mon intégration.
            </p>

            <div class="sfe_block">
                <div class="sfe_header">
                    <span class="sfe_label">// SAVOIR-FAIRE ÉLÉMENTAIRES</span>
                </div>

                <div class="sfe_items">
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c5">Prendre en main de nouvelles technologies à partir de leur documentation officielle.</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c6">S'approprier l'architecture et les outils déjà en place dans l'entreprise.</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c7">Intégrer des services externes au projet (paiement, stockage, e-mails).</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c8">Monter en compétence rapidement sur un outil jusque-là inconnu.</span>
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
                        <img src="/trace_environnement_technique.png"
                            alt="Schéma d'intégration des API externes (Stripe, AWS S3, Brevo) à l'API Node.js" />

                        <div class="trace_caption">
                            <span class="trace_number">Trace n°8</span>
                            <span class="trace_caption_text">
                                Schéma d'intégration des trois API externes à l'API Node.js.
                            </span>
                        </div>
                    </div>

                    <p class="trace_body">
                        Le schéma en trace n°8 représente l'architecture que j'ai mise en place autour des services tiers.
                        L'API Node.js y sert de <span class="sfe_c6">point central</span> : c'est elle qui reçoit les
                        requêtes du site, puis qui dialogue avec les bons services externes selon le besoin. Plutôt
                        que de laisser le front-end appeler directement ces services (ce qui exposerait les clés
                        secrètes), tout passe par le back-end, qui agit comme un chef d'orchestre sécurisé.
                    </p>

                    <p class="trace_body">
                        Les flèches du schéma matérialisent les trois services externes que j'ai
                        <span class="sfe_c7">intégrés au projet</span>, chacun répondant à un besoin précis.
                        Aucun ne m'était familier au départ : je les ai
                        <span class="sfe_c5">pris en main à partir de leur documentation officielle</span>, en
                        commençant par de petits tests isolés avant de les brancher réellement à l'application.
                    </p>

                    <ul class="trace_defs">
                        <li>
                            <span class="doc_chip dc_violet">Stripe</span> — service de
                            <b>paiement en ligne</b>. Je l'ai utilisé pour gérer les paiements ponctuels comme les
                            abonnements, et surtout pour réagir à ses <em>webhooks</em> : des notifications que
                            Stripe envoie automatiquement à mon serveur quand un événement se produit (par ex.
                            <code>checkout.session.completed</code> à la fin d'un paiement). Mon API écoute ces
                            événements pour, ensuite, mettre à jour la base — confirmer une commande ou activer un
                            abonnement.
                        </li>
                        <li>
                            <span class="doc_chip dc_orange">AWS S3</span> — service de
                            <b>stockage de fichiers</b> dans le cloud d'Amazon. Les fichiers sont rangés dans des
                            « <em>buckets</em> » (des conteneurs de stockage) d'où on peut les téléverser puis les
                            récupérer via une URL. Cela évite de stocker les fichiers sur le serveur lui-même et
                            permet de les servir de façon fiable et scalable.
                        </li>
                        <li>
                            <span class="doc_chip dc_green">Brevo</span> — service d'envoi d'
                            <b>e-mails transactionnels</b>, c'est-à-dire des e-mails déclenchés automatiquement par
                            une action de l'utilisateur (confirmation d'inscription, réinitialisation de mot de
                            passe…), par opposition aux e-mails marketing envoyés en masse. L'API appelle Brevo au
                            bon moment pour envoyer le message attendu, souvent à partir d'un modèle.
                        </li>
                    </ul>

                    <p class="trace_body">
                        Devoir relier ces trois outils à l'API m'a obligé à
                        <span class="sfe_c8">monter en compétence rapidement</span> sur des technologies inconnues :
                        comprendre leur logique propre (clés d'API, webhooks, SDK), lire leur documentation et
                        l'adapter à notre cas. Chaque intégration suivait la même démarche — lire la doc, tester en
                        isolé, puis relier au projet — ce qui m'a rendu de plus en plus à l'aise face à un service
                        nouveau.
                    </p>

                    <p class="trace_body">
                        Tout cela s'est fait en <span class="sfe_c6">m'appropriant l'architecture existante</span> du
                        projet, pour y brancher proprement chaque service sans casser le reste : centraliser les
                        appels côté back-end, isoler les clés secrètes dans la configuration, et garder une structure
                        cohérente. C'est cette capacité d'adaptation qui m'a permis de devenir réellement
                        opérationnel dans l'environnement technique d'Appup.
                    </p>
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
        <div class="bilan_hero">
            <div class="sf_kicker">// BILAN & ÉVALUATION</div>
            <h2 class="sf_title">Synthèse & évaluation des <em>savoir-faire</em></h2>
            <p class="sf_desc">
                Pour chaque savoir-faire, une synthèse de ce qui a été réalisé — où chaque
                <span>savoir-faire élémentaire</span> est surligné de sa propre couleur — suivie d'une évaluation
                de mon niveau de maîtrise.
            </p>
        </div>

        <div class="bilan_sf">
            <div class="bilan_sf_head">
                <span class="bilan_sf_num">07</span>
                <h3 class="bilan_sf_title">Faire preuve d'autonomie & d'initiative</h3>
            </div>

            <div class="bilan_blocks">
                <div class="bilan_card">
                    <div class="bilan_block_label">// SYNTHÈSE</div>
                    <p class="bilan_text">
                        Sur le développement de l'API générique, j'ai su <span class="sfe_c1">décomposer seul un
                        problème complexe en sous-tâches</span>, <span class="sfe_c2">concevoir et réaliser la
                        solution sans supervision constante</span>, et <span class="sfe_c3">suivre ma propre
                        progression</span> grâce à une check-list — preuve d'une réelle autonomie dans le travail.
                    </p>
                </div>

                <div class="bilan_card">
                    <div class="bilan_block_label">// ÉVALUATION</div>
                    <p class="bilan_text">
                        Je me sens autonome pour prendre en charge une fonctionnalité de bout en bout. Mon axe de
                        progression est d'oser solliciter l'équipe plus tôt face à un blocage, plutôt que de
                        chercher trop longtemps seul.
                    </p>
                    <span class="bilan_level bilan_level_high">Niveau : maîtrisé</span>
                </div>
            </div>
        </div>

        <div class="bilan_sf">
            <div class="bilan_sf_head">
                <span class="bilan_sf_num">08</span>
                <h3 class="bilan_sf_title">S'adapter à l'environnement technique</h3>
            </div>

            <div class="bilan_blocks">
                <div class="bilan_card">
                    <div class="bilan_block_label">// SYNTHÈSE</div>
                    <p class="bilan_text">
                        J'ai su <span class="sfe_c5">prendre en main de nouvelles technologies via leur
                        documentation</span>, <span class="sfe_c6">m'approprier l'architecture existante</span> et
                        <span class="sfe_c7">y intégrer trois services externes</span> (Stripe, AWS S3, Brevo), ce
                        qui m'a demandé de <span class="sfe_c8">monter en compétence rapidement</span> sur des outils
                        inconnus.
                    </p>
                </div>

                <div class="bilan_card">
                    <div class="bilan_block_label">// ÉVALUATION</div>
                    <p class="bilan_text">
                        Je m'adapte facilement à un nouvel outil ou service à partir de sa documentation. Je souhaite
                        désormais approfondir les bonnes pratiques propres à chaque service (sécurité des webhooks,
                        gestion fine des droits sur S3) plutôt que de m'arrêter à l'intégration fonctionnelle.
                    </p>
                    <span class="bilan_level bilan_level_high">Niveau : maîtrisé</span>
                </div>
            </div>
        </div>

        <div class="sf_nav">
            <button class="sf_nav_btn" @click="goTo(1)">← Précédent</button>
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const subpages = [
    { shortTitle: 'Faire preuve d\'autonomie & d\'initiative', tabLabel: 'Autonomie & initiative' },
    { shortTitle: 'S\'adapter à l\'environnement technique', tabLabel: 'Adaptation technique' },
]

function resolveTab(v) {
    const i = Number(v)
    return Number.isInteger(i) && i >= 0 && i <= subpages.length ? i : 0
}

const currentPage = ref(resolveTab(route.query.sf))

watch(() => route.query.sf, (v) => {
    currentPage.value = resolveTab(v)
})

const bilanTab = { tabLabel: 'Bilan & Évaluation' }
const allTabs = computed(() => [...subpages, bilanTab])

const progressWidth = computed(() =>
    ((currentPage.value + 1) / allTabs.value.length * 100) + '%'
)

function goTo(i) {
    if (i >= 0 && i < allTabs.value.length) {
        currentPage.value = i
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

.sf_kicker {
    font-family: monospace;
    font-size: 0.72rem;
    letter-spacing: 3px;
    color: var(--quaternary-color);
    margin-bottom: 16px;
    opacity: 0.7;
}

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

.trace_body {
    font-size: 0.85rem;
    color: var(--secondary-color);
    opacity: 0.6;
    line-height: 1.65;
    margin-bottom: 16px;
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

.bilan_sf {
    margin-bottom: 44px;
}

.bilan_sf_head {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 18px;
}

.bilan_sf_num {
    flex-shrink: 0;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-family: monospace;
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--tertiary-color);
    background: rgba(244, 114, 182, 0.1);
    border: 1px solid rgba(244, 114, 182, 0.25);
}

.bilan_sf_title {
    font-size: 1.15rem;
    color: var(--secondary-color);
    line-height: 1.3;
}

.bilan_blocks {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.bilan_card {
    padding: 26px 28px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    transition: 0.35s ease;
}

.bilan_card:hover {
    box-shadow: 0 24px 56px rgba(0, 0, 0, 0.45);
    border-color: rgba(255, 255, 255, 0.14);
}

.bilan_block_label {
    font-family: monospace;
    font-size: 0.68rem;
    letter-spacing: 2px;
    color: var(--quaternary-color);
    opacity: 0.7;
    margin-bottom: 14px;
}

.bilan_text {
    font-size: 0.9rem;
    color: var(--secondary-color);
    opacity: 0.8;
    line-height: 1.9;
    margin: 0;
}

.bilan_level {
    display: inline-block;
    margin-top: 16px;
    padding: 6px 14px;
    border-radius: 999px;
    font-family: monospace;
    font-size: 0.72rem;
    letter-spacing: 0.5px;
}

.bilan_level_high {
    color: #28c840;
    background: rgba(40, 200, 64, 0.1);
    border: 1px solid rgba(40, 200, 64, 0.3);
}

.bilan_level_mid {
    color: #fb923c;
    background: rgba(251, 146, 60, 0.1);
    border: 1px solid rgba(251, 146, 60, 0.3);
}

.sfe_c1 {
    background: rgba(139, 92, 246, 0.8);
}

.sfe_c2 {
    background: rgba(244, 114, 182, 0.8);
}

.sfe_c3 {
    background: rgba(34, 197, 94, 0.6);
}

.sfe_c4 {
    background: rgba(251, 146, 60, 0.6);
}

.sfe_c5 {
    background: rgba(59, 130, 246, 0.78);
}

.sfe_c6 {
    background: rgba(20, 184, 166, 0.72);
}

.sfe_c7 {
    background: rgba(239, 68, 68, 0.7);
}

.sfe_c8 {
    background: rgba(234, 179, 8, 0.7);
}

.sfe_c9 {
    background: rgba(217, 70, 239, 0.72);
}

.sfe_c10 {
    background: rgba(132, 204, 22, 0.62);
}

.sfe_c11 {
    background: rgba(6, 182, 212, 0.72);
}

.sfe_c12 {
    background: rgba(244, 63, 94, 0.72);
}

.trace_body code {
    padding: 1px 6px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    font-family: monospace;
    font-size: 0.82em;
    color: var(--tertiary-color);
    overflow-wrap: anywhere;
}

.cc_badge {
    display: inline-block;
    padding: 1px 8px;
    border-radius: 6px;
    font-family: monospace;
    font-size: 0.82em;
    font-weight: 700;
    line-height: 1.5;
}

.cc_feat {
    color: #34d399;
    background: rgba(52, 211, 153, 0.14);
    border: 1px solid rgba(52, 211, 153, 0.55);
}

.cc_refactor {
    color: #a78bfa;
    background: rgba(139, 92, 246, 0.16);
    border: 1px solid rgba(139, 92, 246, 0.6);
}

.cc_chore {
    color: #60a5fa;
    background: rgba(96, 165, 250, 0.14);
    border: 1px solid rgba(96, 165, 250, 0.55);
}

.doc_chip {
    display: inline-block;
    padding: 1px 8px;
    border-radius: 6px;
    font-size: 0.82em;
    font-weight: 600;
    white-space: nowrap;
}

.dc_violet {
    color: #a78bfa;
    background: rgba(139, 92, 246, 0.12);
    border: 1px solid rgba(139, 92, 246, 0.5);
}

.dc_pink {
    color: #f472b6;
    background: rgba(244, 114, 182, 0.12);
    border: 1px solid rgba(244, 114, 182, 0.5);
}

.dc_green {
    color: #34d399;
    background: rgba(52, 211, 153, 0.12);
    border: 1px solid rgba(52, 211, 153, 0.5);
}

.dc_blue {
    color: #60a5fa;
    background: rgba(96, 165, 250, 0.12);
    border: 1px solid rgba(96, 165, 250, 0.5);
}

.dc_orange {
    color: #fb923c;
    background: rgba(251, 146, 60, 0.12);
    border: 1px solid rgba(251, 146, 60, 0.5);
}

.dc_cyan {
    color: #22d3ee;
    background: rgba(34, 211, 238, 0.12);
    border: 1px solid rgba(34, 211, 238, 0.5);
}

.dc_yellow {
    color: #fbbf24;
    background: rgba(251, 191, 36, 0.12);
    border: 1px solid rgba(251, 191, 36, 0.5);
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

@media (max-width: 768px) {
    .trace_card {
        padding: 20px;
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

.trace_defs {
    list-style: none;
    margin: 0 0 18px;
    padding: 14px 18px;
    border-left: 2px solid var(--tertiary-color);
    background: rgba(255, 255, 255, 0.03);
    border-radius: 0 10px 10px 0;
    display: flex;
    flex-direction: column;
    gap: 11px;
}

.trace_defs li {
    font-size: 0.84rem;
    line-height: 1.6;
    color: var(--secondary-color);
    opacity: 0.82;
}

.trace_defs b {
    color: var(--tertiary-color);
}

.trace_defs code {
    padding: 1px 6px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    font-family: monospace;
    font-size: 0.82em;
    color: var(--tertiary-color);
    overflow-wrap: anywhere;
}

.trace_split {
    display: flex;
    align-items: flex-start;
    gap: 26px;
}

.trace_split .trace_preview {
    flex: 0 0 42%;
    max-width: 42%;
    margin-bottom: 0;
    position: sticky;
    top: 20px;
}

.trace_split_text {
    flex: 1;
    min-width: 0;
}

.trace_split_text .trace_body:first-child {
    margin-top: 0;
}

@media (max-width: 900px) {
    .trace_split {
        flex-direction: column;
    }

    .trace_split .trace_preview {
        flex-basis: auto;
        max-width: 100%;
        width: 100%;
        position: static;
        margin-bottom: 20px;
    }
}
</style>
