export const Restart = ({ props }) => {
  return (
    <svg
      id="Layer_1"
      version="1.1"
      viewBox="0 0 128 128"
      className={`${props}`}
    >
      <g>
        <path d="M96.1,103.6c-10.4,8.4-23.5,12.4-36.8,11.1c-10.5-1-20.3-5.1-28.2-11.8H44v-8H18v26h8v-11.9c9.1,7.7,20.4,12.5,32.6,13.6   c1.9,0.2,3.7,0.3,5.5,0.3c13.5,0,26.5-4.6,37-13.2c19.1-15.4,26.6-40.5,19.1-63.9l-7.6,2.4C119,68.6,112.6,90.3,96.1,103.6z" />
        <path d="M103,19.7c-21.2-18.7-53.5-20-76.1-1.6C7.9,33.5,0.4,58.4,7.7,81.7l7.6-2.4C9,59.2,15.5,37.6,31.9,24.4   C51.6,8.4,79.7,9.6,98,26H85v8h26V8h-8V19.7z" />
      </g>
    </svg>
  );
};

export const Danger = ({ props }) => {
  return (
    <svg viewBox="0 0 38 38" className={`${props}`}>
      <path d="M36.711,33.367,28.416,19l-8.3-14.367a1.295,1.295,0,0,0-2.242,0L9.584,19,1.289,33.367A1.3,1.3,0,0,0,2.41,35.309H35.59A1.3,1.3,0,0,0,36.711,33.367Z" />
      <circle cx="19" cy="29.048" fill="var(--color-primary)" r="1.523" />
      <path
        d="M18.975,25.257h0a.969.969,0,0,1-.969-.929l-.345-7.207A1.34,1.34,0,0,1,19,15.725h0a1.341,1.341,0,0,1,1.339,1.4l-.4,7.2A.969.969,0,0,1,18.975,25.257Z"
        fill="var(--color-primary)"
      />
    </svg>
  );
};

export const Next = ({ props }) => {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props}`}
    >
      <title />
      <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
    </svg>
  );
};

export const History = ({ props }) => {
  return (
    <svg viewBox="0 0 15 15" className={`${props}`}>
      <path
        clip-rule="evenodd"
        d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
        fill="var(--color-iconstext)"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export const Replay = ({ props }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props}`}
    >
      <title />
      <g data-name="Layer 2" id="Layer_2">
        <path d="M29.46,5.11a1,1,0,0,0-1,.08L18,12.63V6a1,1,0,0,0-1.58-.81l-14,10a1,1,0,0,0,0,1.63l14,10A1,1,0,0,0,18,26V19.37l10.42,7.44A1,1,0,0,0,30,26V6A1,1,0,0,0,29.46,5.11Z" />
      </g>
    </svg>
  );
};

export const Screenshot = ({ props }) => {
  return (
    <svg className={`${props}`} version="1.1" viewBox="0 0 512 512">
      <g>
        <path d="M368,224c26.5,0,48-21.5,48-48c0-26.5-21.5-48-48-48c-26.5,0-48,21.5-48,48C320,202.5,341.5,224,368,224z" />
        <path d="M452,64H60c-15.6,0-28,12.7-28,28.3v327.4c0,15.6,12.4,28.3,28,28.3h392c15.6,0,28-12.7,28-28.3V92.3   C480,76.7,467.6,64,452,64z M348.9,261.7c-3-3.5-7.6-6.2-12.8-6.2c-5.1,0-8.7,2.4-12.8,5.7l-18.7,15.8c-3.9,2.8-7,4.7-11.5,4.7   c-4.3,0-8.2-1.6-11-4.1c-1-0.9-2.8-2.6-4.3-4.1L224,215.3c-4-4.6-10-7.5-16.7-7.5c-6.7,0-12.9,3.3-16.8,7.8L64,368.2V107.7   c1-6.8,6.3-11.7,13.1-11.7h357.7c6.9,0,12.5,5.1,12.9,12l0.3,260.4L348.9,261.7z" />
      </g>
    </svg>
  );
};

export const Ad = ({ props }) => {
  return (
    <svg
      viewBox="0 0 576 512"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props}`}
    >
      <path d="M416 280c0 13.23-10.77 24-24 24c-13.23 0-24-10.77-24-24S378.8 256 392 256C405.2 256 416 266.8 416 280zM186.8 280H229.2L208 237.7L186.8 280zM576 96v320c0 35.35-28.65 64-64 64H64c-35.35 0-64-28.65-64-64v-320c0-35.35 28.65-64 64-64h448C547.3 32 576 60.65 576 96zM301.5 317.3l-72-144c-8.125-16.25-34.81-16.25-42.94 0l-72 144c-5.938 11.86-1.125 26.27 10.75 32.2c11.88 5.969 26.28 1.125 32.19-10.73L166.8 320H249.2l9.367 18.73C262.8 347.1 271.2 352 280 352c3.594 0 7.25-.8125 10.69-2.531C302.6 343.5 307.4 329.1 301.5 317.3zM464 184c0-13.25-10.75-23.1-24-23.1S416 170.8 416 184v28.41C408.5 209.7 400.5 208 392 208C352.2 208 320 240.2 320 280S352.2 352 392 352c11.11 0 21.51-2.727 30.9-7.221c4.355 4.439 10.39 7.221 17.1 7.221c13.25 0 24-10.75 24-24V184z" />
    </svg>
  );
};

export const Cursor = ({ props }) => {
  return (
    <svg version="1.0" viewBox="0 0 24 24" className={`${props}`}>
      <path d="M7,2l12,11.2l-5.8,0.5l3.3,7.3l-2.2,1l-3.2-7.4L7,18.5V2" />
    </svg>
  );
};
