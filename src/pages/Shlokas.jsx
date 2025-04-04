import HTMLFlipBook from "react-pageflip";
import { useRef } from "react";

function MyBook({ pages }) {
  const bookRef = useRef(null);

  return (
    <div className="book-container">
      <HTMLFlipBook width={300} height={500} ref={bookRef}>
        {pages.map((imageSrc, index) => (
          <div className="demoPage" key={index}>
            <img
              src={imageSrc}
              alt={`Page ${index + 1}`}
              className="page-image"
            />
          </div>
        ))}
      </HTMLFlipBook>
      <div className="controls">
        <button onClick={() => bookRef.current.pageFlip().flipPrev()}>
          Prev
        </button>
        <button onClick={() => bookRef.current.pageFlip().flipNext()}>
          Next
        </button>
      </div>
    </div>
  );
}

// Example Usage
export default function Shlokas() {
  const samplePages = [
    "https://picsum.photos/300/500?random=1",
    "https://picsum.photos/300/500?random=2",
    "https://picsum.photos/300/500?random=3",
    "https://picsum.photos/300/500?random=4",
    "https://picsum.photos/300/500?random=1",
    "https://picsum.photos/300/500?random=2",
    "https://picsum.photos/300/500?random=3",
    "https://picsum.photos/300/500?random=4",
  ];

  return <MyBook pages={samplePages} />;
}
