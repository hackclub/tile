import { JSX } from 'solid-js';

export interface Tile {
  row: number;
  col: number;
  content: JSX.Element;
}

const arrow = () => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.64633 1.78238L14.7176 7.8536L0.161053 7.8536L0.161051 9.85329L14.7176 9.85329L8.64633 15.9245L10.0605 17.3387L18.5458 8.85345L10.0605 0.368164L8.64633 1.78238Z"
        fill="black"
      />
    </svg>
  );
};

// Predefined content for each tile
const predefinedContent = [
  [],
  ['', '', '', <h1>T</h1>, <h1>I</h1>, <h1>L</h1>, <h1>E</h1>, '', '', ''],
  [],
  [
    '',
    '',
    '',
    <h2>
      make a<br /> tile
    </h2>,
    <h2>
      get it
      <br /> printed
    </h2>,
    <h2>
      print
      <br /> others
    </h2>,
    <h2>
      snap
      <br /> together
    </h2>,
    '',
    '',
    '',
  ],
  [],
  [],
  ['', '', '', '', <h2>how it</h2>, <h2>works</h2>, '', '', '', ''],
  [
    '',
    '',
    '',
    <h2>1.</h2>,
    <h2>make a tile</h2>,
    arrow(),
    <h3>CAD some trinket on a standard 10x10cm tile</h3>,
    '',
    '',
  ],
  [
    '',
    '',
    '',
    <h2>2.</h2>,
    <h2>get it printed</h2>,
    arrow(),
    <h3>we'll send you your print + parts to assemble</h3>,
    '',
    '',
  ],
  [
    '',
    '',
    '',
    <h2>3.</h2>,
    <h2>print others</h2>,
    arrow(),
    <h3>if you spend more time, you can print others' tiles</h3>,
    '',
    '',
  ],
  [
    '',
    '',
    '',
    <h2>4.</h2>,
    <h2>snap together</h2>,
    arrow(),
    <h3>assemble a grid of your tiles!</h3>,
    '',
    '',
  ],
  [],
  ['', '', '', '', <h2>specs</h2>, <h2>& faq</h2>, '', '', '', ''],
  [
    '',
    '',
    '',
    '',
    <h3>your tile needs to have moving parts or be functional</h3>,
    <h3>(it cannot be a static decoration)</h3>,
    '',
    '',
    '',
    '',
  ],
  [
    '',
    '',
    '',
    '',
    <h3>your tile must fit within the 10x10 cm base</h3>,
    <h3>(you may print in multiple parts)</h3>,
    '',
    '',
    '',
    '',
  ],
  [
    '',
    '',
    '',
    '',
    <h3>you may only use approved parts</h3>,
    <h3>(parts list below)</h3>,
    '',
    '',
    '',
    '',
  ],
  [
    '',
    '',
    '',
    '',
    <h3>make sure you have hackatime installed</h3>,
    <h3>(ask in slack for hackatime extensions)</h3>,
    '',
    '',
    '',
    '',
  ],
  [
    '',
    '',
    '',
    '',
    <h3>you must spend at least 3 hours</h3>,
    <h3>(you get one extra tile every 4 hours beyond that)</h3>,
    '',
    '',
    '',
    '',
  ],
  [
    '',
    '',
    '',
    '',
    <h3>you may make up to 3 tiles</h3>,
    <h3>(make sure they're unique & show progress)</h3>,
    '',
    '',
    '',
    '',
  ],
  [
    '',
    '',
    '',
    '',
    <h3>the deadline is August 18th</h3>,
    <h3>(get building now!)</h3>,
    '',
    '',
    '',
    '',
  ],

  [
    '',
    '',
    '',
    '',
    <h3>have another question?</h3>,
    <a
      href="https://hackclub.slack.com/archives/C097E6ZAF99"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3>ask in slack (click)</h3>
    </a>,
    '',
    '',
    '',
    '',
  ],
  [],
  ['', '', '', '', <h2>the</h2>, <h2>parts</h2>, '', '', '', ''],
  ['', '', '', '', <h2>base</h2>, <h3>(click to download)</h3>, '', '', '', ''],
  [
    '',
    '',
    '',
    <>
      <h2>normal base</h2>
      <h3>(recommended)</h3>
    </>,
    <a href="/tile-base.stl" download="tile-base.stl">
      <img src="/tile.png" />
    </a>,
    <a href="/tile-base-hollow.stl" download="tile-base-hollow.stl">
      <img src="/tile-hollow.png" />
    </a>,
    <>
      <h2>hollow base</h2>
      <h3>(for more customization)</h3>
    </>,
    '',
    '',
    '',
  ],
  [
    '',
    '',
    '',
    '',
    <h2>little bits</h2>,
    <h3>(max 5 of each)</h3>,
    '',
    '',
    '',
    '',
  ],

  [
    '',
    '',
    '',
    <h3>10 x 2mm magnet</h3>,
    <img src="/magnet.png" />,
    <img src="/spring.png" />,
    <h3>5 x 25mm spring</h3>,
    '',
    '',
    '',
  ],
  [],
  ['', '', '', '', <h2>examples</h2>, <h2>& gallery</h2>, '', '', '', ''],
  [
    '',
    '',
    '',
    '',
    <img src="/phone-holder.png" />,
    <h3>phone holder by @Olive</h3>,
    '',
    '',
    '',
  ],
  [
    '',
    '',
    '',
    '',
    <img src="/example-2.png" />,
    <h3>example 2 by @Patricio</h3>,
    '',
    '',
    '',
  ],
  [
    '',
    '',
    '',
    '',
    <h3>gallery coming soon</h3>,
    <h3>(waiting for submissions)</h3>,
    '',
    '',
    '',
    '',
  ],
  [],
  ['', '', '', '', <a href="https://submit.hackclub.com/tile"><h2>submit</h2></a>, <a href="https://submit.hackclub.com/tile"><h2>now!</h2></a>, '', '', '', ''],
  [],
  [],
  [],
  [],
  [],
  [],
];

// Preload function that generates 10x5 grid of tiles
// This function is automatically called by SolidStart before the page loads
// when using file-based routing with the .data.ts naming convention
export default function preloadTiles({
  params,
  location,
  intent,
}: {
  params: any;
  location: any;
  intent: 'initial' | 'navigate' | 'native' | 'preload';
}) {
  const tiles: Tile[][] = [];

  // Generate 10x5 grid of tiles with predefined content
  for (let row = 0; row < 35; row++) {
    const tileRow: Tile[] = [];
    for (let col = 0; col < 10; col++) {
      const contentIndex = (row * 10 + col) % predefinedContent.length;
      tileRow.push({
        row,
        col,
        content: <div>{predefinedContent[row][col] || ''}</div>,
      });
    }
    tiles.push(tileRow);
  }

  // Return the preloaded tiles data
  return {
    tiles,
    totalTiles: tiles.length,
    gridSize: { rows: 5, cols: 10 },
  };
}
