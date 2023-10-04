
<script lang="ts">

import { tweened } from 'svelte/motion';
import {slide} from 'svelte/transition'

let isOpen = false

const translate = tweened(0,
{
    duration:200,
})

const rotate = tweened(0,
{ 
    duration:300,
}
    )

let opacity = 1

const open = async () =>{
    isOpen = true
    await translate.set(25,{
        
    })
    opacity = 0
    await rotate.set(45,{delay:80})
}

const close = async () => {
    isOpen = false
    
    await rotate.set(0,{

    })
    opacity =1
    await translate.set(0, {delay:80,
    })
}

const handleClick = () => {
    if(isOpen)close()
    else open()
}
</script>

<button
on:click={handleClick}
class="h-8 stroke-gray-700 z-50"
class:open={isOpen}
>
    <svg viewBox="0 0 100 100" class="h-full stroke-[2]">
        <path d="M5 25 H 90" stroke-linecap="round" class="origin-center top" style="transform:rotate({$rotate}deg) translateY({$translate}%)"></path>
        <path d="M5 50 H 90" stroke-linecap="round" class="origin-center" style="opacity: {opacity};"></path>
        <path d="M5 75 H 90" stroke-linecap="round" class="origin-center" style="transform:rotate({-$rotate}deg) translateY({-$translate}%)"></path>
    </svg>
</button>
{#if isOpen}
<nav transition:slide={{axis:'x'}} class="fixed right-0 bottom-0 top-header w-[23.6vw] z-10 bg-cream text-night py-8 px-16">
    <ul class="space-y-8 mt-16">
        <li><a href="" class="font-bold text-xl">Works</a></li>
        <li><a href="" class="font-bold text-xl">About</a></li>
        <li><a href="" class="font-bold text-xl">Contact</a></li>
    </ul>
</nav>
{/if}

<style>
    button{
        transition: transform .2s;
    }
    button:hover,button:focus{
        transform: scale(1.15, 1);
    }
    button.open:hover,button.open:focus{
        transform: scale(1.1);
    }
</style>