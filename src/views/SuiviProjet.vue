<template>
    <Navbar />

    <section class="hero">
        <div class="hero_left animate_left">
            <div class="hero_eyebrow">
                <span class="eyebrow_dot"></span>
                SUIVI DE PROJET
            </div>
            <h1>Suivi<br><em>de projet</em></h1>
            <p>
                Cette section présente les compétences mobilisées dans le
                <strong>suivi et la conduite de projet</strong> durant mon stage chez
                <strong>Appup</strong>.
                Chaque sous-page documente un <span>savoir-faire élémentaire</span> appuyé sur une
                <span>trace concrète</span>, suivi d'un <span>bilan & analyse</span> global.
            </p>
            <div class="status">
                PLANIFICATION · GESTION DE TÂCHES · VERSIONING GIT · COLLABORATION
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
                        <span class="overview_num">{{ String(i + 4).padStart(2, '0') }}</span>
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
                <span class="tab_num">{{ String(i + 4).padStart(2, '0') }}</span>
                <span class="tab_name">{{ page.tabLabel }}</span>
            </button>
        </div>
        <div class="tabs_progress">
            <div class="tabs_progress_fill" :style="{ width: progressWidth }"></div>
        </div>
    </div>

    <section v-if="currentPage === 0" class="subpage_wrapper">
        <div class="sf_left">
            <div class="sf_kicker">// SAVOIR-FAIRE 04</div>

            <h2 class="sf_title">Organiser & <em>planifier</em> le travail</h2>

            <p class="sf_desc">
                Le sujet de mon stage — concevoir une API réutilisable en Node.js — était trop vaste pour
                être traité d'un bloc. Mon premier savoir-faire de suivi de projet a donc consisté à
                <strong>décomposer le besoin en tâches concrètes</strong>, à les organiser dans le temps
                et à suivre leur avancement au fil des échanges avec mon maître de stage.
            </p>

            <div class="sfe_block">
                <div class="sfe_header">
                    <span class="sfe_label">// SAVOIR-FAIRE ÉLÉMENTAIRES</span>
                </div>

                <div class="sfe_items">
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c1">Décomposer le besoin en tâches et fonctionnalités livrables (CRUD générique, intégration Stripe, AWS S3, Brevo…).</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c2">Prioriser les tâches selon la valeur pour le projet et les dépendances techniques.</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c3">Estimer la charge de chaque tâche et la situer dans les jalons du stage.</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c4">Suivre l'avancement et réajuster la planification face aux imprévus.</span>
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
                        <img src="/trace_suivi_01.png"
                            alt="Tableau de suivi des tâches du projet API" />

                        <div class="trace_caption">
                            <span class="trace_number">Trace n°4</span>
                            <span class="trace_caption_text">
                                Tableau Trello de suivi des tâches du projet API.
                            </span>
                        </div>
                    </div>

                    <p class="trace_body">
                        Cette capture en trace n°4 ci-dessus montre le tableau <strong>Trello</strong> sur lequel j'ai organisé le projet
                        tout au long du stage. Trello est un outil de gestion de tâches en colonnes (méthode
                        <em>kanban</em>) : chaque tâche est une carte que l'on déplace d'une colonne à l'autre au
                        fil de son avancement. J'ai structuré mon tableau (colonnes encadrées en couleur ci-dessus)
                        pour suivre une tâche depuis l'idée jusqu'à sa réalisation, et garder à tout moment une
                        vision d'ensemble du projet.
                    </p>

                    <p class="trace_body">
                        La colonne <span class="doc_chip dc_violet">1 · Bac à sable</span> est ma réserve de tâches,
                        l'équivalent d'un <em>backlog</em>. C'est là que je
                        <span class="sfe_c1">décompose le besoin global en fonctionnalités livrables</span> et
                        autonomes — système d'authentification, système de paiement, gestion des adresses,
                        déclinaisons de produits… Plutôt que d'attaquer un sujet vaste d'un bloc, je le transforme
                        en une liste de tâches concrètes, chacune réalisable et vérifiable indépendamment.
                    </p>

                    <p class="trace_body">
                        Faire passer une tâche du bac à sable vers un sprint matérialise la
                        <span class="sfe_c2">priorisation</span> : je choisis quoi traiter en premier selon la
                        valeur pour le projet et les dépendances techniques (par exemple, l'authentification avant
                        le paiement). Toutes les idées restent visibles dans le bac à sable, mais seules les plus
                        prioritaires entrent dans le sprint en cours.
                    </p>

                    <p class="trace_body">
                        Les colonnes <span class="doc_chip dc_blue">2 · Sprint to do</span>,
                        <span class="doc_chip dc_orange">3 · Sprint en cours</span> et
                        <span class="doc_chip dc_green">4 · Sprint done</span> assurent le
                        <span class="sfe_c4">suivi de l'avancement</span> au quotidien : chaque carte progresse de
                        gauche à droite, depuis les tâches planifiées pour le sprint, vers celles activement en
                        développement, puis vers celles terminées. Ce flux visuel me permettait de savoir d'un coup
                        d'œil où j'en étais, et de rendre compte facilement de mon avancement à mon maître de stage.
                    </p>

                    <p class="trace_body">
                        Les pastilles de points sur les cartes (3, 5, 8, 13) correspondent à une
                        <span class="sfe_c3">estimation de la charge</span> de chaque tâche, selon la méthode du
                        <em>planning poker</em> : plus le nombre est élevé, plus la tâche est jugée complexe. Cette
                        estimation aide à constituer des sprints réalistes et à ne pas surcharger une période.
                    </p>

                    <p class="trace_body">
                        Enfin, la colonne <span class="doc_chip dc_pink">5 · Semaine 1</span> archive le travail
                        accompli lors du premier sprint (inscription avec e-mail de confirmation, réinitialisation
                        du mot de passe, connexion, <code>getMe</code>…). En conservant ainsi l'historique des
                        sprints passés, le tableau garde une <strong>trace concrète du rythme et de la progression
                        réelle</strong> du projet, sprint après sprint.
                    </p>
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
            <div class="sf_kicker">// SAVOIR-FAIRE 05</div>

            <h2 class="sf_title">Gérer les versions & <em>collaborer</em></h2>

            <p class="sf_desc">
                Tout au long du stage, j'ai utilisé <strong>Git</strong> pour versionner le développement de l'API :
                enregistrer chaque étape fonctionnelle, synchroniser mon travail avec le dépôt distant et conserver
                un historique lisible permettant de retrouver n'importe quel état du projet.
            </p>

            <div class="sfe_block">
                <div class="sfe_header">
                    <span class="sfe_label">// SAVOIR-FAIRE ÉLÉMENTAIRES</span>
                </div>

                <div class="sfe_items">
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c5">Versionner le code régulièrement, à chaque étape fonctionnelle aboutie.</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c6">Rédiger des messages de commit décrivant le changement apporté.</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c7">Synchroniser le travail avec le dépôt distant (push / pull sur origin/main).</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c8">Conserver un historique linéaire et lisible pour suivre et retracer l'évolution du projet.</span>
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
                        <img src="/trace_suivi_02.png"
                            alt="Historique Git du projet API" />

                        <div class="trace_caption">
                            <span class="trace_number">Trace n°5</span>
                            <span class="trace_caption_text">
                                Historique Git du projet API, messages normalisés en « Conventional Commits ».
                            </span>
                        </div>
                    </div>

                    <p class="trace_body">
                        Cette capture en trace n°5 présente l'historique Git complet du projet API, du commit
                        d'initialisation (<em>chore: initialisation du projet</em>) jusqu'à l'intégration des
                        abonnements Stripe. Chaque ligne marquée d'une étoile correspond à un commit, c'est-à-dire
                        un point de sauvegarde figé dans le temps.
                    </p>

                    <p class="trace_body">
                        On y retrouve d'abord la <span class="sfe_c5">succession de commits enregistrés à
                        chaque étape fonctionnelle aboutie</span> : initialisation, refactorisations
                        successives, ajout du <em>soft delete</em>, séparation de la logique d'envoi d'email,
                        finalisation du backend puis paiement Stripe. Cette régularité montre que je versionnais
                        le code dès qu'une fonctionnalité était terminée, plutôt que par gros blocs irréguliers.
                    </p>

                    <p class="trace_body">
                        Chaque commit est accompagné d'un <span class="sfe_c6">message décrivant précisément le
                        changement apporté</span>, ce qui rend l'historique lisible sans avoir à ouvrir le code :
                        on comprend l'intention de chaque modification d'un simple coup d'œil. Cette clarté est
                        renforcée par la convention « Conventional Commits » détaillée plus bas.
                    </p>

                    <p class="trace_body">
                        Enfin, le commit de tête porte le repère <code>HEAD -&gt; main, origin/main</code> : il
                        atteste de la <span class="sfe_c7">synchronisation de mon travail local avec le dépôt
                        distant</span> (le code poussé est bien à jour côté serveur), garantissant à la fois une
                        sauvegarde hors de ma machine et une référence partagée. L'ensemble compose un
                        <span class="sfe_c8">historique linéaire et lisible</span> qui retrace fidèlement toute
                        l'évolution du projet et permet, au besoin, de revenir à n'importe quel état antérieur.
                    </p>

                    <p class="trace_body">
                        Chaque message suit la convention <strong>« Conventional Commits »</strong> : un
                        préfixe coloré indique d'un coup d'œil la nature du changement —
                        <span class="cc_badge cc_feat">feat</span> pour une nouvelle fonctionnalité,
                        <span class="cc_badge cc_refactor">refactor</span> pour une réorganisation du code
                        sans modifier son comportement, et
                        <span class="cc_badge cc_chore">chore</span> pour une tâche d'entretien
                        (initialisation, nettoyage, configuration). Cette discipline rend l'historique
                        immédiatement lisible et facilite le suivi du projet.
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
            <div class="sf_kicker">// SAVOIR-FAIRE 06</div>

            <h2 class="sf_title">Documenter & <em>transmettre</em> le projet</h2>

            <p class="sf_desc">
                En parallèle de l'API, j'ai mis en place un <strong>système de borne</strong> : un poste Windows
                affichant un site web en mode kiosque. Pour que l'équipe puisse l'<strong>exploiter et le
                maintenir sans moi</strong> après le stage, j'ai rédigé une documentation complète décrivant son
                fonctionnement et ses procédures.
            </p>

            <div class="sfe_block">
                <div class="sfe_header">
                    <span class="sfe_label">// SAVOIR-FAIRE ÉLÉMENTAIRES</span>
                </div>

                <div class="sfe_items">
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c9">Structurer une documentation claire et navigable (sections, tableaux, procédures numérotées).</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c10">Décrire les procédures d'exploitation et de maintenance pas à pas (mot de passe, mise à jour du lien, modification d'un script).</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c11">Expliquer le fonctionnement technique du système (démarrage automatique, requête vers l'API, blocage clavier).</span>
                    </div>
                    <div class="sfe_item">
                        <span class="sfe_bullet">›</span>
                        <span class="sfe_c12">Garantir la reprise du projet par un tiers (emplacements des fichiers, prérequis, avertissements).</span>
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
                        <img src="/trace_suivi_03.png"
                            alt="Documentation d'exploitation du système de borne" />

                        <div class="trace_caption">
                            <span class="trace_number">Trace n°6</span>
                            <span class="trace_caption_text">
                                Documentation d'exploitation du système de borne (documentation.md).
                            </span>
                        </div>
                    </div>

                    <p class="trace_body">
                        Cette capture montre la documentation que j'ai rédigée pour le système de borne — un poste
                        Windows déployé en conditions réelles qui affiche un site web en mode kiosque. Comme ce
                        dispositif devait rester opérationnel après mon départ, sa documentation faisait partie
                        intégrante du projet. Elle est <span class="sfe_c9">structurée en sections claires</span>,
                        avec des tableaux, des chemins de fichiers et des procédures numérotées étape par étape qui
                        rendent chaque information immédiatement repérable.
                    </p>

                    <p class="trace_body">
                        Pour faciliter la lecture, chaque encadré coloré correspond à un aspect distinct du système :
                        <span class="doc_chip dc_violet">Types de comptes</span> distingue le compte administrateur
                        du compte borne ;
                        <span class="doc_chip dc_pink">Mots de passe</span> réunit les identifiants et la procédure
                        de changement ;
                        <span class="doc_chip dc_green">Fonctionnement côté borne</span> explique le lancement
                        automatique au démarrage ;
                        <span class="doc_chip dc_blue">Récupération du lien</span> détaille la requête vers l'API et
                        sa réponse JSON ;
                        <span class="doc_chip dc_orange">Mise à jour du lien</span> donne la marche à suivre quand
                        l'adresse change ;
                        <span class="doc_chip dc_cyan">Blocage de raccourcis</span> couvre l'édition et la
                        recompilation du script clavier ;
                        et <span class="doc_chip dc_yellow">Remarques</span> regroupe les points de vigilance.
                        Ce découpage en encadrés permet de retrouver immédiatement la procédure recherchée.
                    </p>

                    <p class="trace_body">
                        Au-delà de la description, elle fournit de véritables
                        <span class="sfe_c10">procédures d'exploitation et de maintenance pas à pas</span> que
                        n'importe qui peut suivre sans connaître le projet : modifier le mot de passe du compte
                        Borne (déconnexion, <code>Autologon.exe</code>, validation), mettre à jour le lien affiché,
                        ou éditer puis recompiler le script de blocage clavier selon une séquence explicite
                        — <em>édition → recompilation → redémarrage</em>. Chaque étape précise le raccourci ou le
                        clic exact à effectuer, pour éviter toute ambiguïté.
                    </p>

                    <p class="trace_body">
                        Elle <span class="sfe_c11">explique aussi le fonctionnement technique</span> du dispositif,
                        afin que le lecteur comprenne <em>pourquoi</em> il agit et pas seulement <em>comment</em> :
                        au démarrage, le script <code>start.bat</code> s'exécute automatiquement et interroge l'URL
                        <code>appup.fr/kiosk-link</code>, qui renvoie en JSON l'adresse du site à afficher ; le
                        script charge alors ce site dans la borne. En parallèle, le script AutoHotkey
                        <code>bloque.ahk</code> désactive certains raccourcis clavier pour sécuriser le mode kiosque.
                    </p>

                    <p class="trace_body">
                        Enfin, en précisant les <span class="sfe_c12">emplacements exacts des fichiers, les
                        prérequis et les points de vigilance</span> (redémarrage obligatoire pour appliquer un
                        nouveau lien, réponse de l'URL toujours valide et bien formatée en JSON), cette
                        documentation rend le système <strong>autonome de ma présence</strong> : une autre personne
                        d'Appup peut reprendre, dépanner et faire évoluer la borne sans mon intervention. C'est
                        précisément l'objectif d'une bonne documentation de suivi de projet.
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

        <div class="bilan_sf">
            <div class="bilan_sf_head">
                <span class="bilan_sf_num">04</span>
                <h3 class="bilan_sf_title">Organiser & planifier le travail</h3>
            </div>

            <div class="bilan_blocks">
                <div class="bilan_card">
                    <div class="bilan_block_label">// SYNTHÈSE</div>
                    <p class="bilan_text">
                        Sur ce projet, j'ai appris à transformer un sujet vaste en un plan d'action concret :
                        <span class="sfe_c1">décomposer le besoin</span> en tâches livrables, les
                        <span class="sfe_c2">prioriser</span> selon leur valeur et leurs dépendances,
                        <span class="sfe_c3">estimer leur charge</span> pour les répartir dans le temps, et
                        <span class="sfe_c4">suivre l'avancement</span> en ajustant la planification au fil des imprévus.
                    </p>
                </div>

                <div class="bilan_card">
                    <div class="bilan_block_label">// ÉVALUATION</div>
                    <p class="bilan_text">
                        Je me sens à l'aise pour découper et suivre un projet au quotidien. Mon principal axe de
                        progression reste l'estimation de charge, que j'affine avec l'expérience pour gagner en précision.
                    </p>
                    <span class="bilan_level bilan_level_high">Niveau : maîtrisé</span>
                </div>
            </div>
        </div>

        <div class="bilan_sf">
            <div class="bilan_sf_head">
                <span class="bilan_sf_num">05</span>
                <h3 class="bilan_sf_title">Gérer les versions & collaborer</h3>
            </div>

            <div class="bilan_blocks">
                <div class="bilan_card">
                    <div class="bilan_block_label">// SYNTHÈSE</div>
                    <p class="bilan_text">
                        Git est devenu un réflexe quotidien : <span class="sfe_c5">versionner le code à chaque étape
                        fonctionnelle</span>, accompagner chaque commit d'un <span class="sfe_c6">message décrivant
                        le changement</span>, <span class="sfe_c7">synchroniser mon travail avec le dépôt distant</span>
                        et conserver un <span class="sfe_c8">historique linéaire et lisible</span> retraçant toute
                        l'évolution du projet.
                    </p>
                </div>

                <div class="bilan_card">
                    <div class="bilan_block_label">// ÉVALUATION</div>
                    <p class="bilan_text">
                        Je maîtrise le flux de travail Git au quotidien (add, commit, push, retour en arrière). Mon
                        axe de progression est le travail collaboratif plus avancé : branches par fonctionnalité,
                        pull requests et revue de code systématique.
                    </p>
                    <span class="bilan_level bilan_level_high">Niveau : maîtrisé</span>
                </div>
            </div>
        </div>

        <div class="bilan_sf">
            <div class="bilan_sf_head">
                <span class="bilan_sf_num">06</span>
                <h3 class="bilan_sf_title">Documenter & transmettre le projet</h3>
            </div>

            <div class="bilan_blocks">
                <div class="bilan_card">
                    <div class="bilan_block_label">// SYNTHÈSE</div>
                    <p class="bilan_text">
                        Pour le système de borne, j'ai produit une documentation
                        <span class="sfe_c9">claire et structurée</span> réunissant des
                        <span class="sfe_c10">procédures d'exploitation et de maintenance pas à pas</span>, une
                        <span class="sfe_c11">explication du fonctionnement technique</span> (démarrage automatique,
                        requête API, blocage clavier) et tous les éléments nécessaires à la
                        <span class="sfe_c12">reprise du projet par un tiers</span>.
                    </p>
                </div>

                <div class="bilan_card">
                    <div class="bilan_block_label">// ÉVALUATION</div>
                    <p class="bilan_text">
                        Je sais rédiger une documentation d'exploitation exploitable par quelqu'un d'autre que moi.
                        Je souhaite progresser sur la documentation purement technique du code (doc des routes
                        d'API, génération automatique).
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const subpages = [
    { shortTitle: 'Organiser & planifier le travail', tabLabel: 'Organisation' },
    { shortTitle: 'Gérer les versions & collaborer', tabLabel: 'Versioning & collaboration' },
    { shortTitle: 'Documenter & transmettre le projet', tabLabel: 'Documentation' },
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
</style>
