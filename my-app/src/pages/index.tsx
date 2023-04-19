import { useEffect, useRef } from 'react';
import { createJsxText } from 'typescript';

const size: number = 5;
// const size: number = 500;

// fisher-yates shuffle, make a test.
function shuffle() {

}

function getKatakana() {
  const rand = 12449 + Math.random() * 12542 + 1; // kanji range : 0x20000 ~ 0x2a6d6.

  return String.fromCharCode(rand);
}

function lerp(min: number, max: number, amount: number) {
  return min + (max - min) * amount;
 }

export default function Home() {
  const ref = useRef<HTMLCanvasElement>(null); // example layer.

  
  useEffect(() => {
    const ratio = Math.ceil(window.devicePixelRatio);
    const canvas = ref.current!;

    const ctx = canvas.getContext('2d', { alpha: false })!;

    if (ctx === null) console.log('null'); // error handling..

    canvas.width = size * 100 * ratio;
    canvas.height = size * 100 * ratio;

    canvas.style.width = `${size * 100}px`;
    canvas.style.height = `${size * 100}px`;

    console.log('current device', ratio);

    const rate = 1 / size;
    console.log('rate', rate);

    // ctx.font = "100pt serif";
    // ctx.fillText('a[0]', 100, 100);

    // td..

    // for (let i = 0; i < 5; ++i) {

    // }

    // ctx.beginPath();
    // ctx.moveTo(0, canvas.height / 2);
    // ctx.lineTo(canvas.width, canvas.height / 2);
    // ctx.stroke();

    let arr: number[] = [];

    for (let i = 0; i < size + 1; ++i) {
      let pos = lerp(0, canvas.width, i * rate); // p : canvas is square.

      ctx.beginPath();
      ctx.moveTo(pos, 0);
      ctx.lineTo(pos, canvas.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, pos);
      ctx.lineTo(canvas.width, pos);
      ctx.stroke();

      arr.push(pos);
    }

    ctx.font = '500% serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // array.
    for (let i = 0; i < arr.length - 1; ++i) {
      for (let j = 0; j < arr.length - 1; ++j) {
        ctx.fillText('恋', (arr[i] + arr[i + 1]) / 2, (arr[j] + arr[j + 1]) / 2);
      }
    }

    // for (let i = 0; i < size + 1; ++i) {
    //   let width = lerp(0, canvas.width, i * rate);



    //   ctx.beginPath();

    //   ctx.moveTo(0, width);
    //   ctx.lineTo(canvas.width, width);
    //   ctx.stroke();
    // }



    // ctx.beginPath();
    // ctx.moveTo(canvas.width / 2, 0);
    // ctx.lineTo(canvas.width / 2, canvas.height);
    // ctx.stroke();

    ctx.font = "100px serif";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let kanji = getKatakana();
    // console.log(kanji, kanji.codePointAt(0)?.toString(16));

    // ctx.fillText('恋', canvas.width / 2, canvas.height / 2);

    // draw table.
    // for (let i = 0; i < size + 1; ++i) {
    //   let width = lerp(0, ref.current?.width!, i * rate);

    //   // c.fillText(a, width, ref.current?.height! / 2);
    //   ctx.beginPath();

    //   ctx.moveTo(width, 0);
    //   ctx.lineTo(width, ref.current?.height!);
    //   ctx.stroke();
    // }

  }, []);

  return (
    <>
      <div>
        <canvas ref={ref} style={{backgroundColor: 'LightCoral'}}></canvas>
      </div>
      <button onClick={ () => { let as = ref!.current!.getContext('2d'); /* as?.clearRect(0, 0, width.current, height.current) */ }}> reset </button>
    </>
  )
}
