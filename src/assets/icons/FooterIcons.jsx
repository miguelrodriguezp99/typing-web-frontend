export const Palette = ({ props }) => {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props}`}
    >
      <rect fill="none" height="256" width="256" />
      <path
        d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
        fill="none"
        stroke="var(--color-iconstext)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="76" r="12" />
      <circle cx="83" cy="102" r="12" />
      <circle cx="83" cy="154" r="12" />
      <circle cx="173" cy="102" r="12" />
    </svg>
  );
};

export const Mail = ({ props }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props}`}
    >
      <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
    </svg>
  );
};

export const Support = ({ props }) => {
  return (
    <svg
      enable-background="new 0 0 48 48"
      version="1.1"
      viewBox="0 0 48 48"
      className={`${props}`}
    >
      <path
        clip-rule="evenodd"
        d="M46,44.438H2c-0.553,0-1-0.447-1-1s0.447-1,1-1h44c0.553,0,1,0.447,1,1  S46.553,44.438,46,44.438z M16,34.438c0.553,0,1,0.447,1,1s-0.447,1-1,1H8c-0.553,0-1-0.447-1-1s0.447-1,1-1h1v-13H8  c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h8c0.553,0,1,0.448,1,1c0,0.553-0.447,1-1,1h-1v13H16z M13,21.438h-2v13h2V21.438z   M28,34.438c0.553,0,1,0.447,1,1s-0.447,1-1,1h-8c-0.553,0-1-0.447-1-1s0.447-1,1-1h1v-13h-1c-0.553,0-1-0.447-1-1  c0-0.552,0.447-1,1-1h8c0.553,0,1,0.448,1,1c0,0.553-0.447,1-1,1h-1v13H28z M25,21.438h-2v13h2V21.438z M44,39.438  c0,0.553-0.447,1-1,1H5c-0.553,0-1-0.447-1-1s0.447-1,1-1h38C43.553,38.438,44,38.885,44,39.438z M40,34.438c0.553,0,1,0.447,1,1  s-0.447,1-1,1h-8c-0.553,0-1-0.447-1-1s0.447-1,1-1h1v-13h-1c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h8c0.553,0,1,0.448,1,1  c0,0.553-0.447,1-1,1h-1v13H40z M37,21.438h-2v13h2V21.438z M3,15.438L24,4l21,11.438v2H3V15.438z M40.541,15.438L24,6.886  L7.396,15.438H40.541z"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export const Code = ({ props }) => {
  return (
    <svg
      viewBox="0 0 640 512"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props}`}
    >
      <path d="M416 31.94C416 21.75 408.1 0 384.1 0c-13.98 0-26.87 9.072-30.89 23.18l-128 448c-.8404 2.935-1.241 5.892-1.241 8.801C223.1 490.3 232 512 256 512c13.92 0 26.73-9.157 30.75-23.22l128-448C415.6 37.81 416 34.85 416 31.94zM176 143.1c0-18.28-14.95-32-32-32c-8.188 0-16.38 3.125-22.62 9.376l-112 112C3.125 239.6 0 247.8 0 255.1S3.125 272.4 9.375 278.6l112 112C127.6 396.9 135.8 399.1 144 399.1c17.05 0 32-13.73 32-32c0-8.188-3.125-16.38-9.375-22.63L77.25 255.1l89.38-89.38C172.9 160.3 176 152.2 176 143.1zM640 255.1c0-8.188-3.125-16.38-9.375-22.63l-112-112C512.4 115.1 504.2 111.1 496 111.1c-17.05 0-32 13.73-32 32c0 8.188 3.125 16.38 9.375 22.63l89.38 89.38l-89.38 89.38C467.1 351.6 464 359.8 464 367.1c0 18.28 14.95 32 32 32c8.188 0 16.38-3.125 22.62-9.376l112-112C636.9 272.4 640 264.2 640 255.1z" />
    </svg>
  );
};

export const Discord = ({ props }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props}`}
    >
      <path d="M464,66.52A50,50,0,0,0,414.12,17L97.64,16A49.65,49.65,0,0,0,48,65.52V392c0,27.3,22.28,48,49.64,48H368l-13-44L464,496ZM324.65,329.81s-8.72-10.39-16-19.32C340.39,301.55,352.5,282,352.5,282a139,139,0,0,1-27.85,14.25,173.31,173.31,0,0,1-35.11,10.39,170.05,170.05,0,0,1-62.72-.24A184.45,184.45,0,0,1,191.23,296a141.46,141.46,0,0,1-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62,19.09,42.38,28.26c-7.27,9.18-16.23,19.81-16.23,19.81-53.51-1.69-73.85-36.47-73.85-36.47,0-77.06,34.87-139.62,34.87-139.62,34.87-25.85,67.8-25.12,67.8-25.12l2.42,2.9c-43.59,12.32-63.44,31.4-63.44,31.4s5.32-2.9,14.28-6.77c25.91-11.35,46.5-14.25,55-15.21a24,24,0,0,1,4.12-.49,205.62,205.62,0,0,1,48.91-.48,201.62,201.62,0,0,1,72.89,22.95S333.61,145,292.44,132.7l3.39-3.86S329,128.11,363.64,154c0,0,34.87,62.56,34.87,139.62C398.51,293.34,378.16,328.12,324.65,329.81Z" />
      <path d="M212.05,218c-13.8,0-24.7,11.84-24.7,26.57s11.14,26.57,24.7,26.57c13.8,0,24.7-11.83,24.7-26.57C237,229.81,225.85,218,212.05,218Z" />
      <path d="M300.43,218c-13.8,0-24.7,11.84-24.7,26.57s11.14,26.57,24.7,26.57c13.81,0,24.7-11.83,24.7-26.57S314,218,300.43,218Z" />
    </svg>
  );
};

export const X = ({ props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1227"
      className={`${props}`}
    >
      <g clip-path="url(#clip0_1_2)">
        <path
          d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
          fill="var(--color-iconstext)"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="1200" height="1227" fill="var(--color-iconstext)" />
        </clipPath>
      </defs>
    </svg>
  );
};
