<script lang="ts">
    import Slider from './_slider.svelte'
    let current = 0
    let direction = 1
</script>

<div class="grid grid-rows-2 h-withheader lg:grid-cols-2 lg:grid-rows-1" >
    <Slider bind:current={current} bind:direction={direction} images={[
        { src: 'images/7.webp' },
        { src: 'images/4.webp' },
        { src: 'images/6.webp' },
        { src: 'images/5.webp' },
        { src: 'images/1.webp' },
        { src: 'images/2.webp' },
        { src: 'images/3.jpg' }
    ]}/>
    <Slider bind:current={current} invert={true} bind:direction={direction} images={[
        { src: 'images/3.jpg' },
        { src: 'images/2.webp' },
        { src: 'images/1.webp' },
        { src: 'images/5.webp' },
        { src: 'images/6.webp' },
        { src: 'images/4.webp' },
        { src: 'images/7.webp' },
    ]}/>
</div>
