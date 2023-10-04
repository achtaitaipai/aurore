<script lang="ts">
    import Slider from './_slider.svelte'
    let current = 0
    let direction = 1
</script>

<div class="grid grid-rows-2 h-withheader lg:grid-cols-2 lg:grid-rows-1 " >
    <Slider bind:current={current} bind:direction={direction} images={[
        { src: 'images/A5-Margiela1.png' },
        { src: 'images/A5-Margiela3.png' },
        { src: 'images/A5-Margiela4a.png' },
    ]}/>
    <Slider bind:current={current} invert={true} bind:direction={direction} images={[
        { src: 'images/A5-Margiela2a.png' },
        { src: 'images/A5-Margiela3.png' },
        { src: 'images/A5-Margiela4b.png' },
    ]}/>
</div>
