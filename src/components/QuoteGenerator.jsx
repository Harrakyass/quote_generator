import React, {useState} from 'react';
import {image1, image2, image3, image4, image5, image7, image8, image9, image10} from '../assets/images.jsx';

export default function QuoteGenerator () {
    const initialQuote = "there are two miseries a man faces in life, One is to not understand your heart's desire, and the second is to understand it.  - Bernard Show";
    const quotes = [
        "We march to victory, or march to defeat, BUT we march forward.  -  Stanis Baratheon",
        "there are two miseries a man faces in life, One is to not understand your heart's desire, and the second is to understand it.  - Bernard Show",
        "preoccupied with one leaf, you fail to see the tree. preoccupied with tree, you fail to see the forest  -  Soho Takuan",
        "Injustice lies within the soul of man, If one seems just, some hindrance stayed his hand. - Al-Motanabi",
        "Man is not made for defeat. A man can be destroyed but not defeated.  - Ernest Hemingway",
        "We suffer more often in imagination than in reality.  - Saneca",
        "Sometimes, all you can do is endure. But that too, is a form of strength.  -  Ginko",
        "To him who claims all wisdom's ways, I say: You've grasped one thing — but let much slip away.  - Abu Nawass",
        "When an average man shows interest in something... that is the beginning of a tragedy   -  Unknown",
        "If your inner judgment is blind, your outer vision is useless.  -  Umar ibn al-Khattab",
        "He who hurries through life hurries to his grave  - Salladhor Saan",
        "It is not What We Do, so my much as Why we do it that defines us  - Tyrion Lanister",
        "Believe you can and you're halfway there.  - Theodore Roosevelt" ,
        "The only true wisdom is in knowing you know nothing  - Socrates",
        "Hard work betrays none, but dreams betray many.  -  Hachiman Hikigaya",
        "I'll leave tomorrow's problems to tomorrow's me.  -  Saitama",
        "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "It always seems impossible until it's done. - Nelson Mandela",
        "I am not afraid... I was born to do this. - Joan of Arc",
        ];
        const images = [image1, image2, image3, image4, image5, image7, image8, image9, image10];

    const [currentQuote, setCurrentQuote] = useState(initialQuote);
    const [backgroundImage, setbackgroundImage] = useState(image1);


    const generateQuote = () => {
        setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    const generateImage = () => {
        setbackgroundImage(images[Math.floor(Math.random() * images.length)]);
    }

    const handleGenerate = () => {
        generateQuote();
        generateImage();
    }


    return (
        <div className="quote-card">
            <h2 className="header">Random Quote Generator</h2>
            <img className="generated-image" src={backgroundImage} alt="random generated image"/>
            <p className="quote">{currentQuote != "" && currentQuote}</p>
            <button className="generate-button" onClick={handleGenerate}>Generate a Quote</button>
        </div>
    )
}