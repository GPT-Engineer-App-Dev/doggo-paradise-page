import { useState } from 'react';
import { Dog } from 'lucide-react';

const dogBreeds = [
  { name: 'Labrador Retriever', description: 'Friendly and outgoing' },
  { name: 'German Shepherd', description: 'Intelligent and versatile' },
  { name: 'Golden Retriever', description: 'Loyal and gentle' },
  { name: 'Bulldog', description: 'Calm and courageous' },
  { name: 'Beagle', description: 'Merry and curious' },
];

const dogImages = [
  'https://images.unsplash.com/photo-1517849845537-4d257902454a',
  'https://images.unsplash.com/photo-1561037404-61cd46aa615b',
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dogImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center flex items-center justify-center">
          <Dog className="mr-2" /> All About Dogs
        </h1>
        
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fun Facts About Dogs</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dogs have a sense of time and miss you when you're gone.</li>
            <li>A dog's nose print is unique, much like a human's fingerprint.</li>
            <li>Dogs can understand up to 250 words and gestures.</li>
            <li>The Basenji is the only breed of dog that can't bark.</li>
            <li>A dog's average body temperature is 101.2°F (38.4°C).</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Popular Dog Breeds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dogBreeds.map((breed) => (
              <div key={breed.name} className="border rounded p-4">
                <h3 className="font-semibold">{breed.name}</h3>
                <p className="text-gray-600">{breed.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Dog Avenue</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src={dogImages[currentImageIndex]}
              alt={`Dog ${currentImageIndex + 1}`}
              className="mx-auto object-cover rounded-lg"
            />
          </div>
          <button
            onClick={nextImage}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Next Image
          </button>
        </section>
      </div>
    </div>
  );
};

export default Index;
