import { createStore } from 'solid-js/store';
import styles from './index.module.scss';
import preloadTiles, { Tile } from './index.data';
import { For, onMount } from 'solid-js';
import { gsap } from 'gsap';

import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathHelper } from 'gsap/MotionPathHelper';

// Get preloaded data
const preloadedData = preloadTiles({
  params: {},
  location: {
    pathname: '/',
    search: '',
    hash: '',
    query: {},
    state: {},
    key: '',
  },
  intent: 'initial',
});

export default function Home() {
  const [tiles] = createStore<Tile[][]>(preloadedData.tiles);
  const [animatingTiles, setAnimatingTiles] = createStore<string[]>([]);

  const handleTileClick = (event: MouseEvent) => {
    const tile = event.currentTarget as HTMLElement;
    if (animatingTiles.includes(tile.id) || tile.classList.contains('no-fall'))
      return;
    console.log(animatingTiles);

    setAnimatingTiles(animatingTiles.length, tile.id);
    tile.style.zIndex = '1000';
    const content = tile.firstElementChild as HTMLElement;

    const tl = gsap.timeline();
    for (let i = 0; i < 8; i++) {
      const duration = 0.1 - i * 0.01;
      tl.to(content, {
        x: -15,
        y: -10,
        duration: duration,
        ease: 'power2.out',
      }).to(content, { x: 15, y: 10, duration: duration, ease: 'power2.out' });
    }
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = -100 - Math.random() * 100;

    tl.to(content, {
      x: randomX,
      y: randomY,
      rotation: Math.random() * 720 - 360,
      duration: 0.5,
      ease: 'power2.out',
    })
      .to(content, {
        x: randomX * 2,
        y: window.innerHeight + 100,
        rotation: Math.random() * 720 - 360,
        duration: 1,
        ease: 'power2.in',
      })
      .to(content, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 0,
        duration: 0,
      })
      .to(content, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          setAnimatingTiles(animatingTiles.filter((t) => t !== tile.id));
          tile.style.zIndex = '';
        },
      });
  };

  onMount(() => {
    gsap.registerPlugin(
      MotionPathPlugin,
      ScrollTrigger,
      ScrollSmoother,
      ScrollToPlugin,
      DrawSVGPlugin,
      MotionPathHelper
    );

    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    //window.scrollTo(0, 0);
  });

  return (
    <main id="smooth-wrapper">
      <div class={styles.header} id="smooth-content">
        <div class={styles.tileGrid}>
          <For each={tiles}>
            {(tileRow) => (
              <For each={tileRow}>
                {(tile) => (
                  <div
                    class={`${styles.tile} ${tile.row}-${tile.col} ${
                      (tile.content as HTMLElement).firstElementChild
                        ?.tagName === 'A'
                        ? 'no-fall'
                        : ''
                    }`}
                    onClick={handleTileClick}
                    id={`tile-${tile.row}-${tile.col}`}
                  >
                    {tile.content}
                  </div>
                )}
              </For>
            )}
          </For>
        </div>
      </div>
    </main>
  );
}
