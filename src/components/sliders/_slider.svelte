<script lang="ts">
    import {sineInOut} from "svelte/easing"
	import { fade } from "svelte/transition"
    export let invert = false
    export let images: {
		src: string
		alt?: string
	}[]
    export let direction = 1
    export let current : number

    let imageIndex = current
    $: {
        imageIndex= ((current % images.length) + images.length) % images.length
    }

    let currentDirection = direction
    $:currentDirection = invert ? -direction : direction

    let container:HTMLElement

    function handleClick(e:MouseEvent){
        const half = container.offsetLeft + container.getBoundingClientRect().width / 2
        if(e.clientX > half){
            current ++
            direction = 1
        }
        else {
            current--
            direction = -1
        }
    }


    function slide(_:HTMLElement, { duration,direction }:{duration:number,direction:number}) {
		return {
			duration,
			css: (t:number) => {
                const ease = sineInOut(t)
                const fromLeft = `clip-path: polygon(0% 0%, ${ease * 100}% 0%, ${ease * 100}% 100%, 0% 100%)`
                const fromTop = `clip-path: polygon(0% 0%, 100% 0%, 100% ${ease * 100}%, 0% ${ease * 100}%)`
                const fromRight = `clip-path: polygon(${(1 - ease) * 100}% 0%, 100% 0%, 100% 100%, ${(1 - ease) * 100}% 100%)`
                const fromBottom = `clip-path: polygon(0% ${(1 - ease) * 100}%, 100% ${(1 - ease) * 100}%, 100% 100%, 0% 100%)`

				return direction >= 1 ? fromLeft :  fromRight
			}
		};
	}
</script>

<div class="w-full h-full relative" bind:this={container} on:click={handleClick}>
        {#key current}
        <img in:slide={{duration:700, direction: direction}} out:slide={{duration:700, direction:-direction}}  class="absolute w-full h-full object-cover" {...images[imageIndex]}>
        {/key}
</div>
