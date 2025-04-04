import React from "react";
import HTMLFlipBook from "react-pageflip";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="h-[570px] w-[400px] bg-amber-50 shadow-lg" ref={ref}>
      {props.children}
    </div>
  );
});

Page.displayName = "Page";

function Shlokas() {
  const shlokas = [
    {
      sanskrit:
        "न मे मृत्युशंका न मे जातिभेदः।\nपिता नैव मे नैव माता न जन्म॥\nन बन्धुर्न मित्रं गुरुर्नैव शिष्यः।\nचिदानन्दरूपः शिवोऽहम् शिवोऽहम्॥",
      meaning:
        "I have no fear of death, nor do I have distinctions of caste or birth. I have neither father nor mother, nor was I ever born. I have no relatives, no friends, no teacher, and no disciple. I am pure consciousness, blissful and eternal—I am Shiva, I am Shiva.",
    },
    {
      sanskrit:
        "अहं निर्विकल्पो निराकाररूपः।\nविभुत्वाच्च सर्वत्र सर्वेन्द्रियाणाम्॥\nन चासङ्गतं नैव मुक्तिर्न मेयः।\nचिदानन्दरूपः शिवोऽहम् शिवोऽहम्॥",
      meaning:
        "I am beyond all doubts and distinctions, formless in nature. Being all-pervasive, I exist in all senses yet remain beyond them. I have neither attachment nor detachment, neither liberation nor bondage. I am pure consciousness, blissful and eternal—I am Shiva, I am Shiva.",
    },
    {
      sanskrit:
        "न मे मृत्यु शंका न मे जातिभेदः।\nपिता नैव मे नैव माता न जन्म॥\nन बन्धुर्न मित्रं गुरुर्नैव शिष्यः।\nचिदानन्दरूपः शिवोऽहम् शिवोऽहम्॥",
      meaning:
        "As Shiva doesn’t discriminate on any grounds such as caste or creed, in similar fraction, the UI should be responsive - be it desktop, iPad or phone.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center p-4 sm:p-8 md:p-12">
      <h1 className="text-3xl text-black font-bold text-center">
        Ancient Wisdom
      </h1>
      <HTMLFlipBook
        width={400}
        height={570}
        showCover={true}
        className="w-full max-w-md"
      >
        <Page number={1}>
          <div className="h-full w-full relative overflow-hidden">
            <img
              src="./cover.jpeg"
              alt="Ancient temple"
              className="object-cover h-full w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <p className="text-lg font-semibold text-center">
                Shloka's Book
              </p>
            </div>
          </div>
        </Page>

        {shlokas.map((shloka, index) => (
          <Page key={index + 2} number={index + 2}>
            <div className="p-8 flex flex-col justify-center h-full">
              <h2 className="text-2xl font-bold mb-8 text-center text-orange-800">
                Shloka {index + 1}
              </h2>
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <p className="text-xl font-semibold mb-2 text-orange-900 text-center">
                    {shloka.sanskrit}
                  </p>
                  <div className="w-full h-px bg-orange-200 my-4"></div>
                  <p className="text-lg text-orange-800 text-center">
                    {shloka.meaning}
                  </p>
                </div>
              </div>
            </div>
          </Page>
        ))}
      </HTMLFlipBook>
      {/* <p className="text-gray-400 text-sm mt-4 text-center">
        Click and drag the corners to flip pages
      </p> */}
    </div>
  );
}

export default Shlokas;
