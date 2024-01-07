'use client';
import {useState} from 'react';
import '@/globals.css';
import Navbar from "@/lib/components/navbar";

export default function Home() {
    const [showGif, setShowGif] = useState(false);
    const direction = 'ltr';

    const handleButtonClick = () => {
        setShowGif(true);

        setTimeout(() => {
            setShowGif(false);
        }, 10000); // Adjust the time as needed
    };

    return (
        <div dir={direction}>
            <div id="main">
                <div className="container">
                    <Navbar/>
                    <h1>Why <em>Bananas</em> are Not <em>Trees</em></h1>
                    <p>
                        Bananas are often mistakenly referred to as trees, but they are not true
                        trees. In botanical terms, bananas are classified as herbaceous plants.
                        Unlike trees, they do not have a woody stem or trunk.
                    </p>
                    <p>
                        The confusion may arise from the appearance of banana plants, which
                        feature large leaves and a structure that resembles a tree. However,
                        bananas belong to the genus Musa and are technically giant herbs.
                    </p>
                    <br/>
                    {showGif && (
                        <iframe
                            src="https://giphy.com/embed/3oa97KpO7UP9sQXAZl"
                            width="480"
                            height="480"
                            allowFullScreen>
                        </iframe>

                    )}
                    <button onClick={handleButtonClick}>
                        <img
                            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1795358/banana-tree-clipart-xl.png"
                            alt="Button Image"
                            width={100}
                            height={100}
                        />
                        <span>Do you want a banana?</span>
                    </button>
                    <br/>
                    <p>
                        Despite their herbaceous nature, banana plants are often referred to as
                        banana trees due to their size and structure. The stem of a banana
                        plant is called a pseudostem, composed of tightly packed leaf bases.
                        This pseudostem provides support for the plant but does not contain
                        true wood.
                    </p>
                    <ul>
                        <li>
                            <strong>No Woody Trunk:</strong> Unlike trees, bananas lack a woody
                            trunk.
                        </li>
                        <li>
                            <strong>Herbaceous Structure:</strong> Bananas are classified as
                            herbaceous plants with a pseudostem.
                        </li>
                        <li>
                            <strong>Botanical Classification:</strong> Bananas belong to the
                            genus Musa, making them giant herbs.
                        </li>
                    </ul>
                    <p>
                        In conclusion, while bananas may share some visual similarities with
                        trees, they are, in fact, giant herbs. Understanding the botanical
                        characteristics of bananas helps dispel the common misconception that
                        they are trees.
                    </p>
                    <iframe
                        style={{borderRadius: "12px"}}
                        src="https://open.spotify.com/embed/episode/6fzczq1m6ydHy7901EVfhH?utm_source=generator&t=0"
                        width="100%"
                        height="152"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy">
                    </iframe>
                    <p>
                        Explore the fascinating world of bananas in this video. Learn more about
                        their unique characteristics and why they are not considered trees in
                        the botanical sense.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Banana">Learn more about bananas</a>
                </div>
            </div>
        </div>
    )
}