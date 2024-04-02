console.log(`%c  
 .d8888b.  8888888888 8888888b.  888     888 8888888888 8888888b.        Y88b   d88P        d888    .d8888b.   d888   
d88P  Y88b 888        888   Y88b 888     888 888        888   Y88b        Y88b d88P        d8888   d88P  Y88b d8888   
Y88b.      888        888    888 888     888 888        888    888         Y88o88P           888   888    888   888   
 "Y888b.   8888888    888   d88P Y88b   d88P 8888888    888   d88P          Y888P            888   888    888   888   
    "Y88b. 888        8888888P"   Y88b d88P  888        8888888P"           d888b            888   888    888   888   
      "888 888        888 T88b     Y88o88P   888        888 T88b           d88888b           888   888    888   888   
Y88b  d88P 888        888  T88b     Y888P    888        888  T88b         d88P Y88b          888   Y88b  d88P   888   
 "Y8888P"  8888888888 888   T88b     Y8P     8888888888 888   T88b       d88P   Y88b       8888888  "Y8888P"  8888888                                                                           
                                                            `, 'font-family:monospace; color: #0C63E7;');
                                                            
console.log('Our community excels in programming, development, and research, learning with new technology.');


// Global code
import '../styles/app.scss';
import flamethrower from 'flamethrower-router';
import { scrollSave } from './util/scroll';
import './util/key-bindings';

// saves scroll position on navbar
scrollSave();

// Router
export const router = flamethrower({ prefetch: 'hover', log: false });

// UI
export * from './components/ui/route-loader.svelte';
export * from './components/ui/img-reveal.svelte';
export * from './components/ui/scroll-show.svelte';
export * from './components/ui/scroll-up.svelte';

// Shared
export * from './components/ui/loading-spinner.svelte';