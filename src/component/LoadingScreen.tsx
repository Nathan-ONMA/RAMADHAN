"use client";

export default function LoadingScreen() {
  return (
    <div className="loading-screen fixed top-0 left-0 w-full h-full bg-white text-black pointer-events-none">
      <div className="loader absolute top-[50%] left-[50%] w-75 h-12.5 flex bg-[rgb(80,80,80)]">
        <div className="loader-1 bar relative dark:bg-black w-[200px] h-12.5"></div>
        <div className="loader-2 bar dark:bg-black w-[100px] h-12.5"></div>
      </div>

      <div className="counter fixed left-12.5 bottom-12.5 flex h-25 leading-45 text-[100px] font-medium">
        <div className="counter-1 digit relative top-[-15px]">
          <div className="num">0</div>
          <div className="num num1offset1 relative right-[-25px]">1</div>
        </div>

        <div className="counter-2 digit relative top-[-15px]">
          <div className="num">0</div>
          <div className="num num1offset2 relative right-[-10px]">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>

        <div className="counter-3 digit relative top-[-15px]">
          <div className="num">0</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
      </div>
    </div>
  );
}
