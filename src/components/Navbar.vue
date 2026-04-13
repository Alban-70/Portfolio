<template>
    <div class="container_nav">
        <div class="content_nav">
            <p class="pointer">Accueil</p>
            <p class="pointer">Projets</p>
            <p class="pointer">Compétences</p>
            <hr>
            <p class="pointer">Contact</p>  
        </div>
    </div>
</template>


<script setup>

</script>


<style scoped>
.container_nav {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.content_nav {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 10px 50px;

    font-size: 1.2em;
    color: var(--secondary-color);

    border-radius: 50px;
    border: 2px solid var(--primary-background-alpha);

    background-color: var(--primary-background-alpha);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.content_nav p:hover {
    color: var(--tertiary-color);
}

.content_nav::before {
    content: '';
    position: absolute;
    width: 200vw;
    aspect-ratio: 1;
    top: 50%;
    left: 50%;
    background: conic-gradient(
        from 0deg,
        transparent 0deg,
        var(--secondary-color) 10deg,
        transparent 30deg
    );
    animation: rotate 6s linear infinite;
    z-index: 0;
}

.content_nav::after {
    content: '';
    position: absolute;
    inset: 2px;
    background: var(--primary-background);
    border-radius: 50px;
    z-index: 1;
}

.content_nav * {
    position: relative;
    z-index: 2;
}

@keyframes rotate {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>