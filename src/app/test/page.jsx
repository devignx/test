// export default function Test() {
//     return (
//         <div>
//             <style>{`
//                 img {
//                     --r: 30px; /* the radius */
//                     --s: 60px; /* the size of the corner*/

import AnimatedImageGrid from "../components/animated-grid";

//                     width: 200px;
//                     border-radius: var(--r);

//                     --_m: /calc(2 * var(--r)) calc(2 * var(--r)) radial-gradient(
//                             #000 70%,
//                             #0000 72%
//                         ) no-repeat;
//                 }
//                 .top-right {
//                     mask: right calc(var(--s) + var(--r)) top 0 var(--_m),
//                         right calc(var(--s) + var(--r)) var(--_m),
//                         radial-gradient(
//                                 var(--s) at 100% 0,
//                                 #0000 99%,
//                                 #000 101%
//                             )
//                             calc(-1 * var(--r)) var(--r) no-repeat,
//                         conic-gradient(
//                             at calc(100% - var(--s) - 2 * var(--r))
//                                 calc(var(--s) + 2 * var(--r)),
//                             #0000 25%,
//                             #000 0
//                         );
//                 }
//                 .top-left {
//                     mask: calc(var(--s) + var(--r)) 0 var(--_m),
//                         0 calc(var(--s) + var(--r)) var(--_m),
//                         radial-gradient(var(--s) at 0 0, #0000 99%, #000 101%)
//                             var(--r) var(--r) no-repeat,
//                         conic-gradient(
//                             at calc(var(--s) + 2 * var(--r))
//                                 calc(var(--s) + 2 * var(--r)),
//                             #000 75%,
//                             #0000 0
//                         );
//                 }
//                 .bottom-left {
//                     mask: calc(var(--s) + var(--r)) bottom var(--_m),
//                         bottom calc(var(--s) + var(--r)) left 0 var(--_m),
//                         radial-gradient(
//                                 var(--s) at 0 100%,
//                                 #0000 99%,
//                                 #000 101%
//                             )
//                             var(--r) calc(-1 * var(--r)) no-repeat,
//                         conic-gradient(
//                             from 180deg at calc(var(--s) + 2 * var(--r))
//                                 calc(100% - var(--s) - 2 * var(--r)),
//                             #0000 25%,
//                             #000 0
//                         );
//                 }
//                 .bottom-right {
//                     mask: right 0 bottom calc(var(--s) + var(--r)) var(--_m),
//                         right calc(var(--s) + var(--r)) bottom 0 var(--_m),
//                         radial-gradient(
//                                 var(--s) at 100% 100%,
//                                 #0000 99%,
//                                 #000 101%
//                             )
//                             calc(-1 * var(--r)) calc(-1 * var(--r)) no-repeat,
//                         conic-gradient(
//                             from 90deg at calc(100% - var(--s) - 2 * var(--r))
//                                 calc(100% - var(--s) - 2 * var(--r)),
//                             #0000 25%,
//                             #000 0
//                         );
//                 }

//                 body {
//                     margin: 0;
//                     min-height: 100vh;
//                     display: grid;
//                     grid-template-columns: auto auto;
//                     place-content: center;
//                     gap: 20px;
//                     background: #9de0ad;
//                 }
//             `}</style>

//             <div className="grid grid-cols-2 gap-8 relative">
//                 <div className="absolute size-36 hover:scale-150 anim z-40  rounded-full text-3xl font-semibold text-green-600 flex justify-center bg-white items-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
//                     hi
//                 </div>
//                 <img
//                     src="https://picsum.photos/id/1018/300/300"
//                     class="bottom-right"
//                     alt=""
//                 />
//                 <img
//                     src="https://picsum.photos/id/128/300/300"
//                     class="bottom-left"
//                     alt=""
//                 />
//                 <img
//                     src="https://picsum.photos/id/139/300/300"
//                     class="top-right"
//                     alt=""
//                 />
//                 <img
//                     src="https://picsum.photos/id/1022/300/300"
//                     class="top-left"
//                     alt=""
//                 />
//             </div>
//         </div>
//     );
// }

export default function Test() {
    // Usage
    const images = [
        {
            src: "https://picsum.photos/id/1018/300/300",
            position: "bottom-right",
        },
        {
            src: "https://picsum.photos/id/128/300/300",
            position: "bottom-left",
        },
        { src: "https://picsum.photos/id/139/300/300", position: "top-right" },
        { src: "https://picsum.photos/id/1022/300/300", position: "top-left" },
    ];
    return <AnimatedImageGrid images={images} />;
}
