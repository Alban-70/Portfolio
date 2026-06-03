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
                    <span class="overview_label">// SAVOIR-FAIRE COUVERTS</span>
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
                        <span class="sfe_c1">
                            Savoir concevoir une architecture d’API REST générique
                            basée sur des routes dynamiques.
                        </span>
                    </div>

                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c2">
                            Implémenter le routage dynamique via paramètres d’URL.
                        </span>
                    </div>

                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c3">
                            Construire des requêtes SQL dynamiques.
                        </span>
                    </div>

                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c4">
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
                        La trace n°1 ci-dessus présente <span class="sfe_c1">l'architecture de l'API REST
                            générique</span> que j'ai créée lors de mon stage chez Appup.
                        Cette capture d'écran illustre le parcours d'une requête HTTP envoyée par le client vers le
                        serveur, à travers les différentes étapes indiquées par les numéros.
                        Pour cela, j'ai <span class="sfe_c2">implémenté plusieurs routes dynamiques avec des
                            paramètres dans l'URL</span>. L'objectif est de spécifier le nom de la table sur laquelle la
                        requête doit être exécutée, ainsi que les différents paramètres et données nécessaires à son
                        traitement.
                        <br>
                        Par la suite, la route appelle le contrôleur et la fonction correspondante (numéro 3). Le
                        contrôleur s'appuie ensuite sur un service chargé de mettre en forme les paramètres reçus avant
                        d'appeler la fonction présente dans le fichier associé à la table concernée.
                        <br>
                        Au démarrage du serveur, celui-ci vérifie les tables présentes dans la base de données et crée
                        automatiquement un fichier pour chacune d'elles si celui-ci n'existe pas déjà. Ce fichier
                        contient l'ensemble des attributs de la table ainsi que ceux qui sont requis pour chaque
                        requête.
                        <br>
                        Une fois dans le fichier correspondant à la table ciblée, la logique liée à la base de données
                        est exécutée. Pour cela, j'ai mis en place <span class="sfe_c3">une construction dynamique
                            des requêtes SQL</span> à partir des champs sélectionnés, des paramètres, des filtres, etc.
                        Grâce à cette fonctionnalité, j'ai pu <span class="sfe_c4">limiter les risques liés aux
                            injections SQL</span>.
                        <br>
                        Une fois le traitement effectué, le résultat est renvoyé au client.
                        <br><br>
                        Cette API dynamique a pour objectif de réduire le nombre de fonctions nécessaires au traitement
                        des requêtes. Par exemple, auparavant, je devais créer une fonction pour récupérer un article à
                        partir de son identifiant et une autre pour le récupérer à partir de son nom. Désormais, ces
                        différents cas sont gérés par une seule et même fonction, ce qui permet de limiter la
                        duplication du code et d'éviter l'écriture de nombreuses requêtes spécifiques.
                        
                    </p>

                </div>
            </div>
        </div>
    </section>

    <section v-if="currentPage === 1" class="subpage_wrapper">
        <div class="sf_left">
            <div class="sf_kicker">// SAVOIR-FAIRE 02</div>

            <h2 class="sf_title">Intégration et consommation d'API externes</h2>

            <p class="sf_desc">
                Connexion de l'application à un service tiers afin de déléguer une fonctionnalité complexe : le paiement
                en ligne avec Stripe. L'intégration repose sur la consommation de l'API REST de Stripe, sécurisée par des
                clés d'API, et sur l'écoute de webhooks qui notifient le serveur en temps réel des événements de
                paiement. Ce mécanisme permet de confirmer les commandes de façon asynchrone et fiable, sans dépendre du
                retour de l'utilisateur dans le navigateur.
            </p>

            <div class="sfe_block">
                <div class="sfe_header">
                    <span class="sfe_label">// SAVOIR-FAIRE ÉLÉMENTAIRES</span>
                </div>

                <div class="sfe_items">
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c5">
                            Savoir intégrer un service tiers en consommant son API REST.
                        </span>
                    </div>

                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c6">
                            Mettre en place un tunnel de paiement sécurisé avec Stripe.
                        </span>
                    </div>

                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c7">
                            Traiter les événements de paiement de manière asynchrone.
                        </span>
                    </div>

                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c8">
                            Garantir la fiabilité des transactions grâce aux webhooks.
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
                        <img src="../../public/trace_api_externes_horizontal.png"
                            alt="Tableau de bord des webhooks Stripe : événements de paiement reçus et traités" />

                        <div class="trace_caption">
                            <span class="trace_number">Trace n°2</span>
                            <span class="trace_caption_text">
                                Réception et traitement des webhooks de paiement Stripe
                            </span>
                        </div>
                    </div>

                    <p class="trace_body">
                        La trace n°2 ci-dessus est une capture du tableau de bord des webhooks de Stripe.
                        <span class="sfe_c6">Stripe</span> est une entreprise spécialisée dans le paiement en ligne :
                        plutôt que de gérer moi-même les cartes bancaires, je délègue cette tâche sensible à un expert.
                        Mon application dialogue avec lui à travers son <span class="sfe_c5">API REST</span> — une
                        sorte de « guichet » standardisé qui permet à deux programmes de se parler sur internet, mon
                        application présentant à chaque échange une clé secrète pour prouver son identité (API KEY).
                        <br>
                        Lorsqu'un client règle sa commande, Stripe déclenche tout un enchaînement d'étapes, appelées
                        « événements », que l'on retrouve dans la liste <strong>encadrée en orange</strong> à gauche :
                        <code>payment_intent.succeeded</code> (le paiement a réussi), <code>charge.succeeded</code> (la
                        carte a bien été débitée), <code>invoice.paid</code> (la facture est réglée) et enfin
                        <code>checkout.session.completed</code> (l'achat est terminé). Les voir tous présents prouve que
                        le <span class="sfe_c6">tunnel de paiement Stripe s'est déroulé jusqu'à son terme</span>.
                        <br>
                        Chaque événement est transmis à mon serveur par un <span class="sfe_c8">webhook</span>. Un
                        webhook, c'est une notification automatique que Stripe « pousse » vers mon serveur dès qu'il se
                        passe quelque chose — un peu comme un SMS qui prévient que la pizza est prête, au lieu de devoir
                        rappeler la pizzeria sans arrêt. Le statut <span class="sfe_c8">200 OK</span> affiché devant
                        chaque ligne est le code qui signifie « bien reçu, tout va bien » : il confirme que mon serveur a
                        bien réceptionné et traité chaque notification. À droite, dans l'<strong>encadré rouge</strong>,
                        on voit la réponse que mon application renvoie à Stripe pour chaque événement : un court message
                        de confirmation indiquant <code>"status": "success"</code> et <code>"received": true</code>,
                        c'est-à-dire un accusé de réception prouvant que la notification a bien été prise en compte.
                        <br>
                        Ce mécanisme me permet de <span class="sfe_c7">traiter les paiements de manière
                            asynchrone</span> : la confirmation de la commande ne dépend pas de ce que fait l'utilisateur
                        dans son navigateur, mais d'une notification envoyée directement de serveur à serveur par Stripe.
                        <br><br>
                        C'est ce qui <span class="sfe_c8">garantit la fiabilité des transactions</span> : même si le
                        client ferme sa page juste après avoir payé, l'événement est tout de même reçu et la commande
                        bien confirmée, sans qu'aucun paiement ne soit perdu.
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
        <div class="sf_left">
            <div class="sf_kicker">// SAVOIR-FAIRE 03</div>

            <h2 class="sf_title">Déploiement d'infrastructures matérielles et logicielles</h2>

            <p class="sf_desc">
                Mise en production d'une application d'affichage sur un parc d'appareils hétérogènes (Raspberry Pi,
                bornes, PC Windows). Le déploiement repose sur une configuration unifiée par fichiers JSON, un
                démarrage automatique adapté à chaque système d'exploitation et une administration à distance via SSH.
            </p>

            <div class="sfe_block">
                <div class="sfe_header">
                    <span class="sfe_label">// SAVOIR-FAIRE ÉLÉMENTAIRES</span>
                </div>

                <div class="sfe_items">
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c9">
                            Savoir déployer une application sur plusieurs environnements matériels (Raspberry, borne, PC).
                        </span>
                    </div>

                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c10">
                            Centraliser le paramétrage via des fichiers de configuration JSON.
                        </span>
                    </div>

                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c11">
                            Automatiser le démarrage et la mise à jour à distance via SSH.
                        </span>
                    </div>

                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c12">
                            Assurer la robustesse du système et la reprise après incident.
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
                        <img src=""
                            alt="Capture du déploiement multi-environnements" />

                        <div class="trace_caption">
                            <span class="trace_number">Trace n°3</span>
                            <span class="trace_caption_text">
                                Déploiement de l'application sur un parc d'appareils multi-OS
                            </span>
                        </div>
                    </div>

                    <p class="trace_body">
                        La trace n°3 ci-dessus présente le
                        <span class="sfe_c9">déploiement de l'application d'affichage sur plusieurs types
                            d'appareils</span> : des Raspberry Pi, des bornes interactives et des PC sous Windows.
                        L'enjeu principal était de faire fonctionner un même programme sur des systèmes d'exploitation
                        différents, sans dupliquer le code.
                        <br>
                        Pour cela, j'ai mis en place une
                        <span class="sfe_c10">configuration centralisée au format JSON</span> : chaque appareil lit son
                        propre fichier de configuration au démarrage, ce qui permet d'adapter son comportement (contenu
                        affiché, paramètres réseau, identifiants) sans modifier l'application elle-même.
                        <br>
                        Le lancement de l'application est
                        <span class="sfe_c11">automatisé au démarrage de chaque machine</span> et l'administration se
                        fait à distance via SSH, afin de déployer les mises à jour et de superviser le parc sans
                        intervention physique sur site.
                        <br>
                        Enfin, j'ai veillé à la
                        <span class="sfe_c12">robustesse du système</span> : redémarrage automatique en cas d'erreur
                        et reprise de l'affichage après une coupure, pour garantir un fonctionnement continu.
                        <br><br>
                        Ce travail m'a permis de comprendre les contraintes du déploiement en conditions réelles, où le
                        matériel, le réseau et les systèmes d'exploitation varient d'un site à l'autre.
                    </p>
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
            <div class="sf_kicker">// BILAN & ÉVALUATION</div>
            <h2 class="sf_title">Synthèse & évaluation des <em>savoir-faire</em></h2>
            <p class="sf_desc">
                Pour chaque savoir-faire, une synthèse de ce qui a été réalisé — où chaque
                <span>savoir-faire élémentaire</span> est surligné de sa propre couleur — suivie d'une évaluation
                de mon niveau de maîtrise.
            </p>
        </div>

        <!-- ─────────────── SAVOIR-FAIRE 01 ─────────────── -->
        <div class="bilan_sf">
            <div class="bilan_sf_head">
                <span class="bilan_sf_num">01</span>
                <h3 class="bilan_sf_title">Conception d'une API REST générique et modulaire</h3>
            </div>

            <div class="bilan_blocks">
                <div class="bilan_card">
                    <div class="bilan_block_label">// SYNTHÈSE</div>
                    <p class="bilan_text">
                        Ce premier savoir-faire portait sur le cœur de l'API. J'ai d'abord
                        <span class="sfe_c1">conçu une architecture d'API REST générique basée sur des routes
                            dynamiques</span>, capable de traiter n'importe quelle ressource sans réécrire de code
                        spécifique. Pour cela, j'ai
                        <span class="sfe_c2">implémenté le routage dynamique via des paramètres passés dans
                            l'URL</span>, qui indiquent la table et l'opération visées. Côté base de données, j'ai appris
                        à <span class="sfe_c3">construire des requêtes SQL dynamiques</span> à partir des champs et
                        filtres reçus, et surtout à
                        <span class="sfe_c4">sécuriser leur génération contre les injections SQL</span> grâce à des
                        requêtes paramétrées.
                    </p>
                </div>

                <div class="bilan_card">
                    <div class="bilan_block_label">// ÉVALUATION</div>
                    <p class="bilan_text">
                        C'est le savoir-faire que je maîtrise le mieux : l'architecture générique fonctionne en
                        production et m'a fait gagner un temps considérable. Je suis à l'aise avec le routage dynamique
                        et les requêtes paramétrées. Il me reste à approfondir l'optimisation des requêtes complexes
                        (jointures, performances) sur de gros volumes de données. 
                    </p>
                    <span class="bilan_level bilan_level_high">Niveau : maîtrisé</span>
                </div>
            </div>
        </div>

        <!-- ─────────────── SAVOIR-FAIRE 02 ─────────────── -->
        <div class="bilan_sf">
            <div class="bilan_sf_head">
                <span class="bilan_sf_num">02</span>
                <h3 class="bilan_sf_title">Intégration et consommation d'API externes</h3>
            </div>

            <div class="bilan_blocks">
                <div class="bilan_card">
                    <div class="bilan_block_label">// SYNTHÈSE</div>
                    <p class="bilan_text">
                        Ce savoir-faire concernait l'ouverture de l'application vers l'extérieur. J'ai appris à
                        <span class="sfe_c5">intégrer un service tiers en consommant son API REST</span>, en
                        m'authentifiant par clés d'API. Concrètement, j'ai
                        <span class="sfe_c6">mis en place un tunnel de paiement sécurisé avec Stripe</span>, puis j'ai
                        <span class="sfe_c7">traité les événements de paiement de manière asynchrone</span> : la
                        confirmation de commande ne dépend plus du navigateur du client. Enfin, j'ai
                        <span class="sfe_c8">garanti la fiabilité des transactions grâce aux webhooks</span>, qui
                        notifient mon serveur en temps réel.
                    </p>
                </div>

                <div class="bilan_card">
                    <div class="bilan_block_label">// ÉVALUATION</div>
                    <p class="bilan_text">
                        Je me sens solide sur la consommation d'API et la logique des webhooks, que j'ai vu fonctionner
                        de bout en bout. La sécurité du paiement (vérification de la signature des webhooks, gestion fine
                        des erreurs et des remboursements) mérite d'être approfondie pour un usage réellement
                        professionnel.
                    </p>
                    <span class="bilan_level bilan_level_mid">Niveau : bien engagé</span>
                </div>
            </div>
        </div>

        <!-- ─────────────── SAVOIR-FAIRE 03 ─────────────── -->
        <div class="bilan_sf">
            <div class="bilan_sf_head">
                <span class="bilan_sf_num">03</span>
                <h3 class="bilan_sf_title">Déploiement d'infrastructures matérielles et logicielles</h3>
            </div>

            <div class="bilan_blocks">
                <div class="bilan_card">
                    <div class="bilan_block_label">// SYNTHÈSE</div>
                    <p class="bilan_text">
                        Ce dernier savoir-faire portait sur la mise en production. J'ai été amené à
                        <span class="sfe_c9">déployer une application sur plusieurs environnements matériels</span>
                        (Raspberry Pi, bornes, PC Windows). Pour gérer cette diversité, j'ai
                        <span class="sfe_c10">centralisé le paramétrage via des fichiers de configuration JSON</span>,
                        puis <span class="sfe_c11">automatisé le démarrage et la mise à jour à distance via SSH</span>.
                        J'ai également veillé à
                        <span class="sfe_c12">assurer la robustesse du système et la reprise après incident</span>
                        (redémarrage automatique, reprise de l'affichage après une coupure).
                    </p>
                </div>

                <div class="bilan_card">
                    <div class="bilan_block_label">// ÉVALUATION</div>
                    <p class="bilan_text">
                        C'est le savoir-faire le plus récent pour moi : je sais déployer et configurer le parc, et
                        l'administration à distance via SSH ne me pose plus de difficulté. En revanche, je n'ai pas
                        encore mis en place de véritable chaîne de déploiement automatisée (CI/CD) ni de supervision
                        centralisée du parc, ce qui constitue mon principal axe de progression.
                    </p>
                    <span class="bilan_level bilan_level_mid">Niveau : en cours d'acquisition</span>
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
    { shortTitle: "Déploiement d'infrastructures matérielles et logicielles", tabLabel: 'Déploiement' },
]

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

/* ── 12 couleurs distinctes : une par savoir-faire élémentaire ──
   SF 01 → c1-c4 · SF 02 → c5-c8 · SF 03 → c9-c12
   Les mêmes classes sont réutilisées dans le bilan pour rattacher
   chaque mention à son savoir-faire élémentaire. */
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